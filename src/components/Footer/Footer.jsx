import React from "react";
import logo from "../../assets/img/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { BiTimer } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="mt-50 flex ">
        <ul className="">
          <img src={logo} alt="" />
          <li>Awesome grocery store website template</li>
          <li className="flex">
            <CiLocationOn />
            Address: 5171 W Campbell Ave Kent, Utah 53127 United States
          </li>
          <li className="flex">
            <SlEarphonesAlt />
            Call Us:(+91) - 540-025-124553
          </li>
          <li className="flex">
            <IoIosSend />
            Email:sale@Nest.com
          </li>
          <li className="flex">
            <BiTimer />
            Hours:10:00 - 18:00, Mon - Sat
          </li>
        </ul>

        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li className="flex">Terms & Conditions</li>
          <li>Contact Us</li>
          <li>Support Center</li>
          <li>Careers</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Sign In</li>
          <li>View Cart</li>
          <li>My Wishlist</li>
          <li>Track My Order</li>
          <li>Help Ticket</li>
          <li>Shipping Details</li>
          <li>Compare products</li>
        </ul>

        <ul>
          <li>Corporate</li>
          <li>Become a Vendor</li>
          <li>Affiliate Program</li>
          <li>Farm Business</li>
          <li>Farm Careers</li>
          <li>Our Suppliers</li>
          <li>Accessibility</li>
          <li>Promotions</li>
        </ul>

        <ul>
          <li>Popular</li>
          <li>Milk & Flavoured Milk</li>
          <li>Butter and Margarine</li>
          <li>Eggs Substitutes</li>
          <li>Marmalades</li>
          <li>Sour Cream and Dips</li>
          <li>Tea & Kombucha</li>
          <li>Cheese</li>
        </ul>
        <ul>
          <li>Install App</li>
          <div>App store</div>
          <div>Play google</div>
          <li>Secured Payment Gateways</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
