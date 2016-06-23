module.exports = function(app) {
  var router = app.loopback.Router();

  router.get('/ping', function(req, res) {
    res.send('pongaroo');
  });
  router.get('/start', function (req, res) {
    res.send('start');
  })
  router.get('/go', function (req, res) {
    res.send('client/index.html');
  })
  
  app.use(router);
}