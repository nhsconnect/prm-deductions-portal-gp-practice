import React from 'react';
import { useCookies } from 'react-cookie';


const Auth = (query)=>{
  console.log(query)
  const [cookies, setCookie, removeCookie] = useCookies(['nhs_deductions_auth_jwt']);
  removeCookie('nhs_deductions_auth_jwt');
  setCookie('nhs_deductions_auth_jwt', {key: 'Test', value: 'Test2'});
  const code = query.location.search;
  console.log(cookies);
  console.log(code);
  return (
    <div data-testid="auth">
      <div>{code}</div>
    </div>
  )
};

export default Auth;