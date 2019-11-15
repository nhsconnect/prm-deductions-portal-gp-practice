import React from 'react';
import styles from "../app/App.module.scss";

const Logout = ({logout}) => {
  return (
      <div className="nhsuk-header__transactional-service-name">
        <button id={styles.logout} className="nhsuk-button nhsuk-button--reverse" onClick={logout}>Log Out</button>
      </div>
  );
};

export default Logout;

