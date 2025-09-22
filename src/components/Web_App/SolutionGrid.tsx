"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ShieldCheck, Search, DollarSign, Zap, Cpu, TrendingUp, AlertTriangle } from "lucide-react"
import { heroSectionData } from '@/data';
import { useState } from 'react';
import Image from 'next/image';
import { fb, insta, twiter, Linkedin, plus, zoom, whatsap, meet } from '../../../public/images';

const solutions = [
  {
    title: "Boost Conversions",
    description: "Friction-free browsing and checkout means more sales and leads",
    icon: <CheckCircle2 className="text-lime-400" size={20} />,
  },
  {
    title: "Improve Trust",
    description: "Polished, modern design makes your business look credible",
    icon: <ShieldCheck className="text-blue-400" size={20} />,
  },
  {
    title: "SEO Advantage",
    description: "Google ranks mobile-friendly websites higher",
    icon: <Search className="text-pink-500" size={20} />,
  },
  {
    title: "Lower Costs",
    description: "Maintain one website that works everywhere",
    icon: <DollarSign className="text-lime-400" size={20} />,
  },
  {
    title: "Future-proof",
    description: "Your site adapts to new devices without a rebuild",
    icon: <Zap className="text-blue-500" size={20} />,
  },
  {
    title: "AI Automation",
    description: "Automate tasks and unlock real-time insights with intelligent AI tools",
    icon: <Cpu className="text-purple-400" size={20} />,
  },
]

interface SolutionGridProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function SolutionsGrid({ activeSection, setActiveSection }: SolutionGridProps) {
  
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#2644E7] to-[#0A1763] text-white px-4 py-12 flex flex-col items-center justify-center">
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
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {solutions.map((item, index) => (
          <Card key={index} className="bg-[#1e40af] text-white border-blue-800 rounded-xl hover:shadow-lg transition w-[320px] mt-4">
            <CardHeader className="flex flex-col items-start gap-2 pb-4 mt-4">
              {item.icon}
              <CardTitle className="text-base mt-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <p className="text-sm text-white/80 mt-2">{item.description}</p>
            </CardContent>
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
  )
}
