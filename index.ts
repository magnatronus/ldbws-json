'use strict';
/**
 * index.js
 * Package main entry point
 */
import { IOpenLDBWS, EOperation, EStaffOperation, ILDBWSSoapOptions, ILDBWSSoap, IOperationInfo, EOperationInfoEntryType, EOperationInfoEntries, IOperationInfoEntry, ELDBWSOperationInfoKeys } from "./interfaces";
import Operation, { StaffOperation } from "./LDBWSOperation";

const request = require('request-promise-native'),
  parseString = require('xml2js').parseString,
  stripNS = require('xml2js').processors.stripPrefix,
  LDBWSSoap = require('./soap'),
  LDBSVWSSoap = require('./soap').LDBWSVWSSoap;


class OpenLDBWS implements IOpenLDBWS {
  accessToken: string;
  baseURL: string;
  staff: boolean = false;

  constructor(accessToken: string = "0000-0000-0000-0000", staff: boolean = false) {//baseURL = "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx") {
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
        } else {
          reject(err);
        }
      });
    });
  }


}

export {
  IOpenLDBWS as IOpenLDBWS,
  EOperation as EOperation,
  EStaffOperation as EStaffOperation,
  ILDBWSSoapOptions as ILDBWSSoapOptions,
  ILDBWSSoap as ILDBWSSoap,
  IOperationInfo as IOperationInfo,
  EOperationInfoEntryType as EOperationInfoEntryType,
  EOperationInfoEntries as EOperationInfoEntries,
  IOperationInfoEntry as IOperationInfoEntry,
  ELDBWSOperationInfoKeys as ELDBWSOperationInfoKeys,
  Operation as Operation,
  StaffOperation as StaffOperation
};

export default OpenLDBWS