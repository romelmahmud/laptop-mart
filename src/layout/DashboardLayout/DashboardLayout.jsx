import React from "react";
import Header from "../../shared/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
