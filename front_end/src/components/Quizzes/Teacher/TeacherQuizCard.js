import React from 'react'
import quiztime from '../../../assets/quiz-time.png'
import '../../../pages/style/QuizCard.css'
import { Link } from 'react-router-dom'

const TeacherQuizCard = () => {
  return (
    <div className='card-quiz'>  
      <div class="quizCard py-2">
        <div class="mainCardQuiz mx-1 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <img src={quiztime} height={50} alt="" />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-cyan-800 dark:text-cyan-800">Quiz1</h3>
          <p class="mb-2 text-xl font-medium text-cyan-600">Lesson 1</p>
          
         <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
       
          <Link to={"/1"}>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show Quiz</button>
          </Link>
        
          <Link to={"/modelAnswer"}>
                      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-4 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Model Answer</button>
                  </Link>
    </div>
      </div>
  </div>
  )
}

export default TeacherQuizCard