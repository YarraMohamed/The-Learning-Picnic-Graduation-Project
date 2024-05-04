import React, { useState, useEffect } from "react";
import '../../style/Reports.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { getAuthUser } from '../../../helper/Storage';

const TeacherQuizReport = () => {
  let {id} = useParams();
  const Auth = getAuthUser();

  const [report, setReport] = useState({
    loading: true,
    results: [],
    err: null
  });

  const getReport = () => {
    setReport({ ...report, loading: true })
    axios.get(`${process.env.REACT_APP_API_URL}/report/` + id, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
      .then(resp => {
        setReport({ ...report, results: resp.data.data.report, loading: false });
      })
      .catch(err => {
        setReport({ ...report, err: err.data.data.msg, loading: false })
      })
  }

  useEffect(() => {
    getReport();
  }, [])
  
  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">{report.results.lessonName}</h3>
      </div>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold text-xl text-white">Questions</th>
        <th className="font-bold text-xl text-white">Score</th>
        <th className="font-bold text-xl text-white">Time Answered</th> 
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className="text-base text-black">Question 1</td>
        <td>90%</td>
        <td>2 times</td>
      
      </tr>
      {/* row 2 */}
      <tr>
       
        <td className="text-base text-black">Question 2</td>
              <td>80%</td>
              <td>10 times</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        
        <td className="text-base text-black">Question 3</td>
        <td>50%</td>
       <td>5 times</td>
      </tr>
      <tr>
        <td className="text-base text-black">Question 4</td>
        <td>60%</td>
        <td>9 times</td>
      </tr>         
   
    </tbody>
  </table>
</div>
    </div>

  )
}

export default TeacherQuizReport