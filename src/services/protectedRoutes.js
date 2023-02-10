import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedRoutes = (Component) => {
  const { state } = useAuthContext();

  if (!state?.user) return <Navigate to="/" replace />;

  return <Component />;
};
