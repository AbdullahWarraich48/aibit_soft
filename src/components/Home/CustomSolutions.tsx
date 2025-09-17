"use client";

import Image from "next/image";
import { CustomSection } from "../../../public/images";

export default function CustomSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Call-to-Action Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mt-6">
          Ready To Stop Losing Customers?
        </h2>
        <p className="text-gray-600 mt-6">
          Get a mobile-first website that converts visitors into customers across all devices.
        </p>
        <button
                type="button"
                className="px-5 py-2 text-sm mt-6 mb-10 font-medium text-black   border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Get a proposal"
              >
                Get an Expert Appointment
              </button>
      </div>
 
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 mt-15">
        <div className="flex-1 max-w-lg order-1 md:order-1">
          <span className="inline-block mb-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            CUSTOM SOLUTIONS
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Responsive &
            <span className="text-blue-600">Custom Website Design</span>
          </h2>

          <p className="mt-6 text-gray-600">
            Build websites that adapt beautifully to any device — phones, tablets, laptops, desktops — and are tailored just for your business.
          </p>

          <p className="mt-4 text-gray-600">
            With AiBit Soft, every site is custom-designed; it responds (automatically adjusts) to different screen sizes so users always get a smooth, easy, clean experience no matter what device they&apos;re using.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="px-5 py-2 text-sm font-medium text-white  bg-[#2B4DDF] border-black rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Get a proposal"
              >
                Get Started Today
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium bg-white text-black border border-gray-300 rounded-3xl transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                aria-label="Book an expert"
              >
                Book an expert
              </button>
            </div>
          </div>
        </div>

        {/* Image mockup - replace with your real images or SVGs */}
        <div className="flex-1 flex justify-center items-center gap-6 order-2 md:order-2">
         
          <div className="hidden lg:block w-[450px] h-[270px]">
            <Image
              src={CustomSection}
              alt="Desktop Mockup"
              className="w-full h-full object-contain"
            />
          </div>

        

       
        </div>
      </div>
     <div className="w-full mt-10 border-t border-gray-200"></div>
     
      <div className="w-full mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mobile First Card */}
          <div className="bg-blue-50 rounded-xl p-6 text-left">
            <div className="flex justify-start mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="20" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-sm text-gray-600">Optimized for mobile devices</p>
          </div>

          {/* Tablet Friendly Card */}
          <div className="bg-green-50 rounded-xl p-6 text-left">
            <div className="flex justify-start mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-green-600">
                <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="20" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tablet Friendly</h3>
            <p className="text-sm text-gray-600">Seamless tablet experience</p>
          </div>

          {/* Desktop Ready Card */}
          <div className="bg-purple-50 rounded-xl p-6 text-left">
            <div className="flex justify-start mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="6" y="17" width="12" height="4" rx="1" fill="currentColor"/>
                <rect x="10" y="21" width="4" height="2" rx="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Desktop Ready</h3>
            <p className="text-sm text-gray-600">Perfect on large screens</p>
          </div>

          {/* All Devices Card */}
          <div className="bg-orange-50 rounded-xl p-6 text-left">
            <div className="flex justify-start mb-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="8" y="17" width="8" height="4" rx="1" fill="currentColor"/>
                <rect x="10" y="21" width="4" height="2" rx="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">All Devices</h3>
            <p className="text-sm text-gray-600">Works everywhere perfectly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
