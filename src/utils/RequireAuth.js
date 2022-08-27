import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useLocation, Navigate } from "react-router-dom";

// HOC component
const RequireAuth = ({ children }) => {
  const { isAuth } = useStateContext();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
