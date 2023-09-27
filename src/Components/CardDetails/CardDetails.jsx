import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './carddetails.css'

const CardDetails = () => {

    const cards= useLoaderData();
    // console.log(cards);
    const {id}=useParams();
    const intId= parseInt(id);
    console.log(id);
    const singlecardDetails= cards.find(card=> card.id === intId);
    console.log(singlecardDetails)
    const {card_bg, category, category_bg, description, picture, price, text_bg, title}=singlecardDetails || '';


    


    return (
        <div>

            <div  className='lg:w-4/5 lg:mx-auto mx-8 my-8'>
                <div className='relative  rounded-lg '>
                    <img src={picture} alt="" className='w-full  rounded-xl' />
                    <div className=' overlay w-full h-16 lg:h-24 bottom-0  absolute rounded-b-lg'>
                        <button className='mt-3 lg:mt-8 mx-4 bg-[#FF444A] px-3 py-2 text-white font-semibold rounded-lg'>Donate $ {price}</button>
                    </div>
                </div>
                    <div className='my-8'>
                        <h2 className='text-xl font-bold my-4'>{title}</h2>
                        <p>{description}</p>
                    </div>
            </div>
        </div>
    );
};

export default CardDetails;