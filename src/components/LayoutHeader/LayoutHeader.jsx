import React from "react";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterSection from "../FooterSection/FooterSection";

const LayoutHeader = () => {
  return (
    <>
      <Nav />
      <Menu />
      <Outlet />
      <Footer />
      <FooterSection />
    </>
  );
};

export default LayoutHeader;
