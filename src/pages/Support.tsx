import React from "react";
import Logo from "../assets/Group 2166.png";

function Support() {
  return (
    <div>
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
        <a href="/">
          <img className="mb-16" src={Logo} alt="" />
        </a>
        <div className="flex flex-col ">
          <div>
            <h1 className="mb-2 text-xl font-bold leading-snug tracking-tight text-gray-800 md:text-5xl">
              Support
            </h1>
            <p className="my-8 text-base font-normal text-gray-600">
              Support superheroes at your service! Questions? Issues? We've got
              your back. Satisfaction guaranteed!
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="tel:+233555190488"
              className="mb-2 text-base font-normal text-gray-600"
            >
              +233555190488
            </a>
            <a
              href="tel:+233200438498"
              className="mb-2 text-base font-normal text-gray-600"
            >
              +233200438498
            </a>
            <a
              href="mailto:admin@chopmoney.co"
              className="mb-4 text-base font-normal text-gray-600"
            >
              admin@chopmoney.co
            </a>
            <p className="mt-2 text-base font-normal text-gray-600">
              WhatsApp chat:{" "}
              <a
                className="underline"
                href="https://wa.me/message/NRDZZQVYGWMCL1"
              >
                https://wa.me/message/NRDZZQVYGWMCL1
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
