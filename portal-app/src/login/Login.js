import React from 'react';

const Login = ({login, loginMock}) => {
  return (
    <div>
      <div className="mockLogin">
        <button id="login" className="nhsuk-button" onClick={() => loginMock()}>
          Log In
        </button>
      </div>
      <div data-testid="login">
        <button id="login" className="nhsuk-button" onClick={() => login()}>
          Log In to NHS Identity
        </button>
      </div>
    </div>
  );
};

export default Login;