import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-[#102B3A] text-white py-16">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold uppercase">
          Hyderabad To Goa Tempo Traveller
        </h1>

        {/* Breadcrumb */}
        <div className="mt-6 flex items-center gap-2 text-lg">

          <Link
            href="/"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Home
          </Link>

          <span className="text-gray-400">-</span>

          <Link
            href="/outstation"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Outstation Tempo Travellers
          </Link>

          <span className="text-gray-400">-</span>

          <Link
            href="/hyderabad-goa"
            className="text-white font-semibold"
          >
            Hyderabad to Goa Tempo Traveller
          </Link>

        </div>

      </div>

    </section>
  );
}