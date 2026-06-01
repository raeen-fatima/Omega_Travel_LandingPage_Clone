import React from 'react'

function PopularRoutes() {
  return (
    <div>
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
      
    </div>
  )
}

export default PopularRoutes
