import React from "react";
import { useGlobalContext } from "../context/context";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { CgCloseO } from "react-icons/cg";

const MobileOverlay = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();

  const handleOverlayClick = () => {
    toggleSidebar();
  };

  return (
    <div className="md:hidden">
      <div className={showSidebar ? "overlay" : "hidden"}>
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
          <div className="pt-8 flex flex-col">
            {links.map((link) => {
              const { id, path, text, icon } = link;
              return (
                <NavLink
                  key={id}
                  to={path}
                  className="flex items-center px-4 py-6 text-[#2cb1bc] hover:bg-[#bef8fd] hover:text-white text-2xl leading-6"
                  activeClassName="bg-[#bef8fd] text-white"
                  onClick={handleOverlayClick}
                >
                  {icon}
                  <span className="ml-3">{text}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;
