import React from "react";
import ChartCarosel from "./components/chart-carosels";
import Table from "./components/Table";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 h-screen w-screen bg-[url(../../imgs/site-bg.png)] dark:bg-[url(../../imgs/site-bg-lite.png)]">
      <div id="menu" className="navbar bg-base-100 h-10">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            GameFinder
            <div className="flex flex-col justify-center items-center"> <ArrowUpCircleIcon className="fill-green-500 h-5 w-5" />{" "} <span className="text-xs"> Status: Up </span> </div>
            
          </a>
        </div>

        <div className="flex">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="light" />
            <SunIcon className="swap-off fill-current w-7 h-7" />
            <MoonIcon className="swap-on fill-current w-7 h-7" />
          </label>
        </div>
      </div>

      <div
        id="status"
        className="flex flex-col w-full items-center justify-center gap-5"
      >
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Uptime</div>
            <div className="stat-value">10000 seconds</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>
        </div>
      </div>

      <ChartCarosel />

      <Table />
    </div>
  );
}
