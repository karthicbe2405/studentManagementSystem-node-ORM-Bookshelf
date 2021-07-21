let { Validator,} = require('express-json-validator-middleware');
let validator = new Validator({allErrors: true});
let validate = validator.validate;
module.exports = validate;


