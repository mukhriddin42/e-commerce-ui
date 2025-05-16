import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
