const httpStatus = require('http-status');
const { Question } = require('../models');
const ApiError = require('../utils/ApiError');

const createQuestion = async (question) => {
  return Question.create(question);
};

module.exports = {
  createQuestion,
};
