import React from "react";
import { IoSend } from "react-icons/io5";

const StayHome = () => {
  return (
    <div className="bg-[#D8F1E5] mt-50">
      <h1>Stay home & get your daily needs from our shop</h1>
      <p>
        Start You'r Daily Shopping with{" "}
        <span className="text-[#3BB77E]">Nest Mart</span>
      </p>
      <label htmlFor="inp" className="flex items-center">
        <IoSend />
        <input
          type="text"
          id="inp"
          className="outline-0 placeholder-[#838383]"
          placeholder="Your emaill address"
        />
        <button className="bg-[#3BB77E] text-white">Subscribe</button>
      </label>
    </div>
  );
};

export default StayHome;
