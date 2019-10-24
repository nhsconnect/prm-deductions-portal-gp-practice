import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import styles from "./App.module.scss";
import DeductionContainer from "./DeductionContainer";

const App = () => (
  <BrowserRouter>
    <Header/>
    <div className={styles.content}>
      <DeductionContainer/>
    </div>
  </BrowserRouter>
);

export default App;
