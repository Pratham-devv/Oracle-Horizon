import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import logo from '../assets/Logo.png'; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030005] pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gold-main/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1: BRAND & MISSION - No top padding to allow logo space */}
          <div className="lg:col-span-4 flex flex-col pt-0">
            <div className="mb-6 -ml-4"> {/* Slight negative margin to compensate for logo white space */}
              <img 
                src={logo} 
                alt="Oracle Horizon" 
                className="h-32 md:h-48 w-auto object-contain" 
                style={{ filter: 'brightness(0) invert(1)' }} // Ensures white if original is dark
              />
            </div>
            
            <p className="font-['Cormorant_Garamond'] text-lg text-white/50 leading-relaxed max-w-sm italic mb-8">
              Unlock the mysteries of tarot with our comprehensive courses. 
              Transform your life through the ancient art of card reading.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <ContactLink icon={<Mail size={16} />} text="contact@oraclehorizon.com" href="mailto:contact@oraclehorizon.com" />
              <ContactLink icon={<Phone size={16} />} text="+1 (555) 123-4567" href="tel:+15551234567" />
              <ContactLink icon={<MapPin size={16} />} text="New York, NY 10001" />
            </div>
          </div>

          {/* COLUMN 2-5 CONTAINER: Adjusted top padding to align with text, not logo top */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 md:pt-24">
            {/* COURSES */}
            <div className="space-y-6">
              <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">Courses</h4>
              <ul className="space-y-4">
                <FooterLink text="Basic Course" />
                <FooterLink text="Standard Course" />
                <FooterLink text="Premium Course" />
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-6">
              <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">Resources</h4>
              <ul className="space-y-4">
                <FooterLink text="Free E-book Sample" />
                <FooterLink text="Blog" />
                <FooterLink text="FAQ" />
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-6">
              <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">Company</h4>
              <ul className="space-y-4">
                <FooterLink text="About Us" />
                <FooterLink text="Contact" />
                <FooterLink text="Privacy Policy" />
                <FooterLink text="Terms of Service" />
              </ul>
            </div>

            {/* SOCIALS */}
            <div className="space-y-6">
              <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Youtube size={18} />} />
                <SocialIcon icon={<Facebook size={18} />} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
            © {currentYear} Oracle Horizon. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] font-bold tracking-[0.2em] text-gold-main/40 group-hover:text-gold-main transition-colors uppercase">
              Designed for the Seekers
            </span>
            <div className="h-px w-8 bg-gold-main/20 group-hover:w-12 group-hover:bg-gold-main transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="group flex items-center gap-2 text-[13px] text-white/40 hover:text-gold-main transition-colors font-['Manrope']">
      <span>{text}</span>
      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  </li>
);

const ContactLink = ({ icon, text, href }) => (
  <a href={href || "#"} className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group">
    <span className="text-gold-main/60 group-hover:text-gold-main transition-colors">{icon}</span>
    <span className="font-['Manrope'] font-light">{text}</span>
  </a>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] text-white/40 hover:text-gold-main hover:border-gold-main/40 transition-all">
    {icon}
  </a>
);

export default Footer;