import React from "react";
import home from "../assets/About/home.svg";
import Welcome from "../assets/About/Welcome.svg";
import FoodCarousel from "../components/FoodCarusel/FoodCarusel";
import icon1 from "../assets/About/icon-1.svg";
const About = () => {
  return (
    <div>
      <ul className="flex mx-auto gap-4 pl-5 pt-5 pb-5 ">
        <li className="flex gap-2 text-[14px] text-[#3BB77E]">
          <img src={home} alt="" />
          Home
        </li>
        <li className="text-[#7E7E7E] text-[14px]">Pages </li>
        <li className="text-[#7E7E7E]  text-[14px]">About us</li>
      </ul>
      <hr className="text-[#ECECEC]" />

      {/*  */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 justify-between items-center px-4 py-10">
        <div className="w-full lg:w-1/2">
          <img src={Welcome} alt="Welcome" className="w-full h-auto" />
        </div>

        <div className="w-full lg:w-1/2 max-w-[645px] flex flex-col gap-5 mt-6 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#253D4E]">
            Welcome to Nest
          </h1>

          <p className="text-[#7E7E7E] text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad maxim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>

          <p className="text-[#7E7E7E] text-sm md:text-base">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre. Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>

          <FoodCarousel />
        </div>
      </div>
      {/*  */}

      <div className="container mx-auto mt-15">
        <div>
          <h1 className="text-[40px] font-semibold text-center text-[#253D4E]">
            What We Provide?
          </h1>

          <div className="flex flex-wrap justify-center gap-10 px-4 mt-[60px]">
            {/* Card 1 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="max-w-[425px] h-[425px] border border-[#ECECEC] rounded-2xl flex flex-col px-5 items-center justify-center gap-5">
              <div>
                <img src={icon1} alt="icon" />
              </div>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-2xl font-semibold">Best Prices & Offers</h1>
                <p className="text-[#7E7E7E] text-[17px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
                <button className="text-[#3BB77E] cursor-pointer">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
