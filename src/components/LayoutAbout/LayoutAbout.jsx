import React from "react";
// import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterSection from "../FooterSection/FooterSection";
import Category from "../Category/Category";

const LayoutAbout = () => {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <Menu />
      <div className="flex px-3 gap-4 mt-50">
        <Category />
        <Outlet />
      </div>
      <Footer />
      <FooterSection />
    </>
  );
};

export default LayoutAbout;
