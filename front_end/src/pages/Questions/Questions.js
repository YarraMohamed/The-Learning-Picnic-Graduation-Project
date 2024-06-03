
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { getAuthUser } from '../../helper/Storage';
import { useParams } from 'react-router-dom';
import '../style/Questions.css';
import { Alert } from "@material-tailwind/react";

const Questions = () => {
  const Auth = getAuthUser();
  let { id } = useParams();

  const [quiz, setQuiz] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0
  });

  const [answer, setAnswer] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0
  });

  const [userAnswer, setUserAnswer] = useState({
    err: null,
    message: null
  });

  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const quizzesButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const answerButtonsRef = useRef(null);
  const questionElementRef = useRef(null);

  useEffect(() => {
    setQuiz(prevQuiz => ({ ...prevQuiz, loading: true }));
    axios
      .get(`${process.env.REACT_APP_API_URL}/quizes/${id}`, {
        headers: {
          Authorization: `Bearer ${Auth.token}`
        }
      })
      .then(resp => {
        setQuiz(prevQuiz => ({ ...prevQuiz, results: resp.data.data.quiz, loading: false }));
      })
      .catch(err => {
        setQuiz(prevQuiz => ({ ...prevQuiz, err: err.response.data.error.message, loading: false }));
      });
  }, [quiz.reload]);

  useEffect(() => {
    setAnswer(prevAnswer => ({ ...prevAnswer, loading: true }));
    axios
      .get(`${process.env.REACT_APP_API_URL}/modelAnswer/${id}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYWNoZXJAZ21haWwuY29tIiwiaWQiOiI2NjU4OTFjZDhkZDc0NWRmY2YzYWZiZjciLCJyb2xlIjoiVEVBQ0hFUiIsImlhdCI6MTcxNzA4NTQyMSwiZXhwIjoyMzE3MDg1NDIxfQ.bE9ixBap0lEkhsQ_wslKLzvjuJPm_td0euAn0fPcbEg`
        }

      })
      .then(resp => {
        setAnswer(prevAnswer => ({ ...prevAnswer, results: resp.data.data.modelAnswer[0].answers, loading: false }));
      })
      .catch(err => {
        setAnswer(prevAnswer => ({ ...prevAnswer, err: err.response.data.error.message, loading: false }));
      });
  }, [answer.reload]);

  useEffect(() => {
    const questionElement = questionElementRef.current;
    const answerButtons = answerButtonsRef.current;
    const nextButton = nextButtonRef.current;
    const quizzesButton = quizzesButtonRef.current;

    let currentQuestionIndex = 0;
    let score = 0;

    function resetState() {
      nextButton.style.display = "none";
      quizzesButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function showQuestion() {
      resetState();
      if (quiz.results.questions && quiz.results.questions.length > 0) {
        let currentQuestion = quiz.results.questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + '. ' + currentQuestion.questionText;
        currentQuestion.choices.forEach(choice => {
          const button = document.createElement('button');
          button.innerHTML = choice.choiceText;
          button.classList.add('quizbtn');
          answerButtons.appendChild(button);
          if (choice.correct) {
            button.dataset.correct = choice.correct;
          }
          button.addEventListener("click", selectAnswer);
        });
      }
    }

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      setIsQuizFinished(false);
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function selectAnswer(e) {
      const selectedButton = e.target;
      userAnswers.push({
        questionIndex: currentQuestionIndex,
        answerText: selectedButton.textContent
      });

      const isCorrect = answer.results[currentQuestionIndex] && selectedButton.textContent === answer.results[currentQuestionIndex].answerText;
      if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
      } else {
        selectedButton.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();
      questionElement.innerHTML = `You Scored ${score} out of ${quiz.results.questions.length}!`;
      quizzesButton.style.display = "block";
      setIsQuizFinished(true);
    }

    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quiz.results.questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (quiz.results.questions && currentQuestionIndex < quiz.results.questions.length) {
          handleNextButton();
        }
      });
    }

    startQuiz();

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', handleNextButton);
      }
    };
  }, [quiz.results, answer.results]);

  useEffect(() => {
    if (isQuizFinished) {
      submitAnswers();
    }
  }, [isQuizFinished]);

  function submitAnswers() {
    axios.post(`${process.env.REACT_APP_API_URL}/Answers/${id}`, { answers: userAnswers }, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
      .then(resp => {
        setUserAnswer({ ...userAnswer, message: "Submitted Successfully" });
      })
      .catch(err => {
        setUserAnswer({ ...userAnswer, err: "Error" });
      });
  }

  return (
    <div className='quizBody'>
      <>
        {quiz.err ? (
          <>
          <div className="quizContainer">
          <Alert className='justify-center items-center mb-3' color="red">
              <span className="text-xl">{quiz.err}</span>
            </Alert>
            <h1>Quiz {quiz.results.lessonName}</h1>
            <div className="quiz">
              <h2 id="question" ref={questionElementRef}>{""}</h2>
              <div id="answer-buttons" ref={answerButtonsRef}>
                <button className="quizbtn" type="button">answer 1</button>
                <button className="quizbtn" type="button">answer 2</button>
                <button className="quizbtn" type="button">answer 3</button>
                <button className="quizbtn" type="button">answer 4</button>
              </div>
              <button id="next-btn" ref={nextButtonRef} type="button">Next</button>
              <a href="/quizzes">
                <button id="quizzes-btn" ref={quizzesButtonRef} type="button">See other quizzes</button>
              </a>
            </div>
          </div>

          </>
        ) : (
          <div className="quizContainer">
            <h1>Quiz {quiz.results.lessonName}</h1>
            <div className="quiz">
              <h2 id="question" ref={questionElementRef}>question goes here</h2>
              <div id="answer-buttons" ref={answerButtonsRef}>
                <button className="quizbtn" type="button">answer 1</button>
                <button className="quizbtn" type="button">answer 2</button>
                <button className="quizbtn" type="button">answer 3</button>
                <button className="quizbtn" type="button">answer 4</button>
              </div>
              <button id="next-btn" ref={nextButtonRef} type="button">Next</button>
              <a href="/quizzes">
                <button id="quizzes-btn" ref={quizzesButtonRef} type="button">See other quizzes</button>
              </a>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Questions;

