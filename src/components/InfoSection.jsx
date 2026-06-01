import WhyChoose from "./WhyChoose";
import PopularRoutes from "@/components/PopularRoutes";
import BookingForm from "@/components/BookingForm";
import TopCitiesWidget from "@/components/TopCitiesWidget";
import CustomerSupport from "@/components/CustomerSupport";
import RouteInfoTable from "./RouteInfoTable";
import TempoTravellerTable from "./TempoTravellerTable";

export default function InfoSection() {
  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            {/* POPULAR ROUTES */}
             <RouteInfoTable />
             
            {/* WHY CHOOSE */}
            <div className="mt-12">
              <WhyChoose />
            </div>

            {/* VEHICLE TABLE */}
            <div className="mt-12">
              <TempoTravellerTable />
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6 sticky top-10">

            <BookingForm />

            <TopCitiesWidget />

            <CustomerSupport />

          </div>

        </div>
      </div>
    </section>
  );
}