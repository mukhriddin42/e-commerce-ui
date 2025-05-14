import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import Home from ".../pages/Home2";

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Menu />
      <Home />
      <Outlet />
    </>
  );
};

export default Layout;
