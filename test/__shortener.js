const chai = require('chai').expect;
const req = require('supertest');
const db = require('../models/db');
const debug = require('../modules/debugger');

class test {
  setData(data) {
    this.app = {
      id: data.id,
      short_url: data.short_url,
      long_url: data.long_url,
      key: data.key,
    };
    this.testGet(this.app);
    this.redirect(this.app);
  }
}

  // read all test
  readAllUrls() {
    describe('App Routes', () => {
      const src = require('../src/server.js');
      it('GET api/v1/urls reads all urls', (done) => {
        request(server)
        .get('/api/v1/urls')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type : 'success',
            msg : 'Test: Read all urls',
            location: '__shortener.js on line 20',
            data: {data},
          });
          log.msg('Test complete for read all urls @ __shortener.js');
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  // read one test
  readOneUrl() {
    describe('App Routes', () => {
      const src = require('../src/server.js');
      it('GET api/v1/urls/:d reads one url', (done) => {
        request(server)
        .get('/api/v1/urls/' + id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type : 'success',
            msg : 'Test: Read url by id',
            location: '__shortener.js on line 46',
            data: {data},
          });
          log.msg('Test complete for reading one url @ __shortener.js');
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  // delete test
  deleteUrl() {
    describe('App Routes', () => {
      const src = require('../src/server.js');
      it('DELETE api/v1/:id deletes one url', (done) => {
        request(server)
        .delete('/api/v1/urls/' + id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type : 'success',
            msg : 'Test: Delete url by id',
            location: '__shortener.js on line 72',
            data: {data},
          });
          log.msg('Test complete for deleting url @ __shortener.js');
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  // update test
  updateUrl() {
    describe('App Routes', () => {
      const src = require('../src/server.js');
      it('POST api/v1/:id deletes one url', (done) => {
        request(server)
        .post('/api/v1/urls/' + id)
        .send({ url: 'https://google.com',
          key: 'xxx' })
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type : 'success',
            msg : 'Test: Update url by id',
            location: '__shortener.js on line 98',
            data: {data},
          });
          log.msg('Test complete for updating url @ __shortener.js');
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  // create test
  createUrl() {
    describe('App Routes', () => {
      const src = require('../src/server.js');
      it('POST api/v1/:id creates url', (done) => {
        request(server)
        .post('/api/v1/urls/' + id)
        .send({ url: 'https://google.com',
          key: 'xxx' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
          const data = res.body;
          log.debug({
            type : 'success',
            msg : 'Test: Update url by id',
            location: '__shortener.js on line 98',
            data: {data},
          });
          log.msg('Test complete for updating url @ __shortener.js');
          this.setData(data[0]);
          expect(data.length).to.be.above(0);
        })
        .expect(200, done);
      });
    });
  }

  // test go
  go() {
    this.readAllUrls();
    this.readOneUrl();
    this.deleteUrl();
    this.updateUrl();
    this.createUrl();
  }

  // run the tests
  const run = new test();
  run.go();
