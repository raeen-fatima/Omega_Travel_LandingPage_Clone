import { FaAngleDoubleRight } from "react-icons/fa";

const cities = [
  "Maharaja Tempo Traveller in Delhi",
  "Tempo Traveller Hire in Chandigarh",
  "Tempo Traveller Hire in Faridabad",
  "Tempo Traveller Hire in Ghaziabad",
  "Tempo Traveller Hire in Noida",
  "Tempo Traveller Hire in Gurgaon",
  "Tempo Traveller Hire in Jaipur",
  "Tempo Traveller Hire Delhi to Shimla Manali",
  "Tempo Traveller Hire Delhi to Agra",
  "Tempo Traveller Hire Delhi to Dehradun",
  "Tempo Traveller Near Me",
];

export default function TopCitiesWidget() {
  return (
    <div className="border-2 border-white shadow-md">

      {/* Header */}

      <div
        className="
          bg-red-600
          text-white
          text-[16px]
          font-bold
          px-5
          py-3
          rounded-t-lg
        "
      >
        Tempo Traveller Hire in Top Cities
      </div>

      {/* Body */}

      <div className="relative bg-[#003B7A] overflow-hidden">

        {cities.map((city) => (
          <div
            key={city}
            className="
              relative
              z-10
              flex
              items-center
              gap-3
              px-4
              py-4
              text-white
              text-[15px]
              font-semibold
              border-b
              border-dashed
              border-white/40
              hover:bg-[#0A4D94]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <FaAngleDoubleRight className="text-white text-xs shrink-0" />

            <span>{city}</span>
          </div>
        ))}

        {/* Red Triangle */}

        <div
          className="
            absolute
            bottom-0
            right-0
            w-0
            h-0
            border-l-95px
            border-l-transparent
            border-b-260px
            border-b-red-600
          "
        />
      </div>
    </div>
  );
}