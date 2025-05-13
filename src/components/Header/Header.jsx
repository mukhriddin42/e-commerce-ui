import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="block sm:hidden md:hidden xl:hidden 2xl:block">
      <header className="py-3 flex items-center justify-between px-20 border-b border-[#ECECEC]">
        <ul className="flex text-[#7E7E7E] text-[14px]">
          <li className="border-r border-[#DEDFE2] px-2 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="border-r border-[#DEDFE2] px-2 cursor-pointer">
            <Link to="/myaccount">My Account</Link>
          </li>
          <li className="border-r border-[#DEDFE2] px-2 cursor-pointer">
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li className="px-2 cursor-pointer">
            <Link to="/ordertracking">Order Tracking</Link>
          </li>
        </ul>
        <ul>
          <li className="text-[#7E7E7E]">
            100% Secure delivery without contacting the courier
          </li>
        </ul>
        <ul className="flex">
          <li className="border-r border-[#DEDFE2] px-2">
            Need help? Call Us:
            <span className="text-[#3BB77E]">+ 1800 900</span>
          </li>
          <li className="border-r border-[#DEDFE2] px-2">
            <select name="" id="">
              <option value="english">English</option>
              <option value="pусский">Pусский</option>
              <option value="uzbek">O'zbek</option>
            </select>
          </li>
          <li className="px-2">
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="uzs">UZS</option>
            </select>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
