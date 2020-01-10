/* istanbul ignore file */
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import Logout from "../../logout/Logout";

const UserHeader = ({user}) => {
  const [clicked, setClicked] = useState(true);
  const history = useHistory();
  const menuToggle = () => {
    setClicked(!clicked);
  };

  return(
    <header className="nhsuk-header nhsuk-header--transactional" role="banner">
      <div className="nhsuk-width-container nhsuk-header__container">
        <div className="nhsuk-header__logo nhsuk-header__logo--only">
          <a className="nhsuk-header__link" href="/" aria-label="NHS homepage">
            <svg className="nhsuk-logo nhsuk-logo--white" xmlns="http://www.w3.org/2000/svg"
                          focusable="false" viewBox="0 0 40 16">
                    <path fill="#fff" d="M0 0h40v16H0z"/>
                   <path fill="#005eb8"
                           d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"/>*/}
                  <img alt="nhs-logo" src="https://assets.nhs.uk/images/nhs-logo.png"/>
               </svg>
          </a>
        </div>
        <div className="nav-pad">
          <div className="nhsuk-header__transactional-service-name">
            <a className="nhsuk-header__transactional-service-name--link" onClick={() => history.push("/home")}>New Request</a>
          </div>
          <div className="nhsuk-header__transactional-service-name">
            <a className="nhsuk-header__transactional-service-name--link" onClick={() => history.push("/status")}>Status List</a>
          </div>
        </div>
        <div className="nhsuk-header__content" id="content-header">
          <div className="nhsuk-header__menu nhsuk-header">
            <button className="nhsuk-header__menu-toggle" id="toggle-menu" onClick={menuToggle} aria-controls="header-navigation" aria-label="Open menu">Signed in as {user.given_name}</button>
            <nav className={clicked ? "nhsuk-header__navigation" : "nhsuk-header__navigation js-show"} id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
              <div className="nhsuk-width-container">
                <ul className="nhsuk-header__navigation-list">
                  <li className="nhsuk-header__navigation-item">
                    <p className="nhsuk-header__navigation-link" >
                      <span className="subheading">Full Name: </span>{user.name}
                    </p>
                  </li>
                  <li className="nhsuk-header__navigation-item">
                    <p className="nhsuk-header__navigation-link" >
                      <span className="subheading">User ID: </span> {user.nhsid_useruid}
                    </p>
                  </li>
                  <li className="nhsuk-header__navigation-item">
                    <p className="nhsuk-header__navigation-link" >
                      <span className="subheading">Primary Organisation: </span>{user.primary_org}
                    </p>
                  </li>
                  <Logout />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};


export default UserHeader;