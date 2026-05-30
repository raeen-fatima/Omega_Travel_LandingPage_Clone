"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowRight } from "react-icons/fa";

const vehicles = [
  {
    image: "/car1.jpeg",
    title: "Mercedes Tempo Traveller Hire",
  },

  {
    image: "/car2.jpeg",
    title: "12 Seater Crafter Hire Delhi",
  },

  {
    image: "/car3.jpg",
    title: "Toyota Hiace Hire Delhi",
  },

  {
    image: "/car4.jpg",
    title: "Luxury Urbania Hire",
  },
];

export default function LuxurySlider() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[38px] font-bold text-[#003B7A]">
          Luxury Vehicle
          <span className="text-red-600"> Hire on Rent</span>
        </h2>

        {/* Slider */}
        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {vehicles.map((vehicle, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F1E6DD] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                  {/* Image */}
                  <div className="relative h-62.5">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Bottom Content */}
                  <div className="relative bg-[#003B7A] text-white px-5 py-5 overflow-hidden">
                    {/* Red Shape */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-red-600 rotate-12 translate-x-10 -translate-y-10"></div>

                    <h3 className="relative z-10 text-[20px] font-semibold">
                      {vehicle.title}
                    </h3>

                    {/* Buttons */}
                    <div className="relative z-10 flex gap-4 mt-6">
                      <button className="bg-[#002855] hover:bg-black transition px-5 py-3 text-sm font-bold flex items-center gap-2">
                        VIEW DETAILS
                        <FaArrowRight />
                      </button>

                      <button className="bg-red-600 hover:bg-red-700 transition px-5 py-3 text-sm font-bold flex items-center gap-2">
                        ENQUIRY NOW
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
