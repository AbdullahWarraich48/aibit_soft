import { AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { heroSectionData } from '@/data';
import { useState } from 'react';
import Image from 'next/image';
import { fb, insta, twiter, Linkedin, plus, zoom, whatsap, meet } from '../../../public/images';


const problems = [
  "If your site isn't responsive, you lose more than half your potential audience",
  "People abandon purchases when checkout doesn't work smoothly on mobile",
  "Poor mobile design destroys trust and makes users switch to competitors",
  "Leads, sales, and contacts vanish before users even explore",
  "Bad responsive design directly costs businesses massive revenue."
]

interface ProblemsHeroProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function ProblemsHero({ activeSection, setActiveSection }: ProblemsHeroProps) {
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#2644E7] to-[#0A1763] font-sans">
      {/* Social Media Sidebar */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30">
        <div className="bg-white backdrop-blur-sm rounded-r-full pt-2 pb-2 flex flex-col items-center space-y-2">
          <a href="#" className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <Image src={fb} alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Image src={insta} alt="Instagram" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Image src={twiter} alt="Twitter" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Image src={Linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Image src={plus} alt="Plus" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Contact/Chat Sidebar */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Image src={zoom} alt="Zoom" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Image src={meet} alt="Meet" width={24} height={24} />
          </a>
          <a href="#" className="p-2 hover:bg-white/20 rounded-xl transition-colors">
            <Image src={whatsap} alt="WhatsApp" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
        
        {/* Problem Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {problems.map((text, index) => (
            <Card 
              key={index}
              className="flex items-start space-x-3 p-6 bg-gradient-to-r from-[#334DD8] to-[#2A3EB1] border border-blue-800 rounded-xl"
            >
              <AlertTriangle className="text-red-500 mt-1 w-5 h-5 flex-shrink-0" />
              <p className="text-sm text-white leading-relaxed">{text}</p>
            </Card>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="mt-20 flex flex-row justify-center items-center gap-7 border px-7 py-5 rounded-lg w-fit mx-auto bg-[#5766BF]">
          <button
            onClick={() => setActiveSection('statistics')}
            className={`flex items-center gap-2 transition-all duration-200 ${
              activeSection === 'statistics' 
                ? 'text-yellow-300' 
                : 'text-white hover:text-yellow-200'
            }`}
            aria-label="Toggle statistics"
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
            aria-label="Toggle problems"
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
            aria-label="Toggle solutions"
          >
            <CheckCircle2 className="w-6 h-6" />
            <h1 className="font-sans">{heroSectionData.navigation.solutions}</h1>
          </button>
        </div>
      </div>
    </div>
  )
}
