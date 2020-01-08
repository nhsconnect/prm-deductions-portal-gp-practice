const express = require('express');
const axios = require('axios');
require('dotenv').config();
const { body } =require ('express-validator');
const { validate } =require('./middleware/validation');

const router = express.Router();
const createTokenValidationRules = [body('token').notEmpty()];

router.post('/', createTokenValidationRules, validate, (req, res, next) => {
  axios({
    method: 'get',
    headers: {
      'Authorization': `Bearer ${req.body.token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${process.env.REACT_APP_GP_PORTAL_USER_INFO}`
  }).then(respond=>{
    res.status(200).send(respond.data);
  }).catch(err=> res.status(500).send(err));
});

module.exports = router;