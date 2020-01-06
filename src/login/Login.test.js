import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";
import {login} from './oidcService'

jest.mock('./oidcService');

describe("<Login />", () => {
  login.mockImplementation(() => (jest.fn()));
  it("should go to NHS Identity login page when button is clicked", () => {

    const {getByText} = render(<Login/>);

    const loginButton = getByText('Log In to NHS Identity');
    fireEvent.click(loginButton);

    expect(login).toHaveBeenCalled();
  });

  it("should go to deduction home page when mock login button is clicked", () => {
    const loginMock = jest.fn();
    const {getByText} = render(<Login loginMock={loginMock} />);

    const mockLoginButton = getByText('Log In');
    fireEvent.click(mockLoginButton);

    expect(loginMock).toHaveBeenCalled();
  });
});



