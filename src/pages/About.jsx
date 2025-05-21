import React from "react";
import home from "../assets/About/home.svg";
import Welcome from "../assets/About/Welcome.svg";
import FoodCarousel from "../components/FoodCarusel/FoodCarusel";
import icon1 from "../assets/About/icon-1.svg";
import partner from "../assets/About/partners.jpeg";
import partner2 from "../assets/About/partner2.png";
import mainImg from "../assets/About/Main.png";
import main1 from "../assets/About/main1.svg";
import main2 from "../assets/About/main2.svg";
import facebook from "../assets/About/icons/facebook.svg";
import instagram from "../assets/About/icons/instagram.svg";
import telegram from "../assets/About/icons/twitter.svg";
import youtube from "../assets/About/icons/youtube.png";
const About = () => {
  return (
    <div className=" ">
    
     

      {/*  */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 justify-between items-center px-4 ">
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
      {/*  */}
      <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10 px-4 py-10">
        <div className="w-full md:w-[300px]">
          <img
            className="w-full h-auto max-h-[415px] rounded-2xl object-cover"
            src={partner}
            alt="partner"
          />
        </div>

        <div className="w-full md:w-[250px]">
          <img className="w-full h-auto" src={partner2} alt="partner2" />
        </div>

        <div className="w-full lg:max-w-[550px] flex flex-col gap-5 mt-6 lg:mt-0">
          <h1 className="text-[#B6B6B6] text-base md:text-lg lg:text-[24px]">
            Our performance
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-[48px] font-semibold text-[#253D4E] leading-snug">
            Your Partner for e- commerce grocery solution
          </h1>
          <p className="text-[#7E7E7E] text-sm md:text-base">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </p>
          <p className="text-[#7E7E7E] text-sm md:text-base">
            Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia
          </p>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-6 px-4 py-10">
        <div className="w-full md:w-[48%] lg:w-[30%]">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-[#253D4E] leading-snug mb-2">
            Who we are
          </h1>
          <p className="text-sm md:text-base text-[#4B5563]">
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>

        <div className="w-full md:w-[48%] lg:w-[30%]">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-[#253D4E] leading-snug mb-2">
            Our history
          </h1>
          <p className="text-sm md:text-base text-[#4B5563]">
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>

        <div className="w-full md:w-[100%] lg:w-[30%]">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-[#253D4E] leading-snug mb-2">
            Our mission
          </h1>
          <p className="text-sm md:text-base text-[#4B5563]">
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
      </div>
      <div>
        <div
          className="container mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-5 px-4 py-8 relative rounded-3xl h-[auto] md:h-[315px] overflow-hidden"
          style={{
            backgroundImage: `url(${mainImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#4B675A] opacity-60 rounded-3xl z-0"></div>

          {[
            "Glorious years",
            "Happy clients",
            "Projects complete",
            "Team advisor",
            "Products Sale",
          ].map((text, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[190px] text-center z-10 text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold">0+</h1>
              <p className="text-lg md:text-2xl font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto flex flex-col items-center mt-10 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#253D4E] text-center">
          Our Team
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Left Text Block */}
          <div className="w-full lg:max-w-[445px] flex flex-col gap-5">
            <p className="text-[#3BB77E]">Our Team</p>
            <h1 className="text-xl md:text-2xl lg:text-[48px] font-semibold text-[#253D4E] leading-snug">
              Meet Our Expert Team
            </h1>
            <p className="text-[#7E7E7E] text-sm md:text-base">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <p className="text-[#7E7E7E] text-sm md:text-base">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
          </div>

          {/* Team Members */}
          <div className="flex flex-col md:flex-row gap-20 sm:10 justify-center items-center ">
            {/* Member 1 */}
            <div className="flex flex-col items-center relative">
              <img
                src={main1}
                alt="Member 1"
                className="w-full max-w-[340px]"
              />
              <div className="w-[90%] max-w-[320px] h-[165px] rounded-2xl shadow-xl absolute bg-white -bottom-10 flex flex-col gap-1 items-center justify-center">
                <h1 className="text-[#253D4E] text-2xl font-semibold">
                  H. Merinda
                </h1>
                <p className="text-[#7E7E7E] text-[17px] font-medium">
                  CEO & Co-Founder
                </p>
                <div className="flex gap-3 mt-2">
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                  <img src={telegram} alt="telegram" />
                  <img src={youtube} alt="youtube" />
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col items-center relative">
              <img
                src={main2}
                alt="Member 2"
                className="w-full max-w-[340px]"
              />
              <div className="w-[90%] max-w-[320px] h-[165px] rounded-2xl shadow-xl absolute bg-white -bottom-10 flex flex-col gap-1 items-center justify-center">
                <h1 className="text-[#253D4E] text-2xl font-semibold">
                  Dilan Specter
                </h1>
                <p className="text-[#7E7E7E] text-[17px] font-medium">
                  Head Engineer
                </p>
                <div className="flex gap-3 mt-2">
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                  <img src={telegram} alt="telegram" />
                  <img src={youtube} alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
