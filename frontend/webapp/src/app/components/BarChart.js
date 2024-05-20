import React from "react";
import { chartBarOptions } from "../chartData/chartOptions.js";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent({data}) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Bar data={data} options={chartBarOptions} />
    </div>
  );
}
