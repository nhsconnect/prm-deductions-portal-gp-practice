import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import DeductionForm from "../deduction-form/DeductionForm";
import Confirmation from "../confirmation/Confirmation";
import Success from "../success/Success";
import Login from "../login/Login";
// import Auth from "../auth/Auth"
import NHSIdentitySandpitLogInUrl from "../config";

const DeductionContainer = () => {
  const history = useHistory();

  return <Switch>
      <Route exact path="/">
          <Login login={() => window.location.href = `${NHSIdentitySandpitLogInUrl}`} loginMock={() => history.push("/home")}/>
      </Route>
      <Route path="/auth">
          <DeductionForm submitDeduction={() => history.push("/confirmation")}
                         validateNhsNumber={nhsNumber => nhsNumber.length < 10? 'No Patient found with that NHS Number':''}/>
      </Route>
      <Route path='/home'>
          <DeductionForm submitDeduction={() => history.push("/confirmation")}
                         validateNhsNumber={nhsNumber => nhsNumber.length < 10? 'No Patient found with that NHS Number':''}/>
      </Route>
      <Route path='/confirmation'>
          <Confirmation confirmDeduction={() => history.push("/success")}/>
      </Route>
      <Route path="/success">
          <Success/>
      </Route>
  </Switch>;
};

export default DeductionContainer;
