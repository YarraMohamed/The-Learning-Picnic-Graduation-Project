import React from 'react'
import StudentQuizCard from './StudentQuizCard'
import '../../../pages/style/ShowQuizTeacher.css'

const ShowStudentQuiz = () => {
  return (
   <div className='bodyTeacherQuiz'>
      <div className="content-container p-3">
        <div className='row-auto'>
            <div class="gridContainer grid grid-cols-6 gap-4">
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
                    <StudentQuizCard/>  
            </div>
        </div>
     </div>
    </div>
  )
}

export default ShowStudentQuiz