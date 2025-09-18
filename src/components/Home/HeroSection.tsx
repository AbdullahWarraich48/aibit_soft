"use client";

import React from "react";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { heroSectionData } from '@/data';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#2644E7] to-[#0A1763] font-sans">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

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

          <div className="mt-20 flex flex-row justify-center items-center gap-7 border px-7 py-5 rounded-lg w-fit mx-auto bg-[#5766BF]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-white" />
              <h1 className="text-white font-sans">{heroSectionData.navigation.statistics}</h1>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-white" />
              <h1 className="text-white font-sans">{heroSectionData.navigation.problems}</h1>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-white" />
              <h1 className="text-white font-sans">{heroSectionData.navigation.solutions}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
