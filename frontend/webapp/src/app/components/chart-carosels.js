import React from "react";

export default function ChartCarosel({ children }) {
  return (
    <div className="flex flex-col w-screen h-96 items-center justify-center">
      <div className="flex h-3/4 w-60 carousel rounded-box bg-gradient-to-r from-zinc-900 to-zinc-800">
        <div id="item1" className="carousel-item w-full">
          <p> test1</p>
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