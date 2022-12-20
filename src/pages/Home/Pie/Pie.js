import React from 'react';
import { Pie } from  'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto";

const Pies = () => {
    const data ={
        labels:['Взрослый билет', 'Детский билет'],
        datasets:[{

            data:[100,50]
        }]
    }
    return (
        <section>
            <Pie  data={data}/>
        </section>

    );
};

export default Pies;