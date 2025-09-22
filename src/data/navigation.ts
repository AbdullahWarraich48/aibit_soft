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
          subtitle: 'Strategies to grow your brand online',
          description: 'Integrated campaigns that boost traffic and conversions.',
          href: '/digital-marketing'
        },
        {
          title: 'Content That Converts',
          subtitle: 'Blog & Content Marketing, SEO & AI SEO',
          description: 'Content that educates visitors and turns them into customers.',
          href: '/content-that-converts'
        },
        {
          title: 'Social Ads That Sell',
          subtitle: 'Engaging Social Media Advertising campaigns',
          description: 'Targeted ad strategies that increase engagement and sales.',
          href: '/social-ads-that-sell'
        }
      ]
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Web Design',
          subtitle: 'Modern design principles and best practices',
          description: 'Learn the latest web design trends, UI/UX principles, and responsive design techniques.',
          href: '/web-design'
        },
        {
          title: 'SEO and Marketing',
          subtitle: 'Digital marketing strategies and SEO optimization',
          description: 'Master SEO techniques, content marketing, and digital advertising strategies.',
          href: '/seo-marketing'
        },
        {
          title: 'AI Automation',
          subtitle: 'Artificial intelligence and automation tools',
          description: 'Explore AI technologies, automation workflows, and intelligent business solutions.',
          href: '/ai-automation'
        },
        {
          title: 'Business Growth',
          subtitle: 'Strategies for scaling your business',
          description: 'Discover proven methods for business expansion, growth hacking, and market penetration.',
          href: '/business-growth'
        },
        {
          title: 'Blogs',
          subtitle: 'Latest insights, tips, and trends',
          description: 'Stay updated with industry news, expert opinions, and actionable business insights.',
          href: '/blog'
        },
        {
          title: 'Mobile Apps',
          subtitle: 'Mobile development and app strategies',
          description: 'Learn mobile app development, user experience design, and app store optimization.',
          href: '/mobile-apps'
        }
      ]
    },
    {
      title: 'Connect With Us',
      items: [
        {
          title: 'Contact Us',
          subtitle: 'Get personalized assistance',
          description: 'Get in touch with our team for personalized assistance.',
          href: '/contact'
        },
        {
          title: 'Book an Expert Appointment',
          subtitle: 'Schedule a consultation with our experts',
          description: 'Book a one-on-one session with our specialists to discuss your project.',
          href: '/book-appointment'
        },
        {
          title: 'Get a Proposal',
          subtitle: 'Request a custom proposal',
          description: 'Get a detailed proposal tailored to your specific business needs.',
          href: '/get-proposal'
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
