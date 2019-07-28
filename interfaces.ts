export enum ESOAPStaffAction {
  GetArrBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
  GetArrDepBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
  GetArrivalDepartureBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByCRS",
  GetArrivalDepartureBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByTIPLOC",
  GetArrivalBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByCRS",
  GetArrivalBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByTIPLOC",
  GetDepartureBoardByCrs =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByCRS",
  GetDepartureBoardByTiploc =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByTIPLOC",
  GetDepBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
  GetDisruptionList =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDisruptionList",
  GetHistoricDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricDepartureBoard",
  GetHistoricServiceDetails =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricServiceDetails",
  GetHistoricTimeLine =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricTimeLine",
  GetServiceDetailsByRid =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetServiceDetailsByRID",
  QueryHistoricServices =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryHistoricServices",
  QueryServices =  "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryServices",

  GetDepartureBoard =     "GetDepartureBoard",
  GetDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails",
  GetArrivalBoard =     "GetArrivalBoard",
  GetArrivalBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails",
  GetArrivalDepartureBoard =     "GetArrivalDepartureBoard",
  GetArrivalDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails",
  GetNextDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDepartures",
  GetNextDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDeparturesWithDetails",
  GetFastestDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDepartures",
  GetFastestDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDeparturesWithDetails",
  // GET_SERVICE_DETAILS =                       "GetServiceDetails",
}

export enum ESOAPAction {
  GetDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetDepartureBoard",
  GetDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetDepBoardWithDetails",
  GetArrivalBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalBoard",
  GetArrivalBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrBoardWithDetails",
  GetArrivalDepartureBoard =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalDepartureBoard",
  GetArrivalDepartureBoardWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrDepBoardWithDetails",
  GetNextDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDepartures",
  GetNextDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDeparturesWithDetails",
  GetFastestDepartures =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDepartures",
  GetFastestDeparturesWithDetails =  "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDeparturesWithDetails",
  GetServiceDetails =  "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetServiceDetails",
}

export enum EOperation {
  getDepartureBoard =  "GetDepartureBoard",
  getDepartureBoardWithDetails =  "GetDepBoardWithDetails",
  getArrivalBoard =  "GetArrivalBoard",
  getArrivalBoardWithDetails =  "GetArrBoardWithDetails",
  getArrivalDepartureBoard =  "GetArrivalDepartureBoard",
  getArrivalDepartureBoardWithDetails =  "GetArrDepBoardWithDetails",
  getNextDepartures =  "GetNextDepartures",
  getNextDeparturesWithDetails =  "GetNextDeparturesWithDetails",
  getFastestDepartures =  "GetFastestDepartures",
  getFastestDeparturesWithDetails =  "GetFastestDeparturesWithDetails",
  getServiceDetails =  "GetServiceDetails",
}

export enum EStaffOperation {
  getArrBoardWithDetails =   "GetArrBoardWithDetails",
  getArrDepBoardWithDetails =   "GetArrDepBoardWithDetails",
  getArrivalDepartureBoardByCrs =   "GetArrivalDepartureBoardByCRS",
  getArrivalDepartureBoardByTiploc =   "GetArrivalDepartureBoardByTIPLOC",
  getArrivalBoardByCrs =   "GetArrivalBoardByCRS",
  getArrivalBoardByTiploc =   "GetArrivalBoardByTIPLOC",
  getDepartureBoardByCrs =   "GetDepartureBoardByCRS",
  getDepartureBoardByTiploc =   "GetDepartureBoardByTIPLOC",
  getDepBoardWithDetails =   "GetDepBoardWithDetails",
  getDisruptionList =   "GetDisruptionList",
  getHistoricDepartureBoard =   "GetHistoricDepartureBoard",
  getHistoricServiceDetails =   "GetHistoricServiceDetails",
  getHistoricTimeLine =   "GetHistoricTimeLine",
  getServiceDetailsByRid =   "GetServiceDetailsByRID",
  queryHistoricServices =   "QueryHistoricServices",
  queryServices =   "QueryServices",

  getDepartureBoard =      "GetDepartureBoard",
  getDepartureBoardWithDetails =   "GetDepBoardWithDetails",
  getArrivalBoard =      "GetArrivalBoard",
  getArrivalBoardWithDetails =   "GetArrBoardWithDetails",
  getArrivalDepartureBoard =      "GetArrivalDepartureBoard",
  getArrivalDepartureBoardWithDetails =   "GetArrDepBoardWithDetails",
  getNextDepartures =   "GetNextDepartures",
  getNextDeparturesWithDetails =   "GetNextDeparturesWithDetails",
  getFastestDepartures =   "GetFastestDepartures",
  getFastestDeparturesWithDetails =   "GetFastestDeparturesWithDetails",
  getServiceDetails =      "GetServiceDetails",
}


export interface IOpenLDBWS {
  accessToken: string;
  baseURL: string;
  staff: boolean;
  mapDelayCodeToReason: boolean;
  getDelayReason: (code: string | number) => string;
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