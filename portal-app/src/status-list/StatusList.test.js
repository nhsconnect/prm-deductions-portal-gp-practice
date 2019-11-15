import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import StatusList from "./StatusList";

describe("<StatusList />", () => {
  it("should render a title of 'status of deduction requests'", () => {
    const { getByText } = render(
      <MemoryRouter>
        <StatusList />
      </MemoryRouter>
    );

    expect(getByText("Status of Deduction Requests")).toBeTruthy();

  });
});
