import { FaTag } from "react-icons/fa";

export default function BookingForm() {
  return (
    <div className="overflow-hidden shadow-lg">

      {/* Header */}

      <div className="relative bg-[#003B7A] px-5 py-3 border-b border-dashed border-white/50">

        <h3 className="flex items-center gap-2 text-white text-[18px] font-bold relative z-10">
          <FaTag />
          Book Tempo Traveller
        </h3>

        {/* Red Shape */}

        <div
          className="
            absolute
            top-0
            right-0
            w-0
            h-0
            border-l-100px
            border-l-transparent
            border-t-44px
            border-t-red-600
          "
        />
      </div>

      {/* Form */}

      <div
        className="
          bg-linear-to-b
          from-[#173D72]
          via-[#1D2E62]
          to-[#3A0837]
          p-4
        "
      >
        <form className="space-y-3">

          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          />

          <input
            type="text"
            placeholder="Contact No."
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          />

          <input
            type="date"
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          />

          <select
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          >
            <option>Select Tempo Traveller</option>
          </select>

          <textarea
            rows={2}
            placeholder="Date / Travel Plan / More..."
            className="
              w-full
              px-3
              py-2
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
              resize-none
            "
          />

          {/* Captcha */}

          <div className="text-white text-[15px] font-semibold pt-1">
            What is 4 + 4 ?
          </div>

          <input
            type="text"
            placeholder="What is 4 + 4"
            className="
              w-full
              h-11
              px-3
              text-[14px]
              bg-white
              border
              border-gray-300
              outline-none
            "
          />

          {/* Button */}

          <div className="flex justify-center pt-2">

            <button
              type="submit"
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                text-[13px]
                font-bold
                px-8
                py-3
                transition-all
                duration-300
              "
            >
              SUBMIT ENQUIRY
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}