import React from "react";
import { PiPhoneCall } from "react-icons/pi";

const Phone = () => {
  return (
    <div className="hidden md:hidden sm:hidden lg:block">
      <div className="flex items-center gap-3">
        <PiPhoneCall className="text-3xl" />
        <div>
          <h1 className="text-[#3BB77E] text-2xl font-semibold quicksand">
            1900 - 888
          </h1>
          <p className="text-[#7E7E7E]">24/7 Support Center</p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
