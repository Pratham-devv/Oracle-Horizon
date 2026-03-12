import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we are scrolled down from top to apply styling
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : "-100%",
          backgroundColor: isScrolled ? "rgba(10, 8, 14, 0.85)" : "rgba(10, 8, 14, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderBottom: isScrolled ? "1px solid rgba(212,175,55,0.15)" : "1px solid rgba(212,175,55,0)"
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 px-6 md:px-8 flex justify-between items-center h-20 md:h-24 shadow-xl"
      >
        {/* LOGO CONTAINER: Fixed width placeholder, absolute image hangs over the edge */}
        <div className="relative w-24 md:w-32 h-full flex items-center">
         <img 
            src={logo} 
            alt="logo" 
            className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 w-28 h-28 md:w-36 md:h-36 pointer-events-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" 
          />
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-['Cinzel'] text-[10px] tracking-widest text-gold-bright/60">
         <a href="#courses" className="hover:text-gold-main transition-colors">Courses</a>
         <a href="#curriculum" className="hover:text-gold-main transition-colors">CURRICULUM</a>
         <a href="#instructors" className="hover:text-gold-main transition-colors">Instructors</a>
         <a href="#" className="hover:text-gold-main transition-colors">Testimonials</a>
        </div>
        
        <div className="hidden md:flex bg-gold-main/10 border border-gold-main/30 px-4 py-2 rounded-full items-center gap-2 hover:bg-gold-main/20 transition-colors cursor-pointer">
           <GraduationCap size={16} className="text-gold-main" />
           <span className="text-[10px] font-bold tracking-widest text-gold-main uppercase">Student Portal</span>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden text-gold-main p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#0f0814]/95 backdrop-blur-2xl flex flex-col items-center justify-center outline-none"
          >
            <button 
              className="absolute top-8 right-8 text-gold-main p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-10 font-['Cinzel'] text-2xl tracking-widest text-gold-bright/80">
              <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold-main transition-colors uppercase">Courses</a>
              <a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold-main transition-colors uppercase">Curriculum</a>
              <a href="#instructors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold-main transition-colors uppercase">Instructors</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gold-main transition-colors uppercase">Testimonials</a>
              
              <div className="mt-8 bg-gold-main text-black px-8 py-4 rounded-full flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                 <GraduationCap size={20} />
                 <span className="text-xs font-black tracking-widest uppercase">Student Portal</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
