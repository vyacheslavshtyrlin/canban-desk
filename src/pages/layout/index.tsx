import React from "react";
import { Outlet } from "react-router";
import { HeaderComponent } from "../../widgets/components/index";
const { Header } = HeaderComponent;

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className=" mx-2 p-4">
        <Outlet />
      </div>
    </>
  );
};

export default React.memo(AppLayout);


