import React from "react";
import { useGlobalContext } from "../context/context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext()
    if (!user) {
        return <Navigate to="/landing" />;
    }
  return children;
};

export default ProtectedRoute;
