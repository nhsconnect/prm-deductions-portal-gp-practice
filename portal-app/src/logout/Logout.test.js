import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {useCookies} from 'react-cookie';
import Logout from "./Logout";
import Auth from "../auth/Auth";

jest.mock('react-cookie');

const testAuthCode = "?code=testAuthCode";
const testIssString = "&iss=https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc";
const testClientId = "&client_id=1234567890";
const testQuery = testAuthCode + testIssString + testClientId;

describe("<Logout />", () => {
  const mockCookies = {};
  const mockRemove = jest.fn();
  const mockSet = jest.fn(() => { return '' });

  useCookies.mockImplementation(() => {
    return [mockCookies, mockSet, mockRemove]
  });

  afterEach(()=>{jest.clearAllMocks()});

  it("should go to NHS Identity login page when button is clicked", () => {
    const logout = jest.fn();
    const {getByText} = render(<Logout logout={logout} />);

    const logoutButton = getByText('Log Out');
    fireEvent.click(logoutButton);

    expect(logout).toHaveBeenCalled();
  });

  it("should remove cookies when user logs out", () => {
    const props = {location: { search: testQuery }};
    const {} = render(
      <Auth {...props}/>
    );
    expect(mockRemove.mock.calls.length).toBe(1);
    expect(mockRemove.mock.calls[0][0]).toBe('nhs_deductions_auth_jwt')

  });
});
