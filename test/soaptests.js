var assert = require('assert');
const LDBWSSoap = require('../soap');
const OpenLDBWS = require('../index');
const token = process.env.npm_config_TOKEN;


describe('SOAP Tests', function() {
  describe('#Departure Board SOAP for Kings Cross', function() {
    const method = require('../LDBWSOperation').GET_DEPARTURE_BOARD;
    const options = Object.assign({}, require('../LDBWSRequestData').Board);
    options.crs = "KGX";
    const envelope = `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Header><AccessToken xmlns="http://thalesgroup.com/RTTI/2013-11-28/Token/types"><TokenValue>${token}</TokenValue></AccessToken></Header><Body><GetDepartureBoardRequest xmlns="http://thalesgroup.com/RTTI/2017-02-02/ldb/"><numRows>0</numRows><crs>KGX</crs><filterCrs></filterCrs><filterType>to</filterType><timeOffset>0</timeOffset><timeWindow>0</timeWindow></GetDepartureBoardRequest></Body></Envelope>`;
    const soapCall = new LDBWSSoap(token, method, options).generateCall();
    it('should equal the hardcoded envelope', function() {
      assert.equal(soapCall, envelope);
    });
  });
});
