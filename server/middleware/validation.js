const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: 'missing token in request body'
    });
  }else{
    return next();
  }
};

module.exports= {validate};