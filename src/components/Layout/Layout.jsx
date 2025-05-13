import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
