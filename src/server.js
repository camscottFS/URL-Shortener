/*
Cameron Scott
Deployment of Web Applications
March 2017
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// server port is 3000
let port = 3000;

exports.server = app.listen(port, () => {
  console.log('Server active on port', port);
});
