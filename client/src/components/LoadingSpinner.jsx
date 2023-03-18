import React from "react";

const LoadingSpinner = ({ center }) => {
  return (
    <div className={center ? "flex justify-center items-center mx-auto" : "flex justify-center items-center"}>
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;


