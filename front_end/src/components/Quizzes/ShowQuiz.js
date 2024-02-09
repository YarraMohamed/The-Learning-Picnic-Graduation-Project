import React from 'react'
import { useState } from 'react'
import ShowStudentQuiz from './Student/ShowStudentQuiz'
import ShowTeacherQuiz from './Teacher/ShowTeacherQuiz'

const ShowQuiz = () => {
  
      const [loggedIn, setLoggedIn] = useState(false)
    if (loggedIn) {
        return (
            <ShowTeacherQuiz/>
        )
    } else {
        return (
            <ShowStudentQuiz/>
        )
    }
  
}

export default ShowQuiz