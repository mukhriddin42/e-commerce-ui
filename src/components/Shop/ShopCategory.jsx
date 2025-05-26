import React from "react";
import { FaChevronRight } from "react-icons/fa";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";
import img8 from "../../assets/img/img8.png";

const categories = [
  { name: "Milks and Dairies", icon: img1 },
  { name: "Wines & Alcohol", icon: img2 },
  { name: "Clothing & Beauty", icon: img3 },
  { name: "Pet Foods & Toy", icon: img4 },
  { name: "Packaged fast food", icon: img5 },
  { name: "Baking material", icon: img6 },
  { name: "Vegetables & Tubers", icon: img7 },
  { name: "Fresh Seafood", icon: img8 },
];

const ShopCategory = () => {
  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-md my-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Shop by Categories</h2>
        <a href="#" className="text-sm text-blue-500 flex items-center gap-2">
          All Categories <FaChevronRight />
        </a>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {categories.map((product, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[145px] p-5 py-6 mb-4 bg-[#F4F6FA] cursor-pointer rounded-lg border hover:shadow-md transition"
            >
              <img className="mb-2 min-w-[80px]" src={product.icon} />
              <p className="text-center text-sm font-medium">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
