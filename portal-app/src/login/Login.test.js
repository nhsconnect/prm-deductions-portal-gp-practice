import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("<Login />", () => {
  it("should go to NHS Identity login page when button is clicked", () => {
    const login = jest.fn();
    const {getByText} = render(<Login login={login} />);

    const loginButton = getByText('Log In');
    fireEvent.click(loginButton);

    expect(login).toHaveBeenCalled();
  });
});



