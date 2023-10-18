import React from 'react';
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import useGetDailyRevenue from '@hooks/useGetDailyRevenue';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const DailyRevenue = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getDailyRevenue = useGetDailyRevenue(storeId);

    useEffect(() => { 
        setData(getDailyRevenue); 
    },[getDailyRevenue]);

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const orderCountsByDay = daysOfWeek.map(day => {
    const dayData = data && data.filter(dataPoint => dataPoint.day === day);
    const orderCountSum = dayData && dayData.reduce((total, dataPoint) => total + dataPoint.orderCount, 0);
    return orderCountSum;
    });

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

    const chartData = {
        labels: daysOfWeek,
        datasets: [
            {
                type: 'line',
                label: '요일별 총 개수',
                data: orderCountsByDay,
                // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                fill: false,
            },
        ],
    }

    return (
        <Chart data={chartData} options={options} />
    )
}

export default DailyRevenue