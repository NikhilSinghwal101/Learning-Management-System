// import React, { useState } from "react";

// const questions = [
//   {
//     question: "What does HTML stand for?",
//     answers: [
//       { text: "Hyper Text Markup Language", correct: true },
//       { text: "High Tech Modern Language", correct: false },
//       { text: "Home Tool Markup Language", correct: false },
//       { text: "Hyperlink and Text Management Language", correct: false },
//     ],
//   },
//   {
//     question: "Which CSS property is used to change the text color of an element?",
//     answers: [
//       { text: "text-color", correct: false },
//       { text: "fgcolor", correct: false },
//       { text: "color", correct: true },
//       { text: "font-color", correct: false },
//     ],
//   },
//   {
//     question: "What is the correct syntax for referring to an external JavaScript file?",
//     answers: [
//       { text: "<script src=\"script.js\"></script>", correct: true },
//       { text: "<script href=\"script.js\"></script>", correct: false },
//       { text: "<script ref=\"script.js\"></script>", correct: false },
//       { text: "<script name=\"script.js\"></script>", correct: false },
//     ],
//   },
//   {
//     question: "Which of the following is used to style a webpage?",
//     answers: [
//       { text: "HTML", correct: false },
//       { text: "CSS", correct: true },
//       { text: "JavaScript", correct: false },
//       { text: "Python", correct: false },
//     ],
//   },
//   {
//     question: "What is the purpose of the 'useState' hook in React?",
//     answers: [
//       { text: "To handle HTTP requests", correct: false },
//       { text: "To manage component state", correct: true },
//       { text: "To create reusable components", correct: false },
//       { text: "To apply global styles", correct: false },
//     ],
//   },
//   {
//     question: "Which of the following is NOT a valid JavaScript data type?",
//     answers: [
//       { text: "String", correct: false },
//       { text: "Boolean", correct: false },
//       { text: "Float", correct: true },
//       { text: "Undefined", correct: false },
//     ],
//   },
//   {
//     question: "What is the default display property of a <div> element?",
//     answers: [
//       { text: "inline", correct: false },
//       { text: "block", correct: true },
//       { text: "flex", correct: false },
//       { text: "grid", correct: false },
//     ],
//   },
//   {
//     question: "Which HTTP method is used to update an existing resource?",
//     answers: [
//       { text: "GET", correct: false },
//       { text: "POST", correct: false },
//       { text: "PUT", correct: true },
//       { text: "DELETE", correct: false },
//     ],
//   }
// ];

// const QuizApp = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   const handleAnswerClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
    
//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowScore(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-900">
//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-2xl font-bold text-blue-900 mb-6">Web Development Quiz</h1>
//         {showScore ? (
//           <div>
//             <h2 className="text-lg font-semibold">You scored {score} out of {questions.length}!</h2>
//             <button onClick={restartQuiz} className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-md">Play Again</button>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">{questions[currentQuestionIndex].question}</h2>
//             <div className="flex flex-col gap-2">
//               {questions[currentQuestionIndex].answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswerClick(answer.correct)}
//                   className="bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 transition"
//                 >
//                   {answer.text}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuizApp;



//-----------------------------------------------------------------------------



// // Shuffled quiz questions every time

// import React, { useState, useEffect } from "react";

// const originalQuestions = [
//   {
//     question: "What does HTML stand for?",
//     answers: [
//       { text: "Hyper Text Markup Language", correct: true },
//       { text: "High Tech Modern Language", correct: false },
//       { text: "Home Tool Markup Language", correct: false },
//       { text: "Hyperlink and Text Management Language", correct: false },
//     ],
//   },
//   {
//     question: "Which CSS property is used to change the text color of an element?",
//     answers: [
//       { text: "text-color", correct: false },
//       { text: "fgcolor", correct: false },
//       { text: "color", correct: true },
//       { text: "font-color", correct: false },
//     ],
//   },
//   {
//     question: "What is the correct syntax for referring to an external JavaScript file?",
//     answers: [
//       { text: "<script src='script.js'></script>", correct: true },
//       { text: "<script href='script.js'></script>", correct: false },
//       { text: "<script ref='script.js'></script>", correct: false },
//       { text: "<script name='script.js'></script>", correct: false },
//     ],
//   },
//   {
//     question: "Which of the following is used to style a webpage?",
//     answers: [
//       { text: "HTML", correct: false },
//       { text: "CSS", correct: true },
//       { text: "JavaScript", correct: false },
//       { text: "Python", correct: false },
//     ],
//   },
//   {
//     question: "What does `var`, `let`, and `const` do in JavaScript?",
//     answers: [
//       { text: "They are used for looping", correct: false },
//       { text: "They declare variables", correct: true },
//       { text: "They define functions", correct: false },
//       { text: "They create classes", correct: false },
//     ],
//   },
//   {
//     question: "Which JavaScript method is used to select an element by ID?",
//     answers: [
//       { text: "querySelector()", correct: false },
//       { text: "getElementById()", correct: true },
//       { text: "getElementsByClassName()", correct: false },
//       { text: "getElementsByTagName()", correct: false },
//     ],
//   },
//   {
//     question: "What does the `position: absolute` CSS property do?",
//     answers: [
//       { text: "Positions an element relative to its closest positioned ancestor", correct: true },
//       { text: "Positions an element relative to the viewport", correct: false },
//       { text: "Positions an element at the bottom of the page", correct: false },
//       { text: "Positions an element relative to its parent", correct: false },
//     ],
//   },
//   {
//     question: "Which HTTP method is used to send data to a server?",
//     answers: [
//       { text: "GET", correct: false },
//       { text: "POST", correct: true },
//       { text: "DELETE", correct: false },
//       { text: "PUT", correct: false },
//     ],
//   },
// ];

// const shuffleArray = (array) => {
//   let shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// const QuizApp = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   useEffect(() => {
//     setQuestions(shuffleArray(originalQuestions)); // Shuffle questions on mount
//   }, []);

//   const handleAnswerClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const restartQuiz = () => {
//     setQuestions(shuffleArray(originalQuestions)); // Re-shuffle questions
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowScore(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-900">
//       <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-2xl font-bold text-blue-900 mb-6">Web Development Quiz</h1>
//         {showScore ? (
//           <div>
//             <h2 className="text-lg font-semibold">You scored {score} out of {questions.length}!</h2>
//             <button onClick={restartQuiz} className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-md">
//               Play Again
//             </button>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">
//               {questions.length > 0 && questions[currentQuestionIndex].question}
//             </h2>
//             <div className="flex flex-col gap-2">
//               {questions.length > 0 &&
//                 questions[currentQuestionIndex].answers.map((answer, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerClick(answer.correct)}
//                     className="bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 transition"
//                   >
//                     {answer.text}
//                   </button>
//                 ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QuizApp;



//------------------------------------------------------------------



import React, { useState, useEffect } from "react";
import axios from "axios";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/quiz");
        setQuestions(shuffleArray(res.data.questions));
        // console.log("quiz : ", res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load questions.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(shuffleArray(questions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg text-center mx-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Web Development Quiz</h1>
        {showScore ? (
          <div>
            <h2 className="text-lg font-semibold">You scored {score} out of {questions?.length}!</h2>
            <button onClick={restartQuiz} className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-md">
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-4">{questions?.[currentQuestionIndex]?.question}</h2>
            <div className="flex flex-col gap-2">
              {questions?.[currentQuestionIndex]?.answers?.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer?.correct)}
                  className="bg-gray-200 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 transition"
                >
                  {answer?.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;

