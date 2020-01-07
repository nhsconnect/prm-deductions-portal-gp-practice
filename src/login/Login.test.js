import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";
import {login} from './oidcService'

jest.mock('./oidcService');

describe("<Login />", () => {
  login.mockImplementation(() => (jest.fn()));
  it("should log in with NHS identity", () => {

    const {} = render(<Login/>);
    expect(login).toHaveBeenCalled();
  });
});



