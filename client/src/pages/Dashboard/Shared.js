import React from "react";
import { Outlet, Link } from "react-router-dom";

const Shared = () => {
  return (
    <>
      <nav className="text-blue-500">
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">all jobs</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Shared;
