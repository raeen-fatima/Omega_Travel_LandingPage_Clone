const vehicles = [
  {
    type: "Standard Tempo Traveller",
    seating: "9-12 Seater",
    features: "AC Seats that have push-backs AC and push-back seats",
    bestFor: "Cheap family getaways",
  },
  {
    type: "Deluxe Tempo Traveller",
    seating: "12-14 Seater",
    features: "AC, LCD TV Recliner seating",
    bestFor: "Family holidays, Friends",
  },
  {
    type: "Luxury Tempo Traveller",
    seating: "14-17 Seater",
    features: "DC and LED televisions, charge points curtains",
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
    features: "AC (Automatic Control), Push-back, High Roof",
    bestFor: "Families and friends with large groups",
  },
  {
    type: "Force Traveller (Mini Bus)",
    seating: "20-26 Seater",
    features: "AC, Recliner, Ample luggage",
    bestFor: "Corporate and wedding groups in large numbers",
  },
];

export default function TempoTravellerTable() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        <span className="text-[#003B7A]">
          3. Tempo Traveller Types Available:
        </span>

        <span className="text-red-600">
          {" "}Hyderabad to Goa
        </span>
      </h2>

      <p className="mt-5 text-md  text-black">
        Different groups have different travel requirements.
        Yatra Travel India offers multiple Tempo Traveller
        variants to suit your budget and group size.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse border border-[#0A4A9E]">
          <thead>
            <tr className="bg-[#003B7A] text-white">
              <th className="border border-[#0A4A9E] px-4 py-4 text-center font-bold">
                Vehicle Type
              </th>

              <th className="border border-[#0A4A9E] px-4 py-4 text-center font-bold">
                Seating Capacity
              </th>

              <th className="border border-[#0A4A9E] px-4 py-4 text-center font-bold">
                Features
              </th>

              <th className="border border-[#0A4A9E] px-4 py-4 text-center font-bold">
                Best For
              </th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.type}>
                <td className="border border-[#0A4A9E] px-4 py-4 text-center font-bold">
                  {vehicle.type}
                </td>

                <td className="border border-[#0A4A9E] px-4 py-4 text-center">
                  {vehicle.seating}
                </td>

                <td className="border border-[#0A4A9E] px-4 py-4 text-center">
                  {vehicle.features}
                </td>

                <td className="border border-[#0A4A9E] px-4 py-4 text-center">
                  {vehicle.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-[16px] leading-8 text-black">
        Yatra Travel India ensures that all vehicles are kept in
        excellent condition, regularly maintained with GPS tracking,
        and operated by experienced long-route drivers familiar with
        the Hyderabad to Goa route.
      </p>
    </section>
  );
}