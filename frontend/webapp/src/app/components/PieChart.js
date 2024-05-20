import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chartDoughnutOptions } from "../chartData/chartOptions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({data}){
  return (
      <div className="flex w-full h-full justify-center items-center">
          <Doughnut data={data} options={chartDoughnutOptions}/>
      </div>
  )
}