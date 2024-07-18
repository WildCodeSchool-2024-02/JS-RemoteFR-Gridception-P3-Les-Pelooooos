import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute() {
  const { auth } = useAuth();

  if (!auth || auth.user.role !== "admin") {
    return <Navigate to="/connexion" replace />;
  }

  return <Outlet />;
}