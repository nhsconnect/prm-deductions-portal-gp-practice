import React, {Fragment} from 'react';
import Header from "./Header";
import styles from "./App.module.scss";
import DeductionContainer from "./DeductionContainer";

const App = () => (
  <Fragment>
    <Header/>
    <div className={styles.content}>
      <DeductionContainer/>
    </div>
  </Fragment>
);

export default App;
