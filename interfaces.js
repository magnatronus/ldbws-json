"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EOperation;
(function (EOperation) {
    EOperation["GET_DEPARTURE_BOARD"] = "GetDepartureBoard";
    EOperation["GET_DEPARTURE_BOARD_WITH_DETAILS"] = "GetDepBoardWithDetails";
    EOperation["GET_ARRIVAL_BOARD"] = "GetArrivalBoard";
    EOperation["GET_ARRIVAL_BOARD_WITH_DETAILS"] = "GetArrBoardWithDetails";
    EOperation["GET_ARRIVAL_DEPARTURE_BOARD"] = "GetArrivalDepartureBoard";
    EOperation["GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS"] = "GetArrDepBoardWithDetails";
    EOperation["GET_NEXT_DEPARTURES"] = "GetNextDepartures";
    EOperation["GET_NEXT_DEPARTURES_WITH_DETAILS"] = "GetNextDeparturesWithDetails";
    EOperation["GET_FASTEST_DEPARTURES"] = "GetFastestDepartures";
    EOperation["GET_FASTEST_DEPARTURES_WITH_DETAILS"] = "GetFastestDeparturesWithDetails";
    EOperation["GET_SERVICE_DETAILS"] = "GetServiceDetails";
})(EOperation = exports.EOperation || (exports.EOperation = {}));
var EStaffOperation;
(function (EStaffOperation) {
    EStaffOperation["GET_ARR_BOARD_WITH_DETAILS"] = "GetArrBoardWithDetails";
    EStaffOperation["GET_ARR_DEP_BOARD_WITH_DETAILS"] = "GetArrDepBoardWithDetails";
    EStaffOperation["GET_ARRIVAL_DEPARTURE_BOARD_BY_CRS"] = "GetArrivalDepartureBoardByCrs";
    EStaffOperation["GET_ARRIVAL_DEPARTURE_BOARD_BY_TIPLOC"] = "GetArrivalDepartureBoardByTiploc";
    EStaffOperation["GET_ARRIVAL_BOARD_BY_CRS"] = "GetArrivalBoardByCrs";
    EStaffOperation["GET_ARRIVAL_BOARD_BY_TIPLOC"] = "GetArrivalBoardByTiploc";
    EStaffOperation["GET_DEPARTURE_BOARD_BY_CRS"] = "GetDepartureBoardByCrs";
    EStaffOperation["GET_DEPARTURE_BOARD_BY_TIPLOC"] = "GetDepartureBoardByTiploc";
    EStaffOperation["GET_DEP_BOARD_WITH_DETAILS"] = "GetDepBoardWithDetails";
    EStaffOperation["GET_DISRUPTION_LIST"] = "GetDisruptionList";
    EStaffOperation["GET_HISTORIC_DEPARTURE_BOARD"] = "GetHistoricDepartureBoard";
    EStaffOperation["GET_HISTORIC_SERVICE_DETAILS"] = "GetHistoricServiceDetails";
    EStaffOperation["GET_HISTORIC_TIME_LINE"] = "GetHistoricTimeLine";
    EStaffOperation["GET_SERVICE_DETAILS_BY_RID"] = "GetServiceDetailsByRid";
    EStaffOperation["QUERY_HISTORIC_SERVICES"] = "QueryHistoricServices";
    EStaffOperation["QUERY_SERVICES"] = "QueryServices";
})(EStaffOperation = exports.EStaffOperation || (exports.EStaffOperation = {}));
var EOperationInfoEntryType;
(function (EOperationInfoEntryType) {
    EOperationInfoEntryType["BOARD"] = "board";
    EOperationInfoEntryType["DEPARTURE"] = "departure";
    EOperationInfoEntryType["SERVICE"] = "service";
})(EOperationInfoEntryType = exports.EOperationInfoEntryType || (exports.EOperationInfoEntryType = {}));
var EOperationInfoEntries;
(function (EOperationInfoEntries) {
    EOperationInfoEntries[EOperationInfoEntries["GetDeparturesBoard"] = 0] = "GetDeparturesBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetDepBoardWithDetails"] = 1] = "GetDepBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoard"] = 2] = "GetArrivalBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetArrBoardWithDetails"] = 3] = "GetArrBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoard"] = 4] = "GetArrivalDepartureBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetArrDepBoardWithDetails"] = 5] = "GetArrDepBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetNextDepartures"] = 6] = "GetNextDepartures";
    EOperationInfoEntries[EOperationInfoEntries["GetNextDeparturesWithDetails"] = 7] = "GetNextDeparturesWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetFastestDepartures"] = 8] = "GetFastestDepartures";
    EOperationInfoEntries[EOperationInfoEntries["GetFastestDeparturesWithDetails"] = 9] = "GetFastestDeparturesWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetServiceDetails"] = 10] = "GetServiceDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoardByCrs"] = 11] = "GetArrivalDepartureBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoardByTiploc"] = 12] = "GetArrivalDepartureBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoardByCrs"] = 13] = "GetArrivalBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoardByTiploc"] = 14] = "GetArrivalBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetDepartureBoardByCrs"] = 15] = "GetDepartureBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetDepartureBoardByTiploc"] = 16] = "GetDepartureBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetHistoricDepartureBoard"] = 17] = "GetHistoricDepartureBoard";
})(EOperationInfoEntries = exports.EOperationInfoEntries || (exports.EOperationInfoEntries = {}));
var ELDBWSOperationInfoKeys;
(function (ELDBWSOperationInfoKeys) {
    ELDBWSOperationInfoKeys["GetStationBoardResult"] = "GetStationBoardResult";
    ELDBWSOperationInfoKeys["GetDeparturesBoard"] = "DeparturesBoard";
    ELDBWSOperationInfoKeys["GetServiceDetailsResult"] = "GetServiceDetailsResult";
})(ELDBWSOperationInfoKeys = exports.ELDBWSOperationInfoKeys || (exports.ELDBWSOperationInfoKeys = {}));
//# sourceMappingURL=interfaces.js.map