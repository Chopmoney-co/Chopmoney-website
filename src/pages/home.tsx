import React, { useEffect } from "react";
import Logo from "../assets/Lite.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
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
    ><div>
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
                Enjoy life while sticking to your budget with Chopmoney. Whether
                you’re a Big Spender or an Economic Guru, your money
                makes it to Friday!
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
      <div className="animate-bounce duration-300">
    <div className="fab">
      <div className="mainop ">
        <svg
        id="Component_15_1"
        data-name="Component 15 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
      >
        <g
          id="Rectangle_2290"
          data-name="Rectangle 2290"
          fill="rgba(236,236,11,0.07)"
          stroke="#ecec0b"
          stroke-width="3"
        >
          <rect width="60" height="60" rx="30" stroke="none" />
          <rect x="1.5" y="1.5" width="57" height="57" rx="28.5" fill="none" />
        </g>
        <g
          id="Icon_feather-help-circle"
          data-name="Icon feather-help-circle"
          transform="translate(12 12)"
        >
          <path
            id="Path_23"
            data-name="Path 23"
            d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z"
            fill="none"
            stroke="#ecec0b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            id="Path_24"
            data-name="Path 24"
            d="M13.635,13.5A4.5,4.5,0,0,1,22.38,15c0,3-4.5,4.5-4.5,4.5"
            fill="none"
            stroke="#ecec0b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            id="Path_25"
            data-name="Path 25"
            d="M18,25.5h0"
            fill="none"
            stroke="#ecec0b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </g>
      </svg>
      </div>
      <div id="forms" className="minifab op5">
        <a href="https://www.tiktok.com/@chopmoney.co" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="43.865" height="43.865" viewBox="0 0 43.865 43.865">
  <g id="Group_2229" data-name="Group 2229" transform="translate(-203.773 -8.068)">
    <path id="Path_36" data-name="Path 36" d="M43.865,23.432A20.432,20.432,0,1,1,23.432,3,20.432,20.432,0,0,1,43.865,23.432Z" transform="translate(202.273 6.568)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Icon_simple-tiktok" data-name="Icon simple-tiktok" d="M11.077.016C12.119,0,13.152.008,14.186,0a4.953,4.953,0,0,0,1.392,3.316A5.608,5.608,0,0,0,18.95,4.739v3.2a8.512,8.512,0,0,1-3.34-.771,9.825,9.825,0,0,1-1.288-.74c-.008,2.322.008,4.644-.016,6.958a6.074,6.074,0,0,1-1.074,3.133,5.925,5.925,0,0,1-4.7,2.553,5.8,5.8,0,0,1-3.244-.819,6,6,0,0,1-2.9-4.541c-.016-.4-.024-.8-.008-1.185A5.987,5.987,0,0,1,9.32,7.221c.016,1.177-.032,2.354-.032,3.531A2.728,2.728,0,0,0,5.8,12.437a3.155,3.155,0,0,0-.111,1.28A2.706,2.706,0,0,0,8.477,16a2.672,2.672,0,0,0,2.2-1.28,1.835,1.835,0,0,0,.326-.843c.08-1.423.048-2.839.056-4.262.008-3.2-.008-6.4.016-9.6Z" transform="translate(215.047 20.458)" fill="#ecec0b"/>
  </g>
</svg></a>
      </div>
      <div id="drawings" className="minifab op4">
        <a href="https://twitter.com/chopmoneyco/" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="43.865" height="43.865" viewBox="0 0 43.865 43.865">
  <g id="Group_2228" data-name="Group 2228" transform="translate(-154.773 -8.068)">
    <path id="Path_34" data-name="Path 34" d="M43.865,23.432A20.432,20.432,0,1,1,23.432,3,20.432,20.432,0,0,1,43.865,23.432Z" transform="translate(153.273 6.568)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Icon_feather-twitter" data-name="Icon feather-twitter" d="M24.9,4.5a11.593,11.593,0,0,1-3.34,1.627A4.765,4.765,0,0,0,13.2,9.313v1.064A11.337,11.337,0,0,1,3.627,5.559S-.627,15.131,8.945,19.385A12.38,12.38,0,0,1,1.5,21.512c9.572,5.318,21.271,0,21.271-12.231a4.786,4.786,0,0,0-.085-.883A8.211,8.211,0,0,0,24.9,4.5Z" transform="translate(163.507 15.973)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>
</a>
        
      </div>
      <div id="slides" className="minifab op3">
        <a href="https://web.facebook.com/chopmoney.co/" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="43.865" height="43.865" viewBox="0 0 43.865 43.865">
  <g id="Group_2227" data-name="Group 2227" transform="translate(-106.068 -8.068)">
    <path id="Path_32" data-name="Path 32" d="M43.865,23.432A20.432,20.432,0,1,1,23.432,3,20.432,20.432,0,0,1,43.865,23.432Z" transform="translate(104.568 6.568)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Icon_feather-facebook" data-name="Icon feather-facebook" d="M21,3H18.134a4.771,4.771,0,0,0-4.771,4.771v2.863H10.5v3.817h2.863v7.634H17.18V14.451h2.863L21,10.634H17.18V7.771a.954.954,0,0,1,.954-.954H21Z" transform="translate(112.252 17.458)" fill="#ecec0b"/>
  </g>
</svg>
</a>
        
      </div>
      <div id="sheets" className="minifab op2">
        <a href="https://www.instagram.com/chopmoney.co/" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="43.865" height="43.865" viewBox="0 0 43.865 43.865">
  <g id="Group_2226" data-name="Group 2226" transform="translate(-57.068 -8.068)">
    <path id="Path_28" data-name="Path 28" d="M43.865,23.432A20.432,20.432,0,1,1,23.432,3,20.432,20.432,0,0,1,43.865,23.432Z" transform="translate(55.568 6.568)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(66.458 17.458)">
      <path id="Path_29" data-name="Path 29" d="M7.771,3h9.542a4.771,4.771,0,0,1,4.771,4.771v9.542a4.771,4.771,0,0,1-4.771,4.771H7.771A4.771,4.771,0,0,1,3,17.314V7.771A4.771,4.771,0,0,1,7.771,3Z" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_30" data-name="Path 30" d="M19.657,15.192a3.817,3.817,0,1,1-3.216-3.216,3.817,3.817,0,0,1,3.216,3.216Z" transform="translate(-3.298 -3.251)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_31" data-name="Path 31" d="M26.25,9.75h0" transform="translate(-8.459 -2.456)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg></a>
      </div>
      <div id="docs" className="minifab op1">
        <a href="mailto:admin@chopmoney.co">
        <svg xmlns="http://www.w3.org/2000/svg" width="43.865" height="43.865" viewBox="0 0 43.865 43.865">
  <g id="Group_2225" data-name="Group 2225" transform="translate(-8.068 -8.068)">
    <path id="Path_23" data-name="Path 23" d="M43.865,23.432A20.432,20.432,0,1,1,23.432,3,20.432,20.432,0,0,1,43.865,23.432Z" transform="translate(6.568 6.568)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(20.407 22.326)">
      <path id="Path_26" data-name="Path 26" d="M4.919,6H20.267a1.924,1.924,0,0,1,1.919,1.919V19.43a1.924,1.924,0,0,1-1.919,1.919H4.919A1.924,1.924,0,0,1,3,19.43V7.919A1.924,1.924,0,0,1,4.919,6Z" transform="translate(-3 -6)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path id="Path_27" data-name="Path 27" d="M22.186,9l-9.593,6.715L3,9" transform="translate(-3 -7.081)" fill="#1d1d0c" stroke="#ecec0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    </g>
  </g>
</svg></a>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Home;
