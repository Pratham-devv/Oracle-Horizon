import React from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sparkles, 
  Layout, 
  Eye, 
  Briefcase, 
  ShieldCheck,
  Compass,
  BookOpen
} from 'lucide-react';

const curriculumData = [
  {
    title: "Major Arcana Mastery",
    desc: "Deep dive into the 22 Major Arcana cards and their profound meanings.",
    lessons: "12 Lessons",
    icon: <Moon size={22} />,
    side: "left"
  },
  {
    title: "Minor Arcana Secrets",
    desc: "Understanding the 56 Minor Arcana cards across all four suits.",
    lessons: "16 Lessons",
    icon: <Sparkles size={22} />,
    side: "right"
  },
  {
    title: "Spread Techniques",
    desc: "Learn various tarot spreads from Celtic Cross to custom layouts.",
    lessons: "8 Lessons",
    icon: <Layout size={22} />,
    side: "left"
  },
  {
    title: "Intuition Development",
    desc: "Enhance your psychic abilities and intuitive reading skills.",
    lessons: "6 Lessons",
    icon: <Eye size={22} />,
    side: "right"
  },
  {
    title: "Professional Reading",
    desc: "Build your career as a professional tarot reader.",
    lessons: "10 Lessons",
    icon: <Briefcase size={22} />,
    side: "left"
  },
  {
    title: "Ethics & Practice",
    desc: "Master the ethical guidelines and best practices in tarot.",
    lessons: "4 Lessons",
    icon: <ShieldCheck size={22} />,
    side: "right"
  }
];

export const Curriculum = () => {
  return (
    <section id="curriculum" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle Section Divider */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gold-main/20 to-transparent mb-24" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="font-['Cinzel'] text-gold-main text-[10px] tracking-[0.4em] uppercase font-bold">The Knowledge Path</span>
          <h2 className="font-['Cinzel'] text-3xl md:text-5xl font-black shimmer-gold uppercase mt-4 mb-6">What You'll Learn</h2>
          <p className="font-['Cormorant_Garamond'] text-lg text-white/50 italic max-w-2xl mx-auto leading-relaxed">
            Comprehensive modules designed to take you from novice to expert tarot reader.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-10">
          {curriculumData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: item.side === "left" ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
              className="group relative"
            >
              {/* THE TRANSLUCENT GLASS CARD */}
              <div className="relative z-10 h-full p-8 rounded-[35px] border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.07] transition-all duration-500 hover:border-gold-main/30 overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                
                {/* Background "Lesson" Counter Decoration */}
                <div className="absolute -right-6 -bottom-6 text-[100px] font-['Cinzel'] font-black text-gold-main opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                  {item.lessons.split(' ')[0]}
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* ICON BOX */}
                  <div className="shrink-0 p-4 bg-gold-main/5 border border-gold-main/20 rounded-2xl text-gold-main group-hover:bg-gold-main group-hover:text-black transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex flex-col mb-3">
                      <div className="flex items-center gap-2 mb-1">
                         <BookOpen size={12} className="text-gold-main/60" />
                         <span className="text-[9px] font-bold tracking-[0.2em] text-gold-main/60 uppercase">
                           {item.lessons}
                         </span>
                      </div>
                      <h4 className="font-['Cinzel'] text-lg font-bold text-gold-bright tracking-wide group-hover:text-gold-main transition-colors leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    
                    <p className="font-['Manrope'] text-sm text-white/40 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* SHARP ACCENT BORDER (Bottom) */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-main/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* TOTAL FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-13 text-center"
        >
          <p className="font-['Cinzel'] text-sm tracking-[0.4em] text-gold-main/40 mb-4 uppercase">Academic Total</p>
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-gold-main/40 to-transparent flex-wrap overflow-hidden">
             <div className="px-5 md:px-10 py-4 bg-black/40 backdrop-blur-md rounded-full">
                <span className="text-xl md:text-3xl font-bold text-white tracking-widest font-['Cinzel'] whitespace-nowrap">
                   56+ <span className="text-gold-main italic">Total</span> Lessons
                </span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};