import React, { useState } from "react";
import qulupnay from "src/assets/Home/qulupnay.png";
import olma from "src/assets/Home/olma.png";
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

const featuredItems = [
  { name: "Cake & Milk", items: 26, img: qulupnay, bg: "bg-green-50" },
  { name: "Organic Kiwi", items: 28, img: olma, bg: "bg-[#F2FCE4]" },
  { name: "Peach", items: 14, img: olma, bg: "bg-[#FFFCEB]" },
  { name: "Red Apple", items: 54, img: olma, bg: "bg-[#ECFFEC]" },
  { name: "Snack", items: 56, img: olma, bg: "bg-[#FFF3FF]" },
  { name: "Vegetables", items: 72, img: olma, bg: "bg-[#FFF3EB]" },
  { name: "Strawberry", items: 36, img: olma, bg: "bg-[#F2FCE4]" },
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

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] gap-7">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-lg p-6 flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105 cursor-pointer`}
          >
            <div className="mb-4">
              <img
                src={item.img}
                className="w-20 h-20 object-contain"
                alt={item.name}
              />
            </div>
            <h3 className="text-gray-800 font-medium text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured_categories;
