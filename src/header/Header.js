import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import GetUserInfo from './userService';
import GuestHeader from "./GuestHeader/GuestHeader";
import UserHeader from "./UserHeader/UserHeader";

const Header = () => {
  const [userInfo, setUserInfo] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['access_cookie', 'user_cookie']);

  if (cookies.hasOwnProperty('access_cookie')) {
    if (!cookies.hasOwnProperty(('user_cookie'))) {
      GetUserInfo(cookies['access_cookie']).then(user => {
        setCookie('user_cookie', 'user');
        setUserInfo(user);
      });
    }
  }

  if (userInfo === '') {
    return (
      <div data-testid="header">
        <GuestHeader/>
      </div>
    )
  } else {
    return (
      <div data-testid="header">
        <UserHeader user={userInfo} data-testid="header"/>
      </div>
    )
  }
};

export default Header;