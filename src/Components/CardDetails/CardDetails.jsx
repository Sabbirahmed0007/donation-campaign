import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
        backgroundColor: category_bg 
    }
    const cardStyle={
        backgroundColor: card_bg,
        color:text_bg
    }

    return (
        <div>
            <h2>hello details</h2>
        </div>
    );
};

export default CardDetails;