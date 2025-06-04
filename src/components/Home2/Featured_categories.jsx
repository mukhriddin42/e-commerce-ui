import React, { useState, useEffect } from "react";
import { CakeIcon, Coffee, Bone, Apple } from "lucide-react";
import qulupnay from "src/assets/Home/qulupnay.png";
import olma from "src/assets/Home/olma.png";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const categories = [
  { name: "Cake & Milk", icon: <CakeIcon className="w-4 h-4 mr-1" /> },
  { name: "Coffes & Teas", icon: <Coffee className="w-4 h-4 mr-1" /> },
  { name: "Pet Foods", icon: <Bone className="w-4 h-4 mr-1" /> },
  { name: "Vegetables", icon: <Apple className="w-4 h-4 mr-1" /> },
];

const featuredItems = [
  { name: "Cake & Milk", items: 26, img: qulupnay, bg: "bg-green-50" },
  { name: "Oganic Kiwi", items: 28, img: olma, bg: "bg-[#F2FCE4]" },
  { name: "Peach", items: 14, img: olma, bg: "bg-[#FFFCEB]" },
  { name: "Red Apple", items: 54, img: olma, bg: "bg-[#ECFFEC]" },
  { name: "Snack", items: 56, img: olma, bg: "bg-[#FFF3FF]" },
  { name: "Vegetables", items: 72, img: olma, bg: "bg-[#FFF3EB]" },
  { name: "Strawberry", items: 36, img: olma, bg: "bg-[#F2FCE4]" },
];

const FeaturedCategories = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("Pet Foods");

  const visibleItems = isMobile ? featuredItems.slice(0, 2) : featuredItems;

  return (
    <div className="px-4 mb-10">
      <div className="container mx-auto py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Featured Categories
        </h2>

        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center text-sm font-medium ${
                activeCategory === cat.name
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-xl p-6 text-center shadow-sm hover:shadow-md transition`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-base font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">{item.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
