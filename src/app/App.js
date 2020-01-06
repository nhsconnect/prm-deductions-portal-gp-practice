import React, {Fragment} from 'react';
import Header from "../header/Header";
import styles from "./App.module.scss";
import DeductionContainer from "./DeductionContainer";
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'
import store from './store'

const App = () => (

  <Fragment>
    <Header/>
    <div className={styles.content}>
      <DeductionContainer/>
    </div>
  </Fragment>
);

export default App;
