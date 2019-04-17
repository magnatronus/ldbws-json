var assert = require('assert');
const OpenLDBWS = require('../index');
const token = process.env.npm_config_TOKEN;

describe('JSON Departure Test', function() {
  describe('#Next Departures JSON for Kings Cross', function() {
    it('should have London Kings Cross as locationName', async function() {
        const method = require('../LDBWSOperation').GET_NEXT_DEPARTURES;
        const options = Object.assign({}, require('../LDBWSRequestData').Departure);
        options.crs = "KGX";
        options.filterList = ['EDB', 'LET'];
        const api = new OpenLDBWS(token);
        const board = await api.call(method, options);
        assert.equal(board.DeparturesBoard.locationName, "London Kings Cross");
    });
  });
});