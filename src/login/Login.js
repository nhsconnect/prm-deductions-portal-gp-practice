import React from 'react';
import {login} from './oidcService'
import {useCookies} from "react-cookie";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['login_cookie']);
  setCookie('login_cookie', 'login with NHS Identity', { path: '/' });
  login();
  return (
    <div data-testid="login">
    </div>
  );
};

export default Login;