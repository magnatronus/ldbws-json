'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * index.js
 * Package main entry point
 */
const interfaces_1 = require("./interfaces");
exports.EOperation = interfaces_1.EOperation;
exports.EStaffOperation = interfaces_1.EStaffOperation;
exports.EOperationInfoEntryType = interfaces_1.EOperationInfoEntryType;
exports.EOperationInfoEntries = interfaces_1.EOperationInfoEntries;
exports.ELDBWSOperationInfoKeys = interfaces_1.ELDBWSOperationInfoKeys;
const LDBWSOperation_1 = __importStar(require("./LDBWSOperation"));
exports.Operation = LDBWSOperation_1.default;
exports.StaffOperation = LDBWSOperation_1.StaffOperation;
const delayCodes_1 = __importDefault(require("./referenceData/delayCodes"));
exports.DelayCodes = delayCodes_1.default;
const request = require('request-promise-native'), parseString = require('xml2js').parseString, stripNS = require('xml2js').processors.stripPrefix, LDBWSSoap = require('./soap'), LDBSVWSSoap = require('./soap').LDBWSVWSSoap;
class OpenLDBWS {
    constructor({ accessToken = "0000-0000-0000-0000", staff = false }) {
        this.staff = false;
        this.mapDelayCodeToReason = false;
        this.accessToken = accessToken;
        this.baseURL = staff ? "https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx" : "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx";
        this.staff = staff;
    }
    /**
     * @description Maps a delay code to it's corresponding textual reason
     * @param {string} code The delayCode to map
     * @returns {string} The textual reason for the delay
     */
    getDelayReason(code) {
        if (!code) {
            return;
        }
        if (delayCodes_1.default[code]) {
            return delayCodes_1.default[code];
        }
        ;
        return;
    }
    /**
     * Query OpenLDBWS for the requested data
     * @param {Operation | StaffOperation} method - the LDBWSOperation to perform
     * @param {LDBWSRequestData} options  - a JSON object derived from LDBWSRequestData
     */
    async call(method, options) {
        const soapCall = new LDBWSSoap(this.accessToken, method, options).generateCall();
        const SOAPAction = this.staff ? interfaces_1.ESOAPStaffAction[method] : interfaces_1.ESOAPAction[method];
        // console.log("Method: ", method);
        // console.log("SOAPAction: ", SOAPAction);
        // console.log("Available actions: ", (this.staff) ? ESOAPStaffAction : ESOAPAction);
        const reqToSend = {
            method: 'POST',
            url: this.baseURL,
            headers: {
                'content-type': "text/xml",
                'SOAPAction': SOAPAction,
            },
            body: soapCall
        };
        const body = await request(reqToSend);
        return await this._parseResult(body, method);
    }
    // Private method to parse result to JSON
    _parseResult(body, method) {
        return new Promise((resolve, reject) => {
            parseString(body, {
                tagNameProcessors: [stripNS],
                explicitArray: false,
                ignoreAttrs: true
            }, function (err, result) {
                if (!err) {
                    const data = result.Envelope.Body[`${method}Response`];
                    resolve(data);
                }
                else {
                    reject(err);
                }
            });
        });
    }
}
exports.default = OpenLDBWS;
//# sourceMappingURL=index.js.map