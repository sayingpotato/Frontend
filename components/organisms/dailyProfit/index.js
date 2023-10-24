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

import useGetDailyProfit from '@hooks/useGetDailyProfit';

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

const DailyProfit = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getDailyProfit = useGetDailyProfit(storeId);

    useEffect(() => { 
        setData(getDailyProfit); 
    },[getDailyProfit]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '일별 수입 통계',
            },
        },
    };

    const labels = data && data.map((dataPoint) => dataPoint.time);
    const profitData = data && data.map((dataPoint) => dataPoint.profit);

    const chartData = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                data: profitData,
                backgroundColor: '#28469C',
                borderWidth: 2,
                fill: false,
            },
        ],
    }

    return (
        <Chart data={chartData} options={options} />
    )
}

export default DailyProfit