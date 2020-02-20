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
const cookies = {};
const removeCookie = jest.fn();
const setCookie = jest.fn();
useCookies.mockImplementation(() => {
  return [cookies, setCookie, removeCookie]
});

const mockUserManagerInstance = {
  signinRedirectCallback: jest.fn().mockImplementation(()=> {
    return Promise.resolve('some-token')
  })
};
oidc.UserManager.mockImplementation(() => mockUserManagerInstance);

describe('<Auth />', ()=>{

  it('should create a new cookie if user logged in NHS identity successfully', () => {
    const auth = render(
      <Auth/>
    );

    return Promise.resolve(auth).then(()=>{
      expect(setCookie.mock.calls.length).toBe(1);
      expect(setCookie.mock.calls[0][0]).toBe('access_cookie');
      expect(setCookie.mock.calls[0][1]).toEqual('some-token');
    });
  });


});