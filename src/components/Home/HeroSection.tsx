// app/components/DigitalSolutions.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  app,
  web,
  Digitalmarketing,
  Ai,
  growth,
  user,
  AIAutomation,
  CustomDevelopment,
  ITStaff,
  logo,
  fb,
  insta,
  twiter,
  Linkedin,
  plus,
  zoom,
  whatsap,
  meet,
  WebMobApp,
} from "../../../public/images";
import ScheduleMeet from "../Web_App/ScheduleMeet";

export default function HeroSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("apps");
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);

  const organizationEmail = "meetings@yourcompany.com";
  const organizationWhatsApp = "923008642198"; // E.164 without +
  const companyName = "AiBIt soft";

  const tabs = [
    { id: "apps", label: "Web & Mobile Apps", icon: app },
    { id: "website", label: "Website Development", icon: web },
    { id: "seo", label: "SEO & Marketing", icon: Digitalmarketing },
    { id: "ai", label: "AI Automation & Tools", icon: Ai },
    { id: "custom", label: "Custom Development", icon: growth },
    { id: "staff", label: "IT Staff Augmentation", icon: user },
  ];

  // Auto-shift visible tabs every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = (prev + 1) % tabs.length;
        setActiveTab(tabs[next].id);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [tabs.length]);

  // Always show 3 tabs
  const getVisibleTabs = () => {
    return Array.from({ length: 3 }, (_, i) => {
      return tabs[(startIndex + i) % tabs.length];
    });
  };

  const handleOpenSchedule = () => {
    setIsScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleOpen(false);
  };

  const handleOpenWhatsApp = () => {
    const message = `Hi ${companyName}, I’d like to book an appointment.`;
    const whatsappUrl = `https://wa.me/${organizationWhatsApp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    const i = tabs.findIndex((t) => t.id === tabId);
    if (i !== -1) {
      setStartIndex(i);
    }
  };

  return (
    <section className="bg-white relative px-8 py-12 md:py-20">
      {/* Social Icons - Left */}
      <div className="absolute left-[120px] top-[40%] transform -translate-y-2/4 ">
        <div className="bg-white backdrop-blur-sm rounded-r-full pt-2 pb-2 flex flex-col items-center space-y-2 shadow-lg">
          {[fb, insta, twiter, Linkedin, plus].map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="group p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
            >
              <Image
                src={icon}
                alt="social-icon"
                width={24}
                height={24}
                className="transition-transform duration-500 ease-out group-hover:scale-150"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Header + Content */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.15] font-sans">
            Smart Digital Solutions for Your
            <br className="hidden md:block" />
            <span className="text-[#2B4DDF]"> Business Growth</span>
          </h2>
          <p className="mt-4 text-gray-600 font-sans">
            From responsive web apps to AI-powered tools, AiBit Soft delivers
            experiences that engage, convert, and scale your business.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Sidebar Tabs */}
          <div className="flex md:flex-col gap-4 bg-[#EEF2FF] rounded-2xl p-4 items-center md:items-center justify-center md:justify-center overflow-x-auto md:overflow-y-auto scrollbar-hide w-full max-w-[320px] sm:max-w-[350px] md:max-w-full h-[420px] md:h-[460px]">
            <AnimatePresence mode="sync">
              {getVisibleTabs().map((tab, index) => {
                const isFirst = index === 0;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabSelect(tab.id)}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`flex items-center justify-start gap-3 px-4 sm:px-5 w-full max-w-[280px] sm:max-w-[300px] py-3 rounded-xl text-left font-medium transition-all duration-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#2B4DDF] flex-shrink-0 font-sans border border-transparent ${
                      isFirst
                        ? "bg-[#2B4DDF] text-white shadow-lg transform scale-105 border-[#2B4DDF]"
                        : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-102 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span
                       className={`inline-flex items-center justify-center w-7 h-7 rounded-md ${
                         isFirst
                          ? "bg-white text-[#2B4DDF]"
                          : "bg-[#E9ECFF] text-[#2B4DDF]"
                      }`}
                    >
                      <Image src={tab.icon} alt="" width={16} height={16} />
                    </span>
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Content Area */}
          <div className="md:col-span-2 bg-[#E8EDFF] rounded-2xl p-8 shadow flex items-center justify-start gap-8 h-[420px] md:h-[460px] overflow-hidden">
            <AnimatePresence mode="wait">
               {activeTab === "apps" && (
                <motion.div
                  key="apps"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
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
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <Image
                      src="/images/WebMobApp.svg"
                      alt="Web & Mobile Apps"
                      width={380}
                      height={260}
                    />
                  </div>
                </motion.div>
              )}

               {activeTab === "website" && (
                <motion.div
                  key="website"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 font-sans">
                      Website Development
                    </h3>
                    <p className="mt-2 text-gray-600 font-sans">
                      Responsive, modern, and conversion-focused websites that
                      bring your brand to life online.
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <Image
                            src={CustomDevelopment}
                            alt="Website Development"
                            width={350}
                      height={250}
                    />
                  </div>
                </motion.div>
              )}

               {activeTab === "seo" && (
                <motion.div
                  key="seo"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 font-sans">
                      SEO & Marketing
                    </h3>
                  <p className="mt-4 text-gray-600 font-sans">
                    Data-driven SEO and creative marketing campaigns that increase traffic, improve
                    rankings, and turn clicks into customers.
                  </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
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
                    />
                  </div>
                </motion.div>
              )}

               {activeTab === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 font-sans">
                      AI Automation & Tools
                    </h3>
                  <p className="mt-2 text-gray-600 font-sans">
                    Custom AI solutions that streamline workflows, analyze data, and deliver real-time
                    insights for better decisions.
                  </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex-1 flex justify-center">
                  <Image src={AIAutomation} alt="AI Automation & Tools" width={360} height={250} />
                  </div>
                </motion.div>
              )}

               {activeTab === "custom" && (
                <motion.div
                  key="custom"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 font-sans">
                      Custom Development
                    </h3>
                  <p className="mt-2 text-gray-600 font-sans">
                    Tailored, secure, & scalable applications designed to match your business needs and
                    grow with your goals.
                  </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex-1 flex justify-center">
                  <Image src={CustomDevelopment} alt="Custom Development" width={360} height={250} />
                  </div>
                </motion.div>
              )}

               {activeTab === "staff" && (
                <motion.div
                  key="staff"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 w-full"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 font-sans">
                      IT Staff Augmentation
                    </h3>
                  <p className="mt-2 text-gray-600 font-sans">
                    Flexible, top-tier tech professionals who integrate seamlessly with your team to
                    accelerate delivery and cut overhead.
                  </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-[#2B4DDF] font-medium font-sans"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex-1 flex justify-center">
                  <Image src={ITStaff} alt="IT Staff Augmentation" width={360} height={250} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom contact icons */}
      <div className="absolute bottom-6 left-[120px] hidden lg:block">
        <div className="flex flex-row items-center space-x-4">
          <a
            href="#"
            className="group p-2 hover:bg-blue-50 rounded-xl transition-colors duration-300 bg-white shadow-lg"
          >
            <Image
              src={zoom}
              alt="Zoom"
              width={24}
              height={24}
              className="transition-transform duration-500 ease-out group-hover:scale-150"
            />
          </a>
          <button
            type="button"
            onClick={handleOpenSchedule}
            aria-label="Schedule a Google Meet"
            className="group p-2 hover:bg-blue-50 rounded-xl transition-colors duration-300 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <Image
              src={meet}
              alt="Meet"
              width={24}
              height={24}
              className="transition-transform duration-500 ease-out group-hover:scale-150"
            />
          </button>
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            aria-label={`Chat with ${companyName} on WhatsApp`}
            title={`Chat with ${companyName} on WhatsApp`}
            className="group p-2 hover:bg-blue-50 rounded-xl transition-colors duration-300 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <Image
              src={whatsap}
              alt="WhatsApp"
              width={24}
              height={24}
              className="transition-transform duration-500 ease-out group-hover:scale-150"
            />
          </button>
        </div>
      </div>

      <ScheduleMeet
        isOpen={isScheduleOpen}
        onClose={handleCloseSchedule}
        organizationEmail={organizationEmail}
      />
    </section>
  );
}
