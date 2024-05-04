import React, { useEffect, useRef } from 'react'
import questions from '../Questions/QuestionList'
import '../style/ShowQuizPT.css'
import { Link } from 'react-router-dom';


const ShowQuizPT = () => {
    const nextButtonRef = useRef(null);
    const answerButtonsRef = useRef(null);
    const questionElementRef = useRef(null);
    const quizButtonRef = useRef(null);


    useEffect(() => {
      
        const questionElement = questionElementRef.current;
   //   const questionElement = document.getElementById("question");
      
      const answerButtons = answerButtonsRef.current;
   //  const answerButtons = document.getElementById("answer-buttons");
      
      const nextButton = nextButtonRef.current;
        // const nextButton = document.getElementById("next-quizbtn");
        
        const quizzesbtn = quizButtonRef.current;
    

    let currentQuestionIndex = 0;
        
    function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("quiz-btn-PT");
        answerButtons.appendChild(button);
        
    });
}

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {

        if ((currentQuestionIndex + 1) === questions.length) {
            nextButton.style.display = "none";
            quizzesbtn.style.display = "block";
            showQuestion();
        } else {
             showQuestion();
        }
           
    } else {
        nextButton.style.display = "none";
        quizzesbtn.style.display = "block";
     }
        }
        
    

nextButton.addEventListener("click", () => {
   if (currentQuestionIndex < questions.length) {
       handleNextButton();
       
   } else if ((currentQuestionIndex + 1 )  === questions.length) {
         quizzesbtn.style.display = "block";
       nextButton.style.display = "none";
       
   }
   else {
       startQuiz();
            }
 })

  startQuiz(); })

    

  return (
   <div className='quiz-Body-PT'>
      <>
        <div className="quiz-Container-PT">
        <h1>Quiz ##</h1>
        <div className="quiz-PT">
            <h2 id="question" ref={questionElementRef}>question goes here</h2>
            <div id="answer-buttons" ref={answerButtonsRef}>
                <button className="quiz-btn-PT" type="button">answer 1</button>
                <button className="quiz-btn-PT" type="button">answer 2</button>
                <button className="quiz-btn-PT" type="button">answer 3</button>
                <button className="quiz-btn-PT" type="button">answer 4</button>
            </div>
            <button className="next-btn-quiz" ref={nextButtonRef} type="button">Next</button>
            <Link to={"/quizzes"}>
              <button className="quizzes-btn-PT hidden" ref={quizButtonRef} type="button">See Other quizzes</button>
            </Link>
        </div>
    </div>
      </>
 
  </div>
  )
}

export default ShowQuizPT;