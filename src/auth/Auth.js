import React from 'react';
import oidc from 'oidc-client';
import config from '../config';
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const Auth = ()=>{

  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['access_cookie']);

  new oidc.UserManager({
    response_mode:'query',
    authority: `${config.NHSIdentityUrl}`,
    client_id: `${config.NHSIdentityClientId}`,
    loadUserInfo:false,

  }).signinRedirectCallback()
    .then(token =>{
      setCookie('access_cookie', token, { path: '/' });
    })
    .then(()=>history.push("/home"))
    .catch(err=>console.log(err));


  return (
    <div data-testid="auth">
      <div>Logged In</div>
    </div>
  )
};

export default Auth;

