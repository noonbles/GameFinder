"use client";

import React from "react";
import ChartComponent from "./BarChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import useSWR from "swr";

export default function ChartCarosel() {
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const { data } = useSWR("http://localhost:8000/games", fetcher);
  const barData = {
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
        label: "Games added",
        data: [8, 20, 6, 4, 3, 2],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };
  const doughData = {
    labels: ["Not Completed", "In Progress", "Completed"],
    datasets: [
      {
        label: "Backlog",
        data: [300, 50, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(244,192,0)",
          "rgb(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const radarData = {
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
    <div className="flex flex-col w-screen h-1/2 items-center justify-center">
      <div className="flex h-full w-3/5 carousel rounded-box bg-gradient-to-r from-base-100 to-base-200 justify-center">
        <div id="item1" className="carousel-item w-full">
          <ChartComponent data={barData} />
        </div>
        <div id="item2" className="carousel-item w-full">
          <PieChart data={doughData} />
        </div>
        <div id="item3" className="carousel-item w-full">
          <RadarChart data={radarData}/>
        </div>
      </div>

      <div className="flex h-1/7 justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
}
