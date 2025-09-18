import { CustomSolutionsData } from '@/types';

export const customSolutionsData: CustomSolutionsData = {
  cta: {
    title: 'Ready To Stop Losing Customers?',
    description: 'Get a mobile-first website that converts visitors into customers across all devices.',
    button: {
      text: 'Get an Expert Appointment',
      className: 'px-8 py-4 text-base mt-6 mb-10 font-medium text-black border border-gray-300 rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans'
    }
  },
  banner: 'CUSTOM SOLUTIONS',
  title: {
    part1: 'Responsive &',
    part2: 'Custom Website Design'
  },
  description: [
    'Build websites that adapt beautifully to any device — phones, tablets, laptops, desktops — and are tailored just for your business.',
    'With AiBit Soft, every site is custom-designed; it responds (automatically adjusts) to different screen sizes so users always get a smooth, easy, clean experience no matter what device they\'re using.'
  ],
  buttons: {
    primary: {
      text: 'Get Started Today',
      className: 'px-8 py-4 text-base font-medium text-white bg-[#2B4DDF] border-black rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans'
    },
    secondary: {
      text: 'Book an expert',
      className: 'px-4 py-4 text-base font-medium bg-white text-black border border-gray-300 rounded-3xl transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-sans'
    }
  },
  features: [
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="text-blue-600">
                <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="20" r="1" fill="currentColor"/>
              </svg>`,
      title: 'Mobile First',
      description: 'Optimized for mobile devices',
      theme: 'blue'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="text-green-600">
                <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="20" r="1" fill="currentColor"/>
              </svg>`,
      title: 'Tablet Friendly',
      description: 'Seamless tablet experience',
      theme: 'green'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="text-purple-600">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                <rect x="6" y="17" width="12" height="4" rx="1" fill="currentColor"/>
                <rect x="10" y="21" width="4" height="2" rx="1" fill="currentColor"/>
              </svg>`,
      title: 'Desktop Ready',
      description: 'Perfect on large screens',
      theme: 'purple'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" class="text-orange-600">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                <rect x="8" y="17" width="8" height="4" rx="1" fill="currentColor"/>
                <rect x="10" y="21" width="4" height="2" rx="1" fill="currentColor"/>
              </svg>`,
      title: 'All Devices',
      description: 'Works everywhere perfectly',
      theme: 'orange'
    }
  ]
};
