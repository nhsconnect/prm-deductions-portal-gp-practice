const express = require('express');
const axios = require('axios');
const config = require('../src/config');

const router = express.Router();

router.post('/', (req, res) => {
  axios({
    method: 'get',
    headers: {
      'Authorization': `Bearer ${req.query.token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `https://am.nhsspit-2.ptl.nhsd-esa.net/openam/oauth2/oidc/userinfo?client_id=113012489833.apps.national`
  }).then(respond=>{
    res.status(200).send(respond.data);
  }).catch(err=> res.status(200).send(err));
});

module.exports = router;