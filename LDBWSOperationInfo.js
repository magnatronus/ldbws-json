'use strict';
/**
 * LDBWSOperationInfo.js
 * This is a helper that defines information for specific LDBWS Operation Requests. 
 */

const OperationInfo = {
   "GetDepartureBoard": { 
       "key": "GetStationBoardResult",
       "type": "board"
   },
   "GetDepBoardWithDetails": {
       "key": "GetStationBoardResult",
       "type": "board"
   },
   "GetArrivalBoard": {
       "key": "GetStationBoardResult",
       "type": "board"
    },
   "GetArrBoardWithDetails": {
       "key": "GetStationBoardResult",
       "type": "board"
    },
   "GetArrivalDepartureBoard": {
       "key": "GetStationBoardResult",
       "type": "board"
    },
   "GetArrDepBoardWithDetails": {
       "key": "GetStationBoardResult",
       "type": "board"
    },
   "GetNextDepartures": {
       "key": "DeparturesBoard",
       "type": "departure"
    },
   "GetNextDeparturesWithDetails": {
       "key": "DeparturesBoard",
       "type": "departure"
    },
   "GetFastestDepartures": {
       "key": "DeparturesBoard",
       "type": "departure"
    },
   "GetFastestDeparturesWithDetails":{
       "key": "DeparturesBoard",
       "type": "departure"
    },
   "GetServiceDetails": {
       "key": "GetServiceDetailsResult",
       "type": "service"
    },
 }

 module.exports = OperationInfo;