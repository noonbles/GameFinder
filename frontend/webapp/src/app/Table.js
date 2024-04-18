"use client";
import React from "react";
import useSWR from "swr";

export default function Table() {
  const fetcher = (url) => fetch(url, {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin" : '*',
        'Content-Type': 'application/json'
    }
  }).then((res) => {
    console.log(res)
    
    return (res.json())});
  const { data, isLoading } = useSWR("http://localhost:8000/games", fetcher);

  return (
    <div className="flex justify-center items-center">
      <table className="table w-1/2">
        <tbody>
          {!isLoading &&
            data?.map((e, index) => (
              <tr className="h-10" key={e}>
                <td>{`${index+1}. ${e.name}`}</td>
              </tr>
            ))
            }

          {isLoading &&
            [1, 2, 3, 4, 5].map((e) => (
              <tr className="h-10" key={e}>
                <td> PLACEHOLDER </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
