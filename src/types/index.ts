// FAQ Data Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQData {
  banner: string;
  title: string;
  description: string;
  faqs: FAQItem[];
}

// Mobile Experience Data Types
export interface ImpactCard {
  id: string;
  theme: 'red' | 'orange' | 'purple' | 'green';
  icon: string;
  title: string;
  subtitle: string;
  statistic: string;
  statisticLabel: string;
  description: string;
}

export interface MobileExperienceData {
  banner: {
    text: string;
    icon: string;
  };
  title: {
    part1: string;
    part2: string;
  };
  subtitle: string;
  cards: ImpactCard[];
}

// Why Choose Data Types
export interface BenefitCard {
  icon: string; // SVG path data as string
  title: string;
  description: string;
}

export interface WhyChooseData {
  banner: string;
  title: string;
  description: string;
  benefits: BenefitCard[];
}

// Navigation Data Types
export interface NavigationMenuItem {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  icon?: string;
}

export interface NavigationMenuSection {
  title: string;
  items: NavigationMenuItem[];
}

export interface NavigationData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menus: NavigationMenuSection[];
  buttons: {
    primary: {
      text: string;
      className: string;
    };
    secondary: {
      text: string;
      className: string;
    };
  };
}

// Footer Data Types
export interface SocialIcon {
  name: string;
  icon: string;
  href: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  socialIcons: SocialIcon[];
  services: string[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  copyright: string;
  legal: {
    terms: string;
    privacy: string;
  };
}

// Hero Section Data Types
export interface HeroSectionData {
  banner: {
    icon: string;
    text: string;
  };
  title: string;
  statistics: {
    amount: string;
    description: string;
    subtitle: string;
  };
  navigation: {
    statistics: string;
    problems: string;
    solutions: string;
  };
}

// Custom Solutions Data Types
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  theme: 'blue' | 'green' | 'purple' | 'orange';
}

export interface CustomSolutionsData {
  cta: {
    title: string;
    description: string;
    button: {
      text: string;
      className: string;
    };
  };
  banner: string;
  title: {
    part1: string;
    part2: string;
  };
  description: string[];
  buttons: {
    primary: {
      text: string;
      className: string;
    };
    secondary: {
      text: string;
      className: string;
    };
  };
  features: FeatureCard[];
}
