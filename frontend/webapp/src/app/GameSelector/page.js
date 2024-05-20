"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import useSWR from "swr";
import Confetti from "react-confetti";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const { data } = useSWR("http://localhost:8000/games", fetcher);
  const [filteredData, setFilteredData] = useState([]);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (data)
      setFilteredData(
        data.map((e) => ({ image_url: e.image_url, name: e.name }))
      ); //this might not even be necessary
  }, [data]);

  useEffect(() => {
    if (animating) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [filteredData, animating]);

  return (
    <div className="h-screen w-screen backgroundImg">
      <Navbar />
      {!animating && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <div className="flex flex-col h-full justify-center items-center gap-5">
        <div className="card w-96 bg-gradient-to-r from-base-100 to-base-200 shadow-xl">
          <figure className="w-full h-[36rem] overflow-hidden">
            <img
              src={filteredData[currentIndex]?.image_url}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h1 className="card-title h-10 justify-center">
              {filteredData[currentIndex]?.name}
            </h1>
          </div>
        </div>

        <button
          className="btn w-32 h-6 bg-base-100"
          onClick={() => setAnimating(!animating)}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
