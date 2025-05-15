import React from "react";
import { IoIosSend } from "react-icons/io";


const Home__2 = () => {
  return (
    <div
      className="font-quicksand px-9 container m-auto relative w-full h-[400px] bg-cover bg-center rounded-[30px]  flex flex-col justify-center gap-6 mt-50"
      style={{ backgroundImage: "url('src/assets/Home/tabpanel.png')" }}
    >
      <h1 className="text-[48px] leading-[56px] font-bold text-[#253D4E] font-quicksand">
        Fresh Vegetables <br /> Big discount
      </h1>
      <p className="text-lg text-gray-600">
        Save up to 50% off on your first order
      </p>

      {/* <div className="flex items-center px-4 max-w-md w-full bg-white rounded-full overflow-hidden shadow">
        <IoIosSend size={24} />
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-2 focus:outline-none text-sm"
        />
        <button className="bg-[#3BB77E] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#3BB75E] cursor-pointer transition">
          Subscribe
        </button>
      </div> */}
       <div className="flex items-center bg-white rounded-full shadow-md w-full max-w-md overflow-hidden">
      <div className="pl-4">
        <PaperAirplaneIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-3 py-2 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 text-sm rounded-r-full transition">
        Subscribe
      </button>
    </div>
    </div>
  );
};

export default Home__2;
