import React from "react";
import { useEffect, useState } from "react";
import bgImage from "../assets/Blogs/background.png";
import savat from "../assets/Blogs/Heading 2 → category-1.svg.png";
import searchIcon from "../assets/Blogs/search.png";
import axios from "axios";

const Blogs = () => {
  const [products, setproducts] = useState([]);

  

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setproducts(response.data.products);
      })
      .catch((error) => {
        console.error("xatolik", error);
      });
  }, []);

  return (
    <div id="blogs">
      <div className="container  m-auto">
        <div
          className="top container mt-[200px] w-full h-[237px] rounded-2xl p-[70px] "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="top-details flex flex-col lg:flex-row justify-between gap-4">
            <div className="topTitle text-[36px] lg:text-[48px]">
              <h1>Blog & News</h1>
            </div>
          </div>
        </div>
        {/* top end */}

        {/* beginning oi=f the main content */}

        <div className="mainContent container mt-16  p-2 min-h-[100vh] grid ">
          <div className="articles min-h-[100%] p-4">
            <div className="topArticles w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="Articles_title flex items-center gap-3">
                <div className="savatIcon w-9 h-9">
                  <img
                    className="w-full h-full object-contain"
                    src={savat}
                    alt="icon"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Recips Articles
                </h1>
              </div>

              <div className="Article_filter flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <select
                  className="w-full md:w-[141px] h-[44px] px-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="filterArticle"
                  id="filterArticle"
                >
                  <option value="20">Show: 20</option>
                  <option value="30">Show: 30</option>
                  <option value="50">Show: 50</option>
                </select>

                <select
                  className="w-full md:w-[141px] h-[44px] px-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="sortArticle"
                  id="sortArticle"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            <div className="article_Contents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[350px] h-[472px] shadow-xl  p-1.5 rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                >
                  <div className="articleMedia w-[320px] h-[310px] cursor-zoom-in one hover:scale-105 transition-all duration-300 rounded-2xl">
                    <img
                      src={product.thumbnail}
                      alt="Article img"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="Article_data text-center mt-2">
                    <p className="article_name text-sm text-gray-500">
                      {product.brand}
                    </p>
                    <h1 className="Article_title text-lg font-semibold">
                      {product.title}
                    </h1>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articlni filter va search qismi  */}

       
        </div>
      </div>
    </div>
  );
};

export default Blogs;
