import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navigation, SideDrawer,  MobileOverlay, Logo } from "../../components";

const Shared = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row">
        <div className="">
          <SideDrawer />
        </div>
        <div className="order-3 md:order-2 flex-1 flex flex-col">
          <div className="block md:hidden">
            <MobileOverlay   />
          </div>
          <Navigation className="h-24 md:h-6rem" />
          <div className="w-full px-0 md:px-2 py-8 flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Shared;




