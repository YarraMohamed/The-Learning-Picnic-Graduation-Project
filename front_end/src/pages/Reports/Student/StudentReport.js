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
  }

  useEffect (()=>{
    getReport();
  }, [])

  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Your Grades</h3>
      </div>

      <form class="max-w-md mx-auto mb-2">   
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium" placeholder="Search Quizzes..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
   </form>

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