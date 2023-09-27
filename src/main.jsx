import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreatedRoutes from './Components/Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={CreatedRoutes}></RouterProvider>
  </React.StrictMode>,
)
