import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ redirectTo = "/login" }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Verificando permisos...</div>;

  if (!isAuthenticated) {
    console.log("si");
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
