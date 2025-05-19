import React from "react";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import ShopCategory from "../components/Shop/ShopCategory";
import Category from "../components/Category/Category";

const Home = () => {
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[90%] grid justify-center mt-50">
        <Category />
        <div className="flex flex-col w-full my-4 gap-3">
          <TrendingProducts />
          <ShopCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
