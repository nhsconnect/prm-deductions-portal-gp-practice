import React from 'react';
import { useCookies } from 'react-cookie';
import AppAuthHelper from 'appauthhelper';
import NHSIdentitySandpitLogInUrl from "../config";
import axios from 'axios'



const Auth = (query)=>{





  //
  //
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
  //     username: '113012489833.apps.national'
  //   },
  // }).then(function (res) {
  //   console.log(res)
  // });
  //
  // console.log(http)

  return (
    <div data-testid="auth">
      {/*<div>{code}</div>*/}
      {/*<div>{AppAuthHelper}</div>*/}
    </div>
  )
};

export default Auth;