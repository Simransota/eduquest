import React, { useState } from 'react';

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
          { answerText: 'Apple', isCorrect: true },
          { answerText: 'Intel', isCorrect: false },
          { answerText: 'Amazon', isCorrect: false },
          { answerText: 'Microsoft', isCorrect: false },
        ],
      },
      {
        questionText: 'Complete the sentence: Today is ___________',
        answerOptions: [
          { answerText: 'Monday', isCorrect: false },
          { answerText: 'Tuesday', isCorrect: false },
          { answerText: 'Wednesday', isCorrect: false },
          { answerText: 'Thursday', isCorrect: false },
          { answerText: 'Friday', isCorrect: false },
          { answerText: 'Saturday', isCorrect: false },
          { answerText: 'Sunday', isCorrect: false },
        ],
        correctAnswer: 'Today is a day of the week.',
      },
      {
        questionText: 'Is the Earth round?',
        answerOptions: [
          { answerText: 'True', isCorrect: true },
          { answerText: 'False', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is a programming language?',
        answerOptions: [
          { answerText: 'Python', isCorrect: true },
          { answerText: 'Java', isCorrect: true },
          { answerText: 'C++', isCorrect: true },
          { answerText: 'HTML', isCorrect: false },
          { answerText: 'CSS', isCorrect: false },
        ],
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <div className="score-text">You scored {score} out of {questions.length}</div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span className="text-xl font-semibold">Question {currentQuestion + 1}</span>/<span>{questions.length}</span>
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600 m-2">{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}