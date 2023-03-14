import "./App.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const App = () => {
  const [flashcards, setFlashcards] = useState([
    {
      question: "人",
      answer: "person",
    },
    {
      question: "你好吗？",
      answer: "How are you?",
    },
    {
      question: "工作",
      answer: "work",
    },
    {
      question: "妈妈",
      answer: "mother",
    },
    {
      question: "爸爸",
      answer: "Father",
    },
    {
      question: "谢谢",
      answer: "Thank you",
    },
    {
      question: "晚安",
      answer: "Good Night",
    },
    {
      question: "美国人",
      answer: "American",
    },
    {
      question: "你是哪国人？ ",
      answer: "where are  you from?",
    },
    {
      question: "很高兴认识你",
      answer: "Nice to see you",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessResult, setGuessResult] = useState(null);

  const handleNextCard = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswer(false);
    setGuessResult(null);
  };

  const handlePrevCard = () => {
    setCurrentIndex(currentIndex - 1);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleGuess = () => {
    if (guess.toLowerCase() !== flashcards[currentIndex].answer.toLowerCase()) {
      setGuessResult("Incorrect");
    } else {
      setGuessResult("Correct");
    }
    setGuess("");
    setShowAnswer(false);
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setGuess("");
  };

  return (
    <div>
      <h1>Chinese Character Practice!!</h1>
      <h2>Number of Questions: {flashcards.length}</h2>

      <ReactCardFlip isFlipped={showAnswer} flipDirection="horizontal">
        <div className="card">
          <div className="question-container">
            <h3 className="question">
              {flashcards[currentIndex].question}
            </h3>

            
          </div>

          <div className="button-container">
            <button className="show-answer-button" onClick={handleShowAnswer}>
              Show Answer
            </button>
          </div>

          <div className="guess-container">
              <input
                type="text"
                className="user_input"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
              <button
                className="submit-button"
                onClick={handleGuess}
              >
                Submit
              </button>
              {guessResult && (
              <p className="guess-result">{guessResult}</p>
              )}
            </div>
        </div>

        

        <div className="card">
          <div className="answer-container">
            <h3 className="answer">{flashcards[currentIndex].answer}</h3>
          </div>

         <div className="button-container">
            <button
              className="next-button"
              onClick={handleNextCard}
              disabled={currentIndex === flashcards.length - 1}
            >
              Next
            </button>
            {currentIndex > 0 && (
              <button className="prev-button" onClick={handlePrevCard}>
                Previous
              </button>
            )}
          </div>
          <div className="button-container">
            <button className="shuffle-button" onClick={shuffleCards}>
              Shuffle Cards
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default App;

