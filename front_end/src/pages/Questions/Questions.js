import React, {useEffect, useRef, useState} from 'react'
import questions from "./QuestionList";
import axios from 'axios';
import { getAuthUser } from '../../helper/Storage';
import { useParams } from 'react-router-dom';
import '../style/Questions.css';


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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmVudG9uZUBnbWFpbC5jb20iLCJpZCI6IjY2MjMzMTBjYjI1MGI3MDk0YzNjM2E3YiIsInJvbGUiOiJQQVJFTlQiLCJpYXQiOjE3MTY4MzQ0MjQsImV4cCI6MjMxNjgzNDQyNH0.-NT0xP8jWDUqWoGTwIgkgnw_xn4WVkBiatXI3HJqRqk`
        }
      })
      .then(resp => {
          setAnswer(prevAnswer => ({ ...prevAnswer, results: resp.data.data.modelAnswer[0].answers, loading: false }));  
      })
      .catch(err => {
        setAnswer(prevAnswer => ({ ...prevAnswer, err: err.response.data.error.message, loading: false }));
      });    
    }, [answer.reload]);



    const quizzesButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const answerButtonsRef = useRef(null);
    const questionElementRef = useRef(null);


    useEffect(() => {
      
        const questionElement = questionElementRef.current;
   //   const questionElement = document.getElementById("question");
      
      const answerButtons = answerButtonsRef.current;

  //  const answerButtons = document.getElementById("answer-buttons");
      
      const nextButton = nextButtonRef.current;
        // const nextButton = document.getElementById("next-btn");
        
        const quizzesButton = quizzesButtonRef.current;
         // const quizzesButton = document.getElementById("quizzes-btn");


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
    if (quiz.results.questions && (quiz.results.questions.length > 0)) {
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
    nextButton.innerHTML = "Next";
  showQuestion();
        }
        
      
      
function selectAnswer(e) {
    
    const selectedquizbtn = e.target;
    const isCorrect = selectedquizbtn.dataset.correct === answer.results[currentQuestionIndex];
    if (isCorrect) {
        selectedquizbtn.classList.add("correct");
        score++;
    } else {
        selectedquizbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === answer.results[currentQuestionIndex]) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${quiz.results.questions.length}!`;

    // nextButton.innerHTML = "Play Again";
    quizzesButton.style.display = "block";

    // (Incoming change)
   // nextButton.innerHTML = "Return";
   // nextButton.style.display = "block";

 }

        function handleNextButton() {
      currentQuestionIndex++;


      if (currentQuestionIndex < quiz.results.questions.length) {
        if ((currentQuestionIndex + 1) === quiz.results.questions.length) {
          nextButton.style.display = 'none';
          quizzesButton.style.display = 'block';
          showQuestion();
        } else {
          showQuestion();
        }
      } else {
                showScore();
            }
        }

nextButton.addEventListener('click', () => {
    if (quiz.results.questions === undefined) {
              <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
      } else if (currentQuestionIndex < quiz.results.questions.length) {
        handleNextButton();
      } else if ((currentQuestionIndex + 1) === quiz.results.questions.length) {
        quizzesButton.style.display = 'block';
        nextButton.style.display = 'none';
      } else {
        startQuiz();
      }
    });

      startQuiz();
    })

  
  
  return (
    

    <div className='quizBody'>
      <>
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
      </>
 
  </div>
   
  )
}

export default Questions;