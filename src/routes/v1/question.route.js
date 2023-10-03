const express = require('express');
const validate = require('../../middlewares/validate');
const questionValidation = require('../../validations/question.validation');
const questionController = require('../../controllers/question.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/create', validate(questionValidation.createQuestion), questionController.createQuestion);

module.exports = router;
