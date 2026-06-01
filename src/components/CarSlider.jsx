"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

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

export default function CarSlider() {
  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Heading */}

        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#003B7A] border-b-4 border-[#003B7A]">
            Luxury Vehicle
          </span>

          <span className="text-red-600">
            {" "}Hire on Rent
          </span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {vehicles.map((vehicle) => (
            <SwiperSlide key={vehicle.title}>

              <div
                className="
                  bg-[#F3EEDC]
                  rounded-16px
                  overflow-hidden
                  shadow-sm
                "
              >
                {/* Image */}

                <div className="relative h-260px">

                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Title Bar */}

                <div className="relative bg-[#003B7A] h-42px flex items-center px-4">

                  <h3 className="text-white text-[16px] font-semibold z-10">
                    {vehicle.title}
                  </h3>

                  {/* Red angled shape */}

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-full
                      w-20
                      bg-red-600
                      [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
                    "
                  />
                </div>

                {/* Buttons */}

                <div className="flex justify-center gap-8 py-4">

                  <button
                    className="
                      bg-[#003B7A]
                      text-white
                      text-[14px]
                      font-bold
                      px-6
                      py-3
                      flex
                      items-center
                      gap-2
                    "
                  >
                    VIEW DETAILS
                    <FaChevronRight size={12} />
                  </button>

                  <button
                    className="
                      bg-red-600
                      text-white
                      text-[14px]
                      font-bold
                      px-6
                      py-3
                      flex
                      items-center
                      gap-2
                    "
                  >
                    ENQUIRY NOW
                    <FaChevronRight size={12} />
                  </button>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}