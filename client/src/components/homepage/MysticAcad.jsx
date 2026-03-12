import React, { useState } from "react";
import { BookOpen, Play, ChevronRight, Sparkles } from "lucide-react";

export default function MysticAcademy() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-12 gap-12">

      {/* LEFT: THE INTERACTIVE STUDY TOOL */}
      <div className="md:col-span-5 flex flex-col items-center">
        <div className="text-center mb-8">
          <span className="font-['Cinzel'] text-gold-main text-[10px] tracking-[0.4em] uppercase block mb-2">
            Lesson I: Major Arcana
          </span>

          <h2 className="font-['Cinzel'] text-4xl font-bold shimmer-gold">
            Symbolic Anatomy
          </h2>
        </div>

        {/* FLIPPING CARD */}
        <div
          className="perspective-1000 w-[320px] h-125 cursor-pointer group"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* FRONT */}
            <div className="absolute inset-0 backface-hidden glass-study-panel p-2 rounded-3xl gold-border-glow">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1635318116515-5348873408ec?q=80&w=800"
                  className="w-full h-full object-cover grayscale-[0.3]"
                  alt="The High Priestess"
                />

                <div className="absolute inset-0  from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="font-['Cinzel'] text-3xl font-bold text-gold-bright drop-shadow-lg">
                    The High Priestess
                  </h3>

                  <p className="font-['Cormorant_Garamond'] italic text-white/70">
                    II — The Divine Feminine
                  </p>
                </div>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 glass-study-panel p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="font-['Cinzel'] text-gold-main text-lg mb-4 border-b border-gold-main/20 pb-2">
                  Symbology Key
                </h4>

                <ul className="space-y-4 font-['Manrope'] text-sm">
                  <li className="flex gap-3">
                    <span className="text-gold-main">☽</span>
                    <span>
                      <b>The Crescent Moon:</b> Represents subconscious intuition
                      and the waxing/waning of the spirit.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-gold-main">⚖</span>
                    <span>
                      <b>Pillars (B & J):</b> Boaz and Jachin signify the balance
                      of duality (Dark/Light).
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="text-gold-main">🕮</span>
                    <span>
                      <b>The Torah:</b> Divine law and hidden knowledge held within
                      the lap.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gold-main/5 p-4 rounded-xl border border-gold-main/10">
                <p className="text-[10px] uppercase tracking-widest text-gold-main mb-1">
                  Elemental Affinity
                </p>

                <p className="font-['Cinzel'] text-sm">
                  Water / Moon / Wisdom
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-white/30 uppercase tracking-[0.2em]">
          Click card to toggle interpretation
        </p>
      </div>

      {/* RIGHT: LESSON CONTENT */}
      <div className="md:col-span-7 space-y-10">

        {/* MODULE LIST */}
        <section>
          <h3 className="font-['Cinzel'] text-gold-main text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold-main/30"></span>
            Course Modules
          </h3>

          <div className="grid gap-4">
            <LessonCard
              number="01"
              title="History of the Rider-Waite Smith"
              duration="45m"
              completed
            />

            <LessonCard
              number="02"
              title="The Fool's Journey: Stages of Life"
              duration="1h 20m"
              active
            />

            <LessonCard
              number="03"
              title="Mastering the Celtic Cross Spread"
              duration="55m"
            />

            <LessonCard
              number="04"
              title="Numerical Echoes in the Minor Arcana"
              duration="1h 10m"
            />
          </div>
        </section>

        {/* WORKSHOP */}
        <section className="glass-study-panel p-8 rounded-3xl relative overflow-hidden">

          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={120} className="text-gold-main" />
          </div>

          <h4 className="font-['Cinzel'] text-2xl font-bold mb-4">
            Madame Celeste's Lab
          </h4>

          <p className="font-['Cormorant_Garamond'] text-xl italic text-white/60 mb-6">
            "To read the cards is to speak a dead language fluently. Do not
            memorize definitions; observe the geometry of the soul."
          </p>

          <button className="flex items-center gap-3 bg-gold-main text-black px-6 py-3 rounded-sm font-['Cinzel'] font-black text-xs tracking-widest hover:bg-gold-bright transition-all">
            <Play size={14} fill="black" />
            JOIN LIVE WORKSHOP
          </button>
        </section>

      </div>
    </main>
  );
}

/* SUB COMPONENT */

function LessonCard({ number, title, duration, active = false, completed = false }) {
  return (
    <div
      className={`glass-study-panel p-5 rounded-xl flex items-center justify-between transition-all cursor-pointer hover:border-gold-main/60 ${
        active
          ? "border-gold-main gold-border-glow"
          : "opacity-60 hover:opacity-100"
      }`}
    >
      <div className="flex items-center gap-6">
        <span className="font-['Cinzel'] text-xl font-bold text-gold-main/40">
          {number}
        </span>

        <div>
          <h5 className="font-bold text-lg leading-none mb-1">{title}</h5>

          <span className="text-[10px] text-white/40 uppercase tracking-widest">
            {duration} • Video Lesson
          </span>
        </div>
      </div>

      {completed ? (
        <Sparkles className="text-gold-main" size={18} />
      ) : (
        <ChevronRight size={18} />
      )}
    </div>
  );
}