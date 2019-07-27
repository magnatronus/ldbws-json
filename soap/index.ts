'use strict';
/**
 * index.js
 * Class used to provide the SOAP functionality for the Darwin OpenLDBWS calls
 * It takes a Token, Request and a set of JSON objects and generates the required SOAP call for use with the LDBWS endpoint
 */

import { ILDBWSSoap, ILDBWSSoapOptions } from "../interfaces";
import forEach from "lodash/forEach";
import map from "lodash/map";

class LDBWSSoap implements ILDBWSSoap {
    token;
    request;
    options;
    staff;

    /**
     * Create a new SOAP call 
     * @param {*} token  - a valid access token
     * @param {*} request - the operation to perform
     * @param {*} options - a JSON object of values to pass to the request
     */
    constructor(token: string, request: string, options: ILDBWSSoapOptions, staff: boolean = false){
        this.staff = staff;
        this.token = token;
        this.request = request;
        this.options = options;
    }

    /**
     * Generate the complete SOAP call based on the params passed to the class constructor
     */
    generateCall(): string {
        return  `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">` +
                `${this._header()}` +
                `${this._payload(this.options)}` +
                `</Envelope>`;
    }

    // Generate the SOAP payload
    _payload(options: ILDBWSSoapOptions): string {
        const body: string = Object.keys(options).map((key: string) => {
            const value = (()=>{
                switch (key){
                    case "filterlist":
                        return map(options[key], crs => `<crs>${crs}</crs>`).join("")
                    default:
                        return `${options[key]}`
                }
            })();
            return `<${key}>${value}</${key}>`;
        }).join("");

        return `<Body><${this.request}Request xmlns="http://thalesgroup.com/RTTI/2017-02-02/ldb/">${body}</${this.request}Request></Body>`;
    }

    // generate the SOAP header
    _header() {
        return  `<Header>` +
                `<AccessToken xmlns="http://thalesgroup.com/RTTI/2013-11-28/Token/types">` +
                `<TokenValue>${this.token}</TokenValue>` +
                `</AccessToken>` +
                `</Header>`;        
    }
}

module.exports = LDBWSSoap;