import React from 'react';

const Login = ({login, loginMock}) => {
  return (
    <div>
      <div className="mockLogin">
        <button className="nhsuk-button" onClick={() => loginMock()}>
          Log In
        </button>
      </div>
      <div data-testid="login">
        <button className="nhsuk-button" onClick={() => login()}>
          Log In to NHS Identity
        </button>
      </div>
    </div>
  );
};

export default Login;