import React from "react";
import Logo from "../assets/Group 2166.png";

function Support() {
  return (
    <div className="bg-[#ECEC08] h-[100vh]">
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
        <a className="" href="/">
          <img className="mb-16 mx-auto" src={Logo} alt="" />
        </a>
        <div className="flex flex-col ">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center leading-snug text-center tracking-tight text-black md:text-5xl">
              Support
            </h1>
            <p className="my-8 text-base font-normal text-center text-black">
              Support superheroes at your service! Questions? Issues? We've got
              your back. Satisfaction guaranteed!
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="tel:+233555190488"
              className="mb-2 text-base font-normal text-center text-black"
            >
              +233555190488
            </a>
            <a
              href="tel:+233200438498"
              className="mb-2 text-base font-normal text-center text-black"
            >
              +233200438498
            </a>
            <a
              href="mailto:admin@chopmoney.co"
              className="mb-4 text-base font-normal text-center text-black"
            >
              admin@chopmoney.co
            </a>
          
              <a
                className=" mt-2 bg-black w-48 rounded-xl mx-auto p-4 text-base font-normal text-center text-[#ECEC08]"
                href="https://wa.me/message/NRDZZQVYGWMCL1"
              >
              Whatsapp Chat
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
