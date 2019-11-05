import React from 'react';

const Login = ({login}) => {
  return (
    <div data-testid="login">
        <button id="login" className="nhsuk-button" onClick={() => login()}>
        Log In
        </button>
    </div>
  );
};

export default Login;