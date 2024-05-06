import React from 'react'
import ShowLessonsStudent from './Student/ShowLessonsStudent'
import ShowLessonsTeacher from './Teacher/ShowLessonsTeacher'
import { getAuthUser } from '../../helper/Storage'


const ShowLessons = () => {


    const Auth = getAuthUser();
    if (Auth && Auth.role === "TEACHER") {
        
        return (
            <ShowLessonsTeacher/>
        )
    } else {
        return (
            <ShowLessonsStudent/>
        )
    }
}

export default ShowLessons;