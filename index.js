'use strict';
/**
 * index.js
 * Package main entry point
 */

const   request     = require('request-promise-native'),
        parseString = require('xml2js').parseString,
        stripNS    = require('xml2js').processors.stripPrefix,
        LDBWSSoap   = require('./soap');


class OpenLDBWS {

  constructor(accessToken = "0000-0000-0000-0000", baseURL = "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb10.asmx") {
      this.accessToken = accessToken;
      this.baseURL = baseURL;
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
            'content-type' : "text/xml"
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
        explicitArray : false,
        ignoreAttrs : true
      }, function(err, result){
        if(!err){
          const data = result.Envelope.Body[`${method}Response`];
          resolve(data);
        } else {
          reject(err);
        }
      });        
    });
  }


}

module.exports = OpenLDBWS;