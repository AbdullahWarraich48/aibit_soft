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
        <h2 className="text-3xl font-bold text-blue-900 mt-6 font-sans text-white">
          Ready to Transform Your Business? 
        </h2>
        <p className="text-gray-600 mt-6 font-sans text-white">
          Work with AiBit Soft to turn your ideas into powerful digital solutions.
        </p>
        <div className="flex justify-center gap-4">
         <button
                 type="button"
                 className="bg-white text-black px-6 py-2.5 h-11 text-sm sm:text-base mt-6 mb-10 font-medium border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans"
                 aria-label="Get a proposal"
               >
                 Get a Proposal
               </button>
              <button
                type="button"
                 className={`${customSolutionsData.cta.button.className} px-6 py-2.5 h-11 text-sm sm:text-base`}
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