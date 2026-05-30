import EnquiryStrip from "@/components/EnquiryStrip";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import FloatingActions from "@/components/FloatingActions";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import InfoSection from "@/components/InfoSection";
import LuxurySlider from "@/components/LuxurySlider";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import TravelContent from "@/components/TravelContent";

export default function Home() {
  return (
    <div>
       <Topbar />
       <Navbar />
       <HeroBanner />
       <TravelContent />
       <InfoSection />
       <Features />
       <FAQ />
       <LuxurySlider />
       <EnquiryStrip />
       <FloatingCallButton />
       <FloatingActions />
       <Footer />
    </div>
  );
}
