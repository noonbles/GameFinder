"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import useSWR from "swr";

//i think we might have to make a new table component for this one later 💀
export default function Page() {
  const fetcher = (url) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const { data } = useSWR("http://localhost:8000/games", fetcher);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (data) {
      setRowData(data);
    }
  }, [data]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    { headerName: "Name", field: "name", flex: 2 },
    { headerName: "Date Added", field: "date_added" },
    { headerName: "Review Score", field: "review_score" },
    { headerName: "Average Play Time", field: "average_hours" },
  ]);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredRowData = rowData.filter((row) => {
    return Object.keys(row).some((key) => {
      return String(row[key]).toLowerCase().includes(searchText.toLowerCase());
    });
  });

  return (
    <div className="flex flex-col w-screen h-screen backgroundImg gap-5">
      <Navbar />
      <div className="ag-theme-quartz flex flex-col justify-center items-center h-full p-5">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search..."
          className="input input-border w-full max-w-xs mb-4"
        />
        <AgGridReact
          className="w-3/5 ag-grid-container"
          rowData={filteredRowData}
          columnDefs={colDefs}
          pagination={true}
          rowSelection="single"
        />
      </div>
    </div>
  );
}
