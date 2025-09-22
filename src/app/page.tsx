import HeroSection from "@/components/Web_App/HeroSection";
  
  import Services from "@/components/Home/Services";

import Steps from "@/components/Home/Steps";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
    <Services />
    <Steps />
    </div>
  );
}
