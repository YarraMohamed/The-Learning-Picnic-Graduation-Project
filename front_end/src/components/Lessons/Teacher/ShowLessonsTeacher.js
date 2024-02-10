import React from "react";
import LessonCardTeacher from "./LessonCardTeacher";
import '../../../pages/style/ShowLessonCardStudent.css'

const ShowLessonsTeacher = () => {
  return (
    <div className="homeContainer">    
      <div className="content-container p-3"> 
      <div className="row-auto">
        <div class="gridContainer grid grid-cols-6 gap-4">
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        <LessonCardTeacher/>
        <LessonCardTeacher/>
        <LessonCardTeacher/> 
        </div>
        <a href="/addition">
          <button type="button" class="mt-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-large rounded-full text-base px-4 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Lesson</button>
        </a>  
      </div>
      </div>
    </div>
    
  )
}

export default ShowLessonsTeacher