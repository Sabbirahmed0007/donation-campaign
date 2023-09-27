import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div className='max-w-screen-2xl mx-auto '>
            {/* <h1>navbar</h1> */}
            <div className='flex items-center justify-between  p-4 shadow-xl'>
                <div className='w-32'>
                    <Logo></Logo>
                </div>
                <div className='flex list-none items-center justify-center gap-3 font-semibold '>
                    <li><NavLink to={'/'}  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : "" }>Home</NavLink></li>
                    <li><NavLink to={'/donation'} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : "" }>Donation</NavLink></li>
                    <li><NavLink to={'/statistics'} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-red-500 underline" : "" }>Statistics</NavLink></li>
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;