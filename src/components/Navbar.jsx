"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import {
  tempoTravellerData,
  topCitiesData,
  busRentalData,
  outstationData,
} from "@/data/navbarData";


const DropdownMenu = ({ title, data, width }) => (
  <li className="relative group">
    <div className={navItemClass}>
      {title}
      <FaChevronDown className="text-[11px]" />
    </div>

    <MegaMenu {...data} width={width} />
  </li>
);

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navItemClass = `
    text-[14px]
    font-medium
    text-[#444]
    px-[15px]
    py-[6px]
    rounded
    transition-all
    duration-300
    hover:text-[#0B67C2]
    hover:bg-[#f3f3f3]
    flex
    items-center
    gap-2
    cursor-pointer
  `;

  const mobileLinks = [
    "Home",
    "About Us",
    "Tempo Traveller",
    "Top Cities",
    "Bus Rental",
    "Outstation",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-3 lg:px-6">
        <div className="flex items-center justify-between h-20.5">
          {/* Logo */}

          <div className="shrink-0">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={170}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              <li>
                <Link href="#" className={navItemClass}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="#" className={navItemClass}>
                  About Us
                </Link>
              </li>

              <DropdownMenu
                title="Tempo Traveller"
                data={tempoTravellerData}
                width="min-w-[1050px]"
              />

              <DropdownMenu
                title="Top Cities"
                data={topCitiesData}
                width="min-w-[900px]"
              />

              <DropdownMenu
                title="Bus Rental"
                data={busRentalData}
                width="min-w-[850px]"
              />

              <DropdownMenu
                title="Outstation"
                data={outstationData}
                width="min-w-[900px]"
              />

              <li>
                <Link href="#" className={navItemClass}>
                  Blog
                </Link>
              </li>

              <li>
                <Link href="#" className={navItemClass}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Enquiry Button */}

            <button
              className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-8
                h-12.5
                rounded-full
                font-semibold
                transition-all
                duration-300
              "
            >
              ENQUIRY NOW
            </button>
          </div>

          {/* Mobile Controls */}

          <div className="flex items-center gap-3 lg:hidden">
            <button
              className="
                bg-red-600
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              ENQUIRY NOW
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-2xl text-[#444]"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="lg:hidden bg-white border-t shadow-lg px-6 py-5">
          <ul className="space-y-5 text-[16px] font-medium">
            {mobileLinks.map((item) => (
              <li
                key={item}
                className="
                  text-[#444]
                  hover:text-[#0B67C2]
                  cursor-pointer
                  transition
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
