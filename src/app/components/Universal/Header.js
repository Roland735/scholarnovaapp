import Image from "next/image";
import { FaBell, FaMoon } from "react-icons/fa";
import React from "react";
import ThemeToogle from "./ThemeToogle";

function Header(props) {

  return (
    <div className="md:flex justify-between px-5 py-3 hidden w-full border-2 border-emerald-400 rounded-md  items-center  dark:dark:bg-slate-950   shadow-2xl light-border">
      <div className="text-cyan-800 dark:text-cyan-200">
        <span>{props.name} {props.lastname}</span>, <span className=" capitalize">{props.role}</span>,
        <span> Grade 3</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-2xl text-cyan-900 space-x-2 flex">
          <ThemeToogle />
          <div className="text-cyan-800 dark:text-cyan-50">
            <FaBell />
          </div>
        </div>
        <div className="relative h-14 w-14 rounded-full border-emerald-600 border-2 ">
          <Image src="/Roland.jpg" fill className=" rounded-full" alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Header;
