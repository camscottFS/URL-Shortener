module.exports = (express) => {
  const router = express.Router();

  router.get('/v1/urls', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  return router;
}
