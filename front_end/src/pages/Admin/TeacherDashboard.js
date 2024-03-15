import React from 'react'
import '../style/TeacherDashboard.css'
import { Link } from 'react-router-dom'

const TeacherDashboard = () => {
  return (
    <div className="teacherDash min-h-screen bg-white p-6">
          <div className="header flex justify-between mb-2 mt-1">
              <h4 className="text-center text-4xl font-bold">Manage Teachers</h4>
             
              <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Add New Teacher</button>
          </div>

           <div class="flex flex-1 items-center justify-center p-6">
    <div class="w-full max-w-lg">
        <form class="mt-5 sm:flex sm:items-center">
                      <input id="search" name="search" class="inline w-full rounded-md border border-gray-600 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#0d3156] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0d3156] sm:text-sm" placeholder="Keyword" type="search" autofocus="" value="" />
                      <button type="submit" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#0d3156] px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Search</button>
        </form>
    </div>
</div>
         
<div class="py-8 w-full">
  <div class="shadow drop-shadow-lg overflow-x-auto rounded border-b border-gray-200">
    <table class="min-w-full">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="text-left py-3 px-4 uppercase font-semibold text-base">Full Name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-base">Phone</th>
          <th class="w-1/5 text-left py-3 px-4 uppercase font-semibold text-base">Email</th>
          <th class="w-1/5 text-left py-3 px-4 uppercase font-semibold text-base">Password</th>
          <th class="text-center py-3 px-4 uppercase font-semibold text-base">Action</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="text-left py-3 px-4 text-lg">Jon Snow</td>
        <td class="text-left py-3 px-4 text-lg">0123456789</td>
        <td class="w-1/5 text-left py-3 px-4 text-lg"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">johnsmith@mail.com</a></td>
        <td class="w-1/5 text-left py-3 px-4 text-lg">xxxxxxxxxxxxxxxxxxxxxxxxxx</td>
        <td className="text-center">
                <Link to={"/update"}>
                       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>               
                </Link>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>                  
        </td>               
      </tr>
      <tr class="bg-gray-100">
        <td class="text-left py-3 px-4 text-lg">Emma Stone</td>
       <td class="text-left py-3 px-4 text-lg">0123456789</td>
        <td class="w-1/5 text-left py-3 px-4 text-lg"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">emaasto@mail.com</a></td>
        <td class="w-1/5 text-left py-3 px-4 text-lg">xxxxxxxxxxxxxxxxxxxxxxxxxx</td>
        <td>
            <Link to={"/update"}>
                       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>               
                </Link>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>                  
        </td> 
      </tr>
      <tr>
        <td class="text-left py-3 px-4  text-lg">Toni Kross</td>
        <td class="text-left py-3 px-4  text-lg">0123456789</td>
        <td class="w-1/5 text-left py-3 px-4 text-lg"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">toniis@mail.com</a></td>
        <td class="w-1/5 text-left py-3 px-4 text-lg">xxxxxxxxxxxxxxxxxxxxxxxxxx</td>
        <td>
            <Link to={"/update"}>
                       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>               
                </Link>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>                  
        </td> 
      </tr>
      <tr class="bg-gray-100">
        <td class="text-left py-3 px-4 text-lg">William Saliba</td>
        <td class="text-left py-3 px-4 text-lg">0123456789</td>
        <td class="w-1/5 text-left py-3 px-4 text-lg"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">wiliamsaliba@mail.com</a></td>
        <td class="w-1/5 text-left py-3 px-4 text-lg">xxxxxxxxxxxxxxxxxxxxxxxxxx</td>
        <td>
            <Link to={"/update"}>
                       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>               
                </Link>
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>                  
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default TeacherDashboard