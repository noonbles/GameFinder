"use client"

import React from "react";
import ChartComponent from "./BarChart";


export default function ChartCarosel({ children }) {
  return (
    <div className="flex flex-col w-screen h-1/2 items-center justify-center">
      <div className="flex h-full w-3/4 carousel rounded-box bg-gradient-to-r from-base-100 to-base-200 justify-center">
        <div id="item1" className="carousel-item w-full">
          <ChartComponent />
        </div>
        <div id="item2" className="carousel-item w-full">
          <p> test2 </p>
        </div>
        <div id="item3" className="carousel-item w-full">
          <p> test3 </p>
        </div>
      </div>

      <div className="flex h-1/4 justify-center w-full py-2 gap-2">
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
