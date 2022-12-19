import React, {useState} from 'react';
import './home.scss'
import { Pie } from  'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto";


const data ={
    labels:['Взрослый билет', 'Детский билет'],
    datasets:[{

        data:[100,50]
    }]
}


const Home = () => {

    return <Pie  data={data}/>
};

export default Home;