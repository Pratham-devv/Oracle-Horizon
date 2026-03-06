import React from 'react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { History, GraduationCap, Award, Stars, CheckCircle } from 'lucide-react';
import instructorImage from '../../assets/Instructor_img.png';

export const Instructor = () => {

  return (
    <section className="relative py-32 px-6 bg-obsidian flex justify-center overflow-hidden">
      {/* Background radial glow - very subtle */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
          
          {/* IMAGE BOX - Smaller, sharper, and fixed ratio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-100 shrink-0"
          >
            <div className="relative aspect-3/4 rounded-2xl overflow-hidden border border-gold-main/20 bg-black shadow-2xl group">
              <img 
                src={instructorImage} 
                alt="Instructor" 
                className="w-full h-full object-cover grayscale sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-black tracking-[0.4em] text-gold-main uppercase mb-1">Lead Educator</p>
                <h3 className="font-['Cinzel'] text-2xl font-bold text-white tracking-wider">Madame Celeste</h3>
              </div>
            </div>
            
            {/* Accreditation Badge below photo */}
            <div className="mt-6 flex items-center justify-center gap-2 py-2 border-y border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
              <CheckCircle size={12} className="text-gold-main" />
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gold-bright">Accredited Master Mystic</span>
            </div>
          </motion.div>

          {/* CONTENT - Tighter typography and refined spacing */}
          <div className="flex-1 space-y-12">
            <div>
              <span className="font-['Cinzel'] text-gold-main text-[10px] tracking-[0.5em] font-bold uppercase block mb-4">The Guidance</span>
              <h2 className="font-['Cinzel'] text-4xl font-bold shimmer-gold uppercase leading-tight">Meet Your <br/>Instructor</h2>
              
              <p className="mt-8 font-['Cormorant_Garamond'] text-2xl text-white/70 italic leading-relaxed max-w-xl">
                "Tarot is the mirror of the soul. My mission is to teach you how to see beyond the glass and interpret the whispers of the universe."
              </p>
            </div>
           {/* CREDENTIALS SECTION */}
<div className="space-y-6">
  <h3 className="font-['Cinzel'] text-xl font-bold text-gold-bright tracking-widest border-b border-gold-main/20 pb-2 inline-block">
    Credentials
  </h3>
  
  <ul className="grid grid-cols-1 gap-4">
    {[
      "Certified Tarot Grand Master - Order of Divination",
      "Spiritual Healing Practitioner",
      "Published Author & Esoteric Researcher"
    ].map((credential, idx) => (
      <li key={idx} className="flex items-center gap-3 group">
        {/* Medal Icon */}
        <div className="shrink-0 text-gold-main group-hover:scale-110 transition-transform duration-300">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 15L9 21L12 19L15 21L12 15Z" fill="currentColor" fillOpacity="0.2"/>
            <circle cx="12" cy="9" r="7" />
            <circle cx="12" cy="9" r="3" />
          </svg>
        </div>
        
        {/* Text */}
        <span className="font-['Manrope'] text-[13px] tracking-wide text-white/60 group-hover:text-white transition-colors uppercase">
          {credential}
        </span>
      </li>
    ))}
  </ul>
</div>

            {/* STATS GRID - 2x2 Clean Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              <InstructorStat 
                icon={<History size={18} />} 
                title="30+ Years" 
                label="Deep Esoteric Study" 
              />
              <InstructorStat 
                icon={<GraduationCap size={18} />} 
                title="15k+ Students" 
                label="Certified Worldwide" 
              />
              <InstructorStat 
                icon={<Award size={18} />} 
                title="Grand Master" 
                label="Order of Divination" 
              />
              <InstructorStat 
                icon={<Stars size={18} />} 
                title="Clairvoyant" 
                label="Intuitive Specialist" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const InstructorStat = ({ icon, title, label }) => (
  <div className="flex gap-4 items-start group">
    <div className="p-3 bg-white/3 border border-white/10 rounded-xl text-gold-main group-hover:bg-gold-main group-hover:text-black transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-['Cinzel'] text-lg font-bold text-gold-bright">{title}</h4>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">{label}</p>
    </div>
  </div>
);