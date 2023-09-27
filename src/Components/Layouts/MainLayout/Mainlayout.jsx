import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Home from '../../Home/Home';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;