/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 5: Unit Tests
*/

const shurl = require('../modules/shurl');
const log = require('../modules/debugger');
const db = require('../models/db');
const url = require('../models/url');

module.exports = (express) => {
  const router = express.Router();

  // get server status
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    })
    let body = req.body;
    log.debug({
      "type" : "success",
      "msg" : "Server status is healthy!",
      "location" : "app.js on line 15 GET:/status"
    })
  });

  // create url
  router.post('/urls/', (req, res) => {
      res.send(shurl(req, res));
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Server status is healthy!",
        "location" : "app.js on line 15 GET:/status"
      })
  });

  // read all
  router.get('/urls/', (req, res) => {
    url.findAll( (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not read all URLs",
        "location" : "app.js on line 41 GET:/urls",
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Read all URLs",
        "location" : "app.js on line 41 GET:/urls"
      })
    })
  });

  // read one
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not read URL by ID",
        "location" : "app.js on line 65 GET:/urls/:id",
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Read URL by ID",
        "location" : "app.js on line 65 GET:/urls/:id"
      })
    })
  });

  // delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not delete URL by ID",
        "location" : "app.js on line 90 DELETE:/urls/:id",
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Deleted URL by ID",
        "location" : "app.js on line 90 DELETE:/urls/:id"
      })
    })
  });

  // update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not update URL by ID",
        "location" : "app.js on line 115 POST:/urls/:id",
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Updated URL by ID",
        "location" : "app.js on line 115 POST:/urls/:id"
      })
    })
  });

  return router;
}
