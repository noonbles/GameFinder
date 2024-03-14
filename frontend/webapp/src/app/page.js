import React from "react";
import ChartCarosel from "./components/chart-carosels";

import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-screen w-screen bg-[url(../../imgs/site-bg.png)]">
      <div id="menu" className="navbar bg-base-100 h-10">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GameFinder Dashboard</a>
        </div>
      </div>

      <div
        id="status"
        className="flex flex-col w-full items-center justify-center"
      >
        <h1 className="card h-10 w-60 bg-red-700 flex text-center">
          {" "}
          Gamefinder{" "}
        </h1>

        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Uptime</div>
            <div className="stat-value">10000 seconds</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Status</div>
            <div className="stat-value">Off</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>
        </div>
      </div>

      <ChartCarosel />

      <div className="flex w-screen justify-center items-center">
        <div className="flex table w-1/2">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <tr className="h-10 bg-zinc-600" key={e}>
              {e}
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}
