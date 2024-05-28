import { createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import App from "../App";
import Error from "../pages/Error/Error";
import Contact from "../pages/contact/Contact";
import ShowLessons from "../components/Lessons/ShowLessons";
import Summarization from "../pages/Summarization/Summarization";
import Register from "../pages/Auth/Register";
import LessonAddition from "../components/Lessons/Teacher/LessonAddition";
import Account from "../pages/Account/Account";
import ShowQuiz from "../components/Quizzes/ShowQuiz";
import ShowReports from "../pages/Reports/ShowReports";
import Questions from "../pages/Questions/Questions";
import TeacherQuizReport from "../pages/Reports/Teacher/TeacherQuizReport";
import TeacherDashboard from "../pages/Admin/TeacherDashboard";
import ParentDashboard from "../pages/Admin/ParentDashboard";
import StudentDashboard from "../pages/Admin/StudentDashboard";
import AddChild from "../pages/Admin/DashboardFunctions/AddChild";
import UpdateDashboard from "../pages/Admin/DashboardFunctions/UpdateDashboard";
import ModelAnswer from "../pages/ModelAnswer/ModelAnswer";
import ShowQuizPT from "../pages/ShowQuizPT/ShowQuizPT";
import Guest from "../middleware/Guest";
import Admin from "../middleware/Admin";
import User from "../middleware/User";


export const routes = createBrowserRouter([
 {
    path: "",
    element: <App />,
    errorElement: <Error />,
        children: [
           
        // GUEST MIDDLEWARE 
        {
            element: <Guest />,
            children: [
               {
        path: "/",
        element: <Login/>,
        },
            ]
        },
        
        // ADMIN MIDDLEWARE
        {
            
            element: <Admin />,
            children: [
            {
            path: "/registration",
            element: <Register/>
            },
            {
            path: "/teacher",
            element: <TeacherDashboard/>
            },
            {
            path: "/parent", 
            children: [
                {
                    path: "",
                    element: <ParentDashboard />,
                },
                {
                    path: ":id",
                    element: <AddChild/>
                },
            ]
        },
        {
            path: "/student",
            element: <StudentDashboard />
        },     
        {
            path: ":updateId",
            element: <UpdateDashboard/>
        },
            ]
        },

        // USER MIDDLEWARE
        {
            element: <User />,
            children: [
             {
                path: "/home",
                element: <Home />,
            },
                {
        path: "/contact",
        element: <Contact/>,
        },
        {
            path: '/Lessons',
            children : [
                {
                    path : "",
                    element : <ShowLessons/>
                },
                {
                    path : ':id',
                    element : <Summarization/>
                }
            ]
        },
        {
            path: '/addition',
            element: <LessonAddition/>
        },
        {
            path: "/account",
            element: <Account/>
        },
        {
            path: "/quizzes",   
            children: [
                {
                    path: "",
                    element: <ShowQuiz />
                },
                {
             path: ":id",
            element: <Questions/>,
                }
            ]
        },
        {
            path: '/reports',
            children : [
                {
                    path : "",
                    element : <ShowReports/>
                },
                {
                    path : ':id',
                    element : <TeacherQuizReport/>
                }
            ]
        },
        
        {
            path: '/modelAnswer',
            children : [
                {
                    path : ':id',
                    element : <ModelAnswer/>
                }
            ]
        },
        {
            path: "/showQuizPT",
            children : [
                {
                    path : ':id',
                    element : <ShowQuizPT/>
                }
            ]
        },
            ]
        },   
    
    ]
    }
]);
