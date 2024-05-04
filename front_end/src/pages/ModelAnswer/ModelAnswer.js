import React from 'react'
import '../style/ModelAnswer.css'

const ModelAnswer = () => {
  return (
    <div className="modelAnswer min-h-screen p-2">
      <div className='pageTitle text-white flex justify-content-between mb-6'>
          <h2 className="font-bold text-5xl my-4 mx-auto">Your questions' answers</h2>
      </div>
      <div>
        <ul className="unorderedListModel w-5/12 mx-auto my-16" id='listOfModelAnswer'>
        <li className='text-black list-none w-full mb-2.5 bg-[#fff] rounded-md p-2.5'>
          <label for="firstQuestion" className="p-2.5 flex items-center text-left justify-between text-2xl font-semibold cursor-pointer text-red-700">
          What is the name of the animal that you may not know a lot about?
              <span className="rotate-90 text-xl text-[#333] hover:text-red-700 text-right">+</span>
          </label>
          <input type='checkbox' name='question1' id='firstQuestion' className='hidden'/>
          <div className='content'>
            <p className="text-left text-lg font-semibold">
            penguin
              </p>
          </div>
          </li>

          
        <li className='text-black list-none w-full mb-2.5 bg-[#fff] rounded-md p-2.5'>
          <label for="secondQuestion" className="p-2.5 flex items-center justify-between text-2xl font-semibold cursor-pointer text-red-700">
          What does the way blood moves through a penguin’s feet keep them warm?
              <span className="rotate-90 text-xl text-[#333] hover:text-red-700 ">+</span>
          </label>
          <input type='checkbox' name='question1' id='secondQuestion' className='hidden'/>
          <div className='content'>
            <p className="text-left text-lg font-semibold">
            the way blood moves
              </p>
          </div>
          </li>


        <li className='text-black list-none w-full mb-2.5 bg-[#fff] rounded-md p-2.5'>
          <label for="thirdQuestion" className="p-2.5 flex items-center justify-between text-2xl font-semibold cursor-pointer text-red-700">
          What is the name of the adaptation that hides animals from predators?
             <span className="rotate-90 text-xl text-[#333] hover:text-red-700 ">+</span>
          </label>
          <input type='checkbox' name='question1' id='thirdQuestion' className='hidden'/>
          <div className='content'>
            <p className="text-left text-lg font-semibold">
            camouflage
              </p>
          </div>
          </li>
          </ul>
      </div>
    </div>
  )
}

export default ModelAnswer;