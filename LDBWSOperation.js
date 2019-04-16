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