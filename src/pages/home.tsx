import React, { useEffect } from "react";
import Logo from "../assets/Lite2.png";

import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import QuestionMark from "../assets/icon1.svg";
import Mail from "../assets/Group 2225.svg";
import Instagram from "../assets/Group 2226.svg";
import Fb from "../assets/Group 2227.svg";
import Twitter from "../assets/Group 2228.svg";
import Tiktok from "../assets/Group 2229.svg";
import WordpressIcon from "../assets/wordpressicon.png";
import GoogleTagManager from "../GoogleTag";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

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
      <GoogleTagManager />
      <div>
        <div className="bg-[#0D0D0D] relative">
          <div className="bgr">
            <section className="h-[100vh] text-white flex items-center justify-center bgarrow">
              <a href="/" className="absolute inset-x-0 h-16 top-10 ">
                <img className="mx-auto h-28" src={Logo} alt="" />
              </a>
              <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 2xl:p-0 xl:max-w-4xl">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl 2xl:text-8xl">
                  Pay yourself anytime, any day!
                </h1>
                <p className="mt-6 mb-6 text-sm text-white 2xl:text-base">
                  Enjoy life while sticking to your budget with Chopmoney.
                  Whether you’re a Big Spender or an Economic Guru, your money
                  makes it to the month's end!
                </p>
                <div className="flex flex-row flex-wrap justify-center">
                  <a
                    href="https://apps.apple.com/app/chopmoney/id6444722445"
                    className="px-8 py-4 m-2 text-xs font-semibold rounded bg-[#ECEC08] text-gray-900 hover:scale-110 duration-300 transform"
                    type="button"
                  >
                    Apple Store
                    <AiFillApple className="inline m-auto ml-4 text-xl" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=co.chopmoney.app"
                    className="px-8 py-4 m-2 text-xs font-semibold border border-[#ECEC08] rounded text-[#ECEC08] border-gray-700 hover:scale-110 duration-300 transform"
                    type="button"
                  >
                    Play Store
                    <FaGooglePlay className="inline m-auto ml-4 text-sm" />
                  </a>
                  {/* <PlaystoreModal /> */}
                </div>
                <Link
                  className="text-[#878787] font-normal z-10 border-2 border-[#474747] p-2 bg-[#2E2D2D] rounded-full text-xs sm:text-sm absolute left-[18px] md:left-[60px] sm:bottom-[70px] sm:top-[auto] lg:left-[200px] top-[20px] transition hover:scale-110 ease-in duration-200"
                  to="/support"
                >
                  Support
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20">
                  <Link
                    to="/storytime"
                    aria-label="Scroll down"
                    className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-[#ECEC08] rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-125"
                  >
                    <BsArrowDown className="text-[#ECEC08]" />
                  </Link>
                  <span className="text-[0.6rem] text-[#ECEC08]">
                    {" "}
                    Story time 😁
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="duration-300 animate-bounce">
          <div className="fab">
            <div className="mainop ">
              <img src={QuestionMark} alt="" />
            </div>
            <div id="forms" className="minifab op5">
              <a
                href="https://www.tiktok.com/@chopmoney.co"
                target="_blank"
                rel="noopener"
              >
                <img src={Tiktok} alt="" />
              </a>
            </div>
            <div id="drawings" className="minifab op4">
              <a
                href="https://twitter.com/chopmoneyco/"
                target="_blank"
                rel="noopener"
              >
                <img src={Twitter} alt="" />
              </a>
            </div>
            <div id="slides" className="minifab op3">
              <a
                href="https://web.facebook.com/chopmoney.co/"
                target="_blank"
                rel="noopener"
              >
                <img src={Fb} alt="" />
              </a>
            </div>
            <div id="sheets" className="minifab op2">
              <a
                href="https://www.instagram.com/chopmoney.co/"
                target="_blank"
                rel="noopener"
              >
                <img src={Instagram} alt="" />
              </a>
            </div>
            <div id="docs" className="minifab op1">
              <a href="mailto:admin@chopmoney.co">
                <img src={Mail} alt="" />
              </a>
            </div>
          </div>
        </div>
        <a
          className="fixed text-white bg-[#2E2D2D] p-1 border-[#474747] border-2 rounded-full top-5 right-4 hover:scale-150 ease-in duration-200 sm:hidden"
          href="https://chopmoneyco.wordpress.com/"
        >
          <img className="w-6" src={WordpressIcon} alt="" />
        </a>
        <a
          className="hidden sm:flex sm:text-[#878787] sm:text-sm sm:items-center sm:border-[#474747] sm:border-2 sm:font-light sm:fixed sm:top-5 sm:right-14 sm:bg-[#2E2D2D] sm:py-2 sm:px-2 sm:rounded-full  sm:hover:scale-110 sm:ease-in sm:duration-200"
          href="https://chopmoneyco.wordpress.com/"
        >
          Tit bits!
          <img
            className="hidden sm:flex sm:w-6 sm:pl-1"
            src={WordpressIcon}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
