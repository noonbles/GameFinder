"use client";
import React from "react";
import useSWR from "swr";

export default function Table({ rowCount, showCompleted }) {
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
      <div className="flex w-1/2 card bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Average Hours Played</th>
              <th>Review Score</th>
              {showCompleted && <th>Completed</th>}
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data?.slice(0, rowCount ?? 5).map((e, index) => (
                <tr className="h-10" key={e}>
                  <td>{`${index + 1}. ${e.name}`}</td>
                  <td>{e.average_hours} Hours </td>
                  <td>{e.review_score}/100</td>
                  {showCompleted && (
                    <td>{e.completed ? "Done" : "Not Done"}</td>
                  )}
                </tr>
              ))}

            {isLoading &&
              data?.slice(0, rowCount ?? 5).map((e) => (
                <tr className="h-10" key={e}>
                  <td>
                    <div className="flex-1 bg-base-300 w-full h-full" />
                  </td>
                  <td/>
                  <td/>
                  {showCompleted && <td/>}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
