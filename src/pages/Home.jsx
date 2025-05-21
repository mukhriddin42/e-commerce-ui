import React, { useState } from "react";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import ShopCategory from "../components/Shop/ShopCategory";
import Category from "../components/Category/Category";
import StayHome from "../components/StayHome/StayHome";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Menu/Menu";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Nav onToggleMenu={toggleMenu} />
      <Menu onToggleMenu={toggleMenu} />
      <div className="w-full flex justify-center mt-50">
        <div className="w-full max-w-screen-xl px-4">
          <div>{isOpen && <Category />}</div>
          <div className="flex flex-col w-full my-4 gap-5">
            <ShopCategory />
            <TrendingProducts />
            <StayHome />
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Home;
