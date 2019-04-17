'use strict';
/**
 * LDBWSReturn.js
 * This is a helper that defines the return key for the LDBWS Operation Requests. 
 */

const ReturnKey = {
   "GetDepartureBoard": "GetStationBoardResult",
   "GetDepBoardWithDetails": "GetStationBoardResult",
   "GetArrivalBoard": "GetStationBoardResult",
   "GetArrBoardWithDetails": "GetStationBoardResult",
   "GetArrivalDepartureBoard": "GetStationBoardResult",
   "GetArrDepBoardWithDetails": "GetStationBoardResult",
   "GetNextDepartures": "DeparturesBoard",
   "GetNextDeparturesWithDetails": "DeparturesBoard",
   "GetFastestDepartures": "DeparturesBoard",
   "GetFastestDeparturesWithDetails": "DeparturesBoard",
   "GetServiceDetails": "GetServiceDetailsResult",
 }

 module.exports = ReturnKey;