const request = require('supertest');
const app = require('./app');

describe('app test', () => {
  it('/user', (done) => {
    request(app)
        .get('/user')
        .expect(200)
        .end(done);
  });

  it('/auth', (done) => {
    request(app)
        .get('/auth')
        .expect(200)
        .end(done);
  })
});