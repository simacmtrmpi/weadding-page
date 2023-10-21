import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Blog from "../pages/Our Blog/Our Blog";

import Event from "../pages/Event/Event";
import EventDetails from "../pages/EventDetails/EventDetails";



const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/event",
                element: <Event></Event>
            },
            {
                path: "/eventDetails/:id",
                element: <EventDetails></EventDetails>,
                loader: () => fetch ("/fake.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/blog",
                element:  <Blog></Blog>
            }
        ]
    }
])

export default myCreatedRoute;