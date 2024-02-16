import React ,{useState , useEffect} from "react";
import LessonCardStudent from './LessonCardStudent';
import '../../../pages/style/ShowLessonCardStudent.css';
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { getAuthUser } from "../../../helper/Storage.js";

const ShowLessonsStudent = () => {

  const Auth = getAuthUser();

  const [lessons,setLessons] = useState({
    loading : true,
    results : [],
    err : null
  })

  const loadLessons = () => {
    setLessons({ ...lessons, loading: true });
    axios.get(`${process.env.REACT_APP_API_URL}/lessons/`, {
      headers: {
        Authorization: `Bearer ${Auth.token}`
      }
    })
      .then(resp => {
        setLessons({ ...lessons, results: resp.data.data.lesson, loading: false });
      })
      .catch(err => {
        setLessons({ ...lessons, loading: false, err: err.data.data.msg });
      });
  };

   useEffect ( ()=>{
    loadLessons();
  }, [])
  
  return (
    <div className="homeContainer">

       {lessons.loading === true && (
          <div className="flex items-center justify-center h-screen">
          <Spinner className="h-12 w-12" />
        </div>
       )}

      <div className="content-container p-3">
      <div className="row-auto">
        <div class="gridContainer grid grid-cols-6 gap-4">
        {lessons.results.map(lesson => (
              <LessonCardStudent key={lesson._id} name={lesson.name} pdfFile={lesson.pdfFile} _id={lesson._id} />
            ))}
          </div>
        </div>          
    </div>
    </div>
    
  )
}

export default ShowLessonsStudent;