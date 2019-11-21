import React from 'react';
import { useCookies } from 'react-cookie';
import AppAuthHelper from 'appauthhelper';
import NHSIdentitySandpitLogInUrl from "../config";


const Auth = (query)=>{
  // console.log(query)
  // const [cookies, setCookie, removeCookie] = useCookies(['nhs_deductions']);
  // removeCookie('nhs_deductions');
  // setCookie('nhs_deductions', {key: 'AccessToken', value: 'some-value'});
  // const code = query.location.search;
  // console.log(cookies);
  // console.log(code);
  // var code1 = code.split('&');
  // var code2 = code1[0].split('=');
  // console.log(code2[1])


  // (function () {
  //   AppAuthHelper.init({
  //     clientId: "appAuthClient",
  //     authorizationEndpoint: "https://default.iam.example.com/am/oauth2/authorize",
  //     tokenEndpoint: "https://default.iam.example.com/am/oauth2/access_token",
  //     revocationEndpoint: "https://default.iam.example.com/am/oauth2/token/revoke",
  //     endSessionEndpoint: "https://default.iam.example.com/am/oauth2/connect/endSession",
  //     // Use a redirectUri hosted on a different origin to get XSS protection for your access tokens
  //     // Be sure to adjust the TRUSTED_ORIGIN value within appAuthHelperRedirect.html to point back to this origin
  //     //redirectUri: "http://appauthclient.example.com:8888/appAuthHelperRedirect.html",
  //     resourceServers: {
  //       "https://default.iam.example.com/am/oauth2/userinfo": "profile",
  //       "https://default.iam.example.com/openidm": "openid"
  //     },
  //     /*
  //     interactionRequiredHandler: function () {
  //         // If you want to handle login at the IDP using some mechanism other than
  //         // the default (standard OAuth2 redirection to the authorizationEndpoint),
  //         // you can add that logic here.
  //         // Call AppAuthHelper.getTokens(); again when login is finished.
  //     },
  //     */
  //     tokensAvailableHandler: function (claims) {
  //       // This is a great place to startup the parts of your SPA that are for logged-in users.
  //       // The "claims" parameter is the content of the id_token, which tells you useful details
  //       // about the logged-in user.
  //       // Here is a sample "application" that just makes some requests to
  //       // resource servers and outputs the response on the page.
  //       Promise.all([
  //         // Appropriate access tokens will be automatically included in these requests
  //         fetch("https://default.iam.example.com/am/oauth2/userinfo").then((resp) => resp.json()),
  //         fetch("https://default.iam.example.com/openidm/info/login").then((resp) => resp.json())
  //       ]).then((responses) => {
  //         document.getElementById('userDetails').innerText = JSON.stringify({
  //           "userinfo": responses[0],
  //           "info/login": responses[1]
  //         }, null, 4);
  //       });
  //     }
  //   }).then(function () {
  //     // In this application, we want tokens immediately. If you want to support
  //     // any anonymous interaction, this should be delayed.
  //     AppAuthHelper.getTokens();
  //   });
  // }());


  AppAuthHelper.init({
    clientId: "113012489833.apps.national",
    authorizationEndpoint: NHSIdentitySandpitLogInUrl,
    tokenEndpoint: "https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/access_token",
    revocationEndpoint: "https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/token/revoke",
    endSessionEndpoint: "https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/connect/endSession",
    resourceServers: {
      "https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/userinfo":"userinfo"
    },
    //interactionRequiredHandler: function (authorization_request_url, error_reported) {
      // Add whatever is appropriate for your app to do when the user needs to log in.
      // Default behavior (when this handler is unspecified) is to redirect the window
      // to the authorizationEndpoint.

      // A good example of something you might want to do is render the authorizationEndpoint login prompt
      // within an iframe (for a more tightly-integrated login experience). You can do that like so:
      //console.log("Testing")
      //AppAuthHelper.iframeRedirect(document.getElementById('loginIframe'));

      // this assumes that 'loginIframe' is an iframe that has already been mounted to the DOM
    //},
    tokensAvailableHandler: function (claims) {
      // This is a great place to startup the parts of your SPA that are for logged-in users.
      // The "claims" parameter is the content of the id_token, which tells you useful details
      // about the logged-in user.

      // At this point your application code can start making network calls to the resource servers
      // you have configured, above.
      fetch("https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/userinfo").then((resp) => resp.json()).then((profile) => {
        //...
      })
    },
    renewCooldownPeriod: 1,
    oidc: true,
    redirectUri: "https://deductions.nhs.uk/auth", // can be a relative or absolute url
    serviceWorkerUri: "serviceWorker.js" // can be a relative or absolute url
  }).then(()=>{
    return AppAuthHelper.getTokens();
  }).then(res=>{
    console.log(res);
  });

  //const res = AppAuthHelper.getTokens();

  //console.log(AppAuthHelper)
  //console.log(res)

  //
  //
  // const http = axios({
  //   method: 'post',
  //   url: `https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc/access_token`,
  //   header: {
  //      Authorization:`Basic ${code2[1]}`,
  //     'Access-Control-Allow-Origin': '*',},
  //   data: {
  //     grant_type: 'authorization_code',
  //     code:`${code2[1]}`,
  //     redirect_uri: 'https://deductions.nhs.uk/auth'
  //   },
  //   auth: {
  //     username: '113012489833.apps.national',
  //     password: '3a9544eb-92b7-4f3f-af26-c8179d5a3475 '
  //   },
  // }).then(function (res) {
  //   console.log(res)
  // });

  //console.log(http)

  return (
    <div data-testid="auth">
      {/*<div>{code}</div>*/}
      {/*<div>{AppAuthHelper}</div>*/}
    </div>
  )
};

export default Auth;