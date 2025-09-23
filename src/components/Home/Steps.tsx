"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Pencil, Rocket, Target, Layers, TrendingUp } from "lucide-react";
import { steps } from "../../../public/images";
import Image from "next/image";

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
                   
                      <h2 className="inline-block px-3 py-1 font-bold text-2xl  text-blue-600 mb-4 font-sora">OUR STEPS</h2>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sora ">
            <span>Our 3-Step Process To Launch & Support</span>
            <span className="block mt-2">Your Digital Solution</span>
          </h2>
          <p className="text-gray-600 font-sora mt-5">
            Consult → Build → Support — a simple process that delivers measurable outcomes.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column – Process Flow */}
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
            {false && (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <Card className="w-[80px] h-[80px] bg-blue-600 text-white shadow-lg rounded-full">
                    <CardContent className="flex items-center justify-center h-full p-0">
                      <MessageCircle className="h-10 w-10" />
                    </CardContent>
                  </Card>
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-semibold mb-1">Step 1</h3>
                    <p className="text-sm text-gray-700">Consultation & Strategy</p>
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 text-blue-500 rotate-90 md:rotate-0" />

                <div className="flex flex-col items-center">
                  <Card className="w-[80px] h-[80px] bg-red-500 text-white shadow-lg rounded-full">
                    <CardContent className="flex items-center justify-center h-full p-0">
                      <Pencil className="h-10 w-10" />
                    </CardContent>
                  </Card>
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-semibold mb-1">Step 2</h3>
                    <p className="text-sm text-gray-700">Design & Development</p>
                  </div>
                </div>

                <ArrowRight className="h-6 w-6 text-blue-500 rotate-90 md:rotate-0" />

                <div className="flex flex-col items-center">
                  <Card className="w-[80px] h-[80px] bg-green-500 text-white shadow-lg rounded-full">
                    <CardContent className="flex items-center justify-center h-full p-0">
                      <Rocket className="h-10 w-10" />
                    </CardContent>
                  </Card>
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-semibold mb-1">Step 3</h3>
                    <p className="text-sm text-gray-700">Launch & Ongoing Support</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center">
            <Image src={steps} alt="steps" width={600} height={100} />
            </div>

            {/* Left bottom paragraph */}
            <p className="mt-6 text-gray-700 text-sm leading-7 text-left max-w-2xl self-start">
              At AiBit Soft, we believe digital transformation doesn’t have to be complicated.
              That’s why we’ve designed a 3-step process that takes you from idea to launch —
              and beyond. Whether it’s a website, mobile app, AI tool, or marketing campaign,
              our approach ensures your solution is strategic, scalable, and supported every step of the way.
            </p>
          </div>

          {/* Right Column – Explanations */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Target className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Step 1 – Consultation & Strategy</h4>
                  <p className="text-gray-600 text-sm">
                    We align on goals, audience, and KPIs to create a strategy that fits your business.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Layers className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Step 2 – Design & Development</h4>
                  <p className="text-gray-600 text-sm">
                    We build apps, AI tools, and campaigns that are visually strong and technically robust.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Step 3 – Launch & Ongoing Support</h4>
                  <p className="text-gray-600 text-sm">
                    Monitoring, updates, and scaling advice so your solution keeps improving.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
