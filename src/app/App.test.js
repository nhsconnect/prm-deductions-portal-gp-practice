import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import {useCookies} from "react-cookie";

jest.mock('react-cookie');

let cookies;
const removeCookie = jest.fn();
const setCookie = jest.fn();
useCookies.mockImplementation(() => {
  return [cookies, setCookie, removeCookie]
});

describe('<App />', () => {

  it('should render the login if login_cookie is not exist', () => {
    cookies = {};
    const {getByTestId} = render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    expect(getByTestId("login")).toBeTruthy();
  });

  it('should render protected content if login_cookie exit', () => {
    cookies = {login_cookie:'something'};
    const {getByTestId} = render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );
    expect(getByTestId("protected-content")).toBeTruthy();
  });

});
