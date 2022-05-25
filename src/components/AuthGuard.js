import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { AuthContext } from "../context/AuthContext";

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <>{children}</>;
}

export default AuthGuard;
