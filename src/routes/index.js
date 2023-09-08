import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error-page';
import App from '../App';
import Site from '../Site';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Post from '../pages/Post';
import Dashboard from '../pages/Dashboard';
import PostSearchProvider from '../hooks/PostSearchProvider';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PostSearchProvider children={<Site />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/post/:post_id',
        element: <Post />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
