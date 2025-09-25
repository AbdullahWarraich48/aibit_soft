"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { heroSectionData } from '@/data';
import StatsHero from './StatsHero';
import ProblemsHero from './ProblemsHero';
import SolutionGrid from './SolutionGrid';
import Image from 'next/image';
import { fb, insta, twiter, Linkedin, plus, zoom, whatsap, meet } from '../../../public/images';
import ScheduleMeet from './ScheduleMeet';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
  const organizationEmail = "meetings@yourcompany.com"; // static org email
  const organizationWhatsApp = "923008642198"; // E.164 without + (PK example for 03008642198)
  const companyName = "AiBIt soft";

  const handleOpenSchedule = () => {
    setIsScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleOpen(false);
  };

  const handleOpenWhatsApp = () => {
    const message = `Hi ${companyName}, I’d like to book an appointment.`;
    const whatsappUrl = `https://wa.me/${organizationWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const NavigationButtons = () => (
    <div className="mt-10 hidden md:flex flex-row justify-center items-center gap-7 border px-7 py-5 rounded-lg w-fit mx-auto bg-[#5766BF]">
      <button 
        onClick={() => setActiveSection('statistics')}
        className={`flex items-center gap-2 transition-all duration-200 ${
          activeSection === 'statistics' 
            ? 'text-yellow-300' 
            : 'text-white hover:text-yellow-200'
        }`}
      >
        <TrendingUp className="w-6 h-6" />
        <h1 className="font-sans">{heroSectionData.navigation.statistics}</h1>
      </button>
      <button 
        onClick={() => setActiveSection('problems')}
        className={`flex items-center gap-2 transition-all duration-200 ${
          activeSection === 'problems' 
            ? 'text-yellow-300' 
            : 'text-white hover:text-yellow-200'
        }`}
      >
        <AlertTriangle className="w-6 h-6" />
        <h1 className="font-sans">{heroSectionData.navigation.problems}</h1>
      </button>
      <button 
        onClick={() => setActiveSection('solutions')}
        className={`flex items-center gap-2 transition-all duration-200 ${
          activeSection === 'solutions' 
            ? 'text-yellow-300' 
            : 'text-white hover:text-yellow-200'
        }`}
      >
        <CheckCircle2 className="w-6 h-6" />
        <h1 className="font-sans">{heroSectionData.navigation.solutions}</h1>
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'statistics':
        return <StatsHero activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'problems':
        return <ProblemsHero activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'solutions':
        return <SolutionGrid activeSection={activeSection} setActiveSection={setActiveSection} />;
      default:
        return (
          <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#2644E7] to-[#0A1763] font-sans mt-[-45px]">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

          
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
              <div className="bg-white backdrop-blur-sm rounded-r-full pt-2 pb-2 flex flex-col items-center space-y-2">
                <a href="#" className="group p-3 hover:bg-gray-100 rounded-xl transition-colors">
                  <Image src={fb} alt="Facebook" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
                <a href="#" className="group p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Image src={insta} alt="Instagram" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
                <a href="#" className="group p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Image src={twiter} alt="Twitter" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
                <a href="#" className="group p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Image src={Linkedin} alt="LinkedIn" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
                <a href="#" className="group p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Image src={plus} alt="Plus" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
              </div>
            </div>

            {/* Contact/Chat Sidebar */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
              <div className="flex flex-col items-center space-y-4">
                <a href="#" className="group p-2 hover:bg-white/20 rounded-xl transition-colors">
                  <Image src={zoom} alt="Zoom" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </a>
                <button
                  type="button"
                  onClick={handleOpenSchedule}
                  aria-label="Schedule a Google Meet"
                  className="group p-2 hover:bg-white/20 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <Image src={meet} alt="Meet" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </button>
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  aria-label={`Chat with ${companyName} on WhatsApp`}
                  title={`Chat with ${companyName} on WhatsApp`}
                  className="group p-2 hover:bg-white/20 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <Image src={whatsap} alt="WhatsApp" width={24} height={24} className="transition-transform duration-500 ease-out group-hover:scale-150" />
                </button>
              </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-20">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-white border border-[#4A6CF7] text-sm font-medium mb-8 font-sans">
                  <Smartphone className="w-4 h-4 mr-2" />
                  {heroSectionData.banner.text}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-sans">
                  {heroSectionData.title}
                </h1>

                <div className="w-full mt-10">
                  <div className="text-center">
                    <h3
                      className="text-white font-medium leading-[30px] text-2xl font-sans"
                    >
                      <span className="font-extrabold text-2xl">
                        {heroSectionData.statistics.amount}
                      </span>{" "}
                      {heroSectionData.statistics.description}
                    </h3>
                    <h3
                      className="text-white font-medium leading-[30px] text-2xl mt-2 font-sans"
                    >
                      {heroSectionData.statistics.subtitle}
                    </h3>
                  </div>
                </div>

                <NavigationButtons />
              </div>
            </div>
            <ScheduleMeet isOpen={isScheduleOpen} onClose={handleCloseSchedule} organizationEmail={organizationEmail} />
          </section>
        );
    }
  };

  return renderContent();
};

export default HeroSection;
