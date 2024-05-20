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

export default function RadarChart({data}) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Radar data={data} options={chartRadarOptions} />
    </div>
  );
}
