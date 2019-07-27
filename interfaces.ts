export enum EOperation {
  GET_DEPARTURE_BOARD = "GetDepartureBoard",
  GET_DEPARTURE_BOARD_WITH_DETAILS = "GetDepBoardWithDetails",
  GET_ARRIVAL_BOARD = "GetArrivalBoard",
  GET_ARRIVAL_BOARD_WITH_DETAILS  = "GetArrBoardWithDetails",
  GET_ARRIVAL_DEPARTURE_BOARD = "GetArrivalDepartureBoard",
  GET_ARRIVAL_DEPARTURE_BOARD_WITH_DETAILS = "GetArrDepBoardWithDetails",
  GET_NEXT_DEPARTURES = "GetNextDepartures",
  GET_NEXT_DEPARTURES_WITH_DETAILS = "GetNextDeparturesWithDetails",
  GET_FASTEST_DEPARTURES = "GetFastestDepartures",
  GET_FASTEST_DEPARTURES_WITH_DETAILS = "GetFastestDeparturesWithDetails",
  GET_SERVICE_DETAILS = "GetServiceDetails",
}

export enum EStaffOperation {
  GET_ARR_BOARD_WITH_DETAILS =                "GetArrBoardWithDetails",
  GET_ARR_DEP_BOARD_WITH_DETAILS =            "GetArrDepBoardWithDetails",
  GET_ARRIVAL_DEPARTURE_BOARD_BY_CRS =        "GetArrivalDepartureBoardByCrs",
  GET_ARRIVAL_DEPARTURE_BOARD_BY_TIPLOC =     "GetArrivalDepartureBoardByTiploc",
  GET_ARRIVAL_BOARD_BY_CRS =                  "GetArrivalBoardByCrs",
  GET_ARRIVAL_BOARD_BY_TIPLOC =               "GetArrivalBoardByTiploc",
  GET_DEPARTURE_BOARD_BY_CRS =                "GetDepartureBoardByCrs",
  GET_DEPARTURE_BOARD_BY_TIPLOC =             "GetDepartureBoardByTiploc",
  GET_DEP_BOARD_WITH_DETAILS =                "GetDepBoardWithDetails",
  GET_DISRUPTION_LIST =                       "GetDisruptionList",
  GET_HISTORIC_DEPARTURE_BOARD =              "GetHistoricDepartureBoard",
  GET_HISTORIC_SERVICE_DETAILS =              "GetHistoricServiceDetails",
  GET_HISTORIC_TIME_LINE =                    "GetHistoricTimeLine",
  GET_SERVICE_DETAILS_BY_RID =                "GetServiceDetailsByRid",
  QUERY_HISTORIC_SERVICES =                   "QueryHistoricServices",
  QUERY_SERVICES =                            "QueryServices"
}


export interface IOpenLDBWS {
  accessToken: string;
  baseURL: string;
  staff: boolean;
}

export interface ILDBWSSoapOptions {
  [key:string] : string
}

export interface ILDBWSSoap {
  token: string;
  request: any;
  options: ILDBWSSoapOptions;
  staff: boolean;
  generateCall: () => string;
  _payload: (options: ILDBWSSoapOptions) => string;
  _header: () => string;
}

export interface IOperationInfo {
  //
}

export enum EOperationInfoEntryType {
  BOARD = "board",
  DEPARTURE = "departure",
  SERVICE = "service"
}

export enum EOperationInfoEntries {
  GetDeparturesBoard,
  GetDepBoardWithDetails,
  GetArrivalBoard,
  GetArrBoardWithDetails,
  GetArrivalDepartureBoard,
  GetArrDepBoardWithDetails,
  GetNextDepartures,
  GetNextDeparturesWithDetails,
  GetFastestDepartures,
  GetFastestDeparturesWithDetails,
  GetServiceDetails,
  GetArrivalDepartureBoardByCrs,
  GetArrivalDepartureBoardByTiploc,
  GetArrivalBoardByCrs,
  GetArrivalBoardByTiploc,
  GetDepartureBoardByCrs,
  GetDepartureBoardByTiploc,
  GetHistoricDepartureBoard
}

export interface IOperationInfoEntry {
  key: EOperation | EStaffOperation,
  type: EOperationInfoEntryType
}

export enum ELDBWSOperationInfoKeys {
  GetStationBoardResult = "GetStationBoardResult",
  GetDeparturesBoard = "DeparturesBoard",
  GetServiceDetailsResult = "GetServiceDetailsResult"
}