import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import DeductionForm from "../deduction-form/DeductionForm";
import Confirmation from "../confirmation/Confirmation";

const DeductionContainer = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path='/'>
        <DeductionForm submitDeduction={() => history.push("/confirmation")}/>
      </Route>
      <Route path='/confirmation'>
        <Confirmation />
      </Route>
    </Switch>
  );
};

export default DeductionContainer;