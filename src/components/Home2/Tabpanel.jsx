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

       
      </div>

      
    </>
  );
};

export default Tabpanel;
