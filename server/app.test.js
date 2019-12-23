import request from 'supertest';
import app from'./app';

describe('app test', () => {
  it('/user', (done) => {
    request(app)
        .get('/user')
        .expect(200)
        .expect(res => {
          expect(res.body).toEqual({name: 'wendy', nhsnum: '38373723', age: '42342387'})
        })
        .end(done);
  });

  it('/auth', (done) => {
    request(app)
        .get('/auth')
        .expect(200)
        .end(done);
  })
});