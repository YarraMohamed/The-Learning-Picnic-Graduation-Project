import React ,{useState , useEffect} from "react";
import LessonCardTeacher from "./LessonCardTeacher";
import '../../../pages/style/ShowLessonCardStudent.css'
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { getAuthUser } from "../../../helper/Storage.js";

const ShowLessonsTeacher = () => {
  const Auth = getAuthUser();

  const [lessons,setLessons] = useState({
    loading : true,
    results : [],
    err : null
  })

  const loadLessons = () => {
    setLessons({ ...lessons, loading: true });
    axios.get("http://localhost:2222/lessons/", {
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

  const handleLessonDelete = () => {
    loadLessons();
  };

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
              <LessonCardTeacher key={lesson._id} name={lesson.name} _id={lesson._id} onDelete={handleLessonDelete}/>
            ))}
        </div>
        <a href="/addition">
          <button type="button" class="mt-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-large rounded-full text-base px-4 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Lesson</button>
        </a>  
      </div>
      </div>
    </div>
    
  )
}

export default ShowLessonsTeacher;