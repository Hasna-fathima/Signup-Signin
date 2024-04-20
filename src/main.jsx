import  React from "react";
import  ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "/src/index.css";
import Root from "/src/Components/Root.jsx";
import App from './App';
import Signup from "./Components/Signup";
import Login from "./Components/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
      path:'/',
      element:<App/>
    
    } ,
   {
    path:'/signup',
    element:<Signup/>
     },
     {
      path:'/login',
      element:<Login/>
       }


]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

