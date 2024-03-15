import React ,{useState , useEffect} from "react";
import axios from "axios";
import { getAuthUser } from '../../../helper/Storage';
import '../../style/Reports.css'

const ParentReport = () => {
  
  const Auth = getAuthUser();

  const [report,setReport] = useState({
    loading : true,
    results : [],
    err : null
  });

  const getReport = () => {
    setReport(prevReport => ({ ...prevReport, loading: true }));
    axios.get(`${process.env.REACT_APP_API_URL}/report/parent`, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
      .then(resp => {
        setReport(prevReport => ({ ...prevReport, results: resp.data.data.reports, loading: false }));
      })
      .catch(err => {
        setReport(prevReport => ({ ...prevReport, err: err.data.data.msg, loading: false }));
      });
  }
  

  useEffect (()=>{
    getReport();
  }, [])  

  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Your Children's Grades</h3>
      </div>

<form class="max-w-md mx-auto mb-4">   
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

{ report.results && report.results.map((reportItem, index) => (
        <div key={index} className='mb-10'>
          <div className="informationStudent">
            <div className="mx-auto">
              <h5 className='inline-block text-xl font-semibold text-white my-2'>Full Name: </h5>
              <p className='fullName inline-block text-lg font-bold text-white my-2 ml-2'>{reportItem.userName}</p>
            </div>
            <div className="sutudentID mx-auto">
              <h5 className='inline-block text-xl font-semibold text-white mb-3'>ID: </h5>
              <p className='inline-block text-lg font-bold text-white mb-2 ml-2'>{reportItem.userId}</p>
            </div>
          </div>
          <div className="overflow-x-auto ">
            <table className="table table-zebra mb-2">
              <thead>
                <tr>
                  <th className="font-bold text-2xl text-white">Quizzes</th>
                  <th className="font-bold text-2xl text-white">Grade</th>
                </tr>
              </thead>
              <tbody>
                { reportItem && reportItem.quizGrades.map((quizGrade, index) => (
                  <tr key={index}>
                    <td className="text-lg">{quizGrade.LessonName}</td>
                    <td>{quizGrade.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr class="w-3/5 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
      ))}

    </div>
  )
}


export default ParentReport