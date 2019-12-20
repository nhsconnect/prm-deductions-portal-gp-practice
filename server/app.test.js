import request from 'supertest';
import app from './app';

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