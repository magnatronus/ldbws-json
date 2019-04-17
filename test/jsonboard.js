var assert = require('assert');
const OpenLDBWS = require('../index');
const token = process.env.npm_config_TOKEN;

describe('JSON Board Test', function() {
  describe('#Departure Board JSON for Kings Cross', function() {
    it('should have London Kings Cross as locationName', async function() {
        const method = require('../LDBWSOperation').GET_DEPARTURE_BOARD;
        const resultKey = require('../LDBWSReturn')[method];
        const options = Object.assign({}, require('../LDBWSRequestData').Board);
        options.crs = "KGX";

        const api = new OpenLDBWS(token);
        const board = await api.call(method, options);
    
        assert.equal(board[resultKey].locationName, "London Kings Cross");
    });
  });
});