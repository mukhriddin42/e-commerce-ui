"use client";
import { Star, ShoppingCart } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";

export default function ProductCards() {
  const products = [
    {
      id: "1",
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      image: "src/assets/Home/banner-5.png.png",
      rating: 4.0,
      vendor: "NestFood",
      price: 32.85,
      originalPrice: 33.8,
    },
    {
      id: "2",
      name: "Perdue Simply Smart Organics Gluten Free",
      image: "src/assets/Home/banner-6.png.png",
      rating: 4.0,
      vendor: "Old El Paso",
      price: 24.85,
      originalPrice: 26.8,
    },
    {
      id: "3",
      name: "Signature Wood-Fired Mushroom and Caramelized",
      image: "src/assets/Home/banner-6.png.png",
      rating: 3.0,
      vendor: "Progresso",
      price: 12.85,
      originalPrice: 13.8,
    },
    {
      id: "4",
      name: "Simply Lemonade with Raspberry Juice",
      image: "src/assets/Home/banner-6.png.png",
      rating: 3.0,
      vendor: "Yoplait",
      price: 15.85,
      originalPrice: 16.8,
    },
  ];

  return (
    <div className="py-7 container m-auto">
      <div className="mb-10 flex items-center justify-between flex-wrap">
        <h1 className="font-bold text-[32px] text-[#253D4E] leading-[38.4px] align-middle w-full sm:w-auto sm:text-[28px]">
          Deals Of The Day
        </h1>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <p className="text-[#7E7E7E] text-[16px] cursor-pointer w-full sm:w-auto">
            All Deals
          </p>
          <FaAngleRight className="text-gray-400" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center relative pb-16"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[340px] rounded-xl shadow-md"
              />
              <div className="w-[90%] max-w-[320px] h-[165px] rounded-2xl shadow-xl absolute bg-white -bottom-10 flex flex-col gap-1 justify-center px-4">
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex mb-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-gray-500 text-sm ml-1">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>

                <div className="text-sm text-gray-500 mb-2">
                  By <span className="text-[#3BB77E]">{product.vendor}</span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-[#3BB77E] font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-sm line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button className="flex items-center bg-green-100 hover:bg-green-200 cursor-pointer text-[#3BB77E] px-3 py-1 rounded-md transition-colors text-sm">
                    <ShoppingCart size={14} className="mr-1" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
