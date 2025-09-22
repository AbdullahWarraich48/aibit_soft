import React from 'react';
import Image from 'next/image';
import { web, app, UI, mobile, Ai, Digitalmarketing, content, social, growth, user } from '../../../public/images';

interface BenefitCardProps {
  icon: any;
  title: string;
  description: string;
  subdes?: string;
  button?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, subdes, button }) => {
  return ( 
    <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 font-sans h-full flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <Image src={icon} alt={title} width={24} height={24} className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans">{title}</h3> 
      <p className="text-sm text-gray-600 font-sans">{description}</p>
      {subdes && (
        <p className="text-sm text-gray-500 mt-3 font-sans">{subdes}</p>
      )}
      {button && (
        <div className="mt-auto pt-5">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium bg-white text-[#2B4DDF] transition-colors duration-200 font-sans inline-flex items-center gap-2 justify-center"
            aria-label={`${button} for ${title}`}
          >
            <span>{button}</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

     
    </div>
  );
};

// Dummy services data
const ServicesData = {
  benefits: [
    { title: 'Websites That Work', description: 'Responsive & custom website development that converts.', subdes: 'From landing pages to complex sites optimized for conversions.', button: 'Learn More', icon: web },
    { title: 'Web App Design and Development', description: 'Scalable, secure, and modern web applications.', subdes: 'From prototypes to production-ready apps designed for scale.', button: 'Learn More', icon: app },
    { title: 'Mobile Experiences', description: 'iOS & Android apps focused on user retention.', subdes: 'Native and cross-platform apps with delightful UX.', button: 'Learn More', icon: mobile },
    { title: 'UI/UX & Creative Design', description: 'Interfaces that delight users and drive engagement.', subdes: 'Design systems, prototypes, and user testing.', button: 'Learn More', icon: UI },
    { title: 'Smart AI Solutions', description: 'Automation and insights with custom AI tools.', subdes: 'Integrations, assistants, and data pipelines.', button: 'Learn More', icon: Ai },
    { title: 'Digital Marketing', description: 'Campaigns that boost traffic and conversions.', subdes: 'SEO, SEM, and performance marketing.', button: 'Learn More', icon: Digitalmarketing },
    { title: 'Content That Converts', description: 'SEO-backed content that educates and sells.', subdes: 'Blogs, landing pages, and email copy.', button: 'Learn More', icon: content },
    { title: 'Social Ads That Sell', description: 'Targeted ads for engagement and ROAS.', subdes: 'Creative production and ad ops.', button: 'Learn More', icon: social },
    { title: 'Custom Software Development', description: 'Tailored systems for unique business needs.', subdes: 'Internal tools, dashboards, and integrations.', button: 'Learn More', icon: growth },
    { title: 'IT Staff Augmentation', description: 'Scale your team with vetted experts.', subdes: 'Flexible engagement models.', button: 'Learn More', icon: user },
  ],
};

const Services: React.FC = () => {

  const getItemGridClass = (index: number) => {
    const total = ServicesData.benefits.length;
    const remaining = total % 4;
    // Center last row when it has 2 items
    if (remaining === 2 && index === total - 2) {
      return 'lg:col-start-2';
    }
    // Center a single last card
    if (remaining === 1 && index === total - 1) {
      return 'lg:col-start-2 lg:col-span-2';
    }
    return '';
  };

  return (
    <section className="w-full bg-[#F4F7FF] py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="inline-block px-3 py-1 text-weight-[700px] text-2xl mb-4 font-sora">
          Our Services
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sans">
          Specialized Expertise, Unified Innovation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
          Tailored digital solutions designed to drive results.
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ServicesData.benefits.map((benefit, index) => (
            <div key={index} className={`${getItemGridClass(index)} h-full`}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                subdes = {benefit.subdes}
                button = {benefit.button}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
      <button
        type="button"
        className="px-4 py-2 rounded-3xl text-sm font-medium bg-[#2B4DDF] text-white transition-colors duration-200 font-sans inline-flex items-center gap-2 justify-center"
        aria-label="Explore our services"
      >
        Explore Our Services
      
      </button>
      </div>
    </section>
  );
};

export default Services;
