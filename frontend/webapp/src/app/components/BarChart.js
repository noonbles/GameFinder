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

export default function ChartComponent(data) {
  //dummy data for now
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Games played",
        data: [8, 20, 6, 4, 3, 2],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <Bar data={chartData} options={chartBarOptions} />
    </div>
  );
}
