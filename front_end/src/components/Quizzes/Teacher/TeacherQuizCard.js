import React ,{useState} from "react";
import quiztime from '../../../assets/quiz-time.png'
import '../../../pages/style/QuizCard.css'
import { Link } from 'react-router-dom'
import { getAuthUser } from "../../../helper/Storage.js";
import axios from "axios";

const TeacherQuizCard = (props) => {

  const Auth = getAuthUser();

  const [quiz,setQuiz] = useState({
    loading : true,
    results : [],
    err : null
  })

  const deleteQuiz = (_id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/quizes/` + _id,{
      headers : {
        Authorization :`Bearer ${Auth.token}`
      }
    })
    .then((resp) =>{
      props.onDelete();
    })
    .catch((err)=>{
      setQuiz({...quiz, err: err.response.data.error.message })
    })
  }


  return (
    <div className='card-quiz'>  
      <div class="quizCard py-2">
        <div class="mainCardQuiz mx-0.5 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <img src={quiztime} height={50} alt="" />

          <h3 class="mb-1 text-2xl font-bold tracking-tight text-cyan-800 dark:text-cyan-800">{props.lessonName}</h3>
          <p class="mb-2 text-xl font-medium text-cyan-600">Quiz</p>


         <div className="row-auto items-center justify-center mx-auto mb-2">

         <Link to={`/reports/${props._id}`}>
         <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-3 py-2.5 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Report</button>
          </Link>
        <Link to={`/showQuizPT/${props._id}`}>
              <button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-2.5 content-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Quiz</button>
          </Link>
              
          </div>
         
          <div className='row-auto items-center justify-center mx-auto mb-2'>
            
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-3 py-2.5 mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>{deleteQuiz(props._id)}} >Delete</button>
         
          <Link to={`/modelAnswer/${props._id}`}>
                      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-2 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Model Answer</button>
                  </Link>

          </div> </div>
      </div>
  </div>
  )};

export default TeacherQuizCard;