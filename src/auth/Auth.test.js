import React from "react";
import {render} from "@testing-library/react";
import Auth from "./Auth";
import {useCookies} from 'react-cookie';
import oidc from 'oidc-client';

jest.mock('react-cookie');
jest.mock('oidc-client');
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const mockUserManagerInstance = {
  signinRedirectCallback: jest.fn().mockImplementation(()=> (Promise.resolve('some-token')))
};
oidc.UserManager.mockImplementation(() => mockUserManagerInstance);

const testAuthCode = "?code=testAuthCode";
const testIssString = "&iss=https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc";
const testClientId = "&client_id=1234567890";
const testQuery = testAuthCode + testIssString + testClientId;

describe('<Auth />', ()=>{
  const mockCookies = {access_cookie: {}};
  const mockRemove = jest.fn();
  const mockSet = jest.fn(() => { return '' });

  useCookies.mockImplementation(() => {
    return [mockCookies, mockSet, mockRemove]
  });

  it("should delete the old cookie if it exists", () => {

    const props = {location: { search: testQuery }};
    const {} = render(
      <Auth {...props}/>
      );
    expect(mockRemove.mock.calls.length).toBe(1);
    expect(mockRemove.mock.calls[0][0]).toBe('access_cookie')

  });

  it('should create a new cookie if auth', () => {
    const props = {location: { search: testQuery }};
    const {} = render(
      <Auth {...props}/>
    );
    console.log(mockSet.mock.calls);
    expect(mockSet.mock.calls.length).toBe(1);
    expect(mockSet.mock.calls[0][0]).toBe('access_cookie');
    expect(mockSet.mock.calls[0][1]).toEqual('some-token');
  });
});