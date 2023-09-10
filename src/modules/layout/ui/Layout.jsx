import { Footer } from "components/footer";
import { Header } from "components/header";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
