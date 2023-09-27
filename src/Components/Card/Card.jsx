import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    // console.log(card)
    const {card_bg, category, category_bg, description, picture, price, text_bg, title, id}=card || '';

    const categoryStyle={
        backgroundColor: category_bg
        
    }
    const cardStyle={
        backgroundColor: card_bg,
        color:text_bg
    }
    

    return (
        <Link to={`/card/${id}`}>
            <div  className=' mx-3 rounded-lg mt-4' style={cardStyle}>
                <div className=''>
                    <img src={picture} alt="" className=' w-full' />
                </div>
                <div className='p-5'>
                    <button  className='p-2 rounded-lg text-lg font-bold my-3' style={categoryStyle}> {category}</button>
                    <h2 className='font-medium h-10'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;