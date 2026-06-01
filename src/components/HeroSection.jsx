import Image from "next/image";

const buttons = [
  {
    label: "ENQUIRY NOW",
    bgColor: "bg-blue-900",
  },
  {
    label: "CALL US",
    bgColor: "bg-red-600",
  },
  {
    label: "WHATSAPP",
    bgColor: "bg-green-600",
  },
];

const paragraphClass =
  "mt-3 text-sm  text-black";

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Image */}

          <div className="relative h-80 rounded-2xl overflow-hidden">

            <Image
              src="/tempo.jpg"
              alt="Hyderabad to Goa Tempo Traveller"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

          </div>

          {/* Content */}

          <div>

            <h2 className="text-[28px] leading-10.5 font-bold text-[#003B7A]">

              Hyderabad to Goa Tempo Traveller 2026

              <span className="text-red-600">
                {" "}
                Everything You Need to Know About Routes,
                Pricing and Booking
              </span>

            </h2>

            <p className={paragraphClass}>
              Do you have plans for an adventure between Hyderabad and Goa with an enormous number of individuals? The Tempo Traveller is the most comfortable cost-effective and versatile choice. If you are travelling with family members or friends, corporate teams or an event, the Tempo Traveller will allow you to take pleasure in the journey along with the costs as well as the time in accordance with your timetable.
            </p>

            <p className={paragraphClass}>
              <span className="font-bold">
                Book Hyderabad to Goa Tempo Traveller
              </span>{" "}
              and The Hyderabad route that connects Hyderabad to Goa travels between 670 and 700 kilometers, which is based on the road taken. It takes you through stunning landscapes and green Western Ghats, gorgeous towns and historical regions such as Telangana, Karnataka, and Goa. It generally takes between 12 to 14 hours along the highway.
            </p>

            <p className={paragraphClass}>
              In this article, we will provide you complete guide on everything required to know about distances and route options, costs and options for vehicles and suggestions for your itinerary, the most effective locations, best practices for travelling along with how to book the perfect Tempo Traveller with Yatra Travel India. It will make for a smooth journey.,Caravan Tempo Traveller, Tempo Traveller Sofa With Bed, Tempo Traveller With Toilet.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-2 mt-8">

              {buttons.map((button) => (
                <button
                  key={button.label}
                  className={`
                    ${button.bgColor}
                    text-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    hover:opacity-90
                    transition-all
                    duration-300
                  `}
                >
                  {button.label}
                </button>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}