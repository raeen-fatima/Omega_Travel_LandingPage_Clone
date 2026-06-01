"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function FloatingActions() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div
          className="
            fixed
            right-5
            bottom-5
            z-50
            animate-fadeIn
          "
        >
          <button
            onClick={scrollToTop}
            className="
              w-12
              h-12
              rounded-full
              bg-green-700
              text-white
              flex
              items-center
              justify-center
              shadow-xl
              hover:bg-green-800
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
}