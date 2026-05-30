import {
  FaChair,
  FaUsers,
  FaSnowflake,
  FaSuitcase,
  FaMusic,
  FaCogs,
  FaTv,
  FaWindowMaximize,
  FaLightbulb,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaFirstAid,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChair />,
    title: "Pushback Seat",
  },

  {
    icon: <FaUsers />,
    title: "Multi Seating",
  },

  {
    icon: <FaSnowflake />,
    title: "Powerful AC Vents",
  },

  {
    icon: <FaSuitcase />,
    title: "Adequate Luggage Space",
  },

  {
    icon: <FaMusic />,
    title: "Entertainment System",
  },

  {
    icon: <FaCogs />,
    title: "Powerful Engine",
  },

  {
    icon: <FaTv />,
    title: "TV Screen",
  },

  {
    icon: <FaWindowMaximize />,
    title: "Large Pane Windows",
  },

  {
    icon: <FaSnowflake />,
    title: "Ice Box",
  },

  {
    icon: <FaLightbulb />,
    title: "Night Moon Lighting",
  },

  {
    icon: <FaMobileAlt />,
    title: "Mobile Charging Points",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "GPS Enabled",
  },

  {
    icon: <FaFirstAid />,
    title: "First Aid Kit",
  },

  {
    icon: <FaWindowMaximize />,
    title: "Sliding Curtains",
  },
];

export default function Features() {
  return (
    <section className="py-14 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[38px] font-bold text-[#003B7A]">

          Tempo Traveller
          <span className="text-red-600">
            {" "}
            Features:
          </span>

        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#F1E6DD] rounded-xl shadow-md hover:shadow-xl transition duration-300 py-10 px-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2"
            >

              {/* Icon Box */}
              <div className="w-20 h-20 rounded-xl border border-red-400 bg-white flex items-center justify-center text-4xl text-[#003B7A] group-hover:text-red-600 transition">

                {feature.icon}

              </div>

              {/* Title */}
              <h3 className="mt-6 text-[18px] font-semibold text-[#003B7A]">

                {feature.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}