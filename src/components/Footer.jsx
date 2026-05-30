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
  "Tempo Traveller Hire in Jaipur",
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
  "Tempo Traveller in Haridwar",
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
  "Delhi to Manali",
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
  "Delhi to Mathura",
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

export default function Footer() {
  return (
    <footer className="bg-[#02182B] text-white pt-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTACT STRIP */}
        <div className="bg-[#0B5EC9] rounded-xl px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center -mt-28 relative z-10">

          {/* PHONE */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-white text-[#0B5EC9] flex items-center justify-center text-xl">

              <FaPhoneAlt />

            </div>

            <div>
              <p className="text-sm text-gray-200">
                +91X-XXX-XXXX
              </p>
            </div>

          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-white text-[#0B5EC9] flex items-center justify-center text-xl">

              <FaEnvelope />

            </div>

            <div>
              <p className="text-sm text-gray-200">
                xyz@gmail.com
              </p>
            </div>

          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-white text-[#0B5EC9] flex items-center justify-center text-xl">

              <FaMapMarkerAlt />

            </div>

            <div>
              <p className="text-sm text-gray-200">
                Office Address - XYZ, ABC Street,
                New Delhi - 111111
              </p>
            </div>

          </div>

        </div>

        {/* FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-12">

          {/* COLUMN 1 */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Tempo Traveller Services in Top Cities
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <ul className="space-y-3">

                {cityLinks1.map((link, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >

                    <FaChevronRight className="text-[10px]" />

                    {link}

                  </li>

                ))}

              </ul>

              <ul className="space-y-3">

                {cityLinks2.map((link, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >

                    <FaChevronRight className="text-[10px]" />

                    {link}

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* COLUMN 2 */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Tempo Traveller for Outstation from Delhi
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <ul className="space-y-3">

                {outstationLinks1.map((link, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >

                    <FaChevronRight className="text-[10px]" />

                    {link}

                  </li>

                ))}

              </ul>

              <ul className="space-y-3">

                {outstationLinks2.map((link, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >

                    <FaChevronRight className="text-[10px]" />

                    {link}

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* COLUMN 3 */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Useful Links
            </h3>

            <ul className="space-y-4">

              {usefulLinks.map((link, index) => (

                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                >

                  <FaChevronRight className="text-[10px]" />

                  {link}

                </li>

              ))}

            </ul>

          </div>

          {/* COLUMN 4 */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Lets Connect Together
            </h3>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">

              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaYoutube />,
                <FaPinterestP />,
                <FaEnvelope />,
                <FaLinkedinIn />,
              ].map((icon, index) => (

                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-white text-[#02182B] flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"
                >

                  {icon}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 mt-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2025 All Right Reserved XYZ
          </p>

          <p className="mt-3 md:mt-0">
            Design & Development by React Dev
          </p>

        </div>

      </div>

    </footer>
  );
}