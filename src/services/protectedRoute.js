import { Navigate } from "react-router-dom";
import { autoLogout } from "./autoLogout";

export const ProtectedRoutes = (Component) => {
  const validToken = autoLogout();
  if (!validToken) return <Navigate to="/" replace />;
  return <Component />;
};