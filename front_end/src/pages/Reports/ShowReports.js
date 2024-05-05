import React from 'react'
import ParentReport from './Parent/ParentReport'
import StudentReport from './Student/StudentReport';
import TeacherReport from './Teacher/TeacherReport';
import { getAuthUser } from '../../helper/Storage'

const ShowReports = () => {

    const Auth = getAuthUser();

    if(Auth && Auth.role === 'STUDENT'){
        return ( <StudentReport/>)
    } else if (Auth && Auth.role ==='TEACHER'){
        return (<TeacherReport/>)
    }else {
        return(<ParentReport/>)
    }
    
}
export default ShowReports;
