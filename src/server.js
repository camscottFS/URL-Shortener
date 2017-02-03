var express = require('express');
var body_parser = require('body-parser');
var app = express()

// Port config
var port = 3000;

// Tells the application to use the body_paster.json
app.use(body_parser.json());

// Use prefix of api
app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port, function(){
  console.log('Server Active on', port);
});

module.exports = server;
