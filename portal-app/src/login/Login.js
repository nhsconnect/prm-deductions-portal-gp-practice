import React from 'react';
import axios from "axios";
import Mgr from './oidcService.js'

const Login = ({loginMock}) => {
  const authenticate = async () => {

    const user = new Mgr();
    const endUser = user.getUser().then(user => console.log(user))

    const token =  user.getAcessToken().then(
      accessToken => {
        console.log('token: ', accessToken)
        //axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
      }, err => {
        console.log('err');
        console.log(err)
      });

  };

  return (
    <div>
      <div className="mockLogin">
        <button className="nhsuk-button" onClick={() => loginMock()}>
          Log In
        </button>
      </div>
      <div data-testid="login">
        <button className="nhsuk-button" onClick={authenticate}>
          Log In to NHS Identity
        </button>
      </div>
    </div>
  );
};

export default Login;