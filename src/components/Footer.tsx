import React from 'react';
import Image from 'next/image';
import { footerData } from '@/data';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#1E3A8A] text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column - Company Information */}
          <div className="space-y-8 text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src={footerData.logo.src} alt={footerData.logo.alt} width={footerData.logo.width} height={footerData.logo.height} />
            </div>

            {/* Description */}
            <p className="text-sm text-white leading-relaxed font-sans">
              {footerData.description}
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {footerData.socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-transparent border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xs font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Services */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white text-left font-sans">Services</h3>
            <ul className="space-y-4 text-left">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-gray-300 transition-colors duration-200 font-sans"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-white text-left font-sans">Reach Us</h3>
            <div className="space-y-6 text-left">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-sm text-white hover:text-gray-300 transition-colors duration-200 font-sans"
                >
                  {footerData.contact.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-white hover:text-gray-300 transition-colors duration-200 font-sans"
                >
                  {footerData.contact.phone}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-white mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white font-sans">
                  {footerData.contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="border-t border-blue-300">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-white font-sans">
{footerData.copyright}
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
              >
{footerData.legal.terms}
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
              >
{footerData.legal.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
