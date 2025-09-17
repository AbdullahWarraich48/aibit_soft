"use client";

import React from "react";
import { Smartphone, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#2644E7] to-[#0A1763]">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-white border border-[#4A6CF7] text-sm font-medium mb-8">
            <Smartphone className="w-4 h-4 mr-2" />
            Mobile-First Web Development
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Website is Losing Money Every Second
          </h1> 

          <div className="w-full mt-10">
            <div className="text-center">
               <h3 className="text-white font-medium leading-[30px] text-2xl" style={{ fontFamily: 'Sora' }}>
                 <span className="font-extrabold text-2xl">$260 billion/year</span> lost in US & EU due to cart abandonment.
               </h3>
              <h3 className="text-white font-medium leading-[30px] text-2xl mt-2" style={{ fontFamily: 'Sora' }}>
                Make your website work flawlessly on every device.
              </h3>
            </div>
          </div>

            <div className="w-full mt-20 flex flex-row justify-center items-center gap-7 border px-7 py-5 rounded-lg w-fit mx-auto bg-[#5766BF]">
             <div className="flex items-center gap-2">
               <TrendingUp className="w-6 h-6 text-white" />
               <h1 className="text-white">Statistics</h1>
             </div>
             <div className="flex items-center gap-2">
               <AlertTriangle className="w-6 h-6 text-white" />
               <h1 className="text-white">Problems</h1>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="w-6 h-6 text-white" />
               <h1 className="text-white">Solutions</h1>
             </div>
           </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;