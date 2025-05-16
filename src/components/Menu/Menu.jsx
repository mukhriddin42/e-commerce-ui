import React from "react";
import { IoGrid } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Phone from "../Phone/Phone";

const Menu = () => {
  return (
    <>
      <nav className="px-20 hidden lg:flex justify-between top-[97px] py-4 fixed bg-white w-full z-[1000]">
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
          <li className="cursor-pointer">
            <Link to="/home" className="flex items-center gap-2">
              Home <IoIosArrowDown />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about" className="flex items-center gap-2">
              About <IoIosArrowDown />
            </Link>
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
          <li className="cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Phone />
      </nav>
    </>
  );
};

export default Menu;
