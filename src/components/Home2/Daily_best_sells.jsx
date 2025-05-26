"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";

export default function DailyBestSells() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        const formattedProducts = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          image: product.thumbnail,
          rating: Math.round(product.rating),
          price: product.price,
          originalPrice: product.price + 10,
          sold: Math.floor(Math.random() * 100),
          total: 100,
          tag: {
            text: "Hot",
            color: "bg-[#3BB77E]",
          },
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / slidesToShow);

  const slideLeft = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const startIdx = currentSlide * slidesToShow;
  const visibleProducts = products.slice(startIdx, startIdx + slidesToShow);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className="w-full lg:w-1/4 rounded-lg overflow-hidden relative min-h-[200px] sm:min-h-[250px] lg:min-h-0"
          style={{
            backgroundImage: "url('https://via.placeholder.com/400x250')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-4 sm:p-6 h-full flex flex-col justify-between relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
              Bring nature
              <br />
              into your
              <br />
              home
            </h2>
            <button className="mt-4 bg-[#3BB77E] hover:bg-[#2A9D5A] cursor-pointer text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md w-max transition-colors duration-200 text-sm sm:text-base">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Daily Best Sells
            </h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="relative p-3 sm:p-4">
                    {product.tag && (
                      <span
                        className={`absolute top-0 left-0 flex items-center text-xs font-medium text-white px-3 py-2 w-[79.23px] h-[31px] rounded-tl-[15px] rounded-br-[20px] ${product.tag.color}`}
                      >
                        {product.tag.text}
                      </span>
                    )}
                    <div className="flex justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 sm:h-40 object-contain transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="font-medium text-sm sm:text-base text-gray-800 mb-1 line-clamp-2 h-10 sm:h-12 hover:text-green-600 transition-colors duration-200">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-[#3BB77E] text-sm sm:text-base">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500 line-through ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          Sold: {product.sold}/{product.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="bg-[#3BB77E] h-1.5 rounded-full"
                          style={{
                            width: `${(product.sold / product.total) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full bg-[#3BB77E] hover:bg-[#2A9D5A] cursor-pointer text-white py-1.5 sm:py-2 rounded flex items-center justify-center gap-1 sm:gap-2 transition-colors duration-200 text-xs sm:text-sm">
                      <ShoppingCart size={14} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={slideLeft}
              disabled={currentSlide === 0}
              className={`absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10 ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>

            <button
              onClick={slideRight}
              disabled={currentSlide >= totalSlides - 1}
              className={`absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10 ${
                currentSlide >= totalSlides - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
