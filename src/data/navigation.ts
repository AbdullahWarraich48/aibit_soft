import { NavigationData } from '@/types';

export const navigationData: NavigationData = {
  logo: {
    src: '/images/logo.svg',
    alt: 'AIBit Logo',
    width: 134,
    height: 24
  },
  menus: [
    {
      title: 'Solutions for Your Business',
      items: [
        {
          title: 'Websites That Work',
          subtitle: 'Responsive & Custom Development',
          description: 'Build web apps that are fast, responsive, and user-friendly.',
          href: '/websites-that-work',
          icon: 'globe'
        },
        {
          title: 'Web App Design & Development',
          subtitle: 'Scalable web apps and intuitive user experiences',
          description: 'From prototypes to production-ready apps designed for scale.',
          href: '/web-app-development',
          icon: 'web-app'
        },
        {
          title: 'UI/UX & Creative Design',
          subtitle: 'Designs that delight and engage users',
          description: 'Modern Interfaces and visuals that make Interactions intuitive.',
          href: '/ui-ux-design',
          icon: 'design'
        },
        {
          title: 'Mobile Experiences',
          subtitle: 'Mobile App Development & UI/UX Design',
          description: 'iOS & Android apps crafted to engage users and boost retention.',
          href: '/mobile-experiences',
          icon: 'mobile'
        },
        {
          title: 'Smart AI Solutions',
          subtitle: 'Custom AI Tools & Integration for smarter business',
          description: 'Automate tasks, analyze data, and surface actionable insights.',
          href: '/smart-ai-solutions',
          icon: 'ai'
        }
      ]
    },
    {
      title: 'Grow Your Reach',
      items: [
        {
          title: 'Digital Marketing',
          subtitle: 'Stratigies to grow your brand online',
          description: 'Integrated campaigns that boost traffic and conversions.',
          href: '/marketing-automation'
        },
        {
          title: 'Content That Converts',
          subtitle: ' Blog & Content Marketing, SEO & AI SEO',
          description: 'Content that educates visitors and turns them into customers.',
          href: '/seo-optimization'
        },
           
        {
          title: 'Social Ads That Sell',
          subtitle:' Engaging Social Media Advertising campaigns',
          description: 'Targeted ad strategies that increase engagement and sales.',
          href: '/content-marketing'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Blog',
          description: 'Latest insights, tips, and trends in AI and technology.',
          href: '/blog'
        },
        {
          title: 'Case Studies',
          description: 'Real-world examples of successful AI implementations.',
          href: '/case-studies'
        },
        {
          title: 'Whitepapers',
          description: 'In-depth research and analysis on AI technologies.',
          href: '/whitepapers'
        },
        {
          title: 'Webinars',
          description: 'Live sessions with industry experts and thought leaders.',
          href: '/webinars'
        }
      ]
    },
    {
      title: 'Connect With Us',
      items: [
        {
          title: 'Contact Us',
          description: 'Get in touch with our team for personalized assistance.',
          href: '/contact'
        },
        {
          title: 'Free Consultation',
          description: 'Schedule a free consultation to discuss your needs.',
          href: '/consultation'
        },
        {
          title: 'Support',
          description: 'Get help and support for your AI solutions.',
          href: '/support'
        },
        {
          title: 'Partnership',
          description: 'Explore partnership opportunities with AIBit.',
          href: '/partnership'
        }
      ]
    }
  ],
  buttons: {
    primary: {
      text: 'Get a proposal',
      className: 'px-3 py-2 text-sm font-medium text-white bg-[#2B4DDF] border-black rounded-3xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-sans'
    },
    secondary: {
      text: 'Book an expert',
      className: 'px-4 py-2 text-sm font-medium bg-white text-black border border-gray-300 rounded-3xl transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-sans'
    }
  }
};
