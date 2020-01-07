const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/', (req, res) => {
  axios({
    method: 'get',
    headers: {
      'Authorization': `Bearer ${req.query.token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${process.env.REACT_APP_GP_PORTAL_USER_INFO}`
  }).then(respond=>{
    res.status(200).send(respond.data);
  }).catch(err=> res.status(200).send(err));
});

module.exports = router;