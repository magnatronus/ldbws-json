'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * LDBWSOperation.ts
 * This defines the available LDBWS Operation Requests.
 * See https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ for more details.
 */
const interfaces_1 = require("./interfaces");
const Operation = {
    GET_DEPARTURE_BOARD: interfaces_1.EOperation.getDepartureBoard,
    GET_DEPARTURE_BOARD_WITH_DETAILS: interfaces_1.EOperation.getDepartureBoardWithDetails,
    GET_ARRIVAL_BOARD: interfaces_1.EOperation.getArrivalBoard,
    GET_ARRIVAL_BOARD_WITH_DETAILS: interfaces_1.EOperation.getArrivalBoardWithDetails,
    GET_ARRIVAL_DEPARTURE_BOARD: interfaces_1.EOperation.getArrivalDepartureBoard,
    GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS: interfaces_1.EOperation.getArrivalDepartureBoardWithDetails,
    GET_NEXT_DEPARTURES: interfaces_1.EOperation.getNextDepartures,
    GET_NEXT_DEPARTURES_WITH_DETAILS: interfaces_1.EOperation.getNextDeparturesWithDetails,
    GET_FASTEST_DEPARTURES: interfaces_1.EOperation.getFastestDepartures,
    GET_FASTEST_DEPARTURES_WITH_DETAILS: interfaces_1.EOperation.getFastestDeparturesWithDetails,
    GET_SERVICE_DETAILS: interfaces_1.EOperation.getServiceDetails
};
exports.default = Operation;
const StaffOperation = {
    GET_DEPARTURE_BOARD: interfaces_1.EOperation.getDepartureBoard,
    GET_DEPARTURE_BOARD_WITH_DETAILS: interfaces_1.EOperation.getDepartureBoardWithDetails,
    GET_ARRIVAL_BOARD: interfaces_1.EOperation.getArrivalBoard,
    GET_ARRIVAL_BOARD_WITH_DETAILS: interfaces_1.EOperation.getArrivalBoardWithDetails,
    GET_ARRIVAL_DEPARTURE_BOARD: interfaces_1.EOperation.getArrivalDepartureBoard,
    GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS: interfaces_1.EOperation.getArrivalDepartureBoardWithDetails,
    GET_NEXT_DEPARTURES: interfaces_1.EOperation.getNextDepartures,
    GET_NEXT_DEPARTURES_WITH_DETAILS: interfaces_1.EOperation.getNextDeparturesWithDetails,
    GET_FASTEST_DEPARTURES: interfaces_1.EOperation.getFastestDepartures,
    GET_FASTEST_DEPARTURES_WITH_DETAILS: interfaces_1.EOperation.getFastestDeparturesWithDetails,
    GET_SERVICE_DETAILS: interfaces_1.EOperation.getServiceDetails,
    GET_ARR_BOARD_WITH_DETAILS: interfaces_1.EStaffOperation.getArrBoardWithDetails,
    GET_ARR_DEP_BOARD_WITH_DETAILS: interfaces_1.EStaffOperation.getArrDepBoardWithDetails,
    GET_ARRIVAL_DEPARTURE_BOARD_BY_CRS: interfaces_1.EStaffOperation.getArrivalDepartureBoardByCrs,
    GET_ARRIVAL_DEPARTURE_BOARD_BY_TIPLOC: interfaces_1.EStaffOperation.getArrivalDepartureBoardByTiploc,
    GET_ARRIVAL_BOARD_BY_CRS: interfaces_1.EStaffOperation.getArrivalBoardByCrs,
    GET_ARRIVAL_BOARD_BY_TIPLOC: interfaces_1.EStaffOperation.getArrivalBoardByTiploc,
    GET_DEPARTURE_BOARD_BY_CRS: interfaces_1.EStaffOperation.getDepartureBoardByCrs,
    GET_DEPARTURE_BOARD_BY_TIPLOC: interfaces_1.EStaffOperation.getDepartureBoardByTiploc,
    GET_DEP_BOARD_WITH_DETAILS: interfaces_1.EStaffOperation.getDepBoardWithDetails,
    GET_DISRUPTION_LIST: interfaces_1.EStaffOperation.getDisruptionList,
    GET_HISTORIC_DEPARTURE_BOARD: interfaces_1.EStaffOperation.getHistoricDepartureBoard,
    GET_HISTORIC_SERVICE_DETAILS: interfaces_1.EStaffOperation.getHistoricServiceDetails,
    GET_HISTORIC_TIME_LINE: interfaces_1.EStaffOperation.getHistoricTimeLine,
    GET_SERVICE_DETAILS_BY_RID: interfaces_1.EStaffOperation.getServiceDetailsByRid,
    QUERY_HISTORIC_SERVICES: interfaces_1.EStaffOperation.queryHistoricServices,
    QUERY_SERVICES: interfaces_1.EStaffOperation.queryServices,
};
exports.StaffOperation = StaffOperation;
//# sourceMappingURL=LDBWSOperation.js.map