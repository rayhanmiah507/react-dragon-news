import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Carrer from "../page/Carrer/Carrer";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import News from "../page/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/career",
                element: <Carrer></Carrer>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;