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
      <div className="container mx-auto  py-8 mt-5">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-7">
          <div className="bg-green-50 rounded-lg flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/burger.png"
                className="w-28 h-28 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Cake & Milk</h3>
            <p className="text-gray-500 text-sm">26 items</p>
          </div>
          <div className="bg-[#F2FCE4] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/kiwi.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Organic Kiwi</h3>
            <p className="text-gray-500 text-sm">28 items</p>
          </div>
          <div className="bg-[#FFFCEB] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/xurmo.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Peach</h3>
            <p className="text-gray-500 text-sm">14 items</p>
          </div>
          <div className="bg-[#ECFFEC] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Red Apple</h3>
            <p className="text-gray-500 text-sm">54 items</p>
          </div>
          <div className="bg-[#FFF3FF] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/snack.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Snack</h3>
            <p className="text-gray-500 text-sm">56 items</p>
          </div>
          <div className="bg-[#FFF3EB] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/caram.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Vegetables</h3>
            <p className="text-gray-500 text-sm">72 items</p>
          </div>
          <div className="bg-[#F2FCE4] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/qulupnay.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Strawberry</h3>
            <p className="text-gray-500 text-sm">36 items</p>
          </div>
        </div>
      </div>

      <Feature_Category />

      <Product_card />

      <DailyBestSells />

      <DealsOfTheDay />

      <TredingProducts />

      <StayHome />
    </div>
  );
};

export default Home2;
