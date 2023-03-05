import React from "react";
import { useGlobalContext } from "../context/context";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { CgCloseO } from "react-icons/cg";

const MobileOverlay = () => {
    const {showSidebar, toggleSidebar} = useGlobalContext();

    console.log("showSidebar:", showSidebar);
    const handleOverlayClick = () => {
      toggleSidebar();
    };
  return (
    <div className="md:hidden">
      <div className={showSidebar? "overlay": "hidden"}>
        <div className="panel w-[90vw] h-[95vh]">
          <button
            type="button"
            className="overlay-btn absolute top-10 left-10"
            onClick={handleOverlayClick}
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

