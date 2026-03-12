import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the hero section (e.g. 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#0a050e] via-[#0a050e]/95 to-transparent pointer-events-none"
        >
          {/* We use pointer-events-none on the wrapper so we can still click through the transparent parts, 
              and pointer-events-auto on the button itself */}
          <div className="w-full flex justify-center pointer-events-auto shadow-[0_-20px_40px_rgba(10,5,14,0.8)] pb-2 rounded-t-3xl">
            <button className="group w-full max-w-sm flex items-center justify-center gap-3 bg-gold-main hover:bg-gold-bright text-black px-6 py-4 rounded-xl font-['Cinzel'] font-black text-[12px] tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              ENROLL NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
