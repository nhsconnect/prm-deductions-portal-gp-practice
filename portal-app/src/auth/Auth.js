import React from 'react';
import Oidc from 'oidc-client';
import {NHSIdentityUrl, NHSIdentityClientId} from '../config'

const Auth = ()=>{

  new Oidc.UserManager({
    response_mode:'query',
    authority: `${NHSIdentityUrl}`,
    client_id: `${NHSIdentityClientId}`,
    loadUserInfo:false,

  }).signinRedirectCallback().then(function(user) {
    console.log("signin response success", user);
  }).catch(function(err) {
    console.log(err);
  });

  return (
    <div data-testid="auth">
      test
    </div>
  )
};

export default Auth;