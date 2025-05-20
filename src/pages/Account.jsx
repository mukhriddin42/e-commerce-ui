import React from "react";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
console.log(true);

import { NavLink, Outlet } from "react-router-dom";
import Orders from "../AccountPages/Orders";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
console.log(true);

const Account = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Menu />
      <div className="container mx-auto flex gap-5 mt-50">
        <div>
          <button className="text-white text-[18px] gap-2 cursor-pointer   rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
            <VscSettings className="font-bold" />
            Dashboard
          </button>
          <NavLink to="orders">
            <button className="text-white text-[18px] gap-2  cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
              <MdOutlineShoppingBag /> Orders
            </button>
          </NavLink>
          <button className="text-white text-[18px] gap-2  cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
            <SlBasket className="font-bold" />
            Track Your Order
          </button>
          <button className="text-white text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
            <CiLocationOn className="font-bold" />
            My Address
          </button>
          <button className="text-white text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
            <FiUser className="font-bold" />
            Account details
          </button>
          <button className="text-white text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 bg-green-500">
            <FiLogOut className="font-bold" />
            Loguot
          </button>
        </div>
        <div className="border w-full h-150">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
