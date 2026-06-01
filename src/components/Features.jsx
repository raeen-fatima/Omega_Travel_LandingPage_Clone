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
  { icon: FaChair, title: "Pushback Seat" },
  { icon: FaUsers, title: "Multi Seating" },
  { icon: FaSnowflake, title: "Powerful AC Vents" },
  { icon: FaSuitcase, title: "Adequate Luggage Space" },
  { icon: FaMusic, title: "Entertainment System" },
  { icon: FaCogs, title: "Powerful Engine" },
  { icon: FaTv, title: "TV Screen" },
  { icon: FaWindowMaximize, title: "Large Pane Windows" },
  { icon: FaSnowflake, title: "Ice Box" },
  { icon: FaLightbulb, title: "Night Moon Lighting" },
  { icon: FaMobileAlt, title: "Mobile Charging Points" },
  { icon: FaMapMarkerAlt, title: "GPS Enabled" },
  { icon: FaFirstAid, title: "First Aid Kit" },
  { icon: FaWindowMaximize, title: "Sliding Curtains" },
];

export default function Features() {
  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#003B7A] border-b-4 border-[#003B7A]">
            Tempo Traveller
          </span>

          <span className="text-red-600">
            {" "}Features:
          </span>
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  bg-[#EDE3D8]
                  rounded-xl
                  shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                  py-4
                  px-4
                  min-h-130px
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                {/* Icon Box */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-md
                    border
                    border-red-300
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-[32px]
                    text-[#003B7A]
                  "
                >
                  <Icon />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-[15px]
                    font-semibold
                    text-[#003B7A]
                  "
                >
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}