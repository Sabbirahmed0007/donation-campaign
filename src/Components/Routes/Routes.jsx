import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from '../Home/Home';
import Mainlayout from '../Layouts/MainLayout/Mainlayout';
import Errorpage from '../../Pages/Errorpage/Errorpage';
import Statistic from '../../Pages/Statistics/Statistic';
import Donation from '../../Pages/Donation/Donation';
import CardDetails from '../CardDetails/cardDetails';

const CreatedRoutes= createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                loader: ()=>fetch(`/donation.json`),
                element: <Home></Home>
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistic></Statistic>
            },
            {
                path:'/card/:id',
                loader:()=>fetch(`/donation.json`),
                element:<CardDetails></CardDetails>
            }
        ]
    }
])

export default CreatedRoutes;