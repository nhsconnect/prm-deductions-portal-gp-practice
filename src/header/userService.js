import axios from 'axios';
const getUserInfo = (token) => {
  console.log('TOKEN = ', token);
  return axios({
    method: 'post',
    headers: {'content-type': 'application/json'},
    url: 'https://deductions.nhs.uk/authRouter',
    data:{
      token: token.access_token
    }
  }).then(userInfo => {
    console.log('INFO = ', userInfo);
      return userInfo.data;
  })
};

export default getUserInfo;