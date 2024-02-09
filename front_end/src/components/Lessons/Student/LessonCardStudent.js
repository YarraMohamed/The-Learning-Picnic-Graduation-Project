import React from "react";
import '../../../pages/style/CardStudent.css'
import studytime from '../../../assets/study-time.png'


const LessonCardStudent = () => {

  return (

    <div className=" card-lesson">
      <div className="lessonCard py-2">  
        <div class="mainCardLesson mx-1 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-400 dark:border-gray-700">
          <img src={studytime} height={50} alt=""/>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lesson Title</h5>

          <button type="button" class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-3.5 py-2 me-1 mb-2 dark:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">Show Lesson</button>

          <a href="/summarization">
            <button type="button" class="summarizationbtn inline-flex items-center focus:outline-none text-center text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:outline-none font-medium rounded-lg text-base px-3 py-2 me-1 mb-2 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-800">
              Summarize
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
            </button>
          </a>
          
        </div>
    </div>
    </div>



  )
}

export default LessonCardStudent