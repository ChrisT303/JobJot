import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiAlignLeft, BiCaretDownCircle } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="h-24 lg:h-6rem flex items-center justify-between shadow-md w-full md:sticky md:top-0">
      <div className="flex items-center w-90vw">
        <button
          type="button"
          className="bg-transparent border-transparent text-2xl text-[#2cb1bc] cursor-pointer flex items-center pr-2 mx-4"
          onClick={() => console.log("sidebar is toggling")}
        >
          <BiAlignLeft />
        </button>
      </div>
      <div className="md:hidden mx-4">
        <Logo />
      </div>
      <div className="hidden md:block mx-4">
        <h3 className="m-0 font-bold">Dashboard</h3>
      </div>
      <div class="relative">
  <button type="button" class="btn bg-[#bef8fd] px-4 py-2 rounded-md mr-2">
    <FaRegUserCircle class="inline-block mr-2" />
    <span class="inline-block">Chris</span>
    <BiCaretDownCircle class="inline-block ml-2" />
  </button>
  <div class="absolute top-16 right-0 w-48 px-2 py-1 text-center bg-white shadow-md rounded-md">
    <button type="button" class="btn btn-sm w-full bg-transparent border-transparent text-[#2cb1bc] uppercase cursor-pointer" onClick={() => console.log("logout")}>
      Logout
    </button>
  </div>
</div>

    </div>
  );
};

export default Navigation;
