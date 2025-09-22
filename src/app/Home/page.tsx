"use client";

import { useState } from "react";
import HeroSection from "@/components/Web_App/HeroSection";
import StatsHero from "@/components/Web_App/StatsHero";
import CustomSolutions from "@/components/Web_App/CustomSolutions";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("statistics");

  return (
    <main>
      <HeroSection />
      <StatsHero activeSection={activeSection} setActiveSection={setActiveSection} />
      <CustomSolutions />
    </main>
  );
}
