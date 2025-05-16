import React from "react";
import { PiPhoneCall } from "react-icons/pi";

const PhoneSecond = () => {
  return (
    <div className="hidden md:hidden lg:block sm:hidden">
      <div className="flex items-center gap-3">
        <PiPhoneCall className="text-3xl" />
        <div>
          <h1 className="text-[#3BB77E] text-2xl font-semibold quicksand">
            1900 - 6666
          </h1>
          <p className="text-[#7E7E7E]">Working 8:00 - 22:00</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSecond;
