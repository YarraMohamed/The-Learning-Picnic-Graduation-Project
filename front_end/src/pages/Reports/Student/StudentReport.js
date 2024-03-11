import React ,{useState , useEffect} from "react";
import axios from "axios";
import '../../style/Reports.css'
import { getAuthUser } from '../../../helper/Storage';
import { compareSync } from "bcryptjs";

const StudentReport = () => {

  const Auth = getAuthUser();

  const [report,setReport] = useState({
    loading : true,
    results : [],
    err : null
  });

  const getReport = () => {
  
  }

  useEffect (()=>{
    setReport({...report , loading : true})
    axios.get(`${process.env.REACT_APP_API_URL}/report/student`, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
    .then( resp =>{
      setReport({...report , results : resp.data.data.report , loading:false});
    })
    .catch(err =>{
      setReport({...report , err: err.data.data.msg , loading:false})
    })

  }, [])

  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Your Grades</h3>
      </div>

      <div className="informationStudent">
        <div className="mx-auto">
          <h5 className='inline-block text-xl font-semibold text-white my-2'>Full Name: </h5>
          <p className='fullName inline-block text-lg font-bold text-white my-2 ml-2'>{report.results.userName}</p>
        </div>
        <div className="sutudentID mx-auto">
          <h5 className='inline-block text-xl font-semibold text-white mb-3'>ID: </h5>
          <p className='inline-block text-lg font-bold text-white mb-2 ml-2'>{report.results.userId}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold text-2xl text-white">Quiz</th>
        <th className="font-bold text-2xl text-white">Grade</th>
      </tr>
    </thead>
    <tbody>
      {report.results.quizGrades && report.results.quizGrades.map((grade, index) => (
  <tr key={index}>
    <td className="text-lg">{grade.LessonName}</td>
    <td>{grade.score}</td>
  </tr>
))}

    </tbody>
  </table>
</div>
    </div>

  )
}

export default StudentReport