'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LDBWSOperationInfo.js
 * This is a helper that defines information for specific LDBWS Operation Requests.
 */
const interfaces_1 = require("./interfaces");
const OperationInfo = {
    [interfaces_1.EOperationInfoEntries.GetDeparturesBoard]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetDepBoardWithDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalBoard]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrBoardWithDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoard]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrDepBoardWithDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetNextDepartures]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: interfaces_1.EOperationInfoEntryType.DEPARTURE
    },
    [interfaces_1.EOperationInfoEntries.GetNextDeparturesWithDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: interfaces_1.EOperationInfoEntryType.DEPARTURE
    },
    [interfaces_1.EOperationInfoEntries.GetFastestDepartures]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: interfaces_1.EOperationInfoEntryType.DEPARTURE
    },
    [interfaces_1.EOperationInfoEntries.GetFastestDeparturesWithDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: interfaces_1.EOperationInfoEntryType.DEPARTURE
    },
    [interfaces_1.EOperationInfoEntries.GetServiceDetails]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetServiceDetailsResult,
        type: interfaces_1.EOperationInfoEntryType.SERVICE
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoardByCrs]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoardByTiploc]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalBoardByCrs]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetArrivalBoardByTiploc]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetDepartureBoardByCrs]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetDepartureBoardByTiploc]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
        type: interfaces_1.EOperationInfoEntryType.BOARD
    },
    [interfaces_1.EOperationInfoEntries.GetHistoricDepartureBoard]: {
        key: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
        type: interfaces_1.EOperationInfoEntryType.DEPARTURE
    }
};
module.exports = OperationInfo;
//# sourceMappingURL=LDBWSOperationInfo.js.map