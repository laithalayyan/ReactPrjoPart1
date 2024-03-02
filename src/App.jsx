import React from 'react'
import Home from './pages/home/components/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import Signin from './pages/signin/Signin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/signin',
        element:<Signin/>
      }
    ],
  },
]);


export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
