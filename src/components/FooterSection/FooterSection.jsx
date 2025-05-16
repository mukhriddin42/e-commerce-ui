import React from "react";
import PhoneSecond from "../PhoneSecond/PhoneSecond";
import Phone from "../Phone/Phone";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="w-full flex justify-center py-7">
      <div className="flex justify-between w-[90%]">
        <ul>
          <li>© 2022, Nest - HTML Ecommerce Template</li>
          <li>All rights reserved</li>
        </ul>
        <ul className="flex gap-5">
          <PhoneSecond />
          <Phone />
        </ul>
        <ul>
          <li className="flex items-center gap-2">
            <span className="quicksand font-semibold text-[18px]">
              Follow Us
            </span>
            <FaFacebookF className="cursor-pointer w-[35px] h-[35px] text-white bg-[#3BB77E] p-2 rounded-[50%]" />
            <FaTwitter className="cursor-pointer w-[35px] h-[35px] text-white bg-[#3BB77E] p-2 rounded-[50%]" />
            <FaInstagram className="cursor-pointer w-[35px] h-[35px] text-white bg-[#3BB77E] p-2 rounded-[50%]" />
            <FaPinterestP className="cursor-pointer w-[35px] h-[35px] text-white bg-[#3BB77E] p-2 rounded-[50%]" />
            <FaYoutube className="cursor-pointer w-[35px] h-[35px] text-white bg-[#3BB77E] p-2 rounded-[50%]" />
          </li>
          <li className="text-[#7E7E7E]">
            Up to 15% discount on your first subscribe
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
