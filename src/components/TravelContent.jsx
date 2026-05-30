import Image from "next/image";

export default function TravelContent() {
  return (
    <section className="bg-[#f5f5f5] py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

          {/* Left Image */}
          <div className="relative h-[320px] rounded-2xl overflow-hidden">

            <Image
              src="/tempo.jpg"
              alt="Bus"
              fill
              className="object-cover"
            />

          </div>

          {/* Right Content */}
          <div>

            {/* Heading */}
            <h2 className="text-[28px] leading-[42px] font-bold text-[#003B7A]">

              Hyderabad to Goa Tempo Traveller 2026
              <span className="text-red-600">
                {" "}
                Everything You Need to Know About Routes,
                Pricing and Booking
              </span>

            </h2>

            {/* Paragraph 1 */}
            <p className="mt-5 text-[15px] leading-8 text-black">

              Do you have plans for an adventure between Hyderabad and Goa
              with an enormous number of individuals? The Tempo Traveller
              is the most comfortable and versatile choice.

            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 text-[15px] leading-8 text-black">

              <span className="font-bold">
                Book Hyderabad to Goa Tempo Traveller
              </span>{" "}

              and The Hyderabad route that connects Hyderabad to Goa
              travels between stunning landscapes and historical regions.

            </p>

            {/* Paragraph 3 */}
            <p className="mt-5 text-[15px] leading-8 text-black">

              In this article, we will provide a complete guide on routes,
              pricing and booking options for your perfect journey.

            </p>

            {/* Buttons */}
            <div className="flex gap-1 mt-8">

              <button className="bg-blue-900 text-white px-5 py-3 text-sm font-semibold">
                ENQUIRY NOW
              </button>

              <button className="bg-red-600 text-white px-5 py-3 text-sm font-semibold">
                CALL US
              </button>

              <button className="bg-green-600 text-white px-5 py-3 text-sm font-semibold">
                WHATSAPP
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}