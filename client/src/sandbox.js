import React from "react";
import { FaRegUserCircle } from "react-icons/io5";
import { BiAlignLeft, BiCaretDownCircle } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="h-24 lg:h-6rem flex items-center justify-between shadow-md w-full md:sticky md:top-0">
      <div className="flex items-center w-90vw">
        <button
          className="bg-transparent border-transparent text-2xl text-[#2cb1bc] cursor-pointer flex items-center pr-2 flex-grow"
          onClick={() => console.log("sidebar is toggling")}
        >
          <BiAlignLeft />
        </button>
      </div>
        <div className="md:hidden ">
        <h3 className="m-0 font-bold">Dashboard</h3>
        </div>
      <div className="hidden md:block">
          <Logo />
      </div>
    </div>
  );
};

export default Navigation