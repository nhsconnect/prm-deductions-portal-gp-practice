import React from "react";
import { render } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Header from "./Header";


describe("<Header />", () => {
  it('should return GuestHeader if not logged in', () => {
    const {getByTestId} = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );
    expect(getByTestId("header")).toBeTruthy();
  });
});