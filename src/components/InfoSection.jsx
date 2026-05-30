import WhyChoose from "./WhyChoose";
import VehicleTable from "./VehicleTable";

export default function InfoSection() {
  return (
    <section className="bg-[#f5f5f5] py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            {/* HEADING */}
            <h2 className="text-[38px] leading-[55px] font-bold text-[#003B7A]">

              1. Hyderabad to Goa Travel Guide:
              <span className="text-red-600">
                {" "}
                Distance, Duration and Routes Explained
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[16px] leading-8 text-gray-800">

              Before reserving a Tempo Traveller, you need to understand
              how this journey becomes beautiful with proper route
              planning and a reliable travelling company.

            </p>

            {/* TABLE */}
            <div className="mt-8 overflow-x-auto">

              <table className="w-full border border-blue-900">

                <thead className="bg-[#003B7A] text-white">

                  <tr>

                    <th className="border border-blue-900 px-4 py-4 text-center">
                      Route Detail
                    </th>

                    <th className="border border-blue-900 px-4 py-4 text-center">
                      Information
                    </th>

                  </tr>

                </thead>

                <tbody className="bg-white text-center text-[15px]">

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Starting Point
                    </td>

                    <td className="border px-4 py-4">
                      Hyderabad (Telangana)
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Destination
                    </td>

                    <td className="border px-4 py-4">
                      Goa (North Goa / South Goa)
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Distance
                    </td>

                    <td className="border px-4 py-4">
                      670-700 KM
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Estimated Drive Time
                    </td>

                    <td className="border px-4 py-4">
                      12-14 Hours
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Best Highway Route
                    </td>

                    <td className="border px-4 py-4">
                      Hyderabad - Solapur - Kolhapur - Panaji
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Alternative Route
                    </td>

                    <td className="border px-4 py-4">
                      Hyderabad - Bijapur - Hubli - Goa
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Toll Charges
                    </td>

                    <td className="border px-4 py-4">
                      ₹700 - ₹1000
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-4 font-medium">
                      Best Time To Travel
                    </td>

                    <td className="border px-4 py-4">
                      October to March
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* POPULAR ROUTES */}
            <div className="mt-12">

              <h3 className="text-[34px] font-bold text-[#003B7A]">

                Popular Route
                <span className="text-red-600">
                  {" "}
                  Options
                </span>

              </h3>

              <ul className="mt-8 space-y-6">

                <li className="flex items-start gap-3 leading-8 text-[16px] text-gray-800">

                  <span className="text-red-600 text-xl">
                    •
                  </span>

                  <span>
                    <strong>Route 1 via NH65 (Recommended):</strong>
                    {" "}
                    Hyderabad - Jadcherla - Kurnool - Nandyal -
                    Hospet - Hubli - Goa.
                  </span>

                </li>

                <li className="flex items-start gap-3 leading-8 text-[16px] text-gray-800">

                  <span className="text-red-600 text-xl">
                    •
                  </span>

                  <span>
                    <strong>Route 2 via Solapur:</strong>
                    {" "}
                    Hyderabad - Bidar - Solapur - Kolhapur - Goa.
                  </span>

                </li>

                <li className="flex items-start gap-3 leading-8 text-[16px] text-gray-800">

                  <span className="text-red-600 text-xl">
                    •
                  </span>

                  <span>
                    <strong>Route 3 via Bijapur (NH50):</strong>
                    {" "}
                    Hyderabad - Gulbarga - Bijapur - Hubli - Goa.
                  </span>

                </li>

              </ul>

            </div>

            {/* EXTRA COMPONENTS */}
            <WhyChoose />

            <VehicleTable />

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6 sticky top-10">

            {/* BOOKING FORM */}
            <div className="bg-gradient-to-b from-[#0B2D5C] to-[#2A093D] p-6">

              <h3 className="text-white text-3xl font-bold mb-6">

                Book Tempo Traveller

              </h3>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 outline-none"
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Contact No."
                  className="w-full p-4 outline-none"
                />

                <input
                  type="date"
                  className="w-full p-4 outline-none"
                />

                <select className="w-full p-4 outline-none">

                  <option>Select Tempo Traveller</option>

                </select>

                <textarea
                  rows={4}
                  placeholder="Date / Travel Plan / More..."
                  className="w-full p-4 outline-none"
                />

                <div className="text-white font-semibold">
                  What is 4 + 4 ?
                </div>

                <input
                  type="text"
                  placeholder="What is 4 + 4"
                  className="w-full p-4 outline-none"
                />

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 font-bold transition">

                  SUBMIT ENQUIRY

                </button>

              </form>

            </div>

            {/* TOP CITIES */}
            <div>

              <div className="bg-red-600 text-white px-5 py-4 text-xl font-bold rounded-t-lg">

                Tempo Traveller Hire in Top Cities

              </div>

              <div className="relative bg-[#003B7A] text-white overflow-hidden">

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Maharaja Tempo Traveller in Delhi
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Chandigarh
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Faridabad
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Ghaziabad
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Noida
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Gurgaon
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire in Jaipur
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire Delhi to Shimla Manali
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire Delhi to Agra
                </div>

                <div className="border-b border-white/20 px-5 py-4 relative z-10">
                  » Tempo Traveller Hire Delhi to Dehradun
                </div>

                <div className="px-5 py-4 relative z-10">
                  » Tempo Traveller Near Me
                </div>

                {/* RED SHAPE */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600 rotate-12 translate-x-10 translate-y-10"></div>

              </div>

            </div>

            {/* CUSTOMER SUPPORT */}
            <div className="bg-[#003B7A] text-white p-6">

              <h3 className="text-2xl font-bold">
                Customer Support
              </h3>

              <p className="mt-4 leading-7 text-gray-200">

                Need Help Booking? Call our customer care executive.
                We are available 24x7 for support.

              </p>

              <button className="mt-5 bg-red-600 px-5 py-3 font-semibold">

                +91 XXXXXXXXXX

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}