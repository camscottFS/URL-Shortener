var request = require('supertest');

describe('API', function() {

  var server;

  beforeEach(function () {
    server = require('../src/server.js');
  });

  afterEach(function () {
    server.close();
  });

  it('/ should return specified object.', function (done) {
    request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {"hello": "world"}, done);
  });

  it('/status should returnb specified healthy:true', function (done) {
    request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {"healthy": true}, done);
  });
});
