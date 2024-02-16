import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Home from './Components/Home/Home.jsx'

import Layout from './Layout.jsx'

import SignUp from './Components/Signup/SignUp.jsx'
import LoginForm from './Components/Login/LoginForm.jsx'
// main.jsx
import  Quiz  from './Components/Quiz/Quiz.jsx'; // Assuming Quiz is a named export in Quiz.jsx



const router = createBrowserRouter([
  {
    path:'/',
   element:<Layout/>,
   children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"sign-in",
      element:<SignUp/>
    },
    {
      path:"login-in",
      element:<LoginForm/>
    },{
      path:"quiz",
      element:<Quiz/>

    }
    
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)