// app/components/DigitalSolutions.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { app, web, Digitalmarketing, fb, insta, twiter, Linkedin, plus, zoom, whatsap, meet } from "../../../public/images";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    { id: "apps", label: "Web & Mobile Apps", icon: app },
    { id: "website", label: "Website Development", icon: web },
    { id: "seo", label: "SEO & Marketing", icon: Digitalmarketing },
    // { id: "seo1", label: "SEO & Marketing", icon: Digitalmarketing },
    // { id: "seo2", label: "SEO & Marketing", icon: Digitalmarketing },
    // { id: "seo3", label: "SEO & Marketing", icon: Digitalmarketing },
    // { id: "seo4", label: "SEO & Marketing", icon: Digitalmarketing },
  ];

  // Auto-tab switching every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex(tab => tab.id === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs]);

  // Handle tab click with circular rotation animation
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Create circular rotation of tabs with animation info
  const getRotatedTabs = () => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (activeIndex === -1) return tabs.map(tab => ({ tab, animation: 'none', direction: 0 }));
    
    // Create circular rotation: clicked tab goes to first, others shift accordingly
    const rotatedTabs = [...tabs];
    const clickedTab = rotatedTabs[activeIndex];
    
    // Remove the clicked tab from its current position
    rotatedTabs.splice(activeIndex, 1);
    
    // Add it to the beginning
    rotatedTabs.unshift(clickedTab);
    
    // Determine animation for each tab based on movement direction
    return rotatedTabs.map((tab, newIndex) => {
      const originalIndex = tabs.findIndex(t => t.id === tab.id);
      let animation = 'slideDownToUp';
      let direction = 0;
      
      if (tab.id === activeTab) {
        // Active tab slides down from top to first position
        animation = 'slideInFromTop';
        direction = 1; // Moving to first position
      } else if (newIndex < originalIndex) {
        // Tab moved up (towards first position) - slides up from bottom
        animation = 'slideDownToUp';
        direction = -1;
      } else if (newIndex > originalIndex) {
        // Tab moved down (away from first position) - slides down from top
        animation = 'slideUpToDown';
        direction = 1;
      } else {
        // Tab stays in same position
        animation = 'slideDownToUp';
        direction = 0;
      }
      
      return { tab, animation, direction };
    });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 relative">
      {/* Social Icons - Left Side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="bg-white backdrop-blur-sm rounded-r-full pt-2 pb-2 flex flex-col items-center space-y-2 shadow-lg">
          <a href="#" className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110">
            <Image src={fb} alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110">
            <Image src={insta} alt="Instagram" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110">
            <Image src={twiter} alt="Twitter" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110">
            <Image src={Linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110">
            <Image src={plus} alt="Plus" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Contact Icons - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="p-2 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110 bg-white shadow-lg">
            <Image src={zoom} alt="Zoom" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110 bg-white shadow-lg">
            <Image src={meet} alt="Meet" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110 bg-white shadow-lg">
            <Image src={whatsap} alt="WhatsApp" width={24} height={24} />
          </a>
        </div>
      </div>
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-sans">
          Smart Digital Solutions for Your
          <br className="hidden md:block" />
          <span className="text-[#2B4DDF]"> Business Growth</span>
        </h2>
        <p className="mt-4 text-gray-600 font-sans">
          From responsive web apps to AI-powered tools, AiBit Soft delivers experiences that engage,
          convert, and scale your business.
        </p>
      </div>

      {/* Tabs + Content */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 -mx-6 md:-mx-16">
        {/* Sidebar */}
        <div className="flex md:flex-col gap-4 bg-[#EEF2FF] rounded-2xl p-4 items-center justify-center overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {getRotatedTabs().map(({ tab, animation, direction }, index) => {
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={`${tab.id}-${index}`}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center justify-start gap-3 px-5 w-full max-w-[300px] py-3 rounded-xl text-left font-medium transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#2B4DDF] flex-shrink-0 font-sans ${
                    isActive
                      ? "bg-[#2B4DDF] text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-102"
                  }`}
                  aria-pressed={isActive}
                  style={{
                    animation: `${animation} 1s ease-in-out`,
                    animationDelay: `${index * 0.2}s`,
                    order: index,
                    animationFillMode: 'both'
                  }}
                >
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-md ${
                    isActive ? "bg-white text-[#2B4DDF]" : "bg-[#E9ECFF] text-[#2B4DDF]"
                  }`}
                  aria-hidden="true"
                >
                  <Image src={tab.icon} alt="" width={16} height={16} className="w-4 h-4" />
                </span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="md:col-span-2 bg-[#E8EDFF] rounded-2xl p-8 shadow flex items-center justify-start gap-8">
          {activeTab === "apps" && (
            <>
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">
                  Web & Mobile Apps
                </h3>
                <p className="mt-2 text-gray-600 font-sans">
                  Build scalable and intuitive apps. Custom web and mobile
                  solutions that drive revenue and deliver seamless user
                  experiences.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                  aria-label="Learn more about Web and Mobile Apps"
                >
                  Learn More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <Image
                 src="/images/Blog2.svg"
                  alt="Web & Mobile Apps"
                  width={380}
                  height={260}
                  className="object-contain"
                />
              </div>
            </>
          )}

          {activeTab === "website" && (
            <>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">
                  Website Development
                </h3>
                <p className="mt-2 text-gray-600 font-sans">
                  Responsive, modern, and conversion-focused websites that bring
                  your brand to life online.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                  aria-label="Learn more about Website Development"
                >
                  Learn More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/images/Blog2.svg"
                  alt="Website Development"
                  width={350}
                  height={250}
                  className="object-contain"
                />
              </div>
            </>
          )}

          {activeTab === "seo" && (
            <>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 font-sans">
                  SEO & Marketing
                </h3>
                <p className="mt-2 text-gray-600 font-sans">
                  Drive visibility and traffic with data-driven SEO strategies
                  and smart digital marketing campaigns.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                  aria-label="Learn more about SEO and Marketing"
                >
                  Learn More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                   src="/images/Blog2.svg" 
                  alt="SEO & Marketing"
                  width={350}
                  height={250}
                  className="object-contain"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
