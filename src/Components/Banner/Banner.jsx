import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner-container pt-28 '>
            <div className='text-center h-96 lg:h-[500px]  space-x-7'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>I Grow By Helping People In Need</h1>
                    <div className='bg-slate-200 inline-block rounded-l-lg '>

                        <input className='bg-slate-200 p-2 rounded-l-lg outline-none w-60' type="text" name="" id="" placeholder='Search Here...' />
                        <button className=' ml-2  p-2 rounded-r-lg bg-[#FF444A] font-semibold text-white' type='button'>Search</button>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;