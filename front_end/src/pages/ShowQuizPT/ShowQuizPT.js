// import React, { useEffect, useRef } from 'react'
// import questions from '../Questions/QuestionList'
// import '../style/ShowQuizPT.css'
// import { Link } from 'react-router-dom';


// const ShowQuizPT = () => {
//     const nextButtonRef = useRef(null);
//     const answerButtonsRef = useRef(null);
//     const questionElementRef = useRef(null);
//     const quizButtonRef = useRef(null);


//     useEffect(() => {
      
//         const questionElement = questionElementRef.current;
//    //   const questionElement = document.getElementById("question");
      
//       const answerButtons = answerButtonsRef.current;
//    //  const answerButtons = document.getElementById("answer-buttons");
      
//       const nextButton = nextButtonRef.current;
//         // const nextButton = document.getElementById("next-quizbtn");
        
//         const quizzesbtn = quizButtonRef.current;
    

//     let currentQuestionIndex = 0;
        
//     function resetState() {
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }
// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("quiz-btn-PT");
//         answerButtons.appendChild(button);
        
//     });
// }

// function startQuiz() {
//     currentQuestionIndex = 0;
//     showQuestion();
// }


// function handleNextButton() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {

//         if ((currentQuestionIndex + 1) === questions.length) {
//             nextButton.style.display = "none";
//             quizzesbtn.style.display = "block";
//             showQuestion();
//         } else {
//              showQuestion();
//         }
           
//     } else {
//         nextButton.style.display = "none";
//         quizzesbtn.style.display = "block";
//      }
//         }
        
    

// nextButton.addEventListener("click", () => {
//    if (currentQuestionIndex < questions.length) {
//        handleNextButton();
       
//    } else if ((currentQuestionIndex + 1 )  === questions.length) {
//          quizzesbtn.style.display = "block";
//        nextButton.style.display = "none";
       
//    }
//    else {
//        startQuiz();
//             }
//  })

//   startQuiz(); })

//   return (
//    <div className='quiz-Body-PT'>
//       <>
//         <div className="quiz-Container-PT">
//         <h1>Quiz ##</h1>
//         <div className="quiz-PT">
//             <h2 id="question" ref={questionElementRef}>question goes here</h2>
//             <div id="answer-buttons" ref={answerButtonsRef}>
//                 <button className="quiz-btn-PT" type="button">answer 1</button>
//                 <button className="quiz-btn-PT" type="button">answer 2</button>
//                 <button className="quiz-btn-PT" type="button">answer 3</button>
//                 <button className="quiz-btn-PT" type="button">answer 4</button>
//             </div>
//             <button className="next-btn-quiz" ref={nextButtonRef} type="button">Next</button>
//             <Link to={"/quizzes"}>
//               <button className="quizzes-btn-PT hidden" ref={quizButtonRef} type="button">See Other quizzes</button>
//             </Link>
//         </div>
//     </div>
//       </>
 
//   </div>
//   )
// }

// export default ShowQuizPT;



import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuthUser } from '../../helper/Storage';
import { useParams } from 'react-router-dom';
import '../style/ShowQuizPT.css'

const ShowQuizPT = () => {
  const Auth = getAuthUser();
  let { id } = useParams();
  const [quiz, setQuiz] = useState({
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

  const nextButtonRef = useRef(null);
  const answerButtonsRef = useRef(null);
  const questionElementRef = useRef(null);
  const quizButtonRef = useRef(null);

 console.log(quiz.results.questions);  
    
  useEffect(() => {
    const questionElement = questionElementRef.current;
    const answerButtons = answerButtonsRef.current;
    const nextButton = nextButtonRef.current;
    const quizzesbtn = quizButtonRef.current;

    let currentQuestionIndex = 0;

    function resetState() {
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
          button.classList.add('quiz-btn-PT');
          answerButtons.appendChild(button);
        });
      }
    }

    function startQuiz() {
      currentQuestionIndex = 0;
      showQuestion();
    }

    function handleNextButton() {
      currentQuestionIndex++;

      

      if (currentQuestionIndex < quiz.results.questions.length) {
        if ((currentQuestionIndex + 1) === quiz.results.questions.length) {
          nextButton.style.display = 'none';
          quizzesbtn.style.display = 'block';
          showQuestion();
        } else {
          showQuestion();
        }
      } else {
        nextButton.style.display = 'none';
        quizzesbtn.style.display = 'block';
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
        quizzesbtn.style.display = 'block';
        nextButton.style.display = 'none';
      } else {
        startQuiz();
      }
    });

    startQuiz();
  });

  return (
    <div className="quiz-Body-PT">
      <>
        <div className="quiz-Container-PT">
          <h1>Quiz ##</h1>
          <div className="quiz-PT">
            <h2 id="question" ref={questionElementRef}>
              question goes here
            </h2>
            <div id="answer-buttons" ref={answerButtonsRef}>
              {/* answer buttons will be dynamically populated here */}
            </div>
            <button className="next-btn-quiz" ref={nextButtonRef} type="button">
              Next
            </button>
            <Link to={'/quizzes'}>
              <button className="quizzes-btn-PT hidden" ref={quizButtonRef} type="button">
                See Other quizzes
              </button>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default ShowQuizPT;