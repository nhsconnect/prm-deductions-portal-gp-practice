import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import UserHeader from "./UserHeader";
import React from "react";

describe("<UserHeader />", () => {
  const user ={
    nhsid_useruid: "988288620301",
    name: "Lee Wendy",
    given_name: "Wendy",
    family_name: "Lee",
    primary_org: "X09",
    idassurancelevel: "3",
    odscodes: [
      "X09"
    ],
    sub: "988288620301"
  };
  it("should render the log out navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <UserHeader user={user}/>
      </MemoryRouter>
    );

    expect(getByText('Log Out')).toBeTruthy();
  });

  it("should render request navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <UserHeader user={user}/>
      </MemoryRouter>
    );

    expect(getByText('Request')).toBeTruthy();
  });

  it("should render status list navigation link", () => {
    const {getByText} = render(
      <MemoryRouter>
        <UserHeader user={user}/>
      </MemoryRouter>
    );

    expect(getByText('Status List')).toBeTruthy();
  });
});