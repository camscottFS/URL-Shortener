const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// logging
var log = require('../modules/debugger');
log.debugWarn();

// set server port
const port = process.env.PORT || 3000;

//tell api to use bodyParser.json and urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// use index directory, require routes
app.use('/', require('../routes')(express));

exports.server = app.listen(port, () => {
  console.log('Server active on port', port);
});
