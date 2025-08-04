import mongoose from "mongoose";
import Quiz from '../models/quiz.model.js';

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlink and Text Management Language", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    answers: [
      { text: "text-color", correct: false },
      { text: "fgcolor", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for referring to an external JavaScript file?",
    answers: [
      { text: "<script src='script.js'></script>", correct: true },
      { text: "<script href='script.js'></script>", correct: false },
      { text: "<script ref='script.js'></script>", correct: false },
      { text: "<script name='script.js'></script>", correct: false },
    ],
  },
  {
    question: "Which of the following is used to style a webpage?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "What does `var`, `let`, and `const` do in JavaScript?",
    answers: [
      { text: "They are used for looping", correct: false },
      { text: "They declare variables", correct: true },
      { text: "They define functions", correct: false },
      { text: "They create classes", correct: false },
    ],
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    answers: [
      { text: "querySelector()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "getElementsByClassName()", correct: false },
      { text: "getElementsByTagName()", correct: false },
    ],
  },
  {
    question: "What does the `position: absolute` CSS property do?",
    answers: [
      { text: "Positions an element relative to its closest positioned ancestor", correct: true },
      { text: "Positions an element relative to the viewport", correct: false },
      { text: "Positions an element at the bottom of the page", correct: false },
      { text: "Positions an element relative to its parent", correct: false },
    ],
  },
  {
    question: "Which HTTP method is used to send data to a server?",
    answers: [
      { text: "GET", correct: false },
      { text: "POST", correct: true },
      { text: "DELETE", correct: false },
      { text: "PUT", correct: false },
    ],
  },
];


mongoose.set("strictQuery", false);

const connectToDB = async () => {
    try{
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);

        if(connection) {
            console.log(`Connected to MongoDB: ${connection.host}`);
        }
        // await Quiz.insertMany(questions);
        // console.log("Questions inserted successfully!");

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectToDB;
