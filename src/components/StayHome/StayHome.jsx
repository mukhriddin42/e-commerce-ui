import React from "react";
import { FiSend } from "react-icons/fi";
import sellerPng from "../../assets/img/seller.png";

const StayHome = () => {
  return (
    <div className="bg-[#D8F1E5] justify-between rounded-2xl pt-10 px-10 w-full flex flex-wrap">
      <div className="flex justify-between w-full">
        <div className="w-[35%] flex justify-center flex-col gap-5 items-baseline pb-8 z-1">
          <h1 className="text-3xl quicksand font-semibold text-[#253D4E]">
            Stay home & get your daily needs from our shop
          </h1>
          <p className="text-[#7E7E7E]">
            Start You'r Daily Shopping with
            <span className="text-[#3BB77E]"> Nest Mart</span>
          </p>
          <label
            htmlFor="inp"
            className="flex items-center bg-white pl-4 rounded-[50px]"
          >
            <FiSend className="text-[#838383] mr-2" />
            <input
              type="text"
              id="inp"
              className="outline-0 placeholder-[#838383]"
              placeholder="Your emaill address"
            />
            <button className="bg-[#3BB77E] text-white py-4 px-7 quicksand font-semibold rounded-[50px] cursor-pointer">
              Subscribe
            </button>
          </label>
        </div>
        <img className="min-w-[30%]" src={sellerPng} alt="" />
      </div>
    </div>
  );
};

export default StayHome;
