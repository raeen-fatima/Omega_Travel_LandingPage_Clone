"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function EnquiryStrip() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Enquiry Strip */}

      <div
        onClick={() => setOpen(true)}
        className="
          fixed
          right-0
          top-[60%]
          -translate-y-1/2
          z-50
          cursor-pointer
        "
      >
        <Image
          src="/attachment-action.webp"
          alt="Enquiry Now"
          width={32}
          height={186}
          priority
          className="w-8 h-auto block"
        />
      </div>

      {/* Modal */}

      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-999
            px-4
          "
        >
          <div
            className="
              w-full
              max-w-390px
              bg-[#005F8E]
              overflow-hidden
              rounded-sm
              shadow-2xl
              relative
            "
          >
            {/* Header */}

            <div className="relative h-42px bg-[#003B7A] flex items-center px-5">

              <h3 className="text-white text-[16px] font-bold z-10">
                Get Free Quote
              </h3>

              {/* Red Shape */}

              <div
                className="
                  absolute
                  top-0
                  right-14
                  h-full
                  w-28
                  bg-red-600
                  [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
                "
              />

              {/* Close Button */}

              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-3
                  top-1
                  w-8
                  h-8
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-black
                  z-20
                "
              >
                <FaTimes size={14} />
              </button>

            </div>

            {/* Form */}

            <div className="p-4">

              <form className="space-y-4">

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    Enter Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    Contact No.
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    Enter Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    No. of Person
                  </label>

                  <input
                    type="text"
                    placeholder="Enter No. of Person"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    Arrival Date
                  </label>

                  <input
                    type="date"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-[13px] font-semibold mb-1">
                    What is 4 + 4 ?:
                  </label>

                  <input
                    type="text"
                    placeholder="What is 4 + 4"
                    className="
                      w-full
                      h-10
                      px-3
                      bg-white
                      rounded
                      text-sm
                      outline-none
                    "
                  />
                </div>

                {/* Submit */}

                <div className="flex justify-center pt-2">

                  <button
                    type="submit"
                    className="
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      text-[12px]
                      font-bold
                      px-8
                      py-2.5
                      transition-all
                    "
                  >
                    SUBMIT
                  </button>

                </div>

              </form>

            </div>
          </div>
        </div>
      )}
    </>
  );
}