import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Statistic = () => {


    const donationDT= useLoaderData();
    console.log(donationDT)


    return (
        <div>
            <h2>
                Statistic page here
            </h2>
            {/* <div id="piechart_3d" style="width: 900px; height: 500px;"></div> */}
            <div>
            <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={'/'}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={'/'} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistic;