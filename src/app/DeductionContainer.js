import React from "react";
import {Route, Switch, useHistory, Redirect} from "react-router-dom";
import DeductionForm from "../deduction-form/DeductionForm";
import Confirmation from "../confirmation/Confirmation";
import Success from "../success/Success";
import Login from "../login/Login";
import Auth from "../auth/Auth"
import StatusList from "../status-list/StatusList";
import isAuthenticated from "../auth/authenticationService";
import {useCookies} from "react-cookie";



const DeductionContainer = () => {
  const history = useHistory();

  const PrivateRoute = ({ children, ...rest }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_cookie']);
    const access_cookie = (cookies.hasOwnProperty('access_cookie')) ? cookies['access_cookie'] : '';

    return isAuthenticated(access_cookie)
      .then((auth_value) => {
        if (auth_value) {
          return (
            <Route
              {...rest}
              render={({location}) => {
                return children;
              }}
            />
          );
        }
        else{
          history.push("/home");
        }
      }
    );
  };

  return (<Switch>
      <Route exact path="/">
          <Login loginMock={() => history.push("/home")}/>
      </Route>
      <Route path="/auth" component={Auth}>
      </Route>
      <Route path='/home'>
          <DeductionForm submitDeduction={() => history.push("/confirmation")}
                         validateNhsNumber={validateNhsNumber}/>
      </Route>
      <Route path='/confirmation'>
          <Confirmation confirmDeduction={() => history.push("/success")}/>
      </Route>
      <Route path="/success">
          <Success/>
      </Route>
      <PrivateRoute path="/status">
          <StatusList/>
      </PrivateRoute>
      <Route path="/logout">
          <Login loginMock={() => history.push("/home")} />
      </Route>
  </Switch>);
};

const validateNhsNumber = (nhsNumber) => {
    const nhsNumRegex = /^\d{10}$/;
    if (!nhsNumRegex.test(nhsNumber)) {
        return "No Patient found with that NHS Number";
    } else if (nhsNumber.charAt(0) === "9") {
        return "Patient is not in your practice";
    } else {
        return "";
    }
};

export default DeductionContainer;
