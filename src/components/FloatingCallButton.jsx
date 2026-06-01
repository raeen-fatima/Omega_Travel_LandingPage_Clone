"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingCallButton() {
  return (
    <div className="fixed left-5 bottom-[22%] z-99">

      <a
        href="tel:+91XXXXXXXXXX"
        aria-label="Call Now"
        title="Call Now"
        className="
          phone-pulse
          w-16
          h-16
          rounded-full
          bg-[#cf0808]
          text-white
          flex
          items-center
          justify-center
          text-xl
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <FaPhoneAlt className="text-2xl font-extrabold animate-[wiggle_2.5s_infinite]" />
      </a>

    </div>
  );
}