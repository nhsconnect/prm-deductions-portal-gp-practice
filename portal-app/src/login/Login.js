import React from 'react';
import {login} from './oidcService'

const Login = ({loginMock}) => {

  const authenticate = async () => {
    login();
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