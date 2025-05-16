import React from "react";
import MapComponent from "../components/MapComponent/MapComponent";
import { SlLocationPin } from "react-icons/sl";
import opa from "../assets/About/contact.svg";
export const Contact = () => {
  return (
    <div className="mt-55">
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row  gap-10   xl:items-end">
        {/* Left Side */}
        <div className="w-full lg:max-w-[447px] flex flex-col gap-5">
          <h1 className="text-[#3BB77E] text-base md:text-lg lg:text-[24px]">
            How can help you?
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-[48px] font-semibold text-[#253D4E] leading-snug">
            Let us know how we can help you
          </h2>
          <p className="text-[#7E7E7E] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-[#7E7E7E] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Right Side – Help Items */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" p-4  rounded-md">
            <h3 className="text-2xl font-semibold text-[#253D4E]">
              01. Visit Feedback
            </h3>
            <p className="text-[#7E7E7E] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" p-4  rounded-md">
            <h3 className="text-2xl font-semibold text-[#253D4E]">
              02. Employer Services
            </h3>
            <p className="text-[#7E7E7E] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" p-4  rounded-md">
            <h3 className="text-2xl font-semibold text-[#3BB77E]">
              03. Billing Inquiries
            </h3>
            <p className="text-[#7E7E7E] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" p-4  rounded-md">
            <h3 className="text-2xl font-semibold text-[#253D4E]">
              04. General Inquiries
            </h3>
            <p className="text-[#7E7E7E] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      <MapComponent className="mx-auto w-full max-w-[1686px]" />
      <div className="container mx-[auto] pl-5  flex gap-40 flex-wrap ">
        <div className="flex flex-col gap-1">
          <h1 className=" text-[#3BB77E] text-2xl">Office</h1>
          <p className="text-[#7E7E7E]">205 North Michigan Avenue, Suite 810</p>
          <p className="text-[#7E7E7E]">Chicago, 60601, USA</p>
          <p className="text-[#7E7E7E]">Phone: (123) 456-7890</p>
          <p className="text-[#7E7E7E]">Email: contact@Evara.com</p>
          <button className=" cursor-pointer bg-[#3BB77E] w-[115px] h-[40px] rounded-xl flex items-center justify-center text-white">
            {" "}
            <SlLocationPin className="text-white font-bold" />
            View map
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className=" text-[#3BB77E] text-2xl">Studio</h1>
          <p className="text-[#7E7E7E]">205 North Michigan Avenue, Suite 810</p>
          <p className="text-[#7E7E7E]">Chicago, 60601, USA</p>
          <p className="text-[#7E7E7E]">Phone: (123) 456-7890</p>
          <p className="text-[#7E7E7E]">Email: contact@Evara.com</p>
          <button className=" cursor-pointer bg-[#3BB77E] w-[115px] h-[40px] rounded-xl flex items-center justify-center text-white">
            {" "}
            <SlLocationPin className="text-white font-bold" />
            View map
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className=" text-[#3BB77E] text-2xl">Shop</h1>
          <p className="text-[#7E7E7E]">205 North Michigan Avenue, Suite 810</p>
          <p className="text-[#7E7E7E]">Chicago, 60601, USA</p>
          <p className="text-[#7E7E7E]">Phone: (123) 456-7890</p>
          <p className="text-[#7E7E7E]">Email: contact@Evara.com</p>
          <button className=" cursor-pointer bg-[#3BB77E] w-[115px] h-[40px] rounded-xl flex items-center justify-center text-white">
            {" "}
            <SlLocationPin className="text-white font-bold" />
            View map
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Chap qism – Forma */}
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-[#3BB77E] text-[24px]">Contact form</h1>
                <h2 className="text-[36px] lg:text-[48px] font-semibold text-[#253D4E] leading-snug">
                  Drop Us a Line
                </h2>
                <p className="text-[#7E7E7E] text-base">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-5">
                  <input
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-[423px] outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-[423px] outline-none"
                    type="text"
                    placeholder="Your Phone"
                  />
                  <input
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-[423px] outline-none"
                    type="text"
                    placeholder="Your Email"
                  />
                  <input
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-[423px] outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>

                <textarea
                  className="rounded-xl border border-[#ECECEC] px-5 py-4 text-[18px] w-[870px] h-[200px] outline-none resize-none"
                  placeholder="Your message"
                ></textarea>

                <button className="rounded-xl bg-[#3BB77E] text-white font-semibold w-40 h-[50px] hover:bg-[#339e6d] transition">
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* Ong qism – Rasm */}
          <div className="w-[385px] flex-shrink-0">
            <img
              src={opa}
              alt="Contact"
              className="w-full h-[420px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
