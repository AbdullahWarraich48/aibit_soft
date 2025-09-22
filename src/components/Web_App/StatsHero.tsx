"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, CheckCircle2, Users, Clock, Zap } from "lucide-react";
import { heroSectionData } from '@/data';
import Image from 'next/image';
import { mobile, fb, insta, twiter, Linkedin, plus, zoom, whatsap, meet } from '../../../public/images';

interface StatsHeroProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function StatsHero({ activeSection, setActiveSection }: StatsHeroProps) {
  return (
    <main className="relative min-h-screen bg-gradient-to-r from-[#2644E7] to-[#0A1763] flex flex-col items-center justify-center px-4 text-white">
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
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        The Metrics Behind Modern <br className="hidden md:block" /> 
        <span className="block md:mt-2">Websites</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full max-w-6xl mt-6">
        {activeSection === 'statistics' && (
          <>
            <Card className="bg-[#1e40af] text-white border-blue-800">
              <CardContent className="p-6 space-y-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mb-2">
                  <Image src={mobile} alt="Mobile" width={12} height={12} />
                </div>
                <div className="text-3xl font-bold mt-6 ">
                  <CountUp end={59.7} decimals={1} suffix="%" />
                </div>
                <p className="text-sm">of global website traffic comes from mobile devices</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1e40af] text-white border-blue-800">
              <CardContent className="p-6 space-y-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-[#1e40af]" />
                </div>
                <div className="text-3xl font-bold">
                  <CountUp end={85.65} decimals={2} suffix="%" />
                </div>
                <p className="text-sm">of mobile cart abandonment rate</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1e40af] text-white border-blue-800">
              <CardContent className="p-6 space-y-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-[#1e40af]" />
                </div>
                <div className="text-3xl font-bold">
                  <CountUp end={85} suffix="%" />
                </div>
                <p className="text-sm">of users expect mobile to be as good as desktop</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1e40af] text-white border-blue-800">
              <CardContent className="p-6 space-y-2">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-[#1e40af]" />
                </div>
                <div className="text-3xl font-bold">
                  <CountUp end={53} suffix="%" />
                </div>
                <p className="text-sm">of users leave if a site is too slow or clunky</p>
              </CardContent>
            </Card>
          </>
        )}

      </div>

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
    </main>
  )
}

type CountUpProps = {
  end: number
  durationMs?: number
  decimals?: number
  suffix?: string
}

function CountUp({ end, durationMs = 800, decimals = 0, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    if (!ref.current || hasRun) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRun(true)
            observer.disconnect()

            const startTime = performance.now()
            const startVal = 0
            const change = end - startVal

            const step = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / durationMs, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = startVal + change * eased
              setValue(current)
              if (progress < 1) requestAnimationFrame(step)
            }

            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, durationMs, hasRun])

  const formatted = value.toFixed(decimals)

  return <span ref={ref}>{formatted}{suffix}</span>
}
