import React from "react";
// import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import ShopCategory from "../components/Shop/ShopCategory";
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
      <div className="w-full overflow-x-hidden">
        <div className="container flex flex-col">
          <Tabpanel />
          <ShopCategory />
          <Product_card />
          <Deals_of_the_day />
        </div>
      </div>
    </>
  );
};

export default Home;
