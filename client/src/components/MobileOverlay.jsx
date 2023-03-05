import React from "react";
import { useGlobalContext } from "../context/context";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { CgCloseO } from "react-icons/cg";

const MobileOverlay = () => {
    const {sideBarOpen, toggleSidebar} = useGlobalContext();
  return (
    <div className="block lg:hidden">
      <div className={sideBarOpen ? "overlay z-99 opacity-100": "overlay"}>
        <div className="panel w-[90vw] h-[95vh]">
          <button
            type="button"
            className="overlay-btn absolute top-10 left-10"
            onClick={toggleSidebar}
          >
            <CgCloseO />
          </button>
          <header>
            <Logo />
          </header>
          <div className="pt-8 flex flex-col">nav links</div>
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;

