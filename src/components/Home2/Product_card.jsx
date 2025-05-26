"use client";

import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

const products = [
  {
    id: "1",
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "src/assets/Home/Link → product-1-1.jpg.png",
    category: "Snack",
    price: 28.85,
    originalPrice: 32.8,
    rating: 4,
    reviews: 4,
    vendor: "NestFood",
    tag: { text: "Hot", color: "bg-pink-500" },
    type: "Vegetables",
  },
  {
    id: "2",
    name: "All Natural Italian-Style Chicken Meatballs",
    image: "src/assets/Home/Link → product-2-1.jpg.png",
    category: "Meat Foods",
    price: 52.85,
    originalPrice: 55.8,
    rating: 5,
    reviews: 32,
    vendor: "Stouffer",
    tag: { text: "Sale", color: "bg-blue-500" },
    type: "Meats",
  },
  {
    id: "3",
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    image: "src/assets/Home/Link → product-3-1.jpg.png",
    category: "Snack",
    price: 48.85,
    originalPrice: 52.8,
    rating: 4,
    reviews: 0,
    vendor: "StarKist",
    tag: { text: "New", color: "bg-green-500" },
    type: "Snacks",
  },
  {
    id: "4",
    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    image: "src/assets/Home/Link → product-4-1.jpg.png",
    category: "Vegetables",
    price: 17.85,
    originalPrice: 19.8,
    rating: 4,
    reviews: 0,
    vendor: "NestFood",
    type: "Vegetables",
  },
  {
    id: "5",
    name: "Blue Diamond Almonds Lightly Salted Vegetables",
    image: "src/assets/Home/Link → product-5-1.jpg.png",
    category: "Pet Foods",
    price: 23.85,
    originalPrice: 25.8,
    rating: 5,
    reviews: 0,
    vendor: "NestFood",
    tag: { text: "-14%", color: "bg-orange-500" },
    type: "Pet Foods",
  },
  {
    id: "6",
    name: "Organic Frozen Triple Berry Blend",
    image: "src/assets/Home/Link → product-6-1.jpg.png",
    category: "Fruits",
    price: 32.85,
    originalPrice: 33.8,
    rating: 4,
    reviews: 5,
    vendor: "NestFood",
    type: "Fruits",
  },
  {
    id: "7",
    name: "Oroweat Country Buttermilk Bread",
    image: "src/assets/Home/Link → product-7-1.jpg.png",
    category: "Milks & Dairies",
    price: 12.85,
    originalPrice: 13.8,
    rating: 4,
    reviews: 12,
    vendor: "Stouffer",
    type: "Milks & Dairies",
  },
  {
    id: "8",
    name: "Organic Earl Grey Tea",
    image: "src/assets/Home/Link → product-8-1.jpg.png",
    category: "Coffee & Teas",
    price: 15.85,
    originalPrice: 16.8,
    rating: 5,
    reviews: 8,
    vendor: "StarKist",
    type: "Coffee & Teas",
  },
  {
    id: "9",
    name: "Gorton's Beer Battered Fish Fillets with soft paper",
    image: "src/assets/Home/Link → product-9-1.jpg.png",
    category: "Coffee & Teas",
    price: 23.85,
    originalPrice: 25.8,
    rating: 5,
    reviews: 4.0,
    vendor: "Old EI Paso",
    tag: { text: "Hot", color: "bg-pink-500" },
    type: "Coffee & Teas",
  },
  {
    id: "10",
    name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    image: "src/assets/Home/Link → product-10-1.jpg.png",
    category: "Fruits",
    price: 22.85,
    originalPrice: 24.8,
    rating: 2.0,
    reviews: 5,
    vendor: "Tyson",
    type: "Fruits",
  },
];

function ProductCard({
  name,
  image,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  vendor,
  tag,
}) {
  const discount =
    originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <div className="bg-white rounded-[15px] border-[#ECECEC] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-48 object-contain p-4"
        />

        {tag && (
          <span
            className={`absolute top-0 left-0 text-xs font-medium text-white px-3 py-2 w-[60.23px] h-[31px] rounded-tl-[15px] rounded-br-[20px] bg-[#F74B81] ${tag.color}`}
          >
            {tag.text}
          </span>
        )}

        {!tag && discount > 0 && (
          <span className="absolute top-0 left-0 text-xs font-medium text-white px-4 py-2 w-[60.23px] h-[31px] rounded-tl-[15px] rounded-br-[20px] bg-[#F74B81]">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-[#ADADAD] mb-1">{category}</div>
        <h3 className="font-medium text-[#253D4E] mb-1 line-clamp-2 h-12">
          {name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-3 h-3 ${
                  i < rating
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
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>

        <div className="text-xs flex items-center gap-2 text-[#B6B6B6] mb-2">
          By <p className="text-xs text-[#3BB77E]">{vendor}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold text-[#3BB77E]">
              ${price.toFixed(2)}
            </span>
            {originalPrice > price && (
              <span className="text-xs text-[#ADADAD] line-through ml-2">
                ${originalPrice.toFixed(2)}
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
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Milks & Dairies",
    "Coffee & Teas",
    "Pet Foods",
    "Meats",
    "Vegetables",
    "Fruits",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.type === activeCategory);

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
