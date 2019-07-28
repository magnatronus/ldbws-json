'use strict';
/**
 * index.js
 * Package main entry point
 */
import { IOpenLDBWS, EOperation, EStaffOperation, ESOAPStaffAction, ESOAPAction, ILDBWSSoapOptions, ILDBWSSoap, IOperationInfo, EOperationInfoEntryType, EOperationInfoEntries, IOperationInfoEntry, ELDBWSOperationInfoKeys } from "./interfaces";
import Operation, { StaffOperation } from "./LDBWSOperation";
import delayCodes from "./referenceData/delayCodes";

// import {fetch} from 'node-fetch';
const fetch = require("node-fetch");

const request = require('request-promise-native'),
  parseString = require('xml2js').parseString,
  stripNS = require('xml2js').processors.stripPrefix,
  LDBWSSoap = require('./soap'),
  LDBSVWSSoap = require('./soap').LDBWSVWSSoap;


class OpenLDBWS implements IOpenLDBWS {
  accessToken: string;
  baseURL: string;
  staff: boolean = false;
  mapDelayCodeToReason: boolean = false;

  constructor(accessToken: string = "0000-0000-0000-0000", staff: boolean = false, mapDelayCodeToReason: boolean = false) {//baseURL = "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx") {
    this.accessToken = accessToken;
    this.baseURL = staff ? "https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/ldbsv12.asmx" : "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx";
    this.staff = staff;
    this.mapDelayCodeToReason = mapDelayCodeToReason;
  }

  /**
   * @description Maps a delay code to it's corresponding textual reason
   * @param {string} code The delayCode to map
   * @returns {string} The textual reason for the delay
   */
  public getDelayReason(code: string): string{
    if (!code){
      return;
    }
    if (delayCodes[code]){
      return delayCodes[code]
    };
    return;
  }

  /**
   * Query OpenLDBWS for the requested data
   * @param {Operation | StaffOperation} method - the LDBWSOperation to perform 
   * @param {LDBWSRequestData} options  - a JSON object derived from LDBWSRequestData
   */
  public async call(method: EOperation | EStaffOperation, options: any) {
    const soapCall = new LDBWSSoap(this.accessToken, method, options).generateCall();
    const SOAPAction = this.staff ? ESOAPStaffAction[method] : ESOAPAction[method];
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
  private _parseResult(body, method) {
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
  StaffOperation as StaffOperation,
  delayCodes as DelayCodes
};

export default OpenLDBWS