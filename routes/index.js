module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  // routes

  router.use('/api/', require('./api/shortener')(express));

  return router;
}
