"use client";

import Image from "next/image";
import { CustomSection } from "../../../public/images";
import { customSolutionsData } from '@/data';

export default function CustomSolutions() {
  const getThemeClasses = (theme: string) => {
    const themes = {
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      purple: 'bg-purple-50',
      orange: 'bg-orange-50'
    };
    return themes[theme as keyof typeof themes] || 'bg-gray-50';
  };


  const themeClasses = 'bg-blue-50 bg-green-50 bg-purple-50 bg-orange-50';

  const handleGetStarted = () => {

    console.log('Get Started Today clicked');

  };

  const handleBookExpert = () => {
  
    console.log('Book an expert clicked');
   
  };

  const handleCtaButton = () => {

    console.log('Get an Expert Appointment clicked');
   
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 font-sans">
   
  

 
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 sm:gap-12 mb-14 sm:mb-16 mt-10">
        <div className="flex-1 max-w-lg order-1 md:order-1 text-center md:text-left">
          <span className="inline-block mb-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 font-sans">
            {customSolutionsData.banner}
          </span>

          <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 font-sans">
            {customSolutionsData.title.part1}
            <span className="text-blue-600">{customSolutionsData.title.part2}</span>
          </h2>

          {customSolutionsData.description.map((paragraph, index) => (
            <p key={index} className={`text-gray-600 font-sans text-xs sm:text-sm ${index === 0 ? 'mt-3 sm:mt-5' : 'mt-2.5 sm:mt-3.5'}`}>
              {paragraph}
            </p>
          ))}

<div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-6">
  <button
    type="button"
    className="bg-[#2B4DDF] text-white px-6 py-2.5 h-11 text-sm sm:text-base font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans w-full sm:w-auto"
    aria-label="Get a proposal"
  >
    Get Started Today
  </button>

  <button
    type="button"
    className="text-black px-6 py-2.5 h-11 text-sm sm:text-base font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans w-full sm:w-auto"
    aria-label="Book an appointment"
  >
    Book an Appointment
  </button>
</div>
        
        </div>

       
        <div className="flex-1 flex justify-center items-center gap-6 order-2 md:order-2">
          <div className="block w-64 h-40 sm:w-80 sm:h-52 lg:w-[450px] lg:h-[270px] ">
            <Image
              src={CustomSection}
              alt="Desktop Mockup"
              className="w-full h-full object-contain"
            />
          </div>

        

       
        </div>
      </div>
     <div className="w-full mt-10 border-t border-gray-200"></div>
     
      <div className="w-full mt-14 sm:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center md:place-items-stretch">
          {customSolutionsData.features.map((feature, index) => (
            <div key={index} className={`${getThemeClasses(feature.theme)} rounded-xl p-4 sm:p-6 text-center md:text-left w-11/12 sm:w-80 md:w-auto min-h-[180px]` }>
              <div className="flex justify-center md:justify-start mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: feature.icon }} />
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 font-sans">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
