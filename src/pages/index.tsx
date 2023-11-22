import { lazy } from "react";
import { Route, Routes } from "react-router";
import RequireAuth from "@/pages/RequireAuth";
import { Routes as r } from "@/shared/config/index";
import AppLayout from "@/pages/layout/index";
const Login = lazy(() => import("@/pages/Login/index"));
const Register = lazy(() => import("@/pages/Register/index"));
const Main = lazy(() => import("./main/index"));

function Routing() {
  return (
    <Routes>
      <Route path={r.login.path} element={<Login />} />
      <Route path={r.register.path} element={<Register />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route path={r.base.path} element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routing;
