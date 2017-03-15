/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 5: Unit Tests
*/

const expect = require('chai').expect;
const request = require('supertest');
const log = require('shurl-debug');
const db = require('../src/models/db');

class testApp {
  setData(data) {
    this.app = {
      id: data.id,
      url: data.url,
      shurl: data.shurl,
      shortUrl: data.shortUrl,
      key: data.key,
    };
    this.testGets(this.app);
    this.redirect(this.app);
  }

  getAllUrls() {
    // test the get for all urls
    describe('App Routes', () => {
      const server = require('../src/server');
      it('GET api/v1/urls returns all shortened urls', (done) => {
        request(server)
        .get('/api/v1/urls')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          // debug the results
          log.debug({
            type: 'success',
            msg: 'Test: Get all urls',
            location: '__app.js line 26',
            data: { data },
          });
          // send msg
          log.msg('Unit Test Complete for /urls', '__app.js');
          // set the data for other tests
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  testGets(app) {
    // assign app
    this.app = app;
    // create the routes
    this.routes = ['/urls/' + this.app.id, '/urls/user/' + this.app.key];
    // enter forEach to loop through array
    this.routes.forEach((url) => {
      describe('App Routes', () => {
        const server = require('../src/server');
        it('GET api/v1' + url, (done) => {
          request(server)
          .get('/api/v1/' + url)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect((res) => {
            const data = res.body;
            log.debug({
              type: 'success',
              msg: 'Test: ' + url,
              location: '__app.js',
              data: { data },
            });
            // send completed message
            log.msg('Unit Test Complete for ' + url, '__app.js');
          })
        .expect(200, done);
        });
      });
    });
  }

  deleteURL(id) {
    describe('App Routes', () => {
      const server = require('../src/server.js');
      it('DELETE api/v1/urls/id deletes new url', (done) => {
        request(server)
        .delete('/api/v1/urls/' + id)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type: 'success',
            msg: 'Test: Delete URL',
            location: '__app.js',
            data: { data },
          });
          this.id = res.body.id;
          log.msg('Unit Test Complete for deleting URL', '__app.js');
        })
        .expect(200, done);
      });
    });
  }

  redirect(app) {
    // assign app
    this.app = app;
    // create array of routes to test
    this.routes = ['/go/' + this.app.id, '/' + this.app.shortUrl, '/go/' + this.app.shurl];
    // enter forEach to test reqirect routes
    this.routes.forEach((url) => {
      describe('App Routes', () => {
        const server = require('../src/server.js');
        it('GET ' + url, (done) => {
          request(server)
          .get(url)
          .expect((res) => {
            const data = res.body;
            log.debug({
              type: 'success',
              msg: 'Test: ' + url,
              location: '__app.js',
              data: { data },
            });
            log.msg('Unit Test Complete for ' + url, '__app.js');
          })
        .expect(302, done);
        });
      });
    });
  }

  launchTest() {
    this.getAllUrls();
  }
}

// instantiate testApp
const run = new testApp();
// run the tests
run.launchTest();
