import React from "react";
import { AiFillApple } from "react-icons/ai";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AppstoreModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-8 py-4 m-2 text-xs font-semibold rounded bg-[#ECEC08] text-gray-900 hover:scale-110 duration-300 transform"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Apple Store
        <AiFillApple className="inline m-auto ml-4 text-xl" />
      </button>
      {showModal ? (
        <>
           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-[#2d2d2d] outline-none focus:outline-none">
                {/*body*/}
                <div className="relative px-6 pb-6 flex-auto">
                  <Player
                    src="https://assets4.lottiefiles.com/packages/lf20_0skurerf.json"
                    className="player"
                    loop
                    autoplay
                    style={{ height: '250px', width: '250px' }}
                  />
                  <p className="my-2 text-white text-lg leading-relaxed">
                    Coming Soon ....
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center px-6 pb-6 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Alright
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
