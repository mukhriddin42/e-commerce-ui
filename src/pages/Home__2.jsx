import React from "react";
import Product_card from "../components/Home2/Product_card.jsx";
import DailyBestSells from "../components/Home2/Daily_best_sells.jsx";
import DealsOfTheDay from "../components/Home2/Deals_of_the_day.jsx";
import Tabpanel from "../components/Home2/Tabpanel.jsx";

const Home2 = () => {
  return (
    <div className="container m-auto ">
      <section>
        <Tabpanel />
      </section>
      <section>
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
              <h3 className="text-gray-800 font-medium text-lg">
                Organic Kiwi
              </h3>
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
      </section>
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/piyoz.png')] bg-cover bg-center">
              <div className="absolute inset-0 p-8 py-13 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#253D4E] text-2xl font-bold leading-tight">
                    Everyday Fresh &<br />
                    Clean with Our
                    <br />
                    Products
                  </h3>
                </div>
                <div>
                  <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/qulupnaysharbat.png')] bg-cover bg-center">
              <div className="absolute inset-0 p-8 py-11 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#2d3748] text-2xl font-bold leading-tight">
                    Make your Breakfast
                    <br />
                    Healthy and Easy
                  </h3>
                </div>
                <div>
                  <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/sabzavotlar.png')] bg-cover bg-center">
              <div className="absolute inset-0 p-8 py-11 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#2d3748] text-2xl font-bold leading-tight">
                    Fresh Vegetables
                    <br />
                    For Your Healthy
                    <br />
                    Recipes
                  </h3>
                </div>
                <div>
                  <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Product_card />
      </section>
      <section>
        <DailyBestSells />
      </section>
      <section>
        <DealsOfTheDay />
      </section>
    </div>
  );
};

export default Home2;
