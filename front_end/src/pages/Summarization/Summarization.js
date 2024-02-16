import React , {useState,useEffect} from 'react';
import "../style/Summarization.css";
import { getAuthUser } from '../../helper/Storage';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Summarization = () => {

  let {id} = useParams();
  const Auth = getAuthUser();
  const [lesson,setLesson] = useState({
      name : '',
      summary : '',
      loading : false,
      err : null
    })

    const loadLesson = () => {
      setLesson({ ...lesson, loading: true });
      axios.get(`${process.env.REACT_APP_API_URL}/lessons/`+ id, {
        headers: {
          Authorization: `Bearer ${Auth.token}`
        }
      })
        .then(resp => {
          setLesson({ ...lesson, name : resp.data.data.lesson.name ,summary : resp.data.data.lesson.summary, loading: false });
        })
        .catch(err => {
          setLesson({ ...lesson, loading: false, err: err.data.data.msg });
        });
    };

    useEffect ( ()=>{
      loadLesson();
    }, [])

  return (
      <div className="summarizeContainer">
          <div className="lessonTitle">
              <b class="text-slate-50 my-4 text-4xl font-extrabold tracking-wide text-center">{lesson.name}</b>
          </div>
          <div className="summarizeText">
            {lesson.summary !== "" ? (
              <textarea readOnly id="message" rows="22" 
              class="resize-none block mx-auto mt-3 p-3 w-11/12 text-xl text-black-900 bg-white-40 rounded-2xl border border-gray-500 dark:bg-white-700 dark:border-gray-800 dark:text-black-900" 
              value={lesson.summary}></textarea>

            ) : (
              <textarea readOnly id="message" rows="22"
               class="resize-none block mx-auto mt-3 p-3 w-11/12 text-xl text-black-900 bg-white-40 rounded-2xl border border-gray-500 dark:bg-white-700 dark:border-gray-800 dark:text-black-900" 
               value="Check again later for this lesson's summary."></textarea>

            )
          }
              
          </div>
          {/* <div className="downButton">
              <button type="button" class="focus:outline-none text-white bg-green-800 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-large rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Download</button>
          </div> */}
    </div>
  )
}

export default Summarization;