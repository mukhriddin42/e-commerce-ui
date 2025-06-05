"use client";
import { useEffect, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#253D4E] leading-tight">
          Deals Of The Day
        </h1>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <p className="text-[#7E7E7E] cursor-pointer hover:text-[#3BB77E] transition-colors">
            All Deals
          </p>
          <FaAngleRight className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>

      {/* Products Grid with Flex */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-20 sm:gap-x-8 sm:gap-y-24 lg:gap-x-10 lg:gap-y-28">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center relative pb-16 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-2rem)] max-w-[274px]"
          >
            {/* Product Image */}
            <div className="w-full aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4">
              <img
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="w-[95%] max-w-[260px] min-h-[145px] rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 absolute bg-white -bottom-10 flex flex-col justify-center px-4 py-4">
              {/* Title */}
              <h3 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-2 mb-2 leading-tight">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <Star
                  size={14}
                  className="text-yellow-400 fill-yellow-400 sm:w-4 sm:h-4"
                />
                <span className="text-gray-500 text-xs sm:text-sm ml-1">
                  ({product.rating.toFixed(1)})
                </span>
              </div>

              {/* Brand */}
              <div className="text-xs sm:text-sm text-gray-500 mb-3">
                By{" "}
                <span className="text-[#3BB77E] font-medium">
                  {product.brand}
                </span>
              </div>

              {/* Price and Add */}
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-[#3BB77E] font-semibold text-base sm:text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm line-through">
                    $
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                </div>

                <button className="flex items-center bg-green-100 hover:bg-green-200 active:bg-green-300 cursor-pointer text-[#3BB77E] px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-all duration-200 text-xs sm:text-sm font-medium hover:scale-105 active:scale-95">
                  <ShoppingCart size={12} className="mr-1 sm:w-4 sm:h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loading State */}
      {products.length === 0 && (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-20 sm:gap-x-8 sm:gap-y-24 lg:gap-x-10 lg:gap-y-28">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative pb-16 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-2rem)] max-w-[274px] animate-pulse"
            >
              <div className="w-full aspect-square rounded-xl bg-gray-200"></div>
              <div className="w-[95%] max-w-[260px] min-h-[145px] rounded-2xl border border-gray-200 absolute bg-white -bottom-10 flex flex-col justify-center px-4 py-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
