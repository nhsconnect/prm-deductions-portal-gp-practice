import React from "react";
import {useCookies} from 'react-cookie';
import {MemoryRouter} from "react-router-dom";
import Logout from "./Logout";
import {render, fireEvent} from "@testing-library/react";

jest.mock('react-cookie');

describe("<Logout />", () => {
  const mockCookies = {};
  const mockRemove = jest.fn();
  const mockSet = jest.fn(() => { return '' });

  useCookies.mockImplementation(() => {
    return [mockCookies, mockSet, mockRemove]
  });


  afterEach(()=>{jest.clearAllMocks()});

  it("should clear the cookie when logout button is pressed", () => {

    const { getByText } = render(
      <MemoryRouter>
        <Logout/>
      </MemoryRouter>
    );
    const logoutButton = getByText("Log Out");
    fireEvent.click(logoutButton);

    expect(mockRemove).toHaveBeenCalled();
  });
});
