import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// --- Shared Quiz Data ---
// In a real application, this data would likely be fetched from an API.
const quizzesData = [
  {
    id: 'phishing-101',
    title: 'Phishing Awareness 101',
    questions: [
      {
        questionText: 'What is "phishing"?',
        answerOptions: [
          { answerText: 'A type of fishing sport', isCorrect: false },
          { answerText: 'A method to catch fish using electronic lures', isCorrect: false },
          { answerText: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity', isCorrect: true },
          { answerText: 'A new social media trend', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of these is a common sign of a phishing email?',
        answerOptions: [
          { answerText: 'A generic greeting like "Dear Customer"', isCorrect: true },
          { answerText: 'An email from your boss', isCorrect: false },
          { answerText: 'A message containing a link to a well-known website', isCorrect: false },
          { answerText: 'An email with no attachments', isCorrect: false },
        ],
      },
      {
        questionText: 'You receive an unexpected email with an attachment named "invoice.zip". What should you do?',
        answerOptions: [
          { answerText: 'Open it immediately to see the invoice', isCorrect: false },
          { answerText: 'Delete the email without opening the attachment', isCorrect: true },
          { answerText: 'Forward it to your friends to see if it\'s safe', isCorrect: false },
          { answerText: 'Reply and ask who sent it', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 'password-security',
    title: 'Password Security Essentials',
    questions: [
      {
        questionText: 'Which of the following is the strongest password?',
        answerOptions: [
          { answerText: 'password123', isCorrect: false },
          { answerText: 'MyDogFido1999', isCorrect: false },
          { answerText: 'P@$$w0rd!', isCorrect: false },
          { answerText: 'qZ#9!bV$L2p@', isCorrect: true },
        ],
      },
      {
        questionText: 'What is two-factor authentication (2FA)?',
        answerOptions: [
          { answerText: 'Using two different passwords for one account', isCorrect: false },
          { answerText: 'A security process requiring two different methods of verification', isCorrect: true },
          { answerText: 'A type of antivirus software', isCorrect: false },
          { answerText: 'Logging into your account twice', isCorrect: false },
        ],
      },
    ],
  },
];

const Quiz = () => {
  const { quizId } = useParams();
  
  // Find the quiz data based on URL parameter, or default to the first quiz
  const quiz = quizzesData.find(q => q.id === quizId) || quizzesData[0];
  const questions = quiz.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Tracks the selected answer index
  const [isCorrect, setIsCorrect] = useState(null); // Tracks if the selected answer was correct

  const handleAnswerOptionClick = (answer, index) => {
    // Prevent further clicks after an answer is selected for the current question
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    if (answer.isCorrect) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    // Move to the next question or show score after a delay
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1200);
  };
  
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };
  
  // Helper to determine button color based on its state
  const getButtonClass = (index) => {
    if (selectedAnswer === null) {
      return 'bg-gray-50 border-gray-200 hover:bg-indigo-100 hover:border-indigo-300';
    }
    const isSelected = selectedAnswer === index;
    const isTheCorrectAnswer = questions[currentQuestion].answerOptions[index].isCorrect;

    if (isTheCorrectAnswer) {
      return 'bg-green-200 border-green-400';
    }
    if (isSelected && !isTheCorrectAnswer) {
      return 'bg-red-200 border-red-400';
    }
    return 'bg-gray-50 border-gray-200 opacity-60';
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans p-4">
      <div className="w-full max-w-2xl">
        {!showScore && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-700 text-center mb-2">{quiz.title}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
              <p className="text-xl text-gray-600 mb-6">You scored {score} out of {questions.length}</p>
              <button
                onClick={restartQuiz}
                className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <>
              <div>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-800">Question {currentQuestion + 1}</span>
                  <span className="text-lg text-gray-500">/{questions.length}</span>
                </div>
                <p className="text-xl text-gray-700 mb-8">{questions[currentQuestion].questionText}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answerOption, index)}
                    className={`w-full text-left p-4 border-2 rounded-lg font-medium transition-all duration-300 ${getButtonClass(index)}`}
                    disabled={selectedAnswer !== null}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

