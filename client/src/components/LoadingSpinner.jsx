import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = ({center}) => {
  return (
    <div className={center? 'flex justify-center items-center mx-auto': "flex justify-center items-center"}>
      <FontAwesomeIcon icon={faCircleNotch} className="animate-spin h-16 w-16 text-blue-500" style={{marginRight: "0.5rem"}} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

