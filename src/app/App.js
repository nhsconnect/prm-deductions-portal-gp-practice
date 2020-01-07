import React, {Fragment} from 'react';
import Header from "../header/Header";
import styles from "./App.module.scss";
import DeductionContainer from "./DeductionContainer";
import { CookiesProvider } from 'react-cookie';
import Login from "../login/Login";
import {useCookies} from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['login_cookie']);

  if (!cookies.hasOwnProperty('login_cookie')){
    return (<Login></Login>)
  };
  return(
    <div data-testid="protected-content">
    <CookiesProvider>
        <Fragment>
          <Header/>
          <div className={styles.content}>
            <DeductionContainer/>
          </div>
        </Fragment>
      </CookiesProvider>
    </div>
  );
};


export default App;
