import Quiz from "../models/quiz.model.js";

export const getQuiz = async (_req, res) => {
  try {
    const questions = await Quiz.find();
    res.status(200).json({
        success: true,
        message: "All quiz questions fetched successfully",
        questions,
      });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
