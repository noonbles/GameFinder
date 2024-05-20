import { Line } from "react-chartjs-2";
// import { chartRadarOptions } from "../chartData/chartOptions";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function GrowthChart({data}) {

  const d = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: 'Number of games added',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: 'origin', // Fill the area under the line
      },
    ],
  };
  

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Games Added',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <Line data={d} options={options}/>
    </div>
  );
}
