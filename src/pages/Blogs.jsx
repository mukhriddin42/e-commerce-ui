import React from "react";
import { useEffect, useState } from "react";
import bgImage from "../assets/Blogs/background.png";
import savat from "../assets/Blogs/Heading 2 → category-1.svg.png";
import searchIcon from "../assets/Blogs/search.png";
import axios from "axios";

const Blogs = () => {
  const [products, setproducts] = useState([]);

  // MOck category
  const categories = [
    { id: 1, name: "Meal", icon: "🍔" },
    { id: 2, name: "Clothing", icon: "👕" },
    { id: 3, name: "Electronics", icon: "📱" },
    { id: 4, name: "Books", icon: "📚" },
    { id: 5, name: "Fitness", icon: "🏋️" },
    { id: 6, name: "Home", icon: "🏠" },
  ];

  const items = [
    { name: "Chen Cardigan", price: "$99.50", image: savat },
    { name: "Chen Sweater", price: "$99.50", image: savat },
    { name: "Colorful Jacket", price: "$25", image: savat },
    { name: "Lorem, ipsum", price: "$25", image: savat },
  ];

  const galleryImages = [
    { src: savat, alt: "Carrots" },
    { src: savat, alt: "Bell Peppers" },
    { src: savat, alt: "Orange Juice" },
    { src: savat, alt: "Bananas" },
    { src: savat, alt: "Watermelon" },
    { src: savat, alt: "Durian" },
  ];

const tags = ["× Cabbage", "× Broccoli", "× Smoothie", "× Fruit", "× Salad", "× Appetizer"];


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

            <div className="filterButtons  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-[50%] ">
              <button className="filterBtn">×Shopping</button>
              <button className="filterBtn">×Recipes</button>
              <button className="filterBtn">×Kitchen</button>
              <button className="filterBtn">×News</button>
              <button className="filterBtn">×Food</button>
            </div>
          </div>
        </div>
        {/* top end */}

        {/* beginning oi=f the main content */}

        <div className="mainContent container mt-16  p-2 min-h-[100vh] grid grid-cols-[75%_25%]">
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
                  className="w-[350px] h-[472px] inset-shadow-2xs  p-1.5 rounded-2xl"
                >
                  <div className="articleMedia w-[320px] h-[310px]">
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

          <div className="articleSearch min-h-[100%] p-2">
            <label htmlFor="articleSearch">
              <div className="searching flex w-[320px] h-[64px] rounded-2xl shadow-2xl p-4 m-auto">
                <input
                  id="articleSearch"
                  placeholder="Searching..."
                  className="pl-1.5 mt-0.5 border-gray-400 w-[90%] h-[90%]"
                  type="search"
                />
                <div className="searchIcon mt-1 ml-1">
                  <img src={searchIcon} alt="search" />
                </div>
              </div>
            </label>
            {
              <div className="categories-filter w-[320px] m-auto mt-4 rounded-2xl shadow-2xl bg-white p-4">
                {/* Sarlavha qismi */}
                <div className="category-filter-top w-[90%] m-auto text-xl font-semibold text-gray-800">
                  <h1>Category</h1>
                  <hr className="mt-1 border-t border-gray-300" />
                </div>

                <div className="mt-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`category w-[90%] m-auto p-2 flex justify-between items-center rounded-lg my-1 ${
                        category.name === "Milks & Dairies"
                          ? "bg-blue-100 border-2 border-blue-500"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="category-icon w-[30px] h-[30px] flex items-center justify-center text-xl">
                          {category.icon}
                        </div>
                        <h1 className="ml-3 text-gray-700 font-medium">
                          {category.name}
                        </h1>
                      </div>

                      <div className="badge w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-sm">
                        {index + 2}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              //   filter kategoriya tugadi
            }
{/* Trending filter */}

            <div className=" m-auto p-4 w-[320px] mt-10 shadow-2xl rounded-2xl">
              <h3 className=" font-semibold text-lg mb-2">Trending Now</h3>
              <hr className="border-t border-gray-300 mb-4" />
              {items.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <p className="text-green-500 font-bold">{item.price}</p>
                    <p className="text-gray-800">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
{/* Gallery */}

            <div className=" m-auto mt-16 p-4 w-[320px]  shadow rounded-2xl">
              <h3 className="text-gray-800 font-semibold text-lg mb-2">
                Gallery
              </h3>
              <hr className="border-t border-gray-300 mb-4" />
              <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
{/* Popular tags filter */}


<div className="Popular_tags  m-auto mt-16 p-4 w-[320px]  shadow rounded-2xl"> 
<h1 className="text-gray-800 font-semibold text-lg mb-2 ">Popular tags</h1>
<hr />
<div className="tag_buttons">
{
tags.map((tags)=>(
  <button className="filterBtn">{tags} </button>
))
} 

</div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
