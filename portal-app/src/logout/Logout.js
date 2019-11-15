import React from 'react';

const Logout = ({logout}) => {
  return (
    <div>
      <div className="nhsuk-header__transactional-service-name">
        <button className="nhsuk-button nhsuk-button--reverse" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
};

export default Logout;