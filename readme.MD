# ldbws-json
`ldbws-json` is a package that can be used to access the National Rail Enquiries [OpenLDBWS web service](https://lite.realtime.nationalrail.co.uk/OpenLDBWS/) to query for real time train information. This is the same info that is used to power the Live Departure Boards at UK Railway stations. This service is a SOAP Web service and the ouput is XML, so this package was created to convert these calls into a JSON format.

Support for the staff web service, [OpenLBDSVWS web service](https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/) is also available. They key provided from this service is independent and different from the key provided by the OpenLDBWS service.

## Access Token
To use the OpenLDBWS or OpenLDBSVWS service you **MUST** supply a valid token, which can be obtained by registering. IF no **token**, or an invalid one is supplied the call will be rejected. See [here](http://www.nationalrail.co.uk/100296.aspx) for more details on registering as a developer.

## Overview
The main class used should be accessed as follows:

    const LBDWS_KEY = "<YOUR_OPENLDBWS_KEY>";
    const openLDBWSCl = require('ldbws-json');
    const openLDBWS = new openLDBWSCl({ accessToken: LDBWS_KEY });

If you are using typescript or have import support available, you can instead use the following to get necessary interfaces, enums, and operations;

    const LBDWS_KEY = "<YOUR_OPENLDBWS_KEY>";
    import openLDBWSCl, {EOperation, IOperationInfo, Operation, StaffOperation} from 'ldbws-json';
    const openLDBWS = new openLDBWSCl({ accessToken: LDBWS_KEY });

If you wish to use the staff endpoint (OpenLDBSVWS);

    const LBDWS_KEY = "<YOUR_OPENLDBSVWS_KEY>";
    import openLDBWSCl, {EOperation, IOperationInfo, Operation, StaffOperation} from 'ldbws-json';
    const openLDBWS = new openLDBWSCl({ accessToken: LDBSVWS_KEY, staff: true });

The method to obtain data is **call**. This is an **async** method so must be called using either *await* or as a *promise*.

    const data = await api.call(operation.GET_DEPARTURE_BOARD, params);

or

    api.call(operation.GET_DEPARTURE_BOARD, params).then((data) => { /* do something with the data */});

There are 2 other helpers available as well:

- **ldbws-json/LDBWSOperation** this is a list of the available OpenLDBWS calls that can be issued
- **ldbws-json/LDBWSRequestData** - a set of default JSON objects used to passing the correct request vales for each call 

See the usage example below for details on how to use these. 

To find out which **LDBWSRequestData** object to use for each operation see the OpenLDBWS documentation [here](https://lite.realtime.nationalrail.co.uk/OpenLDBWS/) or the staff version at the OpenLDBSVWS documentation [here](https://lite.realtime.nationalrail.co.uk/OpenLDBSVWS/)

## Usage
To use this package add it to your project

    npm install --save ldbws-json

Then, for example, to get the Departure Board  Information for London Victoria (VIC) you would use the following code:

```
const openLDBWS     = require('ldbws-json');
const operation     = require('ldbws-json/LDBWSOperation');
const requestData   = require('ldbws-json/LDBWSRequestData');
const operationInfo = require('ldbws-json/LDBWSOperationInfo');

// Put a valid Token here
const token = "{PUT_YOUR_ASSIGNED_TOKEN_HERE}";

// Select the operation method we will call and use the helper to extract the result
// use of resultkeys is optional and provided for convienience only
const method = operation.GET_DEPARTURE_BOARD;
const key = operationInfo[method].key;

// populate the required data structure here we use the CRS code for London Victoria
// This uses the spread operator so a recent node version is needed
const options = {
    ...requestData.Board,
    crs: "VIC"
}

// call the API, wait then return the result
const api = new openLDBWS(token);
api.call(operation.GET_DEPARTURE_BOARD, options).then((board)=>{
    //This should log out London Victoria
    console.log(board[key].locationName);
});

```

A more concise version using the interfaces included with ldbws-json would look like this;
```
const STAFF_KEY = "<YOUR_OPENLBDSVWS_KEY>";
const PUBLIC_KEY = "<YOUR_OPENLBDWS_KEY>";

import openLDBWSCl, {EOperation, IOperationInfo, Operation, StaffOperation} from 'ldbws-json';
const openLDBWS = new openLDBWSCl({accessToken: STAFF_KEY, staff: true});
const moment = require("moment");

const data = await openLDBWS.call(StaffOperation.GET_DEPARTURE_BOARD_WITH_DETAILS, {
    crs: "LDS",
    numRows: 10,
    time: moment().format("YYYY-MM-DD[T]HH:mm:ss"),
    filterType: "to",
    timeWindow: 60,
});

  res.send(data);
```

# Departure type calls
When using the **filterList** param for *departure* based calls set up the list (1 or more) for **crs** codes as follows:
```
const options = Object.assign({}, requestData.Departure);
options.crs = "KGX";
options.timeWindow = 120;
options.filterList = ['EDB','ARL'];
```
In the example this will get the departure list from London Kings Cross to Edinburgh and Arlesey  within the next 120 mins.




# Mocha Tests
To run the Mocha tests requires a valid Access Token (see above). This is not hard coded in the tests and will need to be passed on the command line when the tests are run. For example if the assigned Access Token is **1234-5678-9876** then the tests can be run similar to:

   npm --TOKEN='1234-5678-9876' test


# Acknowledgements
- The LDBWS SOAP Web Service is powered by National Rail Enquiries.