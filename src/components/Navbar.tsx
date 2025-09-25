"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { navigationData } from '@/data';
import { web, app, UI, mobile, Alert, Ai, Digitalmarketing, content, social, call, proposal, contact, blog, growth } from '../../public/images';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileOpenSections, setMobileOpenSections] = useState<Record<number, boolean>>({});
  const [selectedMobileSection, setSelectedMobileSection] = useState<number | null>(null);

  const toggleMobileSection = (index: number) => {
    setMobileOpenSections((prev) => {
      const isOpen = !!prev[index]
      // Allow only one section open at a time
      return isOpen ? {} : { [index]: true }
    })
  };

  const titleToSlug = (title: string): string => {
    if (title === 'Solutions for Your Business') return 'solutions'
    if (title === 'Grow Your Reach') return 'reach'
    if (title === 'Resources') return 'resources'
    if (title === 'Connect With Us') return 'connect'
    return ''
  }

  const getMenuItemIcon = (menuTitle: string, index: number) => {
    if (menuTitle === 'Solutions for Your Business') {
      const icons = [
        <Image key="web" src={web} alt="Web" width={24} height={24} className="w-6 h-6" />, 
        <Image key="app" src={app} alt="App" width={24} height={24} className="w-6 h-6" />, 
        <Image key="ui" src={UI} alt="UI" width={24} height={24} className="w-6 h-6" />, 
        <Image key="mobile" src={mobile} alt="Mobile" width={24} height={24} className="w-6 h-6" />, 
        <Image key="ai" src={Ai} alt="AI" width={24} height={24} className="w-6 h-6" />
      ]
      return icons[index] || icons[0]
    }
    if (menuTitle === 'Grow Your Reach') {
      const icons = [
        <Image key="marketing" src={Digitalmarketing} alt="Marketing" width={24} height={24} className="w-6 h-6" />, 
        <Image key="content" src={content} alt="Content" width={24} height={24} className="w-6 h-6" />, 
        <Image key="social" src={social} alt="Social" width={24} height={24} className="w-6 h-6" />
      ]
      return icons[index] || icons[0]
    }
    if (menuTitle === 'Resources') {
      const icons = [
        <Image key="web-design" src={web} alt="Web" width={24} height={24} className="w-6 h-6" />, 
        <Image key="seo-marketing" src={Digitalmarketing} alt="SEO" width={24} height={24} className="w-6 h-6" />, 
        <Image key="ai-automation" src={Ai} alt="AI" width={24} height={24} className="w-6 h-6" />, 
        <Image key="business-growth" src={growth} alt="Growth" width={24} height={24} className="w-6 h-6" />, 
        <Image key="blogs" src={blog} alt="Blogs" width={24} height={24} className="w-6 h-6" />, 
        <Image key="mobile-apps" src={mobile} alt="Mobile Apps" width={24} height={24} className="w-6 h-6" />
      ]
      return icons[index] || icons[0]
    }
    if (menuTitle === 'Connect With Us') {
      const icons = [
        <Image key="contact" src={contact} alt="Contact" width={24} height={24} className="w-6 h-6" />, 
        <Image key="appointment" src={call} alt="Call" width={24} height={24} className="w-6 h-6" />, 
        <Image key="proposal" src={proposal} alt="Proposal" width={24} height={24} className="w-6 h-6" />
      ]
      return icons[index] || icons[0]
    }
    return <></>
  }

  const handleMenuClick = (menuTitle: string) => {
    // If clicking the same menu, close it; otherwise, open the new menu
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const handleCloseMenu = () => {
    setActiveMenu(null);
  };

  // Prevent body scroll when any menu is open
  useEffect(() => {
    if (activeMenu || isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeMenu, isMobileOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the navbar
      if (!target.closest('nav')) {
        setActiveMenu(null);
        setIsMobileOpen(false);
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);
  return (
    <nav className="bg-white border-b border-black font-sans relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">
      
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src={navigationData.logo.src}
                alt={navigationData.logo.alt}
                width={navigationData.logo.width}
                height={navigationData.logo.height}
                className="h-6 w-auto transition-transform duration-300 ease-in-out group-hover:translate-y-1"
              />
            </Link>
          </div>

         
          <div className="hidden md:block flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationData.menus.map((menu, menuIndex) => (
                  <NavigationMenuItem key={menuIndex}>
                    <div className="relative">
                      <button 
                        onClick={() => handleMenuClick(menu.title)}
                        className="text-gray-600 bg-transparent border-none font-sans px-4 py-2 hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out flex items-center gap-1 whitespace-nowrap group"
                        aria-expanded={activeMenu === menu.title}
                        aria-haspopup="true"
                      >
                        <span className="whitespace-nowrap transition-transform duration-300 ease-in-out group-hover:translate-y-1">{menu.title}</span>
                        <svg 
                          className={`w-4 h-4 transition-all duration-300 ease-in-out flex-shrink-0 group-hover:translate-y-1 ${activeMenu === menu.title ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0 ml-auto">
            <button
              type="button"
              className={`${navigationData.buttons.primary.className} whitespace-nowrap transition-transform duration-300 ease-in-out hover:translate-y-1 hidden md:inline-flex`}
              aria-label="Get a proposal"
            >
              {navigationData.buttons.primary.text}
            </button>
            <button
              type="button"
              className={`${navigationData.buttons.secondary.className} whitespace-nowrap transition-transform duration-300 ease-in-out hover:translate-y-1 hidden md:inline-flex`}
              aria-label="Book an expert"
            >
              {navigationData.buttons.secondary.text}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                type="button"
                className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Open main menu"
                onClick={() => { setSelectedMobileSection(null); setMobileOpenSections({}); setIsMobileOpen(true); }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Menu Overlays */}
      {activeMenu && (
        <div 
          className="fixed top-16 left-0 right-0 h-[80vh] bg-white z-40 overflow-y-auto"
        >
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-4 mt-8 ml-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-xl font-bold text-black font-sans mb-1">
                  {activeMenu === 'Solutions for Your Business' ? 'Tailored Solutions That Drive Results' :
                   activeMenu === 'Grow Your Reach' ? 'Expand Your Business Reach' :
                   activeMenu === 'Resources' ? 'Knowledge & Insights' :
                   activeMenu === 'Connect With Us' ? 'Get In Touch' : activeMenu}
                </h1>
                <div className="w-24 h-0.5 bg-[#2B4DDF]"></div>
              </div>
              <button
                onClick={handleCloseMenu}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {navigationData.menus.find(menu => menu.title === activeMenu)?.items.map((item, itemIndex) => {
                // Define icons for each menu type
                const getIcon = (menuTitle: string, index: number) => {
                  if (menuTitle === 'Solutions for Your Business') {
                    const icons = [
                      // Websites That Work
                      <Image key="web" src={web} alt="Web Development" width={24} height={24} className="w-6 h-6" />,
                      // Web App Design & Development
                      <Image key="app" src={app} alt="App Development" width={24} height={24} className="w-6 h-6" />,
                      // UI/UX & Creative Design
                      <Image key="ui" src={UI} alt="UI/UX Design" width={24} height={24} className="w-6 h-6" />,
                      // Mobile Experiences
                      <Image key="mobile" src={mobile} alt="Mobile Development" width={24} height={24} className="w-6 h-6" />,
                      // Smart AI Solutions
                      <Image key="ai" src={Ai } alt="AI Solutions" width={24} height={24} className="w-6 h-6" />
                    ];
                    return icons[index] || icons[0];
                  } else if (menuTitle === 'Grow Your Reach') {
                    const icons = [
                      <Image key="marketing" src={Digitalmarketing} alt="Digital Marketing" width={24} height={24} className="w-6 h-6" />,
                      <Image key="content" src={content} alt="Content Marketing" width={24} height={24} className="w-6 h-6" />,
                      <Image key="social" src={social} alt="Social Media" width={24} height={24} className="w-6 h-6" />
                    ];
                    return icons[index] || icons[0];
                  } else if (menuTitle === 'Resources') {
                    const icons = [
                      <Image key="web-design" src={web} alt="Web Design" width={24} height={24} className="w-6 h-6" />,
                      <Image key="seo-marketing" src={Digitalmarketing} alt="SEO and Marketing" width={24} height={24} className="w-6 h-6" />,
                      <Image key="ai-automation" src={Ai} alt="AI Automation" width={24} height={24} className="w-6 h-6" />,
                      <Image key="business-growth" src={growth} alt="Business Growth" width={24} height={24} className="w-6 h-6" />,
                      <Image key="blogs" src={blog} alt="Blogs" width={24} height={24} className="w-6 h-6" />,
                      <Image key="mobile-apps" src={mobile} alt="Mobile Apps" width={24} height={24} className="w-6 h-6" />
                    ];
                    return icons[index] || icons[0];
                  } else if (menuTitle === 'Connect With Us') {
                    const icons = [
                      <Image key="contact" src={contact} alt="Contact Us" width={24} height={24} className="w-6 h-6" />,
                      <Image key="appointment" src={call} alt="Book an Expert Appointment" width={24} height={24} className="w-6 h-6" />,
                      <Image key="proposal" src={proposal} alt="Get a Proposal" width={24} height={24} className="w-6 h-6" />
                    ];
                    return icons[index] || icons[0];
                  }
                  return <svg key="default" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>;
                };

                return (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group block p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out bg-white"
                    onClick={handleCloseMenu}
                  >
                    <div className="flex items-start space-x-3 group-hover:-translate-x-1 transition-transform duration-500 ease-in-out">
                      <div className="w-12 h-12 bg-[#E9ECFF] rounded-lg flex items-center justify-center group-hover:bg-[#D1D8FF] transition-colors duration-300 flex-shrink-0">
                        {getIcon(activeMenu, itemIndex)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black mb-1 font-sans group-hover:text-[#2B4DDF] transition-colors duration-300">{item.title}</h3>
                        {item.subtitle && (
                          <p className="text-xs text-gray-600 mb-1 font-sans font-medium">{item.subtitle}</p>
                        )}
                        <p className="text-sm text-gray-500 font-sans leading-snug">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => { setIsMobileOpen(false); setSelectedMobileSection(null); setMobileOpenSections({}); }} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-4/5 max-w-none sm:max-w-xs bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {selectedMobileSection !== null && (
                  <button
                    type="button"
                    aria-label="Back"
                    className="p-1 mr-1 text-gray-700 hover:text-black"
                    onClick={() => setSelectedMobileSection(null)}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <span className="text-base font-semibold">
                  {selectedMobileSection !== null ? navigationData.menus[selectedMobileSection].title : 'Menu'}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="p-2 text-gray-600 hover:text-black"
                onClick={() => { setIsMobileOpen(false); setSelectedMobileSection(null); setMobileOpenSections({}); }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedMobileSection === null ? (
              <nav className="space-y-2 overflow-y-auto">
                {navigationData.menus.map((menu, idx) => {
                const open = !!mobileOpenSections[idx];
                const getMobileIcon = (menuTitle: string, index: number) => {
                  if (menuTitle === 'Solutions for Your Business') {
                    const icons = [
                      <Image key="web" src={web} alt="Web" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="app" src={app} alt="App" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="ui" src={UI} alt="UI" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="mobile" src={mobile} alt="Mobile" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="ai" src={Ai} alt="AI" width={20} height={20} className="w-5 h-5" />
                    ];
                    return icons[index] || icons[0];
                  }
                  if (menuTitle === 'Grow Your Reach') {
                    const icons = [
                      <Image key="marketing" src={Digitalmarketing} alt="Marketing" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="content" src={content} alt="Content" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="social" src={social} alt="Social" width={20} height={20} className="w-5 h-5" />
                    ];
                    return icons[index] || icons[0];
                  }
                  if (menuTitle === 'Resources') {
                    const icons = [
                      <Image key="web-design" src={web} alt="Web" width={20} height={20} className="w-5 h-5" />,
                      <Image key="seo" src={Digitalmarketing} alt="SEO" width={20} height={20} className="w-5 h-5" />,
                      <Image key="ai" src={Ai} alt="AI" width={20} height={20} className="w-5 h-5" />,
                      <Image key="growth" src={growth} alt="Growth" width={20} height={20} className="w-5 h-5" />,
                      <Image key="blog" src={blog} alt="Blog" width={20} height={20} className="w-5 h-5" />,
                      <Image key="mob" src={mobile} alt="Mobile" width={20} height={20} className="w-5 h-5" />
                    ];
                    return icons[index] || icons[0];
                  }
                  if (menuTitle === 'Connect With Us') {
                    const icons = [
                      <Image key="contact" src={contact} alt="Contact" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="call" src={call} alt="Call" width={20} height={20} className="w-5 h-5" />, 
                      <Image key="proposal" src={proposal} alt="Proposal" width={20} height={20} className="w-5 h-5" />
                    ];
                    return icons[index] || icons[0];
                  }
                  return null;
                };

                  return (
                    <div key={idx} className="border-b border-gray-100 pb-2">
                      <button
                        type="button"
                        onClick={() => setSelectedMobileSection(idx)}
                        className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900 py-2"
                      >
                        <span>{menu.title}</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </nav>
            ) : (
              <div className="overflow-y-auto">
                <div className="w-24 h-0.5 bg-[#2B4DDF] mb-2" />
                <ul className="space-y-3">
                  {navigationData.menus[selectedMobileSection].items.map((item, ii) => (
                    <li key={ii}>
                      <Link href={item.href} onClick={() => { setIsMobileOpen(false); setSelectedMobileSection(null); setMobileOpenSections({}); }} className="flex items-start justify-between gap-3 group">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#E9ECFF] rounded-lg flex items-center justify-center">
                            {getMenuItemIcon(navigationData.menus[selectedMobileSection].title, ii)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2B4DDF]">{item.title}</p>
                            {item.subtitle && <p className="text-xs text-gray-600 mb-0.5">{item.subtitle}</p>}
                            {item.description && <p className="text-xs text-gray-600">{item.description}</p>}
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#2B4DDF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

