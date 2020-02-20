import React, {Fragment} from 'react';
import Header from "../header/Header";
import styles from "./App.module.scss";
import DeductionContainer from "./DeductionContainer";
import { CookiesProvider } from 'react-cookie';
import Login from "../login/Login";
import {useCookies} from "react-cookie";
import config from "../config";


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['login_cookie']);
  console.log('isLocal:', config.isLocal);
  if(config.isLocal){
    return (
      <div className={styles.content}>
        <DeductionContainer/>
      </div>
    );
  }else{

    if (!cookies.hasOwnProperty('login_cookie')){
      return (<Login/>);
    }


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
  }


};


export default App;
