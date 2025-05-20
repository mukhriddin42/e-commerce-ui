import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import bgImage from "../assets/Blogs/background.png";
import savat from "../assets/Blogs/Heading 2 → category-1.svg.png";

const Blogs = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        console.log(response.data.recipes);
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, []);

  return (
    <div id="blogs">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className="mt-[200px] w-full h-[237px] rounded-2xl p-[70px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <h1 className="text-[36px] lg:text-[48px] text-white font-bold">
              Blog & News
            </h1>
          </div>
        </div>

        {/* Filter and Title */}
        <div className="mt-16 p-4 min-h-[100vh]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <img src={savat} alt="icon" className="w-9 h-9" />
              <h2 className="text-2xl md:text-4xl font-bold">
                Recipe Articles
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <select className="w-full md:w-[141px] h-[44px] px-3 border border-gray-300 rounded-2xl bg-white">
                <option value="20">Show: 20</option>
                <option value="30">Show: 30</option>
                <option value="50">Show: 50</option>
              </select>

              <select className="w-full md:w-[141px] h-[44px] px-3 border border-gray-300 rounded-2xl bg-white">
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => navigate(`/blogs/${recipe.id}`)}
                className="w-[350px] h-[472px] shadow-xl p-2 rounded-2xl cursor-pointer hover:shadow-2xl transition duration-300"
              >
                <div className="w-full h-[310px] overflow-hidden rounded-xl">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="text-sm text-gray-500">{recipe.cuisine}</p>
                  <h3 className="text-lg font-semibold">{recipe.name}</h3>
                  <p className="text-sm text-gray-600">
                    {recipe.mealType.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
