'use strict';
/**
 * LDBWSRequestData.js
 * This defines the various request parameters required for the LDBWS Operation calls
 * with some default values. See https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ for more details.
 */

const Request = {
   
  // Data for Board Calls
  Board: {
    numRows: 0,
    crs: "",
    filterCrs: "",
    filterType: "to",
    timeOffset: 0,
    timeWindow: 0
  },

  // Data for Departure Calls
  Departure: {
      crs: "",
      filterList: [],
      timeOffset: 0,
      timeWindow: 0
  },

  // Data for the GetServiceDetails call
  Service: {
    serviceID: ""
  }

}

module.exports = Request;