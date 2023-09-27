import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonatedData } from '../../Utility/localStorage';
import DonationDetails from '../../Components/DonationDetails/DonationDetails';

const Donation = () => {

    const donatedData=useLoaderData();
    const [NotFound, setNotFound]= useState('');

    const [dataDonation, setDataDonation]=useState([]);
    const [isshow, setisShow]=useState(false)

    useEffect(()=>{
        const storedDonation= getDonatedData();

        if(donatedData.length>0){
            const donated= donatedData.filter(data=>storedDonation.includes(data.id))
            // console.log(donatedData, storedDonation,donated);
            setDataDonation(donated)

            if(donatedData.length===0){
                setNotFound('No Data Found');
            }


        }


        

    },[donatedData])

    // console.log(dataDonation);
    const handleRemove=()=>{
        localStorage.clear()
        setDataDonation([]);
        setNotFound('No Data Found')
    }

    return (
        <div>
            {
                NotFound? <div className='text-xl font-bold text-center mt-40'><p>{NotFound}</p></div>: <div>
                    <div className='text-center my-8'>
                        {
                            dataDonation.length>0 && <button onClick={handleRemove} className='bg-orange-600 text-white font-bold p-2 rounded-lg'>Clear All</button>
                        }
                        
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
                        {
                            isshow? dataDonation.map(data=><DonationDetails donation={data} key={data.id}></DonationDetails>)
                            : dataDonation.slice(0, 4).map(data=><DonationDetails donation={data} key={data.id}></DonationDetails>)
                        }
                    </div>
                    <div className='text-center'>
                        {
                            dataDonation.length >4 ? <button onClick={()=>setisShow(!isshow)} className='my-5 bg-[#009444] text-lg px-3 py-2 text-white font-semibold rounded-lg'>{isshow? "SEE LESS": "SEE ALL"}</button> : <button onClick={()=>setisShow(!isshow)} className='my-5 bg-[#009444] text-lg px-3 py-2 text-white font-semibold rounded-lg hidden'>{isshow? "SEE LESS": "SEE ALL"}</button>
                        }
                        {/* <button onClick={()=>setisShow(!isshow)} className='my-5 bg-[#009444] text-lg px-3 py-2 text-white font-semibold rounded-lg'>{isshow? "SEE LESS": "SEE ALL"}</button> */}
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;