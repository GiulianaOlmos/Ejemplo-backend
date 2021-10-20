const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let question = new Schema({
  question: {
    type: String,
    required: [true, "playerName is required"],
  },
  score: {
    type: Number,
    required: [true, "score is required"],
  },
  rightAnswer: {
    type: String,
    required: [true, "rightAnswer is required"],
  },
  id: {
    type: String,
    required: [true, "id is required"],
    unique: true,
  },
  wrongAnswers: {
    type: Array,
    required: [true, "id is required"],
  },
});

module.exports = mongoose.model("Question", question);
