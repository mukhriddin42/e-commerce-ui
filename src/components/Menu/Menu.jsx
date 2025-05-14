import React from "react";
import { IoGrid } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlEarphonesAlt } from "react-icons/sl";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="px-20 my-5 flex justify-between">
        <ul className="flex gap-7 items-center font-semibold quicksand">
          <label
            htmlFor=""
            className="flex items-center bg-[#3BB77E] p-3 rounded text-white gap-1 cursor-pointer"
          >
            <IoGrid />
            Browse
            <select name="" id="" className="outline-0">
              <option value="" className="text-black">
                All Categories
              </option>
              <option value="" className="text-black">
                Fruits
              </option>
              <option value="" className="text-black">
                Snacks
              </option>
            </select>
          </label>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdOutlineLocalFireDepartment className="text-[#3BB77E]" />
            Deals
          </li>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer flex items-center gap-2">
            <Link to="/about">About</Link>
            <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            Shop <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            Vendors
            <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            Mega menu
            <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <Link to="/blogs">Blog</Link>
            <IoIosArrowDown />
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            Pages
            <IoIosArrowDown />
          </li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center gap-3">
          <SlEarphonesAlt className="text-3xl" />
          <div>
            <h1 className="text-[#3BB77E] text-2xl font-semibold quicksand">
              1900 - 888
            </h1>
            <p className="text-[#7E7E7E]">24/7 Support Center</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
