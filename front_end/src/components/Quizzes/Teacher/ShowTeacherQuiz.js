import React from 'react'
import TeacherQuizCard from './TeacherQuizCard'
import '../../../pages/style/ShowQuizTeacher.css'

const ShowTeacherQuiz = () => {
  return (
    <div className='bodyTeacherQuiz'>
      <div className="content-container p-3">
        <div className='row-auto'>
        <div class="gridContainer grid grid-cols-6 gap-4">
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        <TeacherQuizCard/>
        </div>
      </div>
       </div>
    </div>
  )
}

export default ShowTeacherQuiz