'use strict';
/**
 * LDBWSReturn.js
 * This is a helper that defines the return key for the LDBWS Operation Requests. 
 * @deprecated LDBWSOperationInfo supercedes this 
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

const StaffReturnKey = {
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

    "GetArrivalDepartureBoardByCrs": "GetStationBoardResult",
    "GetArrivalDepartureBoardByTiploc": "GetStationBoardResult",
    "GetArrivalBoardByCrs": "GetStationBoardResult",
    "GetArrivalBoardByTiploc": "GetStationBoardResult",
    "GetDepartureBoardByCrs": "GetStationBoardResult",
    "GetDepartureBoardByTiploc": "GetStationBoardResult",
    "GetHistoricDepartureBoard": "DeparturesBoard",

    // TODO: - NYI
    // "GetDisruptionList",
    // "GetHistoricServiceDetails",
    // "GetHistoricTimeLine",
    // "GetServiceDetailsByRid",
    // "QueryHistoricServices",
    // "QueryServices",
}

 module.exports.StaffReturnKey = StaffReturnKey;