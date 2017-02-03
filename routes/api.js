module.exports = function (express) {
  var router = express.Router();

  // Create route for index
  router.get('/', function(req, res) {
    res.json({hello: "world"});
  });

  // Create route for status
  router.get('/status', function(req, res) {
    res.json({healthy: true});
  });

  // Create route for url shortener
  router.get('/v1/urls/:url', function(req, res) {
    res.json({long_url: req.params.url, short_url: "http://bit.ly/2k1JgY8" });
  });

  // return router
  return router;
}
