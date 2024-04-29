"use client";

import {React, useEffect, useState} from "react";
import {
  Bars3Icon,
  SunIcon,
  MoonIcon,
  
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {

  const [islight, setLight] = useState(null)

  useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('islight'))
      setLight(saved)
  }, [])
  useEffect(() => {
    if(typeof islight == "boolean"){
      localStorage.setItem('islight', JSON.stringify(islight));      
    }
  }, [islight])
  

  return (
    <div className="navbar bg-base-100 h-10">
      <div className="flex-none">
        <details className="dropdown">
          <summary className="btn btn-square btn-ghost"><Bars3Icon className="w-5 h-5" /></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link href='/Backlog'>Backlog</Link>
            </li>
            <li>
              <Link href='/GameSelector'>Game Selector</Link>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href='/'>
          GameFinder
        </Link>
      </div>

      <div className="flex">
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" checked={islight} value="light" onChange={() => setLight(!islight)}/>
          <SunIcon className="swap-off fill-current w-7 h-7" />
          <MoonIcon className="swap-on fill-current w-7 h-7" />
        </label>
      </div>
    </div>
  );
}
