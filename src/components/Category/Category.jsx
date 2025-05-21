import React, { useState } from "react";
import newProcutsImg1 from "../../assets/img/newproducts.png";
import newProcutsImg2 from "../../assets/img/newproducts1.png";
import newProcutsImg3 from "../../assets/img/newproducts2.png";

const categories = [
  { name: "Milks & Dairies", count: 3 },
  { name: "Clothing", count: 4 },
  { name: "Pet Foods", count: 6 },
  { name: "Baking material", count: 8 },
  { name: "Fresh Fruit", count: 10 },
];

const colors = [
  { name: "Red", count: 56 },
  { name: "Green", count: 78 },
  { name: "Blue", count: 54 },
];

const conditions = [
  { name: "New", count: 1506 },
  { name: "Refurbished", count: 27 },
  { name: "Used", count: 45 },
];

const newProducts = [
  { name: "Chen Cardigan", price: "$99.50", image: newProcutsImg1 },
  { name: "Chen Sweater", price: "$89.50", image: newProcutsImg2 },
  { name: "Colorful Jacket", price: "$25", image: newProcutsImg3 },
];

const Category = () => {
  

  return (
    <>
      <div className="flex w-[300px] flex-col gap-4">
        <div className="rounded-xl shadow p-4 bg-white">
          <h2 className="font-semibold text-lg mb-4">Category</h2>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>{cat.name}</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
                  {cat.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl shadow p-4 bg-white">
          <h2 className="font-semibold text-lg mb-4">Fill by price</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>From: $500</span>
              <span>To: $1,000</span>
            </div>
            <input type="range" className="w-full" min="500" max="1000" />

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              {colors.map((color, i) => (
                <label key={i} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" />
                  <span>
                    {color.name} ({color.count})
                  </span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="font-medium mb-2">Item Condition</h3>
              {conditions.map((cond, i) => (
                <label key={i} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" />
                  <span>
                    {cond.name} ({cond.count})
                  </span>
                </label>
              ))}
            </div>

            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Filter
            </button>
          </div>
        </div>
        <div className="rounded-xl shadow p-4 bg-white">
          <h2 className="font-semibold text-lg mb-4">New products</h2>
          <ul className="space-y-4">
            {newProducts.map((product, i) => (
              <li key={i} className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-green-600 font-semibold text-sm">
                    {product.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
