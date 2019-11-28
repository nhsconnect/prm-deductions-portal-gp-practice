import Oidc from 'oidc-client';
import {NHSIdentityUrl, NHSIdentityRedirectUri, NHSIdentityClientId} from '../config'

var mgr = new Oidc.UserManager({
  authority: `${NHSIdentityUrl}`,
  client_id: `${NHSIdentityClientId}`,
  redirect_uri: `${NHSIdentityRedirectUri}`,
  response_type: 'code',
  scope: 'openid nhsperson odscodes nationalrbacaccess',

});

function login() {
  console.log(NHSIdentityUrl)
  mgr.signinRedirect();
}

function logout() {
  mgr.signoutRedirect();
}

export {login, logout}