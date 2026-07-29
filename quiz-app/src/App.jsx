import { useState } from 'react'
import './App.css'

const quizData = [
  {
    id: 1,
    question: "What does DOM stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Mode",
      "Digital Optical Medium",
      "Desktop Operating Manager"
    ],
    answer: 0 // Index of correct option
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a React functional component?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: 2
  },
  {
    id: 3,
    question: "What command is used to create a new Vite project?",
    options: ["npm start react", "npm create vite@latest", "npx install vite", "vite new app"],
    answer: 1
  },
  {
    id: 4,
    question: "Which keyword is used to declare a block-scoped variable in modern JS?",
    options: ["var", "let", "def", "dim"],
    answer: 1
  }
]

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return // Prevent changing answer
    setSelectedOption(index)

    if (index === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
  }

  const current = quizData[currentQuestion]
  const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="card result-card">
          <h2>Quiz Completed! 🎉</h2>
          <p className="score-text">
            You scored <strong>{score}</strong> out of <strong>{quizData.length}</strong>
          </p>
          <p className="percentage">
            ({Math.round((score / quizData.length) * 100)}% accuracy)
          </p>
          <button className="btn primary-btn" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      ) : (
        <div className="card">
          <header className="quiz-header">
            <span>Question {currentQuestion + 1} of {quizData.length}</span>
            <span>Score: {score}</span>
          </header>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <h2 className="question-text">{current.question}</h2>

          <div className="options-grid">
            {current.options.map((option, index) => {
              let btnClass = "option-btn"
              if (selectedOption !== null) {
                if (index === current.answer) {
                  btnClass += " correct"
                } else if (index === selectedOption) {
                  btnClass += " incorrect"
                }
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              )
            })}
          </div>

          <footer className="quiz-footer">
            <button
              className="btn primary-btn"
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
            >
              {currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </footer>
        </div>
      )}
    </div>
  )
}