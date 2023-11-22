import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Routes } from "@/shared/config/index";
import useAuth from "@/shared/hooks/useAuth";


const RequireAuth = () => {
  const location = useLocation();
  const { user } = useAuth();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={Routes.login.path} state={{ from: location }} replace />
  );
};

export default RequireAuth;
