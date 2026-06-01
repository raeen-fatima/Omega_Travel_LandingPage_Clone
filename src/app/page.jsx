import CarSlider from "@/components/CarSlider";
import EnquiryStrip from "@/components/EnquiryStrip";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import FloatingScrollUpButton from "@/components/FloatingScrollUpButton"

export default function Home() {
  return (
    <div>
       <Topbar />
       <Navbar />
       <HeroBanner />
       <HeroSection />
       <InfoSection />
       <Features />
       <FAQ />
       <CarSlider />
       <EnquiryStrip />
       <FloatingCallButton />
       <FloatingScrollUpButton />
       <Footer />
    </div>
  );
}
