import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, BookOpen, Star, Globe, Clock, GraduationCap, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-12-31T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-32 max-w-6xl mx-auto font-['Manrope']">
      
      {/* 1. TOP BADGE */}
      <div className="inline-flex items-center gap-2 border border-gold-main/30 bg-gold-main/5 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
        <Sparkles size={14} className="text-gold-main animate-pulse" />
        <span className="text-[10px] md:text-xs font-['Cinzel'] font-bold tracking-[0.2em] text-gold-main uppercase">
          Limited Initiation Offer — 40% OFF
        </span>
      </div>

      {/* 2. MAIN HEADLINE */}
      <h1 className="font-['Cinzel'] text-5xl md:text-8xl font-black mb-6 leading-tight shimmer-gold px-4">
        Unlock the <br /> 
        <span className="italic font-light text-white">Mysteries</span> of Tarot
      </h1>
      
      <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white/60 max-w-2xl mb-12 italic">
        Step into Oracle Horizon’s inner circle. From symbolic geometry to 
        advanced archetypal intuition, master the art of the soul.
      </p>

      {/* 3. COUNTDOWN TIMER */}
      <div className="grid grid-cols-4 gap-3 md:gap-8 mb-16 w-full max-w-xl px-2">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.mins },
          { label: 'Secs', value: timeLeft.secs },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="glass-study-panel w-full aspect-square flex items-center justify-center rounded-xl md:rounded-2xl border-gold-main/20">
              <span className="font-['Cinzel'] text-xl md:text-4xl font-bold text-gold-bright">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 text-[8px] md:text-xs font-['Cinzel'] tracking-widest text-gold-main/60 uppercase font-bold">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* 4. CALL TO ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
        <button className="group flex items-center justify-center gap-3 bg-gold-main hover:bg-gold-bright text-black px-10 py-5 rounded-sm font-['Cinzel'] font-black text-xs tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          ENROLL NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="flex items-center justify-center gap-3 bg-transparent border border-gold-main/40 hover:border-gold-main text-gold-main px-10 py-5 rounded-sm font-['Cinzel'] font-black text-xs tracking-[0.2em] transition-all backdrop-blur-md">
          <BookOpen size={16} /> VIEW CURRICULUM
        </button>
      </div>

      {/* 5. SOCIAL PROOF & RATING */}
      <div className="flex flex-col items-center gap-4 mb-24">
        <div className="flex items-center -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-gold-main/20 overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all" />
            </div>
          ))}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-obsidian bg-gold-main text-black text-[10px] font-bold font-['Cinzel']">
            10K+
          </div>
          <span className="ml-6 text-sm md:text-base font-['Cormorant_Garamond'] italic text-white/70">
            Join <span className="text-gold-main font-bold">10,000+</span> seekers worldwide
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < 4 ? "#d4af37" : "none"} className={i < 4 ? "text-gold-main" : "text-gold-main/30"} />
            ))}
          </div>
          <span className="text-xs font-bold tracking-widest text-gold-main/80">4.5/5 STUDENT RATING</span>
        </div>
      </div>

      {/* 6. STATS GRID */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <StatBox icon={<GraduationCap size={20} />} val="10,000+" label="Alumni" />
        <StatBox icon={<Clock size={20} />} val="200+" label="Course Hours" />
        <StatBox icon={<CheckCircle size={20} />} val="98%" label="Success Rate" />
        <StatBox icon={<Globe size={20} />} val="50+" label="Countries" />
      </div>
    </div>
  );
};

// Sub-component for the stats to keep code clean
const StatBox = ({ icon, val, label }) => (
  <div className="glass-study-panel p-8 rounded-2xl flex flex-col items-center group hover:border-gold-main/50 transition-all duration-500">
    <div className="mb-4 text-gold-main/40 group-hover:text-gold-main group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <h3 className="font-['Cinzel'] text-2xl font-bold text-gold-bright mb-1">{val}</h3>
    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold group-hover:text-gold-main/60 transition-colors">
      {label}
    </p>
  </div>
);

export default Hero;