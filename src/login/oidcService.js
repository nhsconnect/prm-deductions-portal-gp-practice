import oidc from 'oidc-client';
import config from '../config'

const mgr = new oidc.UserManager({
  authority: `${config.NHSIdentityUrl}`,
  client_id: `${config.NHSIdentityClientId}`,
  redirect_uri: `${config.NHSIdentityRedirectUri}`,
  response_type: 'code',
  scope: 'openid nhsperson odscodes nationalrbacaccess',

});

function login() {
  mgr.signinRedirect();
}

function logout() {
  mgr.signoutRedirect();
}

export {login, logout}