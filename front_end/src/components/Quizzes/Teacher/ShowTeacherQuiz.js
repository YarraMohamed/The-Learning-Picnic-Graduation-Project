import React ,{useState , useEffect} from "react";
import TeacherQuizCard from './TeacherQuizCard'
import '../../../pages/style/ShowQuizTeacher.css'
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { getAuthUser } from "../../../helper/Storage.js";
import { Alert } from "@material-tailwind/react";

const ShowTeacherQuiz = () => {

  const Auth = getAuthUser();

  const [quizzes,setQuizzes] = useState({
    loading : true,
    results : [],
    err : null
  })

  const loadQuizzes = () => {
    setQuizzes({ ...quizzes, loading: true });
    axios.get(`${process.env.REACT_APP_API_URL}/quizes/`, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
      .then(resp => {
        setQuizzes({ ...quizzes, results: resp.data.data.quiz, loading: false });
      })
      .catch(err => {
        setQuizzes({ ...quizzes, loading: false, err: err.response.data.error.message });
      });
  };

   useEffect ( ()=>{
    loadQuizzes();
  }, []);

  const handleLessonDelete = () => {
    loadQuizzes();
  };
  
  return (

    <div className='bodyTeacherQuiz p-3' >
      
       {quizzes.loading === true && (
          <div className="flex items-center justify-center h-screen">
          <Spinner className="h-12 w-12" />
        </div>
       )}

        <div className='row-auto'>
        {quizzes.results.length === 0 && (
        <>
        <div className="flex items-center justify-center mb-5">
        <Spinner className="h-12 w-12" />
       </div>
        <div>
          <Alert  className='justify-center items-center mb-3' color="red">
              <span className="text-2xl">No Quizzes Now, Come Back Later!</span>
            </Alert>
          </div>
          </>
      )}
        <div class="gridContainer grid grid-cols-6 gap-4">
        {quizzes.results && quizzes.results.map((quiz,index) => (
              <TeacherQuizCard key={quiz._id}  _id ={quiz._id} lessonName={quiz.lessonName} onDelete={handleLessonDelete} />
            ))}
        </div>
      </div>
       </div>
  )
}

export default ShowTeacherQuiz