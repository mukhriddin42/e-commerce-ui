import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaCartShopping,
  FaShuffle,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import Deals_of_the_Day from "../components/Home2/Deals_of_the_day";
import Snack from "../components/Snack/Snack";
import { FaSortAmountDownAlt, FaThLarge } from "react-icons/fa";

const ListSidebar = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=6&skip=${(page - 1) * 6}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / 6));
      });
  }, [page]);


  const getPaginationPages = (current, total) => {
    const pages = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);

      if (current > 3) pages.push("...");

      for (let i = current - 1; i <= current + 1; i++) {
        if (i > 1 && i < total) pages.push(i);
      }

      if (current < total - 2) pages.push("...");

      pages.push(total);
    }

    return pages;
  };


  return (
    <div className="flex p-6">
      <main className="flex-1">
        <Snack />
        <div className="flex items-center justify-between">
          <p className="mb-6 ml-4 text-lg text-gray-800">
            We found{" "}
            <b className="text-emerald-500 font-medium">{products.length}</b>{" "}
            items for you!
          </p>

          <div className="flex gap-4 p-4">
            <div className="flex items-center border  rounded-xl w-[140px] h-[48px] justify-center text-center cursor-pointer border-[#ECECEC]">
              <FaThLarge className="mr-2 text-[#777777]" />
              <span className="text-[#777777]">Show: 50</span>
              <span className="ml-2 text-[12px] text-gray-500">▼</span>
            </div>

            <div className="flex items-center border rounded-xl justify-center w-[185px] h-[48px] cursor-pointer border-[#ECECEC]">
              <FaSortAmountDownAlt className="mr-2 text-[#777777]" />
              <span className="text-[#777777] ">Sort by: Featured</span>
              <span className="ml-2 text-[12px]  text-[#777777]">▼</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex w-[1000px] h-[300px] bg-white rounded-xl  overflow-hidden relative p-3 box-border"
            >
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Hot
                </span>
              )}

              <img
                src={product.thumbnail}
                alt={product.title}
                className=" border-[1px] rounded-[15px] border-[#ECECEC] mr-10 p-3"
              />

              <div className="flex flex-col justify-center flex-1">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h4 className="font-bold text-2xl text-slate-800">
                  {product.title}
                </h4>

                <div className="flex items-center gap-6 text-sm text-gray-600 mt-2">
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  <span>( {product.rating} )</span>
                  <span>500g</span>
                </div>

                <p className="text-gray-500 mt-2 max-w-[795px]">
                  {product.description}
                </p>

                <div className="flex items-center gap-3 my-4">
                  <span className="text-emerald-500 font-bold text-2xl">
                    ${product.price}
                  </span>
                  <span className="text-gray-400 font-semibold text-lg line-through">
                    ${product.discountPercentage}
                  </span>
                </div>

                <div className="flex items-center gap-5 mt-2">
                  <button className="bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-md flex items-center gap-3">
                    <FaCartShopping /> Add to Cart
                  </button>
                  <button className="text-gray-400 hover:underline text-sm font-bold flex items-center gap-2">
                    <FaShuffle /> Add Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="flex items-center gap-3 mt-10 ml-16">
          <button
            className="w-10 h-10 bg-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            <FaArrowLeft />
          </button>

          {getPaginationPages(page, totalPages).map((item, idx) =>
            item === "..." ? (
              <span key={idx} className="px-1 text-xl text-gray-400">...</span>
            ) : (
              <button
                key={idx}
                className={`w-10 h-10 rounded-full text-sm flex items-center justify-center ${page === item
                    ? "bg-emerald-500 text-white font-bold"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            )
          )}

          <button
            className="w-10 h-10 bg-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-300 flex items-center justify-center"
            onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          >
            <FaArrowRight />
          </button>
        </div>



        <Deals_of_the_Day />
      </main>
    </div>
  );
};

export default ListSidebar;
