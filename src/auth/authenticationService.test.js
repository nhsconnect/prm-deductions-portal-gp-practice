import isAuthenticated from './authenticationService'
import getUserInfo from "../header/userService";

jest.mock('../header/userService', () => jest.fn().mockReturnValue(Promise.resolve('fake-user')));
let access_cookie;

describe('isAuthenticated',()=>{
  it('should return resolved promise if access_cookie is empty', () => {
    access_cookie='';
    return isAuthenticated(access_cookie).then(result=>{
    expect(result).toBe(false);
    });
  });
  it('should call GetUserInfo if access_cookie is not empty', () => {
    access_cookie='some-value';

    return isAuthenticated(access_cookie).then(()=>{
      expect(getUserInfo).toHaveBeenCalled();
    });
  });

});