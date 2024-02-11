import { useLocation, Navigate } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

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
