import React from "react";
import { useGlobalContext } from "../context/context";

const AlertMessage = () => {
  const { alertMessage, alertType } = useGlobalContext();

  if (!alertMessage) {
    return null;
  }

  let className = "p-3 text-center mb-4 mt-4 rounded-md";

  switch (alertType) {
    case "success":
      className += " bg-green-100 text-green-800";
      break;
    case "danger":
      className += " bg-red-100 text-red-800";
      break;
    default:
      className += " bg-gray-100 text-gray-800";
      break;
  }

  return (
    <div className={className}>
      {alertMessage}
    </div>
  );
};

export default AlertMessage;

