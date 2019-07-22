'use strict';
/**
 * LDBWSOperation.js
 * This defines the available LDBWS Operation Requests. 
 * See https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ for more details.
 */

const Operation = {
   GET_DEPARTURE_BOARD: "GetDepartureBoard",
   GET_DEPARTURE_BOARD_WITH_DETAILS: "GetDepBoardWithDetails",
   GET_ARRIVAL_BOARD: "GetArrivalBoard",
   GET_ARRIVAL_BOARD_WITH_DETAILS : "GetArrBoardWithDetails",
   GET_ARRIVAL_DEPARTURE_BOARD: "GetArrivalDepartureBoard",
   GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS: "GetArrDepBoardWithDetails",
   GET_NEXT_DEPARTURES: "GetNextDepartures",
   GET_NEXT_DEPARTURES_WITH_DETAILS: "GetNextDeparturesWithDetails",
   GET_FASTEST_DEPARTURES: "GetFastestDepartures",
   GET_FASTEST_DEPARTURES_WITH_DETAILS: "GetFastestDeparturesWithDetails",
   GET_SERVICE_DETAILS: "GetServiceDetails",
 }

 module.exports = Operation;

 const StaffOperation = {
   GET_DEPARTURE_BOARD:                       "GetDepartureBoard",
   GET_DEPARTURE_BOARD_WITH_DETAILS:          "GetDepBoardWithDetails",
   GET_ARRIVAL_BOARD:                         "GetArrivalBoard",
   GET_ARRIVAL_BOARD_WITH_DETAILS :           "GetArrBoardWithDetails",
   GET_ARRIVAL_DEPARTURE_BOARD:               "GetArrivalDepartureBoard",
   GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS:  "GetArrDepBoardWithDetails",
   GET_NEXT_DEPARTURES:                       "GetNextDepartures",
   GET_NEXT_DEPARTURES_WITH_DETAILS:          "GetNextDeparturesWithDetails",
   GET_FASTEST_DEPARTURES:                    "GetFastestDepartures",
   GET_FASTEST_DEPARTURES_WITH_DETAILS:       "GetFastestDeparturesWithDetails",
   GET_SERVICE_DETAILS:                       "GetServiceDetails",

   GET_ARR_BOARD_WITH_DETAILS:                "GetArrBoardWithDetails",
   GET_ARR_DEP_BOARD_WITH_DETAILS:            "GetArrDepBoardWithDetails",
   GET_ARRIVAL_DEPARTURE_BOARD_BY_CRS:        "GetArrivalDepartureBoardByCrs",
   GET_ARRIVAL_DEPARTURE_BOARD_BY_TIPLOC:     "GetArrivalDepartureBoardByTiploc",
   GET_ARRIVAL_BOARD_BY_CRS:                  "GetArrivalBoardByCrs",
   GET_ARRIVAL_BOARD_BY_TIPLOC:               "GetArrivalBoardByTiploc",
   GET_DEPARTURE_BOARD_BY_CRS:                "GetDepartureBoardByCrs",
   GET_DEPARTURE_BOARD_BY_TIPLOC:             "GetDepartureBoardByTiploc",
   GET_DEP_BOARD_WITH_DETAILS:                "GetDepBoardWithDetails",
   GET_DISRUPTION_LIST:                       "GetDisruptionList",
   GET_FASTEST_DEPARTURES:                    "GetFastestDepartures",
   GET_FASTEST_DEPARTURES_WITH_DETAILS:       "GetFastestDeparturesWithDetails",
   GET_HISTORIC_DEPARTURE_BOARD:              "GetHistoricDepartureBoard",
   GET_HISTORIC_SERVICE_DETAILS:              "GetHistoricServiceDetails",
   GET_HISTORIC_TIME_LINE:                    "GetHistoricTimeLine",
   GET_NEXT_DEPARTURES:                       "GetNextDepartures",
   GET_NEXT_DEPARTURES_WITH_DETAILS:          "GetNextDeparturesWithDetails",
   GET_SERVICE_DETAILS_BY_RID:                "GetServiceDetailsByRid",
   QUERY_HISTORIC_SERVICES:                   "QueryHistoricServices",
   QUERY_SERVICES:                            "QueryServices",
 }

 module.exports.StaffOperation = StaffOperation;