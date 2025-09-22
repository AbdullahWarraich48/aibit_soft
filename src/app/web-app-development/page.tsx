import HeroSection from "@/components/Web_App/HeroSection";
import CustomSolutions from "@/components/Web_App/CustomSolutions";
import WhyChoose from "@/components/Web_App/WhyChoose";
import Footer from "@/components/Footer";
import MobileExperience from "@/components/Web_App/MobileExperience";
import Faq from "@/components/Web_App/Faq";
import StatsHero from "@/components/Web_App/StatsHero";
import SolutionsGrid from "@/components/Web_App/SolutionGrid";
import ProblemsHero from "@/components/Web_App/ProblemsHero";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* <StatsHero /> */}
      {/* <SolutionsGrid /> */}
      <CustomSolutions />
      {/* <ProblemsHero /> */}
      <WhyChoose />
      <MobileExperience />
      <Faq />
      <Footer />
    </div>
  );
}
