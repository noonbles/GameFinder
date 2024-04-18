import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chartDoughnutOptions } from "../chartData/chartOptions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
      'Not Completed',
      'In Progress',
      'Completed'
    ],
    datasets: [{
      label: 'Backlog',
      data: [300, 50, 30],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(244,192,0)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };

export default function PieChart(){
    return (
        <div className="flex w-full h-full justify-center items-center">
            <Doughnut data={data} options={chartDoughnutOptions}/>
        </div>
    )
}