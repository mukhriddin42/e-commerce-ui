import React from "react";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";

import { NavLink, Outlet } from "react-router-dom";
import Orders from "../AccountPages/Orders";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Only redirect if we're exactly at /account
    if (location.pathname === "/account") {
      navigate("dashboard");
    }
  }, [location, navigate]);
  return (
    <div>
      <Header />
      <Nav />
      <Menu />
      <div className="container mx-auto flex gap-5 mt-50">
        <div className="flex flex-col gap-3">
          <NavLink
            to="dashboard"
            className="overflow-hidden rounded-xl block w-60 h-14"
          >
            <button className="text-wblack text-[18px] gap-2 cursor-pointer overflow-hidden   rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <VscSettings className="font-bold" />
              Dashboard
            </button>
          </NavLink>
          <NavLink
            className="overflow-hidden rounded-xl block w-60 h-14"
            to="orders"
          >
            <button className="text-black  text-[18px] gap-2  cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <MdOutlineShoppingBag /> Orders
            </button>
          </NavLink>
          <NavLink
            className="overflow-hidden rounded-xl block w-60 h-14"
            to="trackyourorder"
          >
            <button className="text-black  text-[18px] gap-2  cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <SlBasket className="font-bold" />
              Track Your Order
            </button>
          </NavLink>
          <NavLink
            className="overflow-hidden rounded-xl block w-60 h-14"
            to="myaddress"
          >
            <button className="textblack e text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <CiLocationOn className="font-bold" />
              My Address
            </button>
          </NavLink>

          <NavLink
            className="overflow-hidden rounded-xl block w-60 h-14"
            to="accountdetails"
          >
            <button className="textblack e text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <FiUser className="font-bold" />
              Account details
            </button>
          </NavLink>
          <NavLink
            className="overflow-hidden rounded-xl block w-60 h-14"
            to="logout"
          >
            <button className="textblack e text-[18px] gap-2 cursor-pointer rounded-xl border-2 w-60 flex items-center  pl-5 h-14 ">
              <FiLogOut className="font-bold" />
              Logout
            </button>
          </NavLink>
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
