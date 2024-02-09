import React from 'react'
import ParentReport from './Parent/ParentReport'
import StudentReport from './Student/StudentReport';
import TeacherReport from './Teacher/TeacherReport';

const ShowReports = () => {
    const type = "Parent";
    
    if (type === "Parent") {
        return (<ParentReport />)
    }
    else if (type === "Student") {
        return (<StudentReport />)
    }
    else { return <TeacherReport /> }
}
export default ShowReports
