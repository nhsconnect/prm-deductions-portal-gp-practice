import React from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";


const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['login_cookie, user_cookie, access_cookie']);
  const history = useHistory();

  const logoutButton = ()=>{
      removeCookie('login_cookie');
      removeCookie('user_cookie');
      removeCookie('access_cookie');
      history.push("/")
  };

  return (
    <li className="nhsuk-header__navigation-item">
      <a className="nhsuk-header__navigation-link" href="/" onClick={logoutButton}>
        Log Out
        <svg className="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/>
        </svg>
      </a>
    </li>
  );
};

export default Logout;

