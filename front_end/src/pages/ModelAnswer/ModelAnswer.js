import React, { useState, useEffect } from 'react';
import { getAuthUser } from '../../helper/Storage';
import { useParams } from 'react-router-dom';
import axios from "axios";
import '../style/ModelAnswer.css';
import { Alert } from "@material-tailwind/react";

const ModelAnswer = () => {
  const Auth = getAuthUser();
  let { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [modelAnswers, setModelAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await axios.get(`${process.env.REACT_APP_API_URL}/quizes/${id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluQGdtYWlsLmNvbSIsImlkIjoiNjY1ODkwMzJkNDMyOWFjNDA0N2Q4ZTRhIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzE3MDgwMTE0LCJleHAiOjIzMTcwODAxMTR9.XLUIK3P-kVv-bfG4o9EYJs0ObQ7oapNco11LiuhkfhM`
          }
        });
        setQuestions(questionsResponse.data.data.quiz.questions);

        const modelAnswersResponse = await axios.get(`${process.env.REACT_APP_API_URL}/modelAnswer/${id}`, {
          headers: {
            Authorization: `Bearer ${Auth.token}`
          }
        });
        setModelAnswers(modelAnswersResponse.data.data.modelAnswer);

        setLoading(false);
      } catch (error) {
        setError(error.response.data.error.message);
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, [id, Auth.token]);
  
  return (
    <div className="modelAnswer min-h-screen p-2"> 
      <div className='pageTitle text-white flex justify-content-between mb-6'>
        <h2 className="font-bold text-5xl my-4 mx-auto">Your questions' answers</h2>
      </div>
      {error && (
             <Alert  className='justify-center items-center mb-3' color="red">
               <span className="text-2xl">{error}</span>
             </Alert>
          )} 

      <div>
        <ul className="unorderedListModel w-5/12 mx-auto my-16" id='listOfModelAnswer'>
          {questions.map((question, index) => (
            <li key={question._id} className='text-black list-none w-full mb-2.5 bg-[#fff] rounded-md p-2.5'>
              <label htmlFor={`question${index}`} className="p-2.5 flex items-center text-left justify-between text-2xl font-semibold cursor-pointer text-red-700">
                {question.questionText}
                <span className="rotate-90 text-xl text-[#333] hover:text-red-700 text-right">+</span>
              </label>
              <input type='checkbox' name={`question${index}`} id={`question${index}`} className='hidden' />
              <div className='content'>
                <p className="text-left text-lg font-semibold">
                  {modelAnswers.length > 0 && modelAnswers[0].answers[index].answerText}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ModelAnswer;
