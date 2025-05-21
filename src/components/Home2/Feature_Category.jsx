import React from "react";

const Feature_Category = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/piyoz.png')] bg-cover bg-center">
            <div className="absolute inset-0 p-8 py-13 flex flex-col justify-between">
              <div>
                <h3 className="text-[#253D4E] text-2xl font-bold leading-tight">
                  Everyday Fresh &<br />
                  Clean with Our
                  <br />
                  Products
                </h3>
              </div>
              <div>
                <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/qulupnaysharbat.png')] bg-cover bg-center">
            <div className="absolute inset-0 p-8 py-11 flex flex-col justify-between">
              <div>
                <h3 className="text-[#2d3748] text-2xl font-bold leading-tight">
                  Make your Breakfast
                  <br />
                  Healthy and Easy
                </h3>
              </div>
              <div>
                <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-64 md:h-72 bg-[url('src/assets/Home/sabzavotlar.png')] bg-cover bg-center">
            <div className="absolute inset-0 p-8 py-11 flex flex-col justify-between">
              <div>
                <h3 className="text-[#2d3748] text-2xl font-bold leading-tight">
                  Fresh Vegetables
                  <br />
                  For Your Healthy
                  <br />
                  Recipes
                </h3>
              </div>
              <div>
                <button className="bg-[#3BB77E] hover:bg-[#3BB16E] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature_Category;
