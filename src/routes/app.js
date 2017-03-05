/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

// require url shortener
const shurl = require('../modules/shurl');
const db = require('../models/db');

module.exports = (express) => {
  const router = express.Router();

  // get server status
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  // create url
  router.post('/urls/', (req, res) => {
      res.send(shurl(req, res));
  });

  // read all
  router.get('/urls/', (req, res) => {
    url.findAll( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // read one
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
