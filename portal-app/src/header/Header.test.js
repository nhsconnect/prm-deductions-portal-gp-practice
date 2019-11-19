import React from "react";
import { render } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Header from "./Header";


describe("<Header />", () => {
  it("should render the log out button", () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );

    expect(getByText('Log Out')).toBeTruthy();
  });
});