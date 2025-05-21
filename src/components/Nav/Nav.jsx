import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({ onToggleMenu }) => {
  return (
    <div className="fixed top-0 bg-white w-full z-1000">
      <div className="flex w-full shadow-sm xl:hidden 2xl:hidden py-5 justify-center">
        <div className="flex items-center justify-between w-[90%]">
          <button className="border p-1 rounded">
            <RxHamburgerMenu className="text-2xl" onClick={onToggleMenu} />
          </button>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul className="flex gap-2">
            <li className="cursor-pointer">
              <Link to="/wishlist">
                <IoMdHeartEmpty className="text-2xl" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/">
                <FiShoppingCart className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="hidden sm:hidden md:hidden xl:flex 2xl:flex items-center justify-between px-20 py-5 border-b border-[#ECECEC]">
        <Link to="/">
          <img className="max-w-[150px]" src={logo} alt="" />
        </Link>
        <label
          htmlFor=""
          className="flex border-[2px] border-[#BCE3C9] rounded-[2px] p-2 gap-2 items-center"
        >
          <select name="" id="" className="outline-0 px-2">
            <option value="">All Categories</option>
            <option value="">Fruits</option>
            <option value="">Snacks</option>
          </select>
          <span className="h-4 bg-[#CACACA] w-[1px]"></span>
          <input
            type="text"
            placeholder="Search for items..."
            className="border-0 outline-0 w-[400px]"
          />
          <CiSearch className="text-[20px]" />
        </label>
        <label
          htmlFor=""
          className="border border-[#ECECEC] p-2 flex items-center rounded"
        >
          <CiLocationOn />
          <select name="" id="" className="outline-0 text-[#3BB77E]">
            <option value="">Your location</option>
            <option value="">Samarqand</option>
            <option value="">Navoiy</option>
          </select>
        </label>
        <ul className="flex gap-4">
          <li className="cursor-pointer p-2">
            <Link
              to="/wishlist"
              className="flex items-center justify-center gap-2"
            >
              <IoMdHeartEmpty className="text-2xl" />
              Wishlist
            </Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <Link to="/" className="flex items-center justify-center gap-2">
              <FiShoppingCart className="text-2xl" />
              Cart
            </Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer p-2">
            <Link
              to="/account"
              className="flex items-center justify-center gap-2"
            >
              <FaRegUser className="text-2xl" />
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
