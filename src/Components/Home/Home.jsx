import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {

    const cards= useLoaderData();
    console.log(cards)


    return (
        <div>
            <Banner></Banner>
            {/* <Card></Card> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10'>
                {
                    cards.map(card=><Card card={card} key={card.id}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;