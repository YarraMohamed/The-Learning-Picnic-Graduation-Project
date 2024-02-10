import React from "react";
import '../../../pages/style/LessonsCard.css'
import studytime from '../../../assets/study-time.png'


const LessonCardTeacher = () => {
  return (

    <div className="card-lesson">
      <div className="lessonCard py-2">  
        <div class="mainCardLesson mx-1 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
          <img src={studytime} height={50} alt=""/>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lesson Title</h5>
          <button type="button" class=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-base px-4 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Update</button>
          <button type="button" class=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-base px-4 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        </div>
    </div>
    </div>



  )
}

export default LessonCardTeacher