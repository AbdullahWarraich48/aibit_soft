import { customSolutionsData } from "@/data/customSolutions";
import { ban } from "../../../public/images";
import * as React from "react";

const Transform: React.FC = () => {
  return (
    <section className="w-full ">
      <div
        className=" p-8 text-center mb-16 bg-no-repeat bg-cover bg-center"
           style={{ backgroundImage: `url(${ban.src})` }}
         >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mt-6 font-sans text-white">
            Ready to Transform Your Business? 
          </h2>
          <p className="text-white text-sm sm:text-base mt-4 font-sans">
            Work with AiBit Soft to turn your ideas into powerful digital solutions.
          </p>
        </div>
        <div className="mt-6 flex sm:flex-row flex-col justify-center items-center gap-3 sm:gap-4">
         <button
                 type="button"
                 className="bg-white text-black px-6 py-2.5 h-11 text-sm sm:text-base font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans whitespace-nowrap"
                 aria-label="Get a proposal"
               >
                 Get a Proposal
               </button>
               <button
                 type="button"
                className=" text-black px-6 py-2.5 h-11 text-sm sm:text-base font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans whitespace-nowrap"
                 aria-label="Get a proposal"
               >
                 Book an Appointment
               </button>
            
              </div>
      </div>
    </section>
  );
};

export default Transform;