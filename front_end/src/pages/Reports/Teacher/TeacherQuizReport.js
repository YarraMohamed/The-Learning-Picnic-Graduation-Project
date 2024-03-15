import React from 'react'
import '../../style/Reports.css'

const TeacherQuizReport = () => {
  return (
    <div className="reports">
      <div className="header d-flex justify-content-between mb-6">
       <h3 className="reportsTitle text-5xl font-semibold text-white my-2 mx-auto">Lesson Name</h3>
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

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th className="font-bold text-xl text-white">Questions No.</th>
        <th className="font-bold text-xl text-white">Score</th>
        <th className="font-bold text-xl text-white">Time Answered</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className="text-base text-white">Question 1</td>
        <td>90%</td>
        <td>2 min.</td>
      
      </tr>
      {/* row 2 */}
      <tr>
       
        <td className="text-base text-white">Question 2</td>
              <td>80%</td>
              <td>10 min.</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        
        <td className="text-base text-white">Question 3</td>
        <td>50%</td>
       <td>5 min.</td>
      </tr>
      <tr>
        <td className="text-base text-white">Question 4</td>
        <td>60%</td>
        <td>9 min.</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>

  )
}

export default TeacherQuizReport