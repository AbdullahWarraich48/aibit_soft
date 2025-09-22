// components/Footer.js
import { Facebook, Instagram, Twitter, Linkedin, Github, Pinterest, Discord, Tiktok, Youtube } from 'lucide-react';
import Image from 'next/image';
import { footerlogo } from '../../public/images';
import { footerData } from '@/data/footer';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
        <div className="flex items-center space-x-2">
<Image src={footerlogo} alt={footerData.logo.alt} width={footerData.logo.width} height={footerData.logo.height} />
</div>
          <p className="mb-4 text-sm leading-relaxed mt-7">
            AiBit Soft delivers custom websites, apps, AI tools, and marketing solutions that help businesses grow in a fast-moving digital world. Our team combines creativity and technology to build scalable, secure solutions that keep you ahead of change.
          </p>
         
          <div className="mt-4 text-sm">
            <p>📧 info@aibitsoft.com</p>
            <p>📞 +92 55 8416985 6</p>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-4 text-sm mt-12 ">
            <li>Website Design and Development</li>
            <li>Web App Design and Development</li>
            <li>UI/UX and Graphics Design</li>
            <li>Mobile App</li>
            <li>SEO & AI SEO Solutions</li>
            <li>Social Media Ads</li>
            <li>Blog and Content Marketing</li>
            <li>Digital Marketing</li>
            <li>Custom AI Tools and Integration</li>
            <li>Custom Software Development</li>
            <li>IT Staff Augmentation</li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Start Your Project Today</h3>
          <p className="text-sm mb-4">Tell us about your project and we’ll get back to you within 24 hours.</p>
          <form className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Name" className="p-2 bg-white/10 rounded" />
              <input type="email" placeholder="Email" className="p-2 bg-white/10 rounded" />
            </div>
            <input type="text" placeholder="Phone Number" className="w-full p-2 bg-white/10 rounded" />
            <fieldset className="grid grid-cols-2 gap-2">
              {["Mobile Application", "Web Application", "Website Development", "SEO & Marketing", "AI and Automation Tools", "Custom Software Development", "IT Staff Augmentation"].map(service => (
                <label key={service} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-blue-400" />
                  <span>{service}</span>
                </label>
              ))}
            </fieldset>
            <textarea placeholder="Message" rows={3} className="w-full p-2 bg-white/10 rounded"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 transition w-full py-2 rounded">Send</button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between text-xs">
        <p>© 2025 AiBit Soft. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
