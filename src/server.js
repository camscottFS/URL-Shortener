/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 5: Unit Tests
*/

const express = require('express');
const bodyParser = require('body-parser');
const log = require('shurl-debug');
const app = express();

// debug warning
log.debugWarn();

// server port is 3000
const port = process.env.PORT || 3000;

// use bodyParser.json and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// use api/v1, require routes/app.js
app.use('/api/v1', require('./routes/app')(express));
// use go, require routes/go
app.use('/go/', require('./routes/go')(express));

exports.server = app.listen(port, () => {
  log.debug({
    "type" : "success",
    "msg" : "Server active on port 3000",
    "location" : "server.js on line 30",
  });
  log.msg('Server active on port 3000');
  // console.log('Server active on port', port);
});
