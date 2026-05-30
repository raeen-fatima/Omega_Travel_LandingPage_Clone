const vehicles = [
  {
    type: "Standard Tempo Traveller",
    seating: "9-12 Seater",
    features: "AC Seats with push-back seats",
    bestFor: "Cheap family getaways",
  },

  {
    type: "Deluxe Tempo Traveller",
    seating: "12-14 Seater",
    features: "AC, LCD TV, Recliner seating",
    bestFor: "Family holidays, Friends",
  },

  {
    type: "Luxury Tempo Traveller",
    seating: "14-17 Seater",
    features: "DC and LED televisions, charge points, curtains",
    bestFor: "Corporate, Premium groups",
  },

  {
    type: "Maharaja Tempo Traveller",
    seating: "9-14 Seater",
    features: "Lounge-style, Sofa seats, Fridge",
    bestFor: "Honeymoons, VIP groups",
  },

  {
    type: "Force Urbania",
    seating: "17 Seater",
    features: "AC, Push-back seats, High Roof",
    bestFor: "Families and large groups",
  },

  {
    type: "Force Traveller (Mini Bus)",
    seating: "20-26 Seater",
    features: "AC, Recliner seats, Ample luggage",
    bestFor: "Corporate and wedding groups",
  },
];

export default function VehicleTable() {
  return (
    <div className="mt-16">

      {/* Heading */}
      <h2 className="text-[38px] leading-[55px] font-bold text-[#003B7A]">

        3. Tempo Traveller Types Available:
        <span className="text-red-600">
          {" "}
          Hyderabad to Goa
        </span>

      </h2>

      {/* Description */}
      <p className="mt-5 text-[15px] leading-8 text-gray-700">

        Different groups have different travel needs.
        Choose the perfect Tempo Traveller according
        to your comfort, budget and group size.

      </p>

      {/* Table */}
      <div className="mt-8 overflow-x-auto">

        <table className="w-full border border-blue-900">

          {/* Table Header */}
          <thead className="bg-[#003B7A] text-white">

            <tr>

              <th className="border border-blue-900 px-4 py-5">
                Vehicle Type
              </th>

              <th className="border border-blue-900 px-4 py-5">
                Seating Capacity
              </th>

              <th className="border border-blue-900 px-4 py-5">
                Features
              </th>

              <th className="border border-blue-900 px-4 py-5">
                Best For
              </th>

            </tr>

          </thead>

          {/* Table Body */}
          <tbody className="bg-white text-center text-[15px]">

            {vehicles.map((vehicle, index) => (

              <tr
                key={index}
                className="hover:bg-blue-50 transition duration-200"
              >

                <td className="border border-blue-900 px-4 py-5 align-top leading-8 font-medium">

                  {vehicle.type}

                </td>

                <td className="border border-blue-900 px-4 py-5 align-top leading-8">

                  {vehicle.seating}

                </td>

                <td className="border border-blue-900 px-4 py-5 align-top leading-8">

                  {vehicle.features}

                </td>

                <td className="border border-blue-900 px-4 py-5 align-top leading-8">

                  {vehicle.bestFor}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom Paragraph */}
      <p className="mt-6 text-[15px] leading-8 text-gray-700">

        Yatra Travel India ensures that all vehicles
        are properly maintained with GPS tracking and
        experienced long-route drivers for safe and
        comfortable journeys.

      </p>

    </div>
  );
}