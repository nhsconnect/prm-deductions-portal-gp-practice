import React from "react";
import { render } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Header from "./Header";


describe("<Header />", () => {
  it("should render the log out navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );

    expect(getByText('Log Out')).toBeTruthy();
  });

  it("should render request navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );

    expect(getByText('Request')).toBeTruthy();
  });

  it("should render status list navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    );

    expect(getByText('Status List')).toBeTruthy();
  });
});