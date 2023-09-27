import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './carddetails.css'
import swal from 'sweetalert';
import { saveDonatedData } from '../../Utility/localStorage';

const CardDetails = () => {

    const cards= useLoaderData();
    // console.log(cards);
    const {id}=useParams();
    const intId= parseInt(id);
    console.log(id);
    const singlecardDetails= cards.find(card=> card.id === intId);
    console.log(singlecardDetails)
    const {card_bg, category, category_bg, description, picture, price, text_bg, title}=singlecardDetails || '';
    const categoryStyle={
        backgroundColor: category_bg,
        color:text_bg
        
    }
    
    const goBack=useNavigate()
    const handleBackbtn=()=>{
        goBack(-1);
    }

    const handleDonate=()=>{
        if(saveDonatedData(intId)){
            swal("Good job!", "You donated successfully", "success");
        } else {
            swal("Warning", "You have already donated for this item.", "warning");
        }

            console.log('Hello');
        // }

    }
    
    
    

    return (
        <div>

            <div  className='lg:w-4/5 lg:mx-auto mx-8 my-8'>
                <div className='relative  rounded-lg '>
                    <img src={picture} alt="" className='w-full  rounded-xl' />
                    <div className=' overlay w-full h-16 lg:h-24 bottom-0  absolute rounded-b-lg'>
                        <button onClick={handleDonate} className='mt-3 lg:mt-8 mx-4 bg-[#FF444A] px-3 py-2 text-white font-semibold rounded-lg'>Donate $ {price}</button>
                    </div>
                </div>
                    <div className='my-8'>
                        <button className='p-2 rounded-lg font-bold'style={categoryStyle}>{category}</button>
                        <h2 className='text-xl font-bold my-4'>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div onClick={handleBackbtn}>
                        <Link to={`/card/${id}`}>
                            <button  className='btn text-lg'>⬅ Previous </button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default CardDetails;