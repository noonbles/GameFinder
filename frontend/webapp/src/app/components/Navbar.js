"use client";

import React from "react";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  
} from "@heroicons/react/24/solid";

export default function Navbar() {
  

  return (
    <div className="navbar bg-base-100 h-10">
      <div className="flex-none">
        <details className="dropdown">
          <summary className="btn btn-square btn-ghost"><Bars3Icon className="w-5 h-5" /></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          GameFinder
        </a>
      </div>

      <div className="flex">
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="light" />
          <SunIcon className="swap-off fill-current w-7 h-7" />
          <MoonIcon className="swap-on fill-current w-7 h-7" />
        </label>
      </div>
    </div>
  );
}
