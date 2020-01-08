const request = require('supertest');
const app = require('./app');
const axios = require('axios');

const token= {token:'some-token'};

jest.mock('axios');

describe('POST/authRouter', () => {
  const user ={
    nhsid_useruid: "0123344535",
    name: "Lee Wendy",
    given_name: "Wendy",
    family_name: "Lee",
    primary_org: "X11",
    idassurancelevel: "3",
    odscodes: [
      "X09"
    ],
    sub: "0123344535"
  };
  const data={
    data:user
  };

  it('should return user information with 200', (done) => {
    axios.mockImplementation(() => Promise.resolve(data));
    request(app)
        .post('/authRouter')
      .send(token)
      .expect(res=>{
        expect(res.body).toStrictEqual(user)
      })
        .expect(200)
        .end(done);
  });

  it('should return 500 if unexpected error happened', done => {
    axios.mockImplementation(() => Error('some-error'));
    request(app)
      .post('/authRouter')
      .send(token)
      .expect(500)
      .end(done);
  });

  it('should return 400 if the request body is missing', (done) => {
    axios.mockImplementation(() => Promise.resolve(data));
    request(app)
      .post('/authRouter')
      .send({})
      .expect((res)=>console.log(res.body))
      .expect(400)
      .end(done);
  });
});