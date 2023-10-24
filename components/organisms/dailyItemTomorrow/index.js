import React from 'react';
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

import useGetDailyItemTomorrow from '@hooks/useGetDailyItemTomorrow';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const DailyItemTomorrow = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getDailyItemTomorrow = useGetDailyItemTomorrow(storeId);

    useEffect(() => { 
        setData(getDailyItemTomorrow); 
    },[getDailyItemTomorrow]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: '일별 수입 통계',
            },
        },
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const objectLength = data && Object.keys(data).length;
    const labels = data && data.map((dataPoint) => dataPoint.itemName);
    const itemCountData = data && data.map((dataPoint) => dataPoint.itemCount);

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: itemCountData,
                borderWidth: 2,
                backgroundColor: Array(objectLength).fill().map(() => getRandomColor()),
            },
        ],
    }

    return (
        <PolarArea data={chartData} options={options} />
    )
}

export default DailyItemTomorrow