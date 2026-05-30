"use client";

import { MdMessage } from "react-icons/md";

export default function EnquiryStrip() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">

      <button
        className="
          bg-[#003B7A]
          text-white
          w-8.5
          h-37.5
          flex
          flex-col
          items-center
          pt-2
          shadow-lg
        "
      >

        {/* ICON */}
        <MdMessage className="text-[16px] mt-1" />

        {/* TEXT */}
        <span
          className="
            mt-2
            text-[11px]
            font-bold
            [writing-mode:vertical-rl]
          "
        >

          Enquiry Now

        </span>

      </button>

    </div>
  );
}