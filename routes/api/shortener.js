const url = require('../../models/url');

module.exports = (express) => {
const router = express.Router();

  // read all
  router.get('/v1/urls', (req, res) => {
    url.findAll( (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not return all URLs",
        "location" : "shortener.js line 7 GET:/v1/urls",
        "data" : err,
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Returned all URLs",
        "location" : "shortener.js line 7 GET:/v1/urls",
        "data" : {data}
      })
    })
  });

  // read one
  router.get('/v1/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not return URL by id",
        "location" : "shortener.js line 31 GET:/v1/urls/:id",
        "data" : err,
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Returned URL by id",
        "location" : "shortener.js line 31 GET:/v1/urls/:id",
        "data" : {data},
        "request" : {body}
      })
    })
  });

  // delete
  router.delete('/v1/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not delete URL by id",
        "location" : "shortener.js line 57 DELETE:/urls/:id",
        "data" : err,
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Deleted URL based on id",
        "location" : "shortener.js line 57 DELETE:/v1/urls/:id",
        "data" : {data},
        "request" : {body}
      })
    })
  });

  // update
  router.post('/v1/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not update URL by id",
        "location" : "shortener.js line 83 POST:/v1/urls/:id",
        "data" : err,
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type" : "success",
        "msg" : "Updated URL based on id",
        "location" : "shortener.js line 83 POST:/v1/urls/:id",
        "data" : {data},
        "request" : {body}
      })
    })
  });

  // create a url
  router.post('/v1/urls/', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
      let body = req.body;
      log.debug({
        "type" : "error",
        "msg" : "Could not create URL",
        "location" : "shortener.js line 107 POST:/v1/urls/:id",
        "data" : err,
        "request" : {body}
      })
    }, (data) => {
      res.status(200).json(data);
      let body = req.body;
      log.debug({
        "type": "success",
        "msg": "Created URL",
        "location" : "shortener.js line 107 POST:/v1/urls/:id",
        "data":{data},
        "request":{body}
      })
    })
  });

  return router;
}
