import { FooterData } from '@/types';

export const footerData: FooterData = {
  logo: {
    src: '/images/logo.svg',
    alt: 'AIBit Logo',
    width: 300,
    height: 200
  },
  description: 'AiBit Soft Delivers Custom Websites, Apps, AI Tools, And Marketing Solutions That Help Businesses Grow In A Fast-Moving Digital World. Our Team Combines Creativity And Technology To Build Scalable, Secure Solutions That Keep You Ahead Of Change.',
  socialIcons: [
    { name: 'Facebook', icon: 'fb', href: '#' },
    { name: 'Instagram', icon: 'insta', href: '#' },
    { name: 'Twitter', icon: 'twiter', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'GitHub', icon: 'github', href: '#' },
    { name: 'Pinterest', icon: 'pinterest', href: '#' },
    { name: 'Discord', icon: 'discord', href: '#' },
    { name: 'TikTok', icon: 'tiktok', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' }
  ],
  services: [
    'Website Design and Development',
    'Web App Design and Development',
    'UI/UX and Graphics Design',
    'Mobile App',
    'SEO & AI SEO Solutions',
    'Social Media Ads',
    'Blog and Content Marketing',
    'Digital Marketing',
    'Custom AI Tools and Integration',
    'Custom Software Development',
    'IT Staff Augmentation'
  ],
  contact: {
    email: 'info@aibitsoft.com',
    phone: '+92 55 8416985 6',
    address: 'Office # 1, 2nd Floor, Block 3, GIFT University, Gujranwala, Pakistan.'
  },
  contactForm: {
    title: 'Start Your Project Today',
    description: 'Tell us about your project and we\'ll get back to you within 24 hours.',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Message'
    },
    services: {
      title: 'Service Needed',
      options: [
        'Mobile Application',
        'Web Application',
        'Website Development',
        'SEO & Marketing',
        'AI and Automation Tools',
        'Custom Software Development',
        'IT Staff Augmentation'
      ]
    },
    button: {
      text: 'Send'
    }
  },
  copyright: '© 2025 AiBit Soft. All rights reserved.',
  legal: {
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy'
  }
};
