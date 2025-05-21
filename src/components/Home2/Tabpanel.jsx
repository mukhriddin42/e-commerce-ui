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

const slides = [
  {
    title: "Fresh Vegetables",
    subtitle: "Big discount",
    description: "Save up to 50% off on your first order",
    bg: "bg-[url('src/assets/Home/tabpanel.png')]",
  },
  {
    title: "Fresh Fruits",
    subtitle: "Healthy & Juicy",
    description: "Get 30% off on all fruit items",
    bg: "bg-[url('src/assets/Home/tabpanel2.png')]",
  },
];

const Tabpanel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Pet Foods");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          className={`container m-auto mt-3 relative h-[400px] md:h-[500px] bg-cover bg-center rounded-3xl transition-all duration-700 ${slides[currentSlide].bg}`}
        >
          <div className="absolute inset-0 rounded-3xl flex flex-col justify-start items-start py-32 px-4 ml-10 md:px-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              {slides[currentSlide].title}
            </h2>
            <h3 className="text-3xl md:text-5xl font-semibold text-gray-700 mt-2">
              {slides[currentSlide].subtitle}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              {slides[currentSlide].description}
            </p>

            <div className="mt-6 flex items-center gap-2 bg-white rounded-full shadow-md">
              <LuSend className="text-gray-500 ml-5" size={24} />
              <input
                type="email"
                placeholder="Your email address"
                className="outline-none px-2 py-2 md:px-3 md:py-4 rounded-full text-sm w-[130px] md:w-[220px]"
              />
              <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white text-sm px-4 py-3 md:px-5 md:py-4 rounded-full">
                Subscribe
              </button>
            </div>
          </div>

          <button
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-700 cursor-pointer" size={24} />
          </button>

          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-700 cursor-pointer" size={24} />
          </button>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-green-600 scale-110"
                    : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="w-full bg-white shadow-sm mt-7">
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
      </div>
    </>
  );
};

export default Tabpanel;
