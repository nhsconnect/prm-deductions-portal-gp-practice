import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Success from "./Success";


describe("<Success />", () => {
  it("should show deduction success message", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Success />
      </MemoryRouter>
    );

    expect(getByText("The patient has successfully been deducted")).toBeTruthy();
  });
});