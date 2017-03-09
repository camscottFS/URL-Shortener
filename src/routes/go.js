/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

const db = require('../models/db');
const url = require('../models/url');
const log = require('../modules/debugger');

module.exports = (express) => {
  const router = express.Router();

  // redirect by id
  router.get('/:id', (req, res) => {
    // set data.url params
    req.body.id = req.params.id;
    url.findOne(req.body, (data) => {
      // set data.url target
      let target = data.url;
      // if the url contains http or https, if not then add http
      if(target.includes('http') || target.includes('https')) {
        res.redirect(target);
        log.debug({
          "type" : "success",
          "msg" : "Redirected to external URL",
          "location" : "go.js line 14 GET:/:id"
        })
      } else {
        res.redirect('http://' + target);
        log.debug({
          "type" : "success",
          "msg" : "Redirected to external URL",
          "location" : "go.js line 14 GET:/:id"
        })
      }
    });
  });

  // redirect by short url
  router.get('/:prefix/:url', (req, res) => {
    // set data.url params
    req.body.id = req.params.url;
    url.findOneUrl(req.body, (data) => {
      // set data.url target
      let target = data.url;
      // if the url contains http or https, if not then add http
      if(target.includes('http') || target.includes('https')) {
        res.redirect(target);
        log.debug({
          "type" : "success",
          "msg" : "Redirected to external URL",
          "location" : "go.js line 40 GET:/:id"
        })
      } else {
        res.redirect('http://' + target)
        log.debug({
          "type" : "success",
          "msg" : "Redirected to external URL",
          "location" : "go.js line 40 GET:/:id"
        })
      }
    });
  });

  return router;
}
