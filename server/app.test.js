const request = require('supertest');
const app = require('./app');

describe('app test', () => {

  it('/auth', (done) => {
    request(app)
        .get('/auth')
        .expect(200)
        .end(done);
  })
});