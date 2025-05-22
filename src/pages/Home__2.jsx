import React from "react";
import Product_card from "../components/Home2/Product_card.jsx";
import DailyBestSells from "../components/Home2/Daily_best_sells.jsx";
import DealsOfTheDay from "../components/Home2/Deals_of_the_day.jsx";
import Tabpanel from "../components/Home2/Tabpanel.jsx";
import TredingProducts from "../components/TrendingProducts/TrendingProducts.jsx";
import StayHome from "../components/StayHome/StayHome.jsx";
import Feature_Category from "../components/Home2/Feature_Category.jsx";

const Home2 = () => {
  return (
    <div className="container m-auto ">
      <Tabpanel />

      <Feature_Category />

      <Product_card />

      <DailyBestSells />

      <DealsOfTheDay />

      <TredingProducts />

      {/* <StayHome /> */}
    </div>
  );
};

export default Home2;
