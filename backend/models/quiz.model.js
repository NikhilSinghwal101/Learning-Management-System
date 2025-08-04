import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [{ text: String, correct: Boolean }],
});

const Quiz = mongoose.model("Quiz", questionSchema);

export default Quiz;
