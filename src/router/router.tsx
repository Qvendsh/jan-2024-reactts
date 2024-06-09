import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";

const RouterConfig = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <h1>qqqqqq</h1>,
        children: [
            {index:true, element: <HomePage/>},
            {path: 'users', element:<UsersComponent/>},
            {path: 'posts', element:<PostsComponent/>},
            {path: 'comments', element:<CommentsComponent/>}
        ]

    }
])

export default RouterConfig;