import React from "react";
import {render} from "@testing-library/react";
import Auth from "./Auth";
import {useCookies} from 'react-cookie';

jest.mock('react-cookie');

const testAuthCode = "?code=testAuthCode";
const testIssString = "&iss=https://am.nhsspit-2.ptl.nhsd-esa.net:443/openam/oauth2/oidc";
const testClientId = "&client_id=1234567890";
const testQuery = testAuthCode + testIssString + testClientId;

describe('<Auth />', ()=>{
  const mockCookies = {};
  const mockRemove = jest.fn();
  const mockSet = jest.fn(() => { return '' });

  useCookies.mockImplementation(() => {
    return [mockCookies, mockSet, mockRemove]
  });

  afterEach(()=>{jest.clearAllMocks()});

  it("should delete the old cookie if it exists", () => {

    const props = {location: { search: testQuery }};
    const {} = render(
      <Auth {...props}/>
      );
    expect(mockRemove.mock.calls.length).toBe(1);
    expect(mockRemove.mock.calls[0][0]).toBe('nhs_deductions_auth_jwt')

  });

  it('should create a new cookie if auth', () => {
    const props = {location: { search: testQuery }};
    const {} = render(
      <Auth {...props}/>
    );
    expect(mockSet.mock.calls.length).toBe(1);
    expect(mockSet.mock.calls[0][0]).toBe('nhs_deductions_auth_jwt');
    expect(mockSet.mock.calls[0][1]).toEqual({key: 'Test', value: 'Test2'});
  });

  it('should extract response code and client_id from query string', () => {

  });
  it('should request access token with respond code', () => {

  });
  it('should authenticate user when the button is rendered', () => {

  });
});