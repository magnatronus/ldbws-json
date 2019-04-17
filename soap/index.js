'use strict';
/**
 * index.js
 * Class used to provide the SOAP functionality for the Darwin OpenLDBWS calls
 * It takes a Token, Request and a set of JSON objects and generates the required SOAP call for use with the LDBWS endpoint
 */

class LDBWSSoap {

    /**
     * Create a new SOAP call 
     * @param {*} token  - a valid access token
     * @param {*} request - the operation to perform
     * @param {*} options - a JSON object of values to pass to the request
     */
    constructor(token, request, options){
        this.token = token;
        this.request = request;
        this.options = options;
    }

    /**
     * Generate the complete SOAP call based on the params passed to the class constructor
     */
    generateCall() {
        return  `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">` +
                `${this._header()}` +
                `${this._payload(this.options)}` +
                `</Envelope>`;
    }

    // Generate the SOAP payload
    _payload(options) {
        let body = ``;
        Object.keys(options).forEach(function(key){
            let val="";
            if(key == "filterList"){
                options[key].forEach((crs) => {
                    val += `<crs>${crs}</crs>`;
                });
            } else {
                val = `${options[key]}`                
            }
             body += `<${key}>${val}</${key}>`;
        });
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
