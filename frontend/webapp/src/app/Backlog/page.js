import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

//i think we might have to make a new table component for this one later 💀
export default function Page(){
    return (
        <div className="flex flex-col w-screen h-screen backgroundImg gap-5">
            <Navbar/>

            <Table rowCount={100} showCompleted={true}/> 
        </div>
    )
}