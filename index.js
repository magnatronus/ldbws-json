'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
const request = require('request-promise-native'), parseString = require('xml2js').parseString, stripNS = require('xml2js').processors.stripPrefix, LDBWSSoap = require('./soap'), LDBSVWSSoap = require('./soap').LDBWSVWSSoap;
class OpenLDBWS {
    constructor(accessToken = "0000-0000-0000-0000", staff = false) {
        this.staff = false;
        this.accessToken = accessToken;
        this.baseURL = staff ? "https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx" : "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx";
    }
    /**
     * Query OpenLDBWS for the requested data
     * @param {LDBWSOperation} method - the LDBWSOperation to perform
     * @param {LDBWSRequestData} options  - a JSON object derived from LDBWSRequestData
     */
    async call(method, options) {
        const soapCall = new LDBWSSoap(this.accessToken, method, options).generateCall();
        const body = await request({
            method: 'POST',
            url: this.baseURL,
            headers: {
                'content-type': "text/xml"
            },
            body: soapCall
        });
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