import React, { useEffect } from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import Logoblack from "../assets/Group 2166.png";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Nostalgia() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="slide-left"
      data-aos-offset="300"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="bg-white relative">
        <section className="h-[100vh] text-[#0D0D0D] flex items-center justify-center">
          <div className="absolute inset-x-0 top-10 h-16 ">
            <img className="mx-auto h-14" src={Logoblack} alt="" />
          </div>
          <div className="absolute inset-y-0 left-4 sm:inset-y-auto w-20">
            <Link
              to="/about2"
              aria-label="Scroll Left"
              className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-[#0D0D0D] rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-125"
            >
              <BsArrowLeft className="text-[#0D0D0D]" />
            </Link>
            <span className="text-[0.6rem] text-[#0D0D0D] text-center">
              The smart way...
            </span>
          </div>
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center 2xl:p-0 md:py-32 md:px-10 lg:px-32 xl:max-w-4xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl 2xl:text-6xl">
              The Chopmoney story.
            </h1>
            <p className="my-2 sm:my-4 text-sm font-bold text-[#0D0D0D] 2xl:text-base">
              Nostalgia.
            </p>
            <p className="my-2 sm:my-4 text-sm text-[#0D0D0D] 2xl:text-base">
              Just as mum or dad gave you{" "}
              <span className="font-bold">daily or weekly stipend </span> that
              could not be exceeded,{" "}
              <span className="font-bold">Chopmoney</span> is a lifestyle mobile
              app that allows you to{" "}
              <span className="font-bold">
                {" "}
                stick to your budget by sending you only the amount you have
                pre-selected every day.
              </span>
            </p>
            <p className="my-2 sm:my-4 text-sm text-[#0D0D0D] 2xl:text-base">
              It is budgeting made better and free, so you can focus on what's
              important to you. With Chopmoney, you're in control of your
              spending and can take care of yourself or others without
              overspending.
            </p>
            <div className="flex flex-row flex-wrap justify-center">
              <button className="px-8 py-4 m-2 text-xs font-semibold rounded bg-[#0D0D0D] text-white hover:scale-110 duration-300 transform">
                Apple Store
                <AiFillApple className="text-xl inline m-auto ml-4" />
              </button>
              <button className="px-8 py-4 m-2 text-xs font-semibold border border-[#0D0D0D] rounded text-[#0D0D0D] border-gray-700 hover:scale-110 duration-300 transform">
                Play Store
                <FaGooglePlay className="text-sm inline m-auto ml-4" />
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20">
              <a
                href="/"
                aria-label="Scroll Up"
                className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-[#0D0D0D] rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-125"
              >
                <BsArrowUp className="text-[#0D0D0D]" />
              </a>
              <span className="text-[0.6rem] text-[#0D0D0D]">
                {" "}
                Up, up and away!
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Nostalgia;
