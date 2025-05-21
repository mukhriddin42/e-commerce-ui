import React, { useState } from "react";
// import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
// import ShopCategory from "../components/Shop/ShopCategory";
// import Category from "../components/Category/Category";
// import StayHome from "../components/StayHome/StayHome";
// import Nav from "../components/Nav/Nav";
// import Menu from "../components/Menu/Menu";
import Tabpanel from "../components/Home2/Tabpanel";
import Deals_of_the_day from "../components/Home2/Deals_of_the_day";
import Product_card from "../components/Home2/Product_card";

const Home = () => {
  return (
    <>
      {/* <Nav />
      <Menu /> */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="flex flex-col w-full gap-5">
            {/* <ShopCategory /> */}
            <Tabpanel />
            <Product_card />
            <Deals_of_the_day />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
