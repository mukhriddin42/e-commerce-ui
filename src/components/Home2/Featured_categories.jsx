import React, { useState } from "react";

import { LuSend } from "react-icons/lu";
import {
  CakeIcon,
  Coffee,
  Bone,
  Apple,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "Cake & Milk", icon: <CakeIcon className="w-4 h-4 mr-1" /> },
  { name: "Coffee & Teas", icon: <Coffee className="w-4 h-4 mr-1" /> },
  { name: "Pet Foods", icon: <Bone className="w-4 h-4 mr-1" /> },
  { name: "Vegetables", icon: <Apple className="w-4 h-4 mr-1" /> },
];

const scrollLeft = () => {
  document.getElementById("categories-container").scrollLeft -= 200;
};

const scrollRight = () => {
  document.getElementById("categories-container").scrollLeft += 200;
};

const Featured_categories = () => {
  const [activeCategory, setActiveCategory] = useState("Pet Foods");
  return (
    <div className="mb-4">
      <div className="w-full mt-8 mb-4">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 whitespace-nowrap">
              Featured Categories
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center w-full">
              <div className="relative w-full">
                <div
                  id="categories-container"
                  className="flex items-center gap-4 overflow-x-auto scrollbar-hide w-full py-1"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`flex items-center gap-1 whitespace-nowrap py-2 px-3 text-sm font-medium transition-colors ${
                        activeCategory === category.name
                          ? "text-green-600 border-b-2 border-green-600 cursor-pointer"
                          : "text-gray-600 hover:text-green-600 cursor-pointer"
                      }`}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className="hidden sm:flex items-center space-x-2 absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 bg-white px-1">
                  <button
                    onClick={scrollLeft}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                  >
                    <ChevronLeft className="w-6 h-6 cursor-pointer" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                  >
                    <ChevronRight className="w-6 h-6 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-7">
          <div className="bg-green-50 rounded-lg flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
                className="w-28 h-28 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Cake & Milk</h3>
            <p className="text-gray-500 text-sm">26 items</p>
          </div>
          <div className="bg-[#F2FCE4] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Organic Kiwi</h3>
            <p className="text-gray-500 text-sm">28 items</p>
          </div>
          <div className="bg-[#FFFCEB] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
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
                src="src/assets/Home/olma.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Snack</h3>
            <p className="text-gray-500 text-sm">56 items</p>
          </div>
          <div className="bg-[#FFF3EB] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Vegetables</h3>
            <p className="text-gray-500 text-sm">72 items</p>
          </div>
          <div className="bg-[#F2FCE4] rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer">
            <div className="mb-4">
              <img
                src="src/assets/Home/olma.png"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">Strawberry</h3>
            <p className="text-gray-500 text-sm">36 items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_categories;
