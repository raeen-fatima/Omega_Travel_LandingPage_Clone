import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiWordpress } from "react-icons/si";

const cityLinks1 = [
  "Tempo Traveller Hire in Gurgaon",
  "Tempo Traveller Hire in Noida",
  "Tempo Traveller Hire in Faridabad",
  "Tempo Traveller Hire in Ghaziabad",
  "Tempo Traveller Hire in Chandigarh",
  "Tempo Traveller Hire in Amritsar",
  "Tempo Traveller Hire in Mumbai",
  "Tempo Traveller Hire in Varanasi",
  "Tempo Traveller Hire in Udaipur",
];

const cityLinks2 = [
  "Tempo Traveller in Ooty",
  "Tempo Traveller in Pune",
  "Tempo Traveller in Rajkot",
  "Tempo Traveller in Rishikesh",
  "Tempo Traveller in Srinagar",
  "Tempo Traveller in Agra",
  "Tempo Traveller in Ahmedabad",
  "Tempo Traveller in Ambala Cantt",
  "Tempo Traveller in Dehradun",
];

const outstationLinks1 = [
  "Delhi to Agra",
  "Delhi to Amritsar",
  "Delhi to Dalhousie",
  "Delhi to Dehradun",
  "Delhi to Haridwar",
  "Delhi to Jaisalmer",
  "Delhi to Jodhpur",
  "Delhi to Kasol",
  "Delhi to Katra",
];

const outstationLinks2 = [
  "Delhi to Nainital",
  "Delhi to Pushkar",
  "Delhi to Rishikesh",
  "Delhi to Udaipur",
  "Delhi to Varanasi",
  "Delhi to Ayodhya",
  "Delhi to Badrinath",
  "Delhi to Kedarnath",
  "Delhi to Kasauli",
];

const maharajaLinks = [
  "10 Seater Maharaja Tempo Traveller",
  "11 Seater Maharaja Tempo Traveller",
  "12 Seater Maharaja Tempo Traveller",
  "13 Seater Maharaja Tempo Traveller",
  "14 Seater Maharaja Tempo Traveller",
  "15 Seater Maharaja Tempo Traveller",
  "16 Seater Maharaja Tempo Traveller",
  "17 Seater Maharaja Tempo Traveller",
  "18 Seater Maharaja Tempo Traveller",
  "19 Seater Maharaja Tempo Traveller",
];

const usefulLinks = [
  "Home",
  "About Us",
  "Outstation",
  "Privacy Policy",
  "T & C",
  "Contact Us",
  "HTML Site Map",
  "XML Site Map",
  "State Tax",
  "Travel Guide",
];

const socialIcons = [
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
  SiWordpress,
  FaLinkedinIn,
];

const linkClass = `
flex
items-center
gap-3
py-3
text-[15px]
text-white
border-b
border-dashed
border-white/20
hover:text-red-400
transition-all
duration-300
`;

export default function Footer() {
  return (
    <footer className="bg-[#031B2E] text-white pt-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* CONTACT STRIP */}

        <div
          className="
            bg-[#0D63C9]
            rounded-[20px]
            px-8
            lg:px-12
            py-8
            grid
            md:grid-cols-3
            gap-8
            items-center
            relative
            -mt-28
            z-10
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                w-14 h-14
                rounded-full
                bg-white
                text-[#0D63C9]
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              <FaPhoneAlt />
            </div>

            <p>+91X-XXX-XXXX</p>

          </div>

          <div className="flex items-center gap-4">

            <div
              className="
                w-14 h-14
                rounded-full
                bg-white
                text-[#0D63C9]
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              <FaEnvelope />
            </div>

            <p>xyz@gmail.com</p>

          </div>

          <div className="flex items-center gap-4">

            <div
              className="
                w-14 h-14
                rounded-full
                bg-white
                text-[#0D63C9]
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              <FaMapMarkerAlt />
            </div>

            <p>
              Office Address : XYZ, ABC Street,
              New Uttar Pradesh - 111111
            </p>

          </div>
        </div>

        {/* FIRST ROW */}

        <div className="grid lg:grid-cols-2 gap-12 pt-16">

          {/* TOP CITIES */}

          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Tempo Traveller Services in Top Cities
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <ul>
                {cityLinks1.map((item) => (
                  <li key={item} className={linkClass}>
                    <FaChevronRight size={10} />
                    {item}
                  </li>
                ))}
              </ul>

              <ul>
                {cityLinks2.map((item) => (
                  <li key={item} className={linkClass}>
                    <FaChevronRight size={10} />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* OUTSTATION */}

          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Tempo Traveller for Outstation from Delhi
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <ul>
                {outstationLinks1.map((item) => (
                  <li key={item} className={linkClass}>
                    <FaChevronRight size={10} />
                    {item}
                  </li>
                ))}
              </ul>

              <ul>
                {outstationLinks2.map((item) => (
                  <li key={item} className={linkClass}>
                    <FaChevronRight size={10} />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

        {/* SECOND ROW */}

        <div className="grid lg:grid-cols-3 gap-12 pt-12 pb-12">

          {/* MAHARAJA */}

          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Maharaja Tempo Traveller Variants
            </h3>

            <ul>
              {maharajaLinks.map((item) => (
                <li key={item} className={linkClass}>
                  <FaChevronRight size={10} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* USEFUL LINKS */}

          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Useful Links
            </h3>

            <ul>
              {usefulLinks.map((item) => (
                <li key={item} className={linkClass}>
                  <FaChevronRight size={10} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-[20px] font-semibold mb-8">
              Lets Connect Together
            </h3>

            <div className="flex flex-wrap gap-4">

              {socialIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="
                    w-11 h-11
                    rounded-full
                    bg-white
                    text-red-600
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:bg-red-600
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <Icon />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="bg-[#011220] py-5">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            text-sm
          "
        >
          <p className="text-white">
            © 2026 All Right Reserved XYZ
          </p>

          <p className="text-white mt-2 md:mt-0">
            Design & Development by Ritesh Ray
          </p>
        </div>

      </div>

    </footer>
  );
}