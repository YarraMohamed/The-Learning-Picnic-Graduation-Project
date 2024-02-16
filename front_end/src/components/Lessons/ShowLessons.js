import React from 'react'
import { useState } from 'react'
import ShowLessonsStudent from './Student/ShowLessonsStudent'
import ShowLessonsTeacher from './Teacher/ShowLessonsTeacher'


const ShowLessons = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    if (loggedIn) {
        return (
            <ShowLessonsTeacher/>
        )
    } else {
        return (
            <ShowLessonsStudent/>
        )
    }
}

export default ShowLessons