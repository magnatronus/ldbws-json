'use strict';
/**
 * LDBWSReturn.js
 * This is a helper that defines the return key for the LDBWS Operation Requests. 
 * @deprecated LDBWSOperationInfo supercedes this 
 */

import { ELDBWSOperationInfoKeys, EOperationInfoEntries } from "./interfaces";

const ReturnKey = {
   [EOperationInfoEntries.GetDeparturesBoard]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetDepBoardWithDetails]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetArrivalBoard]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetArrBoardWithDetails]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetArrivalDepartureBoard]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetArrDepBoardWithDetails]: ELDBWSOperationInfoKeys.GetStationBoardResult,
   [EOperationInfoEntries.GetNextDepartures]: ELDBWSOperationInfoKeys.GetDeparturesBoard,
   [EOperationInfoEntries.GetNextDeparturesWithDetails]: ELDBWSOperationInfoKeys.GetDeparturesBoard,
   [EOperationInfoEntries.GetFastestDepartures]: ELDBWSOperationInfoKeys.GetDeparturesBoard,
   [EOperationInfoEntries.GetNextDeparturesWithDetails]: ELDBWSOperationInfoKeys.GetDeparturesBoard,
   [EOperationInfoEntries.GetServiceDetails]: ELDBWSOperationInfoKeys.GetServiceDetailsResult,
 }

 module.exports = ReturnKey;

const StaffReturnKey = {
    ...ReturnKey,

    [EOperationInfoEntries.GetArrivalDepartureBoardByCrs]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetArrivalDepartureBoardByTiploc]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetArrivalBoardByCrs]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetArrivalBoardByTiploc]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetDepartureBoardByCrs]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetDepartureBoardByTiploc]: ELDBWSOperationInfoKeys.GetStationBoardResult,
    [EOperationInfoEntries.GetHistoricDepartureBoard]: ELDBWSOperationInfoKeys.GetDeparturesBoard,

    // TODO: - NYI
    // "GetDisruptionList",
    // "GetHistoricServiceDetails",
    // "GetHistoricTimeLine",
    // "GetServiceDetailsByRid",
    // "QueryHistoricServices",
    // "QueryServices",
}

 module.exports.StaffReturnKey = StaffReturnKey;