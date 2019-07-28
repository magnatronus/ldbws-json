'use strict';
/**
 * LDBWSOperationInfo.js
 * This is a helper that defines information for specific LDBWS Operation Requests. 
 */

import { EOperationInfoEntryType, EOperationInfoEntries, ELDBWSOperationInfoKeys } from "./interfaces";

const OperationInfo = {
    [EOperationInfoEntries.GetDeparturesBoard]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetDepBoardWithDetails]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrivalBoard]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrBoardWithDetails]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrivalDepartureBoard]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrDepBoardWithDetails]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetNextDepartures]: {
        key: ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: EOperationInfoEntryType.DEPARTURE
    },
    [EOperationInfoEntries.GetNextDeparturesWithDetails]: {
        key: ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: EOperationInfoEntryType.DEPARTURE
    },
    [EOperationInfoEntries.GetFastestDepartures]: {
        key: ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: EOperationInfoEntryType.DEPARTURE
    },
    [EOperationInfoEntries.GetFastestDeparturesWithDetails]: {
        key: ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: EOperationInfoEntryType.DEPARTURE
    },
    [EOperationInfoEntries.GetServiceDetails]: {
        key: ELDBWSOperationInfoKeys.GetServiceDetailsResult,
        type: EOperationInfoEntryType.SERVICE
    },
    [EOperationInfoEntries.GetArrivalDepartureBoardByCrs]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrivalDepartureBoardByTiploc]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrivalBoardByCrs]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetArrivalBoardByTiploc]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetDepartureBoardByCrs]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetDepartureBoardByTiploc]: {
        key: ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: EOperationInfoEntryType.BOARD
    },
    [EOperationInfoEntries.GetHistoricDepartureBoard]: {
        key: ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: EOperationInfoEntryType.DEPARTURE
    }
}

module.exports = OperationInfo;