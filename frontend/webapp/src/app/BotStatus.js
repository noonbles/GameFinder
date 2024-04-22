"use client";

import React from "react";

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";
import useSWR from "swr";

export default function BotStatus() {
  const fetcher = (
    url //this is repeated several times throughout the code
  ) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  const { data } = useSWR("http://localhost:8000/uptime", fetcher);

  return (
    <div
      id="status"
      className="flex flex-col w-full items-center justify-center gap-5"
    >
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Uptime</div>
          <div className="stat-value">{parseInt(data) || 0} seconds</div>
          {data ? (
            <div className="flex flex-col justify-center items-center">
              <ArrowUpCircleIcon className="fill-green-500 h-5 w-5" />
              <span className="text-xs"> Status: Up </span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <ArrowDownCircleIcon className="fill-red-500 h-5 w-5" />
              <span className="text-xs"> Status: Down </span>
            </div>
          )}
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      </div>
    </div>
  );
}
