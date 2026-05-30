"use client";

import { FaArrowUp } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function FloatingActions() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

      

      {/* SCROLL TO TOP BUTTON */}
      <div className="fixed right-5 bottom-5 z-50">

        <button
          onClick={scrollToTop}
          className="
            w-12 h-12
            rounded-full
            bg-green-700
            text-white
            flex items-center justify-center
            shadow-xl
            hover:bg-green-800
            hover:scale-110
            transition duration-300
          "
        >

          <FaArrowUp />

        </button>

      </div>

    </>
  );
}