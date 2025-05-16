import React from "react";
import logo from "../../assets/img/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { BiTimer } from "react-icons/bi";
import appStore from "../../assets/img/appstore.png";
import googlePlay from "../../assets/img/googleplay.png";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 grid text-[#253D4E] border-b border-[#BCE3C9] pb-6 w-[90%] gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <ul className="flex flex-col gap-3">
          <img className="w-[200px]" src={logo} alt="" />
          <li>Awesome grocery store website template</li>
          <li className="flex gap-2">
            <CiLocationOn className="text-[#3BB77E] text-4xl" />
            Address : 5171 W Campbell Ave Kent, Utah United States
          </li>
          <li className="flex gap-2">
            <SlEarphonesAlt className="text-[#3BB77E]" />
            Call Us:(+91) - 540-025-124553
          </li>
          <li className="flex gap-2">
            <IoIosSend className="text-[#3BB77E]" />
            Email:sale@Nest.com
          </li>
          <li className="flex gap-2">
            <BiTimer className="text-[#3BB77E]" />
            Hours:10:00 - 18:00, Mon - Sat
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-2xl quicksand">Company</li>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li className="flex">Terms & Conditions</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-2xl quicksand">Account</li>
          <li>Sign In</li>
          <li>View Cart</li>
          <li>My Wishlist</li>
          <li>Track My Order</li>
          <li>Help Ticket</li>
          <li>Shipping Details</li>
          <li>Compare products</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-2xl quicksand">Corporate</li>
          <li>Become a Vendor</li>
          <li>Affiliate Program</li>
          <li>Farm Business</li>
          <li>Farm Careers</li>
          <li>Our Suppliers</li>
          <li>Accessibility</li>
          <li>Promotions</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-2xl quicksand">Popular</li>
          <li>Milk & Flavoured Milk</li>
          <li>Butter and Margarine</li>
          <li>Eggs Substitutes</li>
          <li>Marmalades</li>
          <li>Sour Cream and Dips</li>
          <li>Tea & Kombucha</li>
          <li>Cheese</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-2xl quicksand">Install App</li>
          <div className="flex my-10">
            <img className="w-[120px]" src={appStore} alt="" />
            <img className="w-[120px]" src={googlePlay} alt="" />
          </div>
          <li>Secured Payment Gateways</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
