module.exports = function (express) {
  var router = express.Router();

  router.get('/', function(req, res) {
    res.json({hello: "world"});
  });

  router.get('/status', function(req, res) {
    res.json({healthy: true});
  });

  router.get('/user/:id', function(req, res) {
    res.json({user: {id: req.params.id}});
  });

  router.get('/player/Gewd-11651', function(req, res) {
    res.json([{"name":"Ana","playtime":"4 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000013B.png","percentage":1},{"name":"Symmetra","playtime":"4 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000016.png","percentage":0.8600510773699829},{"name":"Soldier: 76","playtime":"4 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000006E.png","percentage":0.8585435939433694},{"name":"D.Va","playtime":"3 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000007A.png","percentage":0.6769991788391556},{"name":"Pharah","playtime":"3 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000008.png","percentage":0.6513327822772395},{"name":"Zenyatta","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000020.png","percentage":0.48798457748904933},{"name":"Mercy","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000004.png","percentage":0.4313759983757849},{"name":"Reinhardt","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000007.png","percentage":0.40542858606327753},{"name":"Lúcio","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000079.png","percentage":0.32851272989784625},{"name":"Reaper","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000002.png","percentage":0.32410334876123326},{"name":"Roadhog","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000040.png","percentage":0.3072757417761168},{"name":"Junkrat","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000065.png","percentage":0.2582819692573325},{"name":"Genji","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000029.png","percentage":0.22748584773770034},{"name":"McCree","playtime":"55 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000042.png","percentage":0.18936366228840937},{"name":"Winston","playtime":"49 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000009.png","percentage":0.17061664659791442},{"name":"Mei","playtime":"38 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E00000000000DD.png","percentage":0.133237587117821},{"name":"Bastion","playtime":"23 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000015.png","percentage":0.08122425864478486},{"name":"Torbjörn","playtime":"21 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000006.png","percentage":0.0743100303390728},{"name":"Hanzo","playtime":"18 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000005.png","percentage":0.0620196959606925},{"name":"Sombra","playtime":"5 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000012E.png","percentage":0.018778250860134363},{"name":"Tracer","playtime":"4 minutes","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000003.png","percentage":0.014114738272324099},{"name":"Widowmaker","playtime":"--","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000000A.png","percentage":0},{"name":"Zarya","playtime":"--","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000068.png","percentage":0}])
  });

  return router;
}
