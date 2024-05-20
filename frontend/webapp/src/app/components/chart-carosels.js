"use client";

import React from "react";
import ChartComponent from "./BarChart";
import PieChart from "./PieChart";
import GrowthChart from "./GrowthChart";
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

  function getMonth(date){ //mm-dd-yyyy
    return date?.split("-")[0]
  }

  return (
    <div className="flex flex-col w-screen h-1/2 items-center justify-center">
      <div className="flex h-full w-3/5 carousel rounded-box bg-gradient-to-r from-base-100 to-base-200 justify-center">
        <div id="item1" className="carousel-item w-full">
          <ChartComponent data={data?.reduce((acc, e) => {acc[parseInt(getMonth(e.date_added)) - 1]++; return acc}, new Array(12).fill(0)) || new Array(12).fill(0)} />
        </div>
        <div id="item2" className="carousel-item w-full">
          <PieChart data={data?.reduce((acc, e) => {e.completed ? acc[2]++ : (e.in_progress ? acc[1]++ : acc[0]++); return acc}, [0,0,0]) || [0,0,0]} />
        </div>
        <div id="item3" className="carousel-item w-full">
          <GrowthChart data={Array.from({length: 12}, (_, i) => data?.filter(e => getMonth(e.date_added) === `${(i+1) < 10 ? '0' : ""}${i+1}`).length)}/>
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
