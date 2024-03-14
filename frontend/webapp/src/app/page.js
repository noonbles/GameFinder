import React from "react";
import ChartCarosel from "./components/chart-carosels";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen p-8 bg-[url(../../imgs/site-bg.png)] items-center justify-center gap-10">

      <div className="flex w-full h-1/2 bg-gradient-to-r from-zinc-900 to-zinc-800 card">
        <div className="card-body">
          <h1 className="text-center text-9xl"> how </h1>
        </div>
      </div>
      <ChartCarosel />
    </div>
  );
}
