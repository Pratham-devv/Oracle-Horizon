import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import logo from "../assets/Logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const icon = (
    <span className="ml-2 inline-flex items-center text-gold-bright animate-bounce">
      <span className="text-xs font-bold text-gold-main golden-shimmer">Hiring!</span><Sparkles size={14} />
    </span>
  );
  return (
    <footer className="relative bg-[#0f0814] pb-12 px-6 border-t border-gold-main/10 overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-gold-main/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* LOGO ROW */}
        <div className="flex justify-start mb-4">
            <img
              src={logo}
              alt="Oracle Horizon"
            className="
              w-auto
              h-35
              sm:h-40
              md:h-45
              lg:h-50
              object-contain
            "
              style={{ filter: "brightness(0) invert(1)" }}
            />
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
          {/* BRAND / CONTACT */}
          <div className="lg:col-span-4">
            <p className="font-['Cormorant_Garamond'] text-lg text-white/50 leading-relaxed italic mb-8 max-w-sm">
              Unlock the mysteries of tarot with our comprehensive courses.
              Transform your life through the ancient art of card reading.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <ContactLink
                icon={<Mail size={16} />}
                text="Oraclehorizon12@gmail.com"
                href="mailto:Oraclehorizon12@gmail.com"
              />

              <ContactLink
                icon={<Phone size={16} />}
                text="+1 (555) 123-4567"
                href="tel:+15551234567"
              />

              <ContactLink
                icon={<MapPin size={16} />}
                text="B-4 / 132 Pachim Vihar, New Delhi"
              />
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">

            {/* COURSES */}
            <FooterSection title="Courses">
              <FooterLink text="Basic Course" href="#courses" />
              <FooterLink text="Standard Course" href="#courses" />
              <FooterLink text="Premium Course" href="#courses" />
            </FooterSection>

            {/* RESOURCES */}
            <FooterSection title="Resources">
              <FooterLink text="Free E-book Sample" href="#hero" />
              <FooterLink text="Blog" href="#blog" />
              <FooterLink text="FAQ" href="#faq" />
            </FooterSection>

            {/* COMPANY */}
            <FooterSection title="Company">
              <FooterLink text={<span className="flex items-center">We are Hiring {icon}</span>} href="#hiring" />
              <FooterLink text="About Us" href="#about" />
              <FooterLink text="Contact" href="mailto:Oraclehorizon12@gmail.com" />
              <FooterLink text="Privacy Policy" href="#privacy" />
              <FooterLink text="Terms of Service" href="#terms" />
            </FooterSection>

            {/* SOCIAL */}
            <div className="space-y-6">
              <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-3">
                <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
                <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
                <SocialIcon icon={<Youtube size={18} />} href="https://youtube.com" />
                <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">

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

const FooterSection = ({ title, children }) => (
  <div className="space-y-6">
    <h4 className="font-['Cinzel'] text-xs font-black tracking-[0.3em] text-gold-bright uppercase">
      {title}
    </h4>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const FooterLink = ({ text, href }) => (
  <li>
    <a
      href={href || "#"}
      className="group flex items-center gap-2 text-[13px] text-white/40 hover:text-gold-main transition-colors font-['Manrope']"
    >
      <span>{text}</span>
      <ArrowUpRight
        size={10}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </a>
  </li>
);

const ContactLink = ({ icon, text, href }) => (
  <a
    href={href || "#"}
    className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors group"
  >
    <span className="text-gold-main/60 group-hover:text-gold-main transition-colors">
      {icon}
    </span>
    <span className="font-['Manrope'] font-light">{text}</span>
  </a>
);

const SocialIcon = ({ icon, href }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg border border-white/5 bg-white/2 text-white/40 hover:text-gold-main hover:border-gold-main/40 transition-all"
  >
    {icon}
  </a>
);

export default Footer;