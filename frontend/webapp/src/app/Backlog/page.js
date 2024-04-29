"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

//i think we might have to make a new table component for this one later 💀
export default function Page() {
  const [rowData, setRowData] = useState([
    {
      Name: "The Witcher 3: Wild Hunt",
      "Date Added": "May 19, 2015", //might change this to mm-dd-yyyy honestly
      "Review Score": 94,
      "Average Play Time": 50.5,
    },
    {
      Name: "Grand Theft Auto V",
      "Date Added": "September 17, 2013",
      "Review Score": 97,
      "Average Play Time": 45.5,
    },
    {
      Name: "Red Dead Redemption 2",
      "Date Added": "October 26, 2018",
      "Review Score": 97,
      "Average Play Time": 60.2,
    },
    {
      Name: "The Legend of Zelda: Breath of the Wild",
      "Date Added": "March 3, 2017",
      "Review Score": 97,
      "Average Play Time": 50.0,
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "Date Added" },
    { field: "Review Score" },
    { field: "Average Play Time" },
  ]);

  return (
    <div className="flex flex-col w-screen h-screen backgroundImg gap-5">
      <Navbar />

      <div className="ag-theme-quartz flex justify-center h-full p-5">
        <AgGridReact className="w-3/5" rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}
