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
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
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
