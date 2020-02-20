import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import UserHeader from "./UserHeader";
import React from "react";

describe("<UserHeader />", () => {
  const user ={
    nhsid_useruid: "0123344535",
    name: "Lee Wendy",
    given_name: "Wendy",
    family_name: "Lee",
    primary_org: "X11",
    idassurancelevel: "3",
    odscodes: [
      "X09"
    ],
    sub: "0123344535"
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

    expect(getByText('New Request')).toBeTruthy();
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