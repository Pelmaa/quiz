const Question = require('../modles/question.model');

const getAllQuestions = async () => {
  return await Question.find();
};

const addQuestion = async (data) => {
  const { question, options, correctAnswer } = data;
  const newQuestion = new Question({ question, options, correctAnswer });
  return await newQuestion.save();
};

const deleteQuestion = async (id) => {
  return await Question.findByIdAndDelete(id);
};

module.exports = {
  getAllQuestions,
  addQuestion,
  deleteQuestion
};
