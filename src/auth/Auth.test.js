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

describe('<Auth />', ()=>{
  const cookies = {};
  const removeCookie = jest.fn();
  const setCookie = jest.fn();

  useCookies.mockImplementation(() => {
    return [cookies, setCookie, removeCookie]
  });

  it('should create a new cookie if auth', () => {
    const {} = render(
      <Auth/>
    );
  });
});