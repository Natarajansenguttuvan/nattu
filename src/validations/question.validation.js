const Joi = require('joi');
const { password } = require('./custom.validation');

const alternatives = Joi.object().keys({
    text: Joi.string().required(),
    isCorrect: Joi.boolean().required()
  })
  
const createQuestion = {
  body: Joi.object().keys({
    question: Joi.string().required(),
    options: Joi.array().items(alternatives).required()
  }),
};



module.exports = {
    createQuestion,
};
