const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { questionService } = require('../services');

const createQuestion = catchAsync(async (req, res) => {
  const user = await questionService.createQuestion(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  createQuestion,
};
