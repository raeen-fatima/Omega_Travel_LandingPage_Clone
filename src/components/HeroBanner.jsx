import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-[#162227] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        <h1
          className="
            text-[14px]
            md:text-[20px]
            font-bold
            uppercase
            mb-3
          "
        >
          Hyderabad to Goa Tempo Traveller
        </h1>

        <div className="flex flex-wrap items-center text-[14px]">
          <Link
            href="/"
            className="text-gray-300 hover:text-blue-900"
          >
            Home
          </Link>

          <span className="mx-2 text-gray-400">-</span>

          <Link
            href="#"
            className="text-gray-300 hover:text-blue-900"
          >
            Outstation Tempo Travellers
          </Link>

          <span className="mx-2 text-gray-400">-</span>

          <span className="text-white font-semibold">
            Hyderabad to Goa Tempo Traveller
          </span>
        </div>

      </div>
    </section>
  );
}