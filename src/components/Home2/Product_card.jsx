"use client";

import { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";

function ProductCard({
  title,
  thumbnail,
  category,
  price,
  discountPercentage,
  rating,
  brand,
}) {
  const discountedPrice = price - price * (discountPercentage / 100);

  return (
    <div className="bg-white rounded-[15px] border-[#ECECEC] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-contain p-4"
        />

        {discountPercentage > 0 && (
          <span className="absolute top-0 left-0 text-xs font-medium text-white px-4 py-2 w-[60.23px] h-[31px] rounded-tl-[15px] rounded-br-[20px] bg-[#F74B81]">
            -{Math.round(discountPercentage)}%
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-[#ADADAD] mb-1">{category}</div>
        <h3 className="font-medium text-[#253D4E] mb-1 line-clamp-2 h-12">
          {title}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-3 h-3 ${
                  i < Math.round(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <div className="text-xs flex items-center gap-2 text-[#B6B6B6] mb-2">
          By <p className="text-xs text-[#3BB77E]">{brand}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold text-[#3BB77E]">
              ${discountedPrice.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-xs text-[#ADADAD] line-through ml-2">
                ${price.toFixed(2)}
              </span>
            )}
          </div>

          <button className="bg-[#DEF9EC] hover:bg-[#B5E4D6] text-[#3BB77E] text-x font-medium px-3 py-1 rounded flex items-center gap-2 transition-colors duration-200 cursor-pointer">
            <IoCartOutline size={26} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const uniqueCategories = [
          "All",
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Popular Products
          </h2>

          <div className="flex flex-wrap items-center border-b border-gray-100 pb-3 mb-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`mr-6 mb-2 pb-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
