import React from 'react';
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import useGetMonthlyProfit from '@hooks/useMonthlyProfit';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MonthlyProfit = (props) => {

    const storeId = props.id;

    const [data, setData] = useState("");
    const getMonthlyProfit = useGetMonthlyProfit(storeId);

    useEffect(() => { 
        setData(getMonthlyProfit); 
    },[getMonthlyProfit]);

    const labels = data && data.map((dataPoint) => dataPoint.time);
    const profitData = data && data.map((dataPoint) => dataPoint.profit);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '월별 수입 통계',
            },
        },
    };

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: profitData,
                backgroundColor: '#A3BAFF',
                borderColor: '#28469C',
                borderWidth: 3,
            },
        ],
    }

    return (
        <div style={{margin : "0 auto", height:"400px"}}>
            <Radar data={chartData} width={30} height={30} options={options} />
        </div>
    )
}

export default MonthlyProfit