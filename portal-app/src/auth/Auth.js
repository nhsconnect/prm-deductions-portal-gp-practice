import React from 'react';
import { useCookies } from 'react-cookie';


const Auth = (query)=>{
  const [cookies, setCookie, removeCookie] = useCookies(['nhs_deductions_auth_jwt']);
  removeCookie('nhs_deductions_auth_jwt');

  const code = query.location.search;
  console.log(code);
  return (
    <div data-testid="auth">
      <div>{code}</div>
    </div>
  )
};

export default Auth;