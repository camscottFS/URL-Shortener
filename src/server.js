const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', require('../routes')(express));

exports.server = app.listen(port, () => {
  console.log('Server active on port', port);
});
