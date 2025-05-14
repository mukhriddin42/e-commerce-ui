import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const LayoutAbout = () => {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutAbout;
