/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 1: Static API
*/

// require url shortener
const shurl = require('../modules/shurl.js');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  router.post('/v1/urls', (req, res) => {
      res.send(short(req, res));
  });

  return router;
}
