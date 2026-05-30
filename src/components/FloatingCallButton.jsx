"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingCallButton() {
  return (
    <div className="fixed left-5 bottom-10 z-50">

      <button
        className="
          w-16 h-16
          rounded-full
          bg-red-600
          text-white
          flex items-center justify-center
          text-2xl
          shadow-2xl
          hover:bg-red-700
          hover:scale-110
          transition duration-300
        "
      >

        <FaPhoneAlt />

      </button>

    </div>
  );
}