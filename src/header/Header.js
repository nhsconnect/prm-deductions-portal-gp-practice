import React, {useState} from 'react';
import {useCookies} from "react-cookie";
import GetUserInfo from './userService';
import GuestHeader from "./GuestHeader/GuestHeader";
import UserHeader from "./UserHeader/UserHeader";

const Header = () => {
  const [userInfo, setUserInfo] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['access_cookie']);

  if (cookies.hasOwnProperty('access_cookie')){
    GetUserInfo(cookies['access_cookie']).then(user=>{
      console.log('userinfo:', user);
      setUserInfo(user);
    });
  }

  console.log(cookies);
if(userInfo === ''){
  return(
    <GuestHeader data-testid="header"/>
  );
}
else{
  return (
    <UserHeader user={userInfo} data-testid="header"/>
  )
}

};

export default Header;