import React ,{useState , useRef,useEffect} from "react";
import '../../../pages/style/LessonAdd.css';
import { Alert } from "@material-tailwind/react";
import { getAuthUser } from "../../../helper/Storage.js";
import axios from "axios";


const LessonAddition = () => {
  const Auth = getAuthUser();

  const [lesson,setLesson] = useState({
    name :"",
    err : null,
    loading : false,
    successMessage : null,
    fileUploaded: false,
    uploadedFileName: '',
  });
  const pdfFile = useRef(null);
  const formData = new FormData();

  const createLesson = (e) => {
    e.preventDefault();
    setLesson({ ...lesson, loading: true });
    formData.append("name", lesson.name);
    formData.append("pdfFile", pdfFile.current.files[0]);
  
    axios.post(`${process.env.REACT_APP_API_URL}/lessons/`, formData, {
      headers: {
        Authorization: `Bearer ${Auth.token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((resp) => {
        setLesson({
          ...lesson,
          loading: false,
          fileUploaded: true,
          uploadedFileName: pdfFile.current.files[0].name,
        });
      })
      .catch((err) => {
          setLesson({ ...lesson, loading: false, err: err.response.data.error.message });
        })
        if (!lesson.err){
          setLesson({...lesson,successMessage:"Lesson Uploaded ... Summary is being generated"})
        }
  };

  const handleFileChange = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      const uploadedFileName = fileInput.files[0].name;
      const nameWithoutPDF = uploadedFileName.replace('.pdf', '');
      setLesson({
        ...lesson,
        fileUploaded: true,
        uploadedFileName: uploadedFileName,
        name: nameWithoutPDF,
      });
    }
  };

  return (
    <div className='heroLessonAddition min-h-[80vh]'>
      <form class="w-3/5 h-svh mx-auto my-4" onSubmit={createLesson}>
        <div class="mb-5">

          {/* errors handling */}
          {lesson.err && (
             <div className="flex w-full flex-col gap-2">
             <Alert  className='justify-center items-center mb-3' color="red">
               <span className="text-2xl">{lesson.err}</span>
             </Alert>
             </div>
          )} 

         {/* Success Alert */}
          {lesson.successMessage && (
            <div className="flex w-full flex-col gap-6">
            <Alert  className='justify-center items-center mb-3' color="blue">
              <span className="text-2xl">{lesson.successMessage}</span>
            </Alert>
            </div>
          )} 

           <label for="lesson_name" class="float-left ml-2 block mb-2 text-2xl font-black font-medium text-gray-900 dark:text-white">Please input the lesson Name</label>
           <input type="text" id="lesson_name" 
           class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           placeholder="" required value={lesson.name}
           onChange={(e)=>{setLesson({...lesson, name:e.target.value})}}/>
        </div>

        <div class="flex items-center justify-center w-full mb-4">

            <label 
            htmlFor="dropzone-file" 
            className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
              ${lesson.fileUploaded ? 'bg-green-50 dark:bg-green-600 hover:bg-green-100 dark:border-green-600 dark:hover:border-green-500 dark:hover:bg-green-600' : 'bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'}`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {lesson.fileUploaded 
                  ? `File uploaded: ${lesson.uploadedFileName}` 
                  : 'Click to upload or drag and drop'
                }
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">Please upload the lesson file.</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" ref={pdfFile} required onChange={handleFileChange} />
          </label>
        </div>   
        <button type="submit" class="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>

  )
}

export default LessonAddition;


 