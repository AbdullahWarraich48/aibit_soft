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
import { web, app, UI, mobile, Alert, Ai } from '../../public/images';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMenuMouseEnter = (menuTitle: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveMenu(menuTitle);
  };

  const handleMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  // Prevent body scroll when any menu is open
  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [activeMenu, hoverTimeout]);
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
                    <div
                      onMouseEnter={() => handleMenuMouseEnter(menu.title)}
                      onMouseLeave={handleMenuMouseLeave}
                      className="relative"
                    >
                      <button className="text-gray-600 bg-transparent border-none font-sans px-4 py-2 hover:bg-gray-50 rounded-md transition-all duration-300 ease-in-out flex items-center gap-1 whitespace-nowrap group">
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
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button
              type="button"
              className={`${navigationData.buttons.primary.className} whitespace-nowrap transition-transform duration-300 ease-in-out hover:translate-y-1`}
              aria-label="Get a proposal"
            >
              {navigationData.buttons.primary.text}
            </button>
            <button
              type="button"
              className={`${navigationData.buttons.secondary.className} whitespace-nowrap transition-transform duration-300 ease-in-out hover:translate-y-1`}
              aria-label="Book an expert"
            >
              {navigationData.buttons.secondary.text}
            </button>
            
            {/* Mobile menu button */}
            {/* <div className="md:hidden">
              <button
                type="button"
                className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Open main menu"
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Custom Menu Overlays */}
      {activeMenu && (
        <div 
          className="fixed top-16 left-0 right-0 h-[80vh] bg-white z-40 overflow-y-auto"
          onMouseEnter={() => handleMenuMouseEnter(activeMenu)}
          onMouseLeave={handleMenuMouseLeave}
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
                onClick={handleMenuMouseLeave}
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
                      <svg key="marketing" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>,
                      <svg key="seo" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>,
                      <svg key="social" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h2z" />
                      </svg>,
                      <svg key="content" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ];
                    return icons[index] || icons[0];
                  } else if (menuTitle === 'Resources') {
                    const icons = [
                      <svg key="blog" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>,
                      <svg key="case" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>,
                      <svg key="whitepaper" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>,
                      <svg key="webinar" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    ];
                    return icons[index] || icons[0];
                  } else if (menuTitle === 'Connect With Us') {
                    const icons = [
                      <svg key="contact" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>,
                      <svg key="consultation" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>,
                      <svg key="support" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>,
                      <svg key="partnership" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
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
                    onClick={handleMenuMouseLeave}
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
    </nav>
  );
};

export default Navbar;
