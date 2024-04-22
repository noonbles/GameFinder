import React from "react";
import ChartCarosel from "./components/chart-carosels";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import BotStatus from "./components/BotStatus";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 h-screen w-screen backgroundImg">
      <Navbar />
      <BotStatus />
      <ChartCarosel />
      <Table />
    </div>
  );
}
