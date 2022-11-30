import React, { useEffect } from "react";
import Logo from "../assets/Lite.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import About from "./about";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="slide-up"
      data-aos-offset="300"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="bg-[#0D0D0D] relative">
        <div className="bgr">
          <section className="h-[100vh] text-white flex items-center justify-center bgarrow">
            <div className="absolute inset-x-0 top-10 h-16 ">
              <img className="mx-auto h-14" src={Logo} alt="" />
            </div>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 2xl:p-0 xl:max-w-4xl">
              <h1 className="text-4xl font-bold leading-none sm:text-6xl 2xl:text-8xl">
                Pay yourself anytime, any day!
              </h1>
              <p className="mt-6 mb-6 text-sm text-white 2xl:text-base">
                Whether you’re a Big Spender or an Economic Guru, your money
                makes it to Friday! We help you budget for rainy days.
              </p>
              <div className="flex flex-col flex-wrap justify-center">
                <button className="px-8 py-4 m-2 text-xs font-semibold rounded bg-[#ECEC08] text-gray-900 hover:scale-110 duration-300 transform">
                  Apple Store
                  <AiFillApple className="text-xl inline m-auto ml-4" />
                </button>
                <button className="px-8 py-4 m-2 text-xs font-semibold border border-[#ECEC08] rounded text-[#ECEC08] border-gray-700 hover:scale-110 duration-300 transform">
                  Play Store
                  <FaGooglePlay className="text-sm inline m-auto ml-4" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-20">
                <Link
                  to="/about1"
                  aria-label="Scroll down"
                  className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-[#ECEC08] rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-125"
                >
                  <BsArrowDown className="text-[#ECEC08]" />
                </Link>
                <span className="text-[0.6rem] text-[#ECEC08]">
                  {" "}
                  I still don't understand...
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
