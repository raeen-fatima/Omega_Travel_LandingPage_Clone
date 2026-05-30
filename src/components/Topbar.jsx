import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { SiWordpress } from "react-icons/si";

export default function Topbar() {
  return (
    <div className="bg-red-800 text-white">
      <div
        className="
        max-w-7xl
        mx-auto
        px-4 sm:px-6
        py-2
        flex
        items-center
        justify-between
      "
      >
        {/* DESKTOP CONTACT INFO */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          {/* PHONE */}
          <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2">
            <FaPhoneAlt className="text-[13px]" />

            <span>+91X-XXX-XXXX</span>
          </a>

          {/* EMAIL */}
          <a href="mailto:xyz@gmail.com" className="flex items-center gap-2">
            <FaEnvelope className="text-[13px]" />

            <span>xyz@gmail.com</span>
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div
          className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          lg:w-auto
        "
        >
          {[
            <FaPhoneAlt key="phone" />,
            <FaEnvelope key="mail" />,
            <FaFacebookF key="facebook" />,
            <FaInstagram key="instagram" />,
            <FaXTwitter key="twitter" />,
            <FaYoutube key="youtube" />,
            <FaPinterestP key="pinterest" />,
            <SiWordpress key="wordpress" />,
            <FaLinkedinIn key="linkedin" />,
          ].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="
              w-9 h-9
              sm:w-10 sm:h-10
              rounded-full
              bg-white
              text-red-600
              flex
              items-center
              justify-center
              text-[14px]
              hover:bg-black
              hover:text-white
              transition duration-300
            "
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
