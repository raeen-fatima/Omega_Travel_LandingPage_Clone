"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question:
      "What is the distance between Hyderabad from Goa by highway?",
    answer:
      "The distance from Hyderabad to Goa is around 700–700 km depending on the route. The most popular route is via NH65 through Kurnool, Hospet, and Hubli.",
  },

  {
    question:
      "How long is it going to take from Hyderabad from Goa by a Tempo Traveller?",
    answer:
      "Usually it takes around 12–14 hours depending on traffic, weather and route conditions.",
  },

  {
    question:
      "What's the cost for a Tempo Traveller from Hyderabad to Goa?",
    answer:
      "The cost depends on seating capacity, vehicle type, luxury level and trip duration.",
  },

  {
    question:
      "What's the ideal technique to make use of a Tempo Traveller compared to train?",
    answer:
      "Tempo Travellers provide door-to-door service, flexibility, comfort and better group travel experience.",
  },

  {
    question:
      "Is the Hyderabad to Goa route safe for travel at night?",
    answer:
      "Yes. The route is generally safe with good highways and experienced drivers.",
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

        <h2 className="text-3xl font-bold leading-tight">
          <span className="text-[#003B7A] border-b-4 border-[#003B7A]">
            10. Hyderabad to Goa:
          </span>

          <span className="text-red-600">
            {" "}
            (FAQ) Frequently Asked Questions
          </span>
        </h2>

        {/* FAQ */}

        <div className="mt-6 space-y-3">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="
                bg-[#f1f1f1]
                rounded-lg
                overflow-hidden
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-5
                  text-left
                "
              >
                <span
                  className="
                    text-[16px]
                    text-black
                    font-normal
                  "
                >
                  {faq.question}
                </span>

                <span className="text-[#0B67C2] text-sm ml-4 shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </button>

              {openIndex === index && (
                <div
                  className="
                    px-5
                    pb-5
                    pt-2
                    text-[15px]
                    leading-8
                    text-[#333]
                    border-t
                    border-gray-200
                  "
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}