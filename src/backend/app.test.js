import request from 'supertest';
import app from './app';

describe('app test', () => {
  it('/user', () => {
    return request(app).get('/user')
      .expect(200)
      .expect(res => expect(res.body).toEqual({name: 'wendy', nhsnum: '38373723', age: '42342387'}));
  });

  it('/auth', () => {
    return request(app).get('/auth').expect(200)
  })
});