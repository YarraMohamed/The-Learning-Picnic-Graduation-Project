import React from 'react'
import "../style/Summarization.css"


const Summarization = () => {
  return (
      <div className="summarizeContainer">
          <div className="lessonTitle">
              <b class="text-slate-50 my-4 text-4xl font-extrabold tracking-wide text-center">Lesson Title</b>
          </div>
          <div className="summarizeText">
              <textarea readOnly id="message" rows="22" class="resize-none block m-auto my-3 p-3 w-11/12 text-xl text-black-900 bg-white-40 rounded-2xl border border-gray-500 dark:bg-white-700 dark:border-gray-800 dark:text-black-900"></textarea>
          </div>
          <div className="downButton">
              <button type="button" class="focus:outline-none text-white bg-green-800 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-large rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download</button>
          </div>
    </div>
  )
}

export default Summarization