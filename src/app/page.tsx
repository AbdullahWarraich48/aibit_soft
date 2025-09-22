import HeroSection from "@/components/Home/HeroSection";
  
  import Services from "@/components/Home/Services";

import Steps from "@/components/Home/Steps";
import TeamSection from "@/components/Home/Team";
import Blogs from "@/components/Home/Blogs";
import Footer from "@/components/Footer";
import Transform from "@/components/Home/transform";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
    <Services />
    <Steps /> 
    <TeamSection />
    <Transform/>
    <Blogs />
    <Footer />
    </div>
  );
}
