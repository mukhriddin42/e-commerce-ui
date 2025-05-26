import React from "react";
import { IoGrid } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ onToggleMenu }) => {
  return (
    <>
      <nav className="px-20 hidden xl:flex justify-between top-[87px] py-4 fixed bg-white w-full z-[1000] shadow-sm">
        <ul className="flex gap-7 items-center font-semibold quicksand">
          <button
            onClick={onToggleMenu}
            className="flex items-center bg-[#3BB77E] p-3 rounded text-white gap-1 cursor-pointer"
          >
            <IoGrid />
            Browse
          </button>
          <li className="flex items-center gap-2 cursor-pointer">
            <MdOutlineLocalFireDepartment className="text-[#3BB77E]" />
            <Link to="/">Products</Link>
          </li>
          <li className="group relative">
            <div className="flex gap-2 items-center cursor-pointer">
              Home
              <IoIosArrowDown className="group-hover:rotate-180 duration-200 transition-all" />
            </div>
            <ul className="absolute grid gap-2 left-0 rounded bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
              <li className="p-1 rounded hover:bg-gray-100">
                <Link to="/home">Home 1</Link>
              </li>
              <li className="p-1 rounded hover:bg-gray-100">
                <Link to="/shopcategory">Home 2</Link>
              </li>
            </ul>
          </li>

          <li className="cursor-pointer">
            <Link to="/about" className="flex items-center gap-2">
              About <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/shop" className="flex gap-2 items-center">
              Shop <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/vendors" className="flex gap-2 items-center">
              Vendors
              <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/megamenu" className="flex gap-2 items-center">
              Mega menu
              <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="flex gap-2 items-center">
              Blog
              <IoIosArrowDown />
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer flex items-center gap-2"
              to="/pages"
            >
              Pages
              <IoIosArrowDown />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <Phone /> */}
      </nav>
    </>
  );
};

export default Menu;
