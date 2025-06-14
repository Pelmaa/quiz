const express = require('express');
const questionRoutes = express.Router();
const questionController = require('../controller/question.controller');

questionRoutes.get('/', questionController.getQuestions);
questionRoutes.post('/', questionController.createQuestion);
questionRoutes.delete('/:id', questionController.deleteQuestion);

module.exports = questionRoutes;
