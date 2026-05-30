"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question:
      "What is the distance between Hyderabad and Goa by highway?",

    answer:
      "The distance from Hyderabad to Goa is around 700 km depending on the route. The most popular route is via NH65 through Kurnool, Hospet and Hubli.",
  },

  {
    question:
      "How long does it take to travel from Hyderabad to Goa by Tempo Traveller?",

    answer:
      "Usually it takes around 12-14 hours depending on traffic, weather and route conditions.",
  },

  {
    question:
      "What is the cost of a Tempo Traveller from Hyderabad to Goa?",

    answer:
      "The cost depends on the seating capacity, luxury level and trip duration.",
  },

  {
    question:
      "Why choose a Tempo Traveller instead of trains?",

    answer:
      "Tempo Travellers provide door-to-door service, flexibility, comfort and group bonding experience.",
  },

  {
    question:
      "Is the Hyderabad to Goa route safe for night travel?",

    answer:
      "Yes, the route is generally safe with proper highways and experienced drivers.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[38px] font-bold text-[#003B7A]">

          10. Hyderabad to Goa:
          <span className="text-red-600">
            {" "}
            (FAQ) Frequently Asked Questions
          </span>

        </h2>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">

          {faqData.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-[17px] font-medium text-gray-800">

                  {faq.question}

                </span>

                <span className="text-blue-700 text-sm">

                  {openIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </span>

              </button>

              {/* Answer */}
              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-700 leading-8 text-[15px] border-t">

                  <p className="pt-4">

                    {faq.answer}

                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}