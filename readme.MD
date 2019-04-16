# ldbws-json
`ldbws-json` is a package that can be used to access the National Rail Enquiries [OpenLDBWS web service](https://lite.realtime.nationalrail.co.uk/OpenLDBWS/) to query for real time train information. This is the same info that is used to power the Live Departure Boards at UK Railway stations. This service is a SOAP Web service and the ouput is XML, so this package was created to convert these calls into a JSON format.

## Access Token
To use the OpenLDBWS service you **MUST** supply a valid token, which can be obtained by registering. IF no **token**, or an invalid one is supplied the call will be rejected. See [here](http://www.nationalrail.co.uk/100296.aspx) for more details on registering as a developer.


## Overview
The main class used should be accessed as follows:

    const openLDBWS = require('ldbws-json');

then create an instance and pass it a valid access token.

    const api = new openLDBWS("{my access token}");


The method to obtain data is **call**. This is an **async** method so must be called using either *await* or as a *promise*.

    const data = await api.call(operation.GET_DEPARTURE_BOARD, params);

or

    api.call(operation.GET_DEPARTURE_BOARD, params).then((data) => { /* do something with the data */});

There are 2 other helpers available as well:

- **ldbws-json/LDBWSOperation** this is a list of the available OpenLDBWS calls that can be issued
- **ldbws-json/LDBWSRequestData** - a set of default JSON objects used to passing the correct request vales for each call 

See the usage example below for details on how to use these. 

To find out which **LDBWSRequestData** object to use for each operation see the OpenLDBWS documentation [here](https://lite.realtime.nationalrail.co.uk/OpenLDBWS/)

## Usage
To use this package add it to your project

    npm install --save ldbws-json

Then, for example, to get the Departure Board  Information for London Victoria (VIC) you would use the following code:

```
const openLDBWS     = require('ldbws-json');
const operation     = require('ldbws-json/LDBWSOperation');
const requestData   = require('ldbws-json/LDBWSRequestData');

// Put a valid Token here
const token = "{PUT_YOUR_ASSIGNED_TOKEN_HERE}";

// populate the required data structure here we use the CRS code for London Victoria
const options = Object.assign({}, requestData.Board);
options.crs = "VIC";

// call the API, wait then return the result
const api = new openLDBWS(token);
api.call(operation.GET_DEPARTURE_BOARD, options).then((board)=>{
    //This should log out London Victoria
    console.log(board.GetStationBoardResult.locationName);
});

```



# Mocha Tests
To run the Mocha tests requires a valid Access Token (see above). This is not hard coded in the tests and will need to be passed on the command line when the tests are run. For example if the assigned Access Token is **1234-5678-9876** then the tests can be run similar to:

   npm --TOKEN='1234-5678-9876' test


# Acknowledgements
- The LDBWS SOAP Web Service is powered by National Rail Enquiries.