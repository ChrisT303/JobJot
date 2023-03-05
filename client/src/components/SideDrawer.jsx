import React from 'react';
import { useGlobalContext } from '../context/context';
import Logo from './Logo';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const SideDrawer = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();

  return (
    <>
      {showSidebar && (
        <div
          className="fixed h-screen top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:transform-none lg:static lg:h-auto lg:pt-0 lg:w-1/3 bg-white shadow"
          style={{ transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)' }}
        >
          <div className="w-full">
            <div className="px-8 py-6 border-b h-12">
              <Logo />
            </div>
            <div className="px-8 pt-6 pb-8">
              {links.map((link) => {
                const { id, path, text, icon } = link;
                return (
                  <NavLink
                  key={id}
                  to={path}
                  className="block px-4 py-2 text-[#2cb1bc] hover:bg-[#bef8fd] hover:text-white text-2xl leading-6 focus:outline-none"
                  activeClassName="bg-[#bef8fd] text-white"
                  onClick={() => toggleSidebar()}
                >
                  {icon}
                  <span className="ml-3">{text}</span>
                </NavLink>
                
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideDrawer;


