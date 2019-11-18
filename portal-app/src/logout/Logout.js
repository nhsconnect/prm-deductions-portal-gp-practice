import React from 'react';
import styles from "../app/App.module.scss";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";


const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['nhs_deductions']);
  const history = useHistory();
  const logoutButton = ()=>{
      removeCookie('nhs_deductions');
      history.push("/")
  };

  return (
    <div data-testid="logout">
      <div className="nhsuk-header__transactional-service-name">
        <button id={styles.logout} className="nhsuk-button nhsuk-button--reverse" onClick={logoutButton}>Log Out</button>
      </div>
    </div>
  );
};

export default Logout;

