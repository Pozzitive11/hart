import { Footer } from "components/footer";
import { Header } from "components/header";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
