import { Radar } from "react-chartjs-2";
import { chartRadarOptions } from "../chartData/chartOptions";

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

export default function RadarChart(data) {
  const chartData = {
    labels: ["First Person Shooter", "Third Person Adventure", "Puzzle"],
    datasets: [
      {
        label: "Number of Games",
        data: [2, 9, 3],
        backgroundColor: "rgba(180, 230, 240, 0.2)",
        borderColor: "rgba(180, 230, 240, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Radar data={chartData} options={chartRadarOptions} />
    </div>
  );
}
