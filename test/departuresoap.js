var assert = require('assert');
const LDBWSSoap = require('../soap');
const OpenLDBWS = require('../index');
const token = process.env.npm_config_TOKEN;


describe('SOAP Departures Test', function() {
  
  describe('#Next Departures SOAP for Kings Cross', function() {
    const method = require('../LDBWSOperation').GET_NEXT_DEPARTURES;
    const options = Object.assign({}, require('../LDBWSRequestData').Departure);
    options.crs = "KGX";
    options.filterList = ['EDB', 'LET'];
    const envelope = `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Header><AccessToken xmlns="http://thalesgroup.com/RTTI/2013-11-28/Token/types"><TokenValue>${token}</TokenValue></AccessToken></Header><Body><GetNextDeparturesRequest xmlns="http://thalesgroup.com/RTTI/2017-02-02/ldb/"><crs>KGX</crs><filterList><crs>EDB</crs><crs>LET</crs></filterList><timeOffset>0</timeOffset><timeWindow>0</timeWindow></GetNextDeparturesRequest></Body></Envelope>`;
    const soapCall = new LDBWSSoap(token, method, options).generateCall();
    it('should equal the hardcoded envelope', function() {
      assert.equal(soapCall, envelope);
    });
  });

});
