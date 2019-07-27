'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __importDefault(require("lodash/map"));
class LDBWSSoap {
    /**
     * Create a new SOAP call
     * @param {*} token  - a valid access token
     * @param {*} request - the operation to perform
     * @param {*} options - a JSON object of values to pass to the request
     */
    constructor(token, request, options, staff = false) {
        this.staff = staff;
        this.token = token;
        this.request = request;
        this.options = options;
    }
    /**
     * Generate the complete SOAP call based on the params passed to the class constructor
     */
    generateCall() {
        return `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">` +
            `${this._header()}` +
            `${this._payload(this.options)}` +
            `</Envelope>`;
    }
    // Generate the SOAP payload
    _payload(options) {
        const body = Object.keys(options).map((key) => {
            const value = (() => {
                switch (key) {
                    case "filterlist":
                        return map_1.default(options[key], crs => `<crs>${crs}</crs>`).join("");
                    default:
                        return `${options[key]}`;
                }
            })();
            return `<${key}>${value}</${key}>`;
        }).join("");
        return `<Body><${this.request}Request xmlns="http://thalesgroup.com/RTTI/2017-02-02/ldb/">${body}</${this.request}Request></Body>`;
    }
    // generate the SOAP header
    _header() {
        return `<Header>` +
            `<AccessToken xmlns="http://thalesgroup.com/RTTI/2013-11-28/Token/types">` +
            `<TokenValue>${this.token}</TokenValue>` +
            `</AccessToken>` +
            `</Header>`;
    }
}
module.exports = LDBWSSoap;
//# sourceMappingURL=index.js.map