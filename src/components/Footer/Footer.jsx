import React from "react";
import logo from "../../assets/img/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { BiTimer } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" />
        <p>Awesome grocery store website template</p>
        <p>
          <CiLocationOn />
          Address: 5171 W Campbell Ave Kent, Utah 53127 United States
        </p>
        <p>
          <SlEarphonesAlt />
          Call Us:(+91) - 540-025-124553
        </p>
        <p>
          <IoIosSend />
          Email:sale@Nest.com
        </p>
        <p>
          <BiTimer />
          Hours:10:00 - 18:00, Mon - Sat
        </p>
      </div>
    </>
  );
};

export default Footer;
