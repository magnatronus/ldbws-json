'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LDBWSReturn.js
 * This is a helper that defines the return key for the LDBWS Operation Requests.
 * @deprecated LDBWSOperationInfo supercedes this
 */
const interfaces_1 = require("./interfaces");
const ReturnKey = {
    [interfaces_1.EOperationInfoEntries.GetDeparturesBoard]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetDepBoardWithDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrivalBoard]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrBoardWithDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoard]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrDepBoardWithDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetNextDepartures]: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
    [interfaces_1.EOperationInfoEntries.GetNextDeparturesWithDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
    [interfaces_1.EOperationInfoEntries.GetFastestDepartures]: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
    [interfaces_1.EOperationInfoEntries.GetNextDeparturesWithDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
    [interfaces_1.EOperationInfoEntries.GetServiceDetails]: interfaces_1.ELDBWSOperationInfoKeys.GetServiceDetailsResult,
};
module.exports = ReturnKey;
const StaffReturnKey = {
    ...ReturnKey,
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoardByCrs]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrivalDepartureBoardByTiploc]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrivalBoardByCrs]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetArrivalBoardByTiploc]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetDepartureBoardByCrs]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetDepartureBoardByTiploc]: interfaces_1.ELDBWSOperationInfoKeys.GetStationBoardResult,
    [interfaces_1.EOperationInfoEntries.GetHistoricDepartureBoard]: interfaces_1.ELDBWSOperationInfoKeys.GetDeparturesBoard,
};
module.exports.StaffReturnKey = StaffReturnKey;
//# sourceMappingURL=LDBWSReturn.js.map