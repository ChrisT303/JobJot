import React from "react";
import { useGlobalContext } from "../context/context";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const SideDrawer = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();

  return (
    <AnimatePresence>
      <div className="hidden md:block">
        {showSidebar && (
          <motion.div
            className="fixed h-screen top-0 left-0 z-50 bg-white flex flex-col justify-center"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <header className="flex items-center justify-center h-24">
              <Logo />
            </header>

            <div className="px-8 pt-6 pb-8">
              {links.map((link) => {
                const { id, path, text, icon } = link;
                return (
                  <NavLink
                    key={id}
                    to={path}
                    className="flex items-center px-4 py-6 text-[#2cb1bc] leading-6 focus:outline-none group"
                    activeClassName="bg-[#bef8fd] text-white"
                    onClick={() => toggleSidebar()}
                  >
                    <div className="mr-3 transition-colors group-hover:bg-[#bef8fd] group-hover:text-white">
                      {icon}
                    </div>
                    <span className="transition-colors group-hover:text-[#bef8fd]">
                      {text}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default SideDrawer;





