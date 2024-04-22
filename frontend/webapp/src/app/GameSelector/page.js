import React from "react";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className="h-screen w-screen backgroundImg">
      <Navbar />

      <div className="flex h-1/2 justify-center items-center">
      <div className="card w-96 bg-gradient-to-r from-base-100 to-base-200 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h1 className="card-title justify-center">GAME NAME</h1>
              <p>draft</p>
            </div>
          </div>
      </div>
    </div>
  );
}
