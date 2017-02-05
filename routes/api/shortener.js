const url = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();

  router.get('/v1/urls', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  // create route
  router.post('/v1/urls/', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  router.post('/v1/urls/:url', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
