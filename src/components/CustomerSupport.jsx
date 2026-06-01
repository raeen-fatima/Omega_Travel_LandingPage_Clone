import { FaPhoneAlt } from "react-icons/fa";

export default function CustomerSupport() {
  return (
    <div
      className="
        bg-[#003B7A]
        text-white
        border-2
        border-white
        p-4
        shadow-lg
      "
    >
      {/* Ribbon */}

      <div
        className="
          inline-block
          relative
          bg-[#0A5AA8]
          px-5
          py-1
          text-lg
          font-md
          mb-4
          leading-none
        "
      >
        Customer Support

        <span
          className="
            absolute
            top-0
            -right-4
            w-0
            h-0
            border-t-20
            border-b-20
            border-l-16
            border-t-transparent
            border-b-transparent
            border-l-[#0A5AA8]
          "
        />
      </div>

      {/* Heading */}

      <h3 className="text-md font-bold mb-2">
        Need Help Booking ?
      </h3>

      {/* Text */}

      <p className="text-md text-white mb-2">
        Call Our Customer Care Executive. We Are Available
        24x7 Just Dial.
      </p>

      {/* Button */}

      <a
        href="tel:+91XXXXXXXXXX"
        className="
          inline-flex
          items-center
          gap-3
          bg-red-700
          hover:bg-red-800
          px-4
          py-2
          font-bold
          transition-all
          duration-300
        "
      >
        <FaPhoneAlt />
        +91X-XXX-XXXX
      </a>
    </div>
  );
}