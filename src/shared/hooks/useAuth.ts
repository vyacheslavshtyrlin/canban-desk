import { useNavigate } from "react-router-dom";
import { getLocalStorageObject } from "@/shared/utils";
import { Routes } from "../config/routesConfig";

const useAuth = () => {
  const nav = useNavigate();
  const { state } = getLocalStorageObject("user");
  const user = state ? state.user : false;

  const checkAuth = () => {
    if (user) nav(Routes.base.path);
  };

  return {
    user,
    checkAuth,
  };
};

export default useAuth;
