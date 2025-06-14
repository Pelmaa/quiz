
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: Number,
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
