import React, { useState, useEffect } from "react";
import MapComponent from "../components/MapComponent/MapComponent";
import { SlLocationPin } from "react-icons/sl";
import opa from "../assets/About/contact.svg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    fetch("https://680fc38127f2fdac240f4f99.mockapi.io/react")
      .then((res) => res.json())
      .then((data) => console.log("Ma'lumotlar:", data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://680fc38127f2fdac240f4f99.mockapi.io/react", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Jo‘natildi:", data);
    } catch (err) {
      console.error("Xatolik:", err);
    }
  };

  return (
    <div className="">
      <div className="container mx-auto px-4  flex flex-col lg:flex-row gap-10 xl:items-end">
        <div className="w-full lg:max-w-[447px] flex flex-col gap-5">
          <h1 className="text-[#3BB77E] text-base md:text-lg lg:text-[24px]">How can help you?</h1>
          <h2 className="text-xl md:text-2xl lg:text-[48px] font-semibold text-[#253D4E] leading-snug">
            Let us know how we can help you
          </h2>
          <p className="text-[#7E7E7E] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-[#7E7E7E] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Visit Feedback", "Employer Services", "Billing Inquiries", "General Inquiries"].map((title, i) => (
            <div key={i} className="p-4 rounded-md">
              <h3 className={`text-2xl font-semibold ${i === 2 ? "text-[#3BB77E]" : "text-[#253D4E]"}`}>{`${String(i + 1).padStart(2, "0")}. ${title}`}</h3>
              <p className="text-[#7E7E7E] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          ))}
        </div>
      </div>

      <MapComponent className="mx-auto w-full max-w-[1686px] max-h-90" />

      <div className="container mx-auto pl-5 flex gap-40 flex-wrap">
        {["Office", "Studio", "Shop"].map((place, i) => (
          <div key={i} className="flex flex-col gap-1">
            <h1 className="text-[#3BB77E] text-2xl">{place}</h1>
            <p className="text-[#7E7E7E]">205 North Michigan Avenue, Suite 810</p>
            <p className="text-[#7E7E7E]">Chicago, 60601, USA</p>
            <p className="text-[#7E7E7E]">Phone: (123) 456-7890</p>
            <p className="text-[#7E7E7E]">Email: contact@Evara.com</p>
            <button className="cursor-pointer bg-[#3BB77E] w-[115px] h-[40px] rounded-xl flex items-center justify-center text-white">
              <SlLocationPin className="text-white font-bold mr-1" />
              View map
            </button>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-[#3BB77E] text-[24px]">Contact form</h1>
                <h2 className="text-[36px] lg:text-[48px] font-semibold text-[#253D4E] leading-snug">Drop Us a Line</h2>
                <p className="text-[#7E7E7E] text-base">
                  Your email address will not be published. Required fields are marked *
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                <div className="flex flex-wrap gap-5 w-full">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-full max-w-[423px] outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-full max-w-[423px] outline-none"
                    type="text"
                    placeholder="Your Phone"
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-full max-w-[423px] outline-none"
                    type="email"
                    placeholder="Your Email"
                  />
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-xl border border-[#ECECEC] h-[64px] pl-5 text-[18px] w-full max-w-[423px] outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  className="rounded-xl border border-[#ECECEC] px-5 py-4 text-[18px] w-full max-w-[870px] h-[200px] outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
                <button className="rounded-xl bg-[#3BB77E] text-white font-semibold w-[160px] h-[50px] hover:bg-[#339e6d] transition">
                  Send message
                </button>
              </form>
            </div>
          </div>

          <div className="w-[385px] flex-shrink-0">
            <img src={opa} alt="Contact" className="w-full h-[420px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
