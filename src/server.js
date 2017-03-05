/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// server port is 3000
let port = 3000;

// use bodyParser.json and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// use api/v1, require routes/app.js
app.use('/api/v1', require('./routes/app.js')(express));

exports.server = app.listen(port, () => {
  console.log('Server active on port', port);
});
