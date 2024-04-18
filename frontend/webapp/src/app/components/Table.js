"use client";
import React from "react";
import useSWR from "swr";

export default function Table() {
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  const { data, isLoading } = useSWR("http://localhost:8000/games", fetcher);

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-1/2 card bg-base-200">
        <table className="table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Average Hours Played</th>
              <th>Progress</th>
              <th>Review Score</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data?.slice(0, 5).map((e, index) => (
                <tr className="h-10" key={e}>
                  <td>{`${index + 1}. ${e.name}`}</td>
                </tr>
              ))}

            {isLoading &&
              [1, 2, 3, 4, 5].map((e) => (
                <div className="flex w-full h-10 bg-" />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
