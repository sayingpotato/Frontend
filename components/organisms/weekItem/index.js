import React from 'react';
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import useGetWeekItem from '@hooks/useGetWeekItem';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeekItem = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getWeekItem = useGetWeekItem(storeId);

    useEffect(() => { 
        setData(getWeekItem); 
    },[getWeekItem]);

    const nameArr = data && [...new Set(data.map(item => item.name))];

    // nameArr의 각 name 별로 count의 합계를 계산하여 countArr에 저장
    const countArr = data && nameArr.map(name => {
        const sum = data
        .filter(item => item.name === name)
        .reduce((total, item) => total + item.count, 0);
        return sum ;
    });
    
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
            borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: '일주간 아이템 별 총 개수',
            },
        },
    };

    const chartData = {
        labels: nameArr,
        datasets: [
            {
                label: '일주간 아이템 별 총 개수',
                data: countArr,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <Bar data={chartData} options={options} />
    )
}

export default WeekItem