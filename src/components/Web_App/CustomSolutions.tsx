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

  // Ensure Tailwind includes these classes
  const themeClasses = 'bg-blue-50 bg-green-50 bg-purple-50 bg-orange-50';

  const handleGetStarted = () => {
    // You can replace this with your actual navigation or form submission logic
    console.log('Get Started Today clicked');
    // Example: router.push('/contact') or open a modal
  };

  const handleBookExpert = () => {
    // You can replace this with your actual booking logic
    console.log('Book an expert clicked');
    // Example: router.push('/booking') or open a booking modal
  };

  const handleCtaButton = () => {
    // You can replace this with your actual CTA logic
    console.log('Get an Expert Appointment clicked');
    // Example: router.push('/contact') or open a contact form
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans">
      {/* Call-to-Action Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mt-6 font-sans leading-[20px]">
          {customSolutionsData.cta.title}
        </h2>
        <p className="text-gray-600 mt-6 font-sans leading-[20px]">
          {customSolutionsData.cta.description}
        </p>
        <button
                 type="button"
                 className=" text-black px-6 py-2.5 h-11 text-sm sm:text-base mt-6 mb-10 font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans"
                 aria-label="Get an Expert Appointment"
               >
                 Get an Expert Appointment
               </button>
      </div>
 
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16 mt-15">
        <div className="flex-1 max-w-lg order-1 md:order-1">
          <span className="inline-block mb-4 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 font-sans">
            {customSolutionsData.banner}
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 font-sans">
            {customSolutionsData.title.part1}
            <span className="text-blue-600">{customSolutionsData.title.part2}</span>
          </h2>

          {customSolutionsData.description.map((paragraph, index) => (
            <p key={index} className={`text-gray-600 font-sans ${index === 0 ? 'mt-6' : 'mt-4'}`}>
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex gap-4 leading-[20px]">
            <div className="flex items-center space-x-4">
            <button
                 type="button"
                 className="bg-[#2B4DDF] text-white px-6 py-2.5 h-11 text-sm sm:text-base mt-6 mb-10 font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans"
                 aria-label="Get a proposal"
               >
                 Get Started Today
               </button>
               <button
                 type="button"
                 className=" text-black px-6 py-2.5 h-11 text-sm sm:text-base mt-6 mb-10 font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans"
                 aria-label="Get a proposal"
                >
                  Book an Appointment
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
          {customSolutionsData.features.map((feature, index) => (
            <div key={index} className={`${getThemeClasses(feature.theme)} rounded-xl p-6 text-left`}>
              <div className="flex justify-start mb-4" dangerouslySetInnerHTML={{ __html: feature.icon }} />
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans leading-[20px]">{feature.title}</h3>
              <p className="text-sm text-gray-600 font-sans leading-[20px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
