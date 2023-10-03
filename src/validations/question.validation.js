const Joi = require('joi');
const { password } = require('./custom.validation');

const alternatives = Joi.object().keys({
    text: Joi.string().required(),
    isCorrect: Joi.boolean().required()
  })
  
const createQuestion = {
  body: Joi.object().keys({
    description: Joi.string().required(),
    alternatives: Joi.array().items(alternatives).required()
  }),
};



module.exports = {
    createQuestion,
};
