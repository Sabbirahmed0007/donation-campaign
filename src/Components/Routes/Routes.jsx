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
                loader: ()=>fetch(`/donationdata.json`),
                element: <Home></Home>
            },
            {
                path:'/donation',
                loader:()=>fetch(`/donationdata.json`),
                element:<Donation></Donation>

            },
            {
                path:'/statistics',
                loader:()=>fetch(`/donationdata.json`),
                element:<Statistic></Statistic>
            },
            {
                path:'/card/:id',
                loader:()=>fetch(`/donationdata.json`),
                // element:<CardDetails></CardDetails>
                element: <CardDetails></CardDetails>
            }
        ]
    }
])

export default CreatedRoutes;