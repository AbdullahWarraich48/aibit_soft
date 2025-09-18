import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqData } from '@/data';

const Faq: React.FC = () => {

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* FAQs Banner */}
          <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-medium mb-6 font-sans">
            {faqData.banner}
          </div>
          
        
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 font-sans">
            {faqData.title}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            {faqData.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          <Accordion type="single" collapsible defaultValue="project-duration" className="w-full ">
            {faqData.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-50 rounded-lg mt-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:no-underline hover:text-blue-600 transition-colors duration-200 font-sans">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
