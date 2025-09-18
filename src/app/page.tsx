import HeroSection from "@/components/Home/HeroSection";
import CustomSolutions from "@/components/Home/CustomSolutions";
import WhyChoose from "@/components/Home/WhyChoose";
import Footer from "@/components/Footer";
import MobileExperience from "@/components/Home/MobileExperience";
import Faq from "@/components/Home/Faq";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CustomSolutions />
      <WhyChoose />
      <MobileExperience />
      <Faq />
      <Footer />
    </div>
  );
}
