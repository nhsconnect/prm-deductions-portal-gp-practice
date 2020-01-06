import GetUserInfo from "../header/userService";

const isAuthenticated = (access_cookie) => {
  if (access_cookie === ''){
    return Promise.resolve(false);
  }
  else {
    return GetUserInfo(access_cookie).then(user=>{
      console.log('userinfo:', user);
      return true;
    }).catch((err) => {
      console.log(err);
      return false;
    });
  };
};

export default isAuthenticated;