import React from "react";

const Home__2 = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center rounded-[30px] px-10 py-12 flex flex-col justify-center gap-6"
      style={{ backgroundImage: "url('src/assets/Home/tabpanel.png')" }}
    >
      <h1 className="text-[48px] leading-[56px] font-bold text-[#253D4E] font-quicksand">
        Fresh Vegetables <br /> Big discount
      </h1>
      <p className="text-lg text-gray-600">
        Save up to 50% off on your first order
      </p>

      <div className="flex items-center max-w-md w-full bg-white rounded-full overflow-hidden p-1 shadow">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-2 focus:outline-none text-sm"
        />
        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Home__2;
