import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navigation, SideDrawer, MobileOverlay } from "../../components";

const Shared = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row h-screen">
        <div className="">
          <SideDrawer />
        </div>
        <div className="order-3 md:order-2 flex-1 flex flex-col">
          <div className="block md:hidden">
            <MobileOverlay />
          </div>
          <Navigation className="h-24 md:h-6rem" />
          <div className="w-full px-0 md:px-2 py-8 flex-1 overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Shared;





