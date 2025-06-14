const questionService = require('../services/question.service');

const getQuestions = async (req, res) => {
  try {
    const questions = await questionService.getAllQuestions();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

const createQuestion = async (req, res) => {
  try {
    await questionService.addQuestion(req.body);
    res.status(201).json({ message: 'Question added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add question' });
  }
};
const deleteQuestion = async (req, res) => {
  try {
    await questionService.deleteQuestion(req.params.id);
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete question' });
  }
};

module.exports = {
  getQuestions,
  createQuestion,
  deleteQuestion,
};
