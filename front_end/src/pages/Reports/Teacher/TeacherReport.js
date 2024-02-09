import React from 'react'
import '../../style/Reports.css'

const TeacherReport = () => {
  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Reports</h3>
      </div>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold text-xl text-white">Student Name</th>
        <th className="font-bold text-xl text-white">Quiz1</th>
        <th className="font-bold text-xl text-white">Quiz2</th>
        <th className="font-bold text-xl text-white">Quiz3</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className="text-base">Cy Ganderton</td>
        <td>9</td>
        <td>10</td>
        <td>10</td>
      </tr>
      {/* row 2 */}
      <tr>
       
        <td className="text-base">Hart Hagerty</td>
        <td>8</td>
        <td>9</td>
        <td>9</td>
      </tr>
      {/* row 3 */}
      <tr>
        
        <td className="text-base">Brice Swyre</td>
        <td>5</td>
        <td>5</td>
        <td>7</td>
      </tr>
      <tr>
        <td className="text-base">Jon Snow</td>
        <td>11</td>
        <td>12</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>

  )
}

export default TeacherReport