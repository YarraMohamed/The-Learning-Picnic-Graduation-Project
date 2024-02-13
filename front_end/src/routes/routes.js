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

export const routes = createBrowserRouter([
 {
    path: "",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
        path: "/",
        element: <Home/>,
        },
        {
        path: "/login",
        element: <Login/>,
        },
        {
            path: "/registration",
            element: <Register/>
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
            element: <ShowQuiz/>
        },
        {
            path: "/reports",
            element: <ShowReports/>
        },
        // {
        //     path: ":id",
        //     element: <Questions/>,
        // },
    ]
  }
]);