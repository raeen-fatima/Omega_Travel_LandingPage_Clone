import React from 'react'

function RouteInfoTable() {
  return (
    <div>
      <div className="lg:col-span-2">
      
                  {/* HEADING */}
                  <h2 className="text-3xl font-bold text-[#003B7A]">
      
                    1. Hyderabad to Goa Travel Guide:
                    <span className="text-red-600">
                      {" "}
                      Distance, Duration and Routes Explained
                    </span>
      
                  </h2>
      
                  {/* DESCRIPTION */}
                  <p className="mt-5 text-md  text-gray-800">
      
                    Before reserving a Tempo Traveler, you need to understand how this journey becomes so beautiful with right traveling company is essential. The distance between Hyderabad to Goa can be between 670 to 700 km, and takes between 12 to 14 hours without interruption. However, the majority of people would like to break up their journey by stopping for a break.
      
                  </p>
      
                  {/* TABLE */}
                  <div className="font-bold mt-6 overflow-x-auto ">
      
                    <table className="w-full border border-blue-900 ">
      
                      <thead className="bg-[#003B7A] text-white ">
      
                        <tr>
      
                          <th className="border border-blue-900 px-2 py-2 text-center">
                            Route Detail
                          </th>
      
                          <th className="border border-blue-900 px-2 py-2 text-center">
                            Information
                          </th>
      
                        </tr>
      
                      </thead>
      
                      <tbody className="bg-white text-center text-[15px] ">
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Starting Point
                          </td>
      
                          <td className="border px-2 py-2">
                            Hyderabad (Telangana)
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Destination
                          </td>
      
                          <td className="border px-2 py-2">
                            Goa (North Goa / South Goa)
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Distance
                          </td>
      
                          <td className="border px-2 py-2">
                            670-700 KM
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Estimated Drive Time
                          </td>
      
                          <td className="border px-2 py-2">
                            12-14 Hours
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Best Highway Route
                          </td>
      
                          <td className="border px-2 py-2">
                            Hyderabad - Solapur - Kolhapur - Panaji
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Alternative Route
                          </td>
      
                          <td className="border px-2 py-2">
                            Hyderabad - Bijapur - Hubli - Goa
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Toll Charges
                          </td>
      
                          <td className="border px-2 py-2">
                            ₹700 - ₹1000
                          </td>
                        </tr>
      
                        <tr>
                          <td className="border px-2 py-2 ">
                            Best Time To Travel
                          </td>
      
                          <td className="border px-2 py-2">
                            October to March
                          </td>
                        </tr>
      
                      </tbody>
      
                    </table>
      
                  </div>
            </div>

    </div>
  )
}

export default RouteInfoTable
