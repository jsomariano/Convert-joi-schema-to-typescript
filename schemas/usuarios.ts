const Joi = require('joi')

module.exports = {    
    nome: Joi.string()
        .trim()
        .max(200),
    email: Joi.string()
        .trim()
        .email()
        .allow(null, ''),    
};