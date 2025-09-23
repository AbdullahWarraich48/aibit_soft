// components/Footer.js
import { Github, Youtube } from 'lucide-react';
import Image from 'next/image';
import { footerlogo, fb, insta, twiter, Linkedin } from '../../public/images';
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
          <p className="mb-4 text-sm leading-[28px] mt-7">
            AiBit Soft delivers custom websites, apps, AI tools, and marketing solutions that help businesses grow in a fast-moving digital world. Our team combines creativity and technology to build scalable, secure solutions that keep you ahead of change.
          </p>

          <div className="mt-4 text-sm font-sans flex flex-row items-center gap-4 mt-11">
            <a href="#" aria-label="Facebook" className="group">
              <Image src={fb} alt="Facebook" width={20} height={20} className="transition-transform duration-300 group-hover:scale-110 filter invert brightness-0" />
            </a>
            <a href="#" aria-label="Instagram" className="group">
              <Image src={insta} alt="Instagram" width={20} height={20} className="transition-transform duration-300 group-hover:scale-110 filter invert brightness-0" />
            </a>
            <a href="#" aria-label="Twitter" className="group">
              <Image src={twiter} alt="Twitter" width={20} height={20} className="transition-transform duration-300 group-hover:scale-110 filter invert brightness-0" />
            </a>
            <a href="#" aria-label="LinkedIn" className="group">
              <Image src={Linkedin} alt="LinkedIn" width={20} height={20} className="transition-transform duration-300 group-hover:scale-110 filter invert brightness-0" />
            </a>
          </div>
          <div className="mt-4 text-sm font-sans flex flex-row items-center gap-4 mt-6 ">
            <a href="#" aria-label="Github" className="transition-transform duration-300 hover:scale-110" title="Github">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="#" aria-label="Pinterest" className="transition-transform duration-300 hover:scale-110" title="Pinterest">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.49 2 2 6.26 2 11.63c0 3.86 2.45 7.15 5.9 8.3-.08-.7-.15-1.78.03-2.54.16-.68 1.04-4.34 1.04-4.34s-.26-.52-.26-1.28c0-1.2.7-2.1 1.57-2.1.74 0 1.1.55 1.1 1.2 0 .73-.47 1.82-.72 2.83-.21.85.45 1.54 1.33 1.54 1.6 0 2.83-1.69 2.83-4.14 0-2.16-1.55-3.67-3.77-3.67-2.57 0-4.08 1.93-4.08 3.93 0 .78.3 1.62.67 2.07.07.08.08.16.06.25-.07.27-.23.85-.26.97-.04.16-.13.19-.3.11-1.12-.52-1.82-2.17-1.82-3.5 0-2.84 2.06-5.45 5.94-5.45 3.12 0 5.55 2.22 5.55 5.18 0 3.1-1.96 5.6-4.68 5.6-.91 0-1.76-.47-2.05-1.02l-.56 2.14c-.2.77-.74 1.73-1.1 2.32.83.26 1.71.4 2.63.4 5.51 0 10-4.26 10-9.63C22 6.26 17.51 2 12 2z"/></svg>
            </a>
            <a href="#" aria-label="Discord" className="transition-transform duration-300 hover:scale-110" title="Discord">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.2.36-.43.85-.59 1.23a18.27 18.27 0 0 0-4-.47c-1.36 0-2.72.16-4 .47-.16-.38-.39-.87-.59-1.23A19.736 19.736 0 0 0 3.68 4.37C1.95 7.24 1.41 10.02 1.58 12.77c1.68 1.25 3.3 2 4.85 2.5.39-.54.74-1.13 1.04-1.75-.57-.22-1.11-.5-1.62-.82.04-.03.08-.06.12-.09 3.13 1.46 6.52 1.46 9.64 0 .04.03.08.06.12.09-.5.32-1.05.6-1.62.82.3.62.65 1.21 1.04 1.75 1.55-.5 3.17-1.25 4.85-2.5.2-3.02-.44-5.77-2.19-8.4zM9.25 12.5c-.66 0-1.2-.62-1.2-1.38 0-.76.53-1.38 1.2-1.38.66 0 1.2.62 1.2 1.38 0 .76-.53 1.38-1.2 1.38zm5.5 0c-.66 0-1.2-.62-1.2-1.38 0-.76.53-1.38 1.2-1.38.66 0 1.2.62 1.2 1.38 0 .76-.54 1.38-1.2 1.38z"/></svg>
            </a>
            <a href="#" aria-label="TikTok" className="transition-transform duration-300 hover:scale-110" title="TikTok">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.5 3c.5 1.9 1.9 3.6 3.8 4.1v2.3c-1.4-.1-2.7-.6-3.8-1.4v5.5c0 3-2.4 5.5-5.5 5.5S1.5 16.5 1.5 13.4 3.9 7.9 7 7.9c.6 0 1.1.1 1.6.3v2.6c-.5-.3-1-.4-1.6-.4-1.6 0-2.9 1.3-2.9 3s1.3 3 3 3 2.9-1.3 2.9-3V3h1.6zM22.5 8.2v2.3c-1.8-.1-3.5-.8-4.8-2v7.2c0 3-2.4 5.5-5.5 5.5-.8 0-1.6-.2-2.3-.5 1.9-.9 3.3-2.9 3.3-5.1V3.8c1.3 1.4 3.1 2.3 5 2.4z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="transition-transform duration-300 hover:scale-110" title="YouTube">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
         
          <div className="mt-4 text-sm font-sans flex flex-row gap-4 mt-9 pt-16">
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
            <li>Custom Service</li>
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
              {["Mobile Application", "Web Application", "Website Development", "SEO & Marketing", "AI and Automation Tools", "Custom Service", "IT Staff Augmentation"].map(service => (
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
