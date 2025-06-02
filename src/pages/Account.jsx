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
    if (location.pathname === "/account") {
      navigate("dashboard");
    }
  }, [location, navigate]);
  return (
    <div>
      <div className="">
        <Header />
        <Nav />
        <Menu />
        <div className="container  mx-auto flex  gap-15 mt-50">
          <div className="flex flex-col gap-3">
            <NavLink
              to="dashboard"
              className="overflow-hidden text-black font-semibold rounded-xl block w-60 border-2 border-[#0000004a] h-14"
            >
              <button className=" text-[18px] pb-1 gap-2 cursor-pointer overflow-hidden   rounded-xl  w-60 flex items-center  pl-5 h-14 ">
                <VscSettings className="font-bold" />
                Dashboard
              </button>
            </NavLink>
            <NavLink
              className="overflow-hidden text-black font-semibold rounded-xl block border-2 border-[#0000004a] w-60 h-14"
              to="orders"
            >
              <button className="  text-[18px] gap-2  pb-1  cursor-pointer rounded-xl  w-60 flex  items-center  pl-5 h-14 ">
                <MdOutlineShoppingBag /> Orders
              </button>
            </NavLink>
            <NavLink
              className="overflow-hidden text-black font-semibold rounded-xl block border-2 border-[#0000004a] w-60 h-14"
              to="trackyourorder"
            >
              <button className="  text-[18px] gap-2 pb-1   cursor-pointer rounded-xl  w-60 flex  items-center  pl-5 h-14 ">
                <SlBasket className="font-bold" />
                Track Your Order
              </button>
            </NavLink>
            <NavLink
              className="overflow-hidden text-black font-semibold rounded-xl border-2 border-[#0000004a] block w-60 h-14"
              to="myaddress"
            >
              <button className="textblack e text-[18px] gap-2 pb-1  cursor-pointer rounded-xl  w-60 flex items-center  pl-5 h-14 ">
                <CiLocationOn className="font-bold" />
                My Address
              </button>
            </NavLink>

            <NavLink
              className="overflow-hidden text-black font-semibold rounded-xl block border-2 border-[#0000004a] w-60 h-14"
              to="accountdetails"
            >
              <button className="textblack e text-[18px] gap-2 pb-1  cursor-pointer rounded-xl   w-60 flex  items-center  pl-5 h-14 ">
                <FiUser className="font-bold" />
                Account details
              </button>
            </NavLink>
            <NavLink
              className="overflow-hidden text-black font-semibold rounded-xl block border-2 border-[#0000004a] w-60 h-14"
              to="logout"
            >
              <button className="textblack e text-[18px] gap-2 pb-1  cursor-pointer rounded-xl  w-60  flex items-center  pl-5 h-14 ">
                <FiLogOut className="font-bold" />
                Logout
              </button>
            </NavLink>
          </div>
          <div className=" w-full h-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer className="" />
    </div>
  );
};

export default Account;
