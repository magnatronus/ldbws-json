'use strict';
/**
 * LDBWSOperation.ts
 * This defines the available LDBWS Operation Requests. 
 * See https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ for more details.
 */
import { EOperation, EStaffOperation } from "./interfaces";

const Operation = {
   GET_DEPARTURE_BOARD: EOperation.getDepartureBoard,
   GET_DEPARTURE_BOARD_WITH_DETAILS: EOperation.getDepartureBoardWithDetails,
   GET_ARRIVAL_BOARD: EOperation.getArrivalBoard,
   GET_ARRIVAL_BOARD_WITH_DETAILS: EOperation.getArrivalBoardWithDetails,
   GET_ARRIVAL_DEPARTURE_BOARD: EOperation.getArrivalDepartureBoard,
   GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS: EOperation.getArrivalDepartureBoardWithDetails,
   GET_NEXT_DEPARTURES: EOperation.getNextDepartures,
   GET_NEXT_DEPARTURES_WITH_DETAILS: EOperation.getNextDeparturesWithDetails,
   GET_FASTEST_DEPARTURES: EOperation.getFastestDepartures,
   GET_FASTEST_DEPARTURES_WITH_DETAILS: EOperation.getFastestDeparturesWithDetails,
   GET_SERVICE_DETAILS: EOperation.getServiceDetails
 }

export default Operation;

 const StaffOperation = {
  GET_DEPARTURE_BOARD: EOperation.getDepartureBoard,
  GET_DEPARTURE_BOARD_WITH_DETAILS: EOperation.getDepartureBoardWithDetails,
  GET_ARRIVAL_BOARD: EOperation.getArrivalBoard,
  GET_ARRIVAL_BOARD_WITH_DETAILS: EOperation.getArrivalBoardWithDetails,
  GET_ARRIVAL_DEPARTURE_BOARD: EOperation.getArrivalDepartureBoard,
  GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS: EOperation.getArrivalDepartureBoardWithDetails,
  GET_NEXT_DEPARTURES: EOperation.getNextDepartures,
  GET_NEXT_DEPARTURES_WITH_DETAILS: EOperation.getNextDeparturesWithDetails,
  GET_FASTEST_DEPARTURES: EOperation.getFastestDepartures,
  GET_FASTEST_DEPARTURES_WITH_DETAILS: EOperation.getFastestDeparturesWithDetails,
  GET_SERVICE_DETAILS: EOperation.getServiceDetails,

  GET_ARR_BOARD_WITH_DETAILS:                EStaffOperation.getArrBoardWithDetails,
  GET_ARR_DEP_BOARD_WITH_DETAILS:            EStaffOperation.getArrDepBoardWithDetails,
  GET_ARRIVAL_DEPARTURE_BOARD_BY_CRS:        EStaffOperation.getArrivalDepartureBoardByCrs,
  GET_ARRIVAL_DEPARTURE_BOARD_BY_TIPLOC:     EStaffOperation.getArrivalDepartureBoardByTiploc,
  GET_ARRIVAL_BOARD_BY_CRS:                  EStaffOperation.getArrivalBoardByCrs,
  GET_ARRIVAL_BOARD_BY_TIPLOC:               EStaffOperation.getArrivalBoardByTiploc,
  GET_DEPARTURE_BOARD_BY_CRS:                EStaffOperation.getDepartureBoardByCrs,
  GET_DEPARTURE_BOARD_BY_TIPLOC:             EStaffOperation.getDepartureBoardByTiploc,
  GET_DEP_BOARD_WITH_DETAILS:                EStaffOperation.getDepBoardWithDetails,
  GET_DISRUPTION_LIST:                       EStaffOperation.getDisruptionList,
  GET_HISTORIC_DEPARTURE_BOARD:              EStaffOperation.getHistoricDepartureBoard,
  GET_HISTORIC_SERVICE_DETAILS:              EStaffOperation.getHistoricServiceDetails,
  GET_HISTORIC_TIME_LINE:                    EStaffOperation.getHistoricTimeLine,
  GET_SERVICE_DETAILS_BY_RID:                EStaffOperation.getServiceDetailsByRid,
  QUERY_HISTORIC_SERVICES:                   EStaffOperation.queryHistoricServices,
  QUERY_SERVICES:                            EStaffOperation.queryServices,
 }

 export {
   StaffOperation
 };

//  module.exports.StaffOperation = StaffOperation;