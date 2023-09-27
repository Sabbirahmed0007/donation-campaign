import React from 'react';
import { Link } from 'react-router-dom';

const DonationDetails = ({donation}) => {
    console.log(donation);
    const {card_bg, category, category_bg, btn_bg, picture, price, text_bg, title, id}=donation || '';

    const categoryStyle={
        backgroundColor: category_bg
        
    }
    const cardStyle={
        backgroundColor: card_bg,
        color:text_bg
    }
    const btnStyle={
        backgroundColor:btn_bg,
        color: 'white'
    }

    return (
        <div className='mx-5 '>
            <div className='flex flex-col lg:flex-row gap-3 rounded-lg   justify-center' style={cardStyle}>
                <div>
                    <img src={picture} alt="" className='w-full lg:w-80 h-72 rounded-lg'/>
                </div>
                <div className='p-4 lg:mt-5'>
                    <button className='p-2 rounded-lg font-bold' style={categoryStyle}>{category}</button>
                    <h2 className='text-lg font-bold my-4'>{title}</h2>
                    <p className='font-semibold'>$ {price}</p>
                    
                    <Link to={`/card/${id}`}>
                        <button className=' font-bold text-lg my-5 p-2 rounded-lg' style={btnStyle} >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;