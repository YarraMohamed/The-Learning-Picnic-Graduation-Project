import React from 'react'

const ParentReport = () => {
  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Your Child's Grades</h3>
      </div>

      <div className="informationStudent">
        <div className="mx-auto">
          <h5 className='inline-block text-xl font-semibold text-white my-2'>Full Name: </h5>
          <p className='fullName inline-block text-lg font-bold text-white my-2 ml-2'>AAAAA BBBB CCCC</p>
        </div>
        <div className="sutudentID mx-auto">
          <h5 className='inline-block text-xl font-semibold text-white mb-3'>ID: </h5>
          <p className='inline-block text-lg font-bold text-white mb-2 ml-2'>12345678</p>
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
      {/* row 1 */}
      <tr>
        <td className="text-lg">Quiz1</td>
        <td>10</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td className="text-lg">Quiz2</td>
        <td>9</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td className="text-lg">Quiz3</td>
        <td>7</td>
      </tr>
      <tr>
        <td className="text-lg">Quiz4</td>
        <td>12</td>
      </tr>
      <tr>
        <td className="text-lg">Quiz5</td>
        <td>4</td>
      </tr>
      <tr>
        <td className="text-lg">Quiz6</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ParentReport