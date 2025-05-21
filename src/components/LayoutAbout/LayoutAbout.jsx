import React, { useState } from "react";
// import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterSection from "../FooterSection/FooterSection";
import Category from "../Category/Category";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import StayHome from "../StayHome/StayHome";

const LayoutAbout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* <Header /> */}
      <Nav onToggleMenu={toggleMenu} />
      <Menu onToggleMenu={toggleMenu} />
      <div className="flex px-3 gap-4 mt-50">
        {isOpen && <Category />}
        <Outlet />
      </div>
      <div className="py-2 px-20">
        <TrendingProducts />
        <StayHome />
      </div>
      <Footer />
      <FooterSection />
    </>
  );
};

export default LayoutAbout;
