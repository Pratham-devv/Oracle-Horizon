import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Crown, Sparkles, X, Gift } from 'lucide-react';

// Assets
import standardThumb from '../../assets/Standard.png';
import premiumThumb from '../../assets/Premium.png';

const courseData = [
  {
    id: 'basic',
    price: 49,
    oldPrice: 99,
    save: "51% OFF",
    thumbnail: null,
    content: [
      { 
        lang: "English", title: "Basic", desc: "Perfect for beginners starting their tarot journey", 
        features: [
          { text: "E-book Guide", available: true }, 
          { text: "20+ Lectures", available: true }, 
          { text: "Card Meanings", available: true }, 
          { text: "Spreads & Community", available: true },
          { text: "Advanced Shadow Work", available: false },
          { text: "Career Practice Sessions", available: false },
          { text: "Live Zoom Masterclasses", available: false },
          { text: "Physical Tarot Hamper", available: false }
        ] 
      },
      { 
        lang: "Hindi", title: "बुनियादी", desc: "टैरो यात्रा शुरू करने वाले शुरुआती लोगों के लिए बिल्कुल सही", 
        features: [
          { text: "ई-बुक गाइड", available: true }, 
          { text: "20+ व्याख्यान", available: true }, 
          { text: "कार्ड अर्थ", available: true }, 
          { text: "स्प्रेड और समुदाय", available: true },
          { text: "उन्नत छाया कार्य", available: false },
          { text: "कैरियर अभ्यास सत्र", available: false },
          { text: "लाइव ज़ूम मास्टरक्लास", available: false },
          { text: "फिजिकल टैरो हैम्पर", available: false }
        ] 
      }
    ]
  },
  {
    id: 'standard',
    price: 99,
    oldPrice: 199,
    save: "50% OFF",
    thumbnail: standardThumb,
    content: [
      { 
        lang: "English", title: "Standard", desc: "Ideal for those serious about mastering tarot", 
        features: [
          { text: "Everything in Basic", available: true }, 
          { text: "40+ Lectures", available: true }, 
          { text: "Advanced Shadow Work", available: true }, 
          { text: "Career Practice Sessions", available: true },
          { text: "Certificate of Completion", available: true },
          { text: "Live Zoom Masterclasses", available: false },
          { text: "Physical Tarot Hamper", available: false }
        ] 
      },
      { 
        lang: "Hindi", title: "मानक", desc: "टैरो में महारत हासिल करने के प्रति गंभीर लोगों के लिए आदर्श", 
        features: [
          { text: "बेसिक में सब कुछ", available: true }, 
          { text: "40+ व्याख्यान", available: true }, 
          { text: "उन्नत छाया कार्य", available: true }, 
          { text: "कैरियर अभ्यास सत्र", available: true },
          { text: "प्रमाण पत्र", available: true },
          { text: "लाइव ज़ूम मास्टरक्लास", available: false },
          { text: "फिजिकल टैरो हैम्पर", available: false }
        ] 
      }
    ]
  },
  {
    id: 'premium',
    price: 199,
    oldPrice: 399,
    save: "50% OFF",
    isPopular: true,
    thumbnail: premiumThumb,
    content: [
      { 
        lang: "English", title: "Premium", desc: "The ultimate tarot mastery experience", 
        features: [
          { text: "Everything in Standard", available: true }, 
          { text: "Live Zoom Masterclasses", available: true }, 
          { text: "60+ Lectures", available: true }, 
          { text: "Premium E-books", available: true }, 
          { text: "Physical Tarot Hamper", available: true }
        ] 
      },
      { 
        lang: "Hindi", title: "प्रीमियम", desc: "परम टैरो महारत का अनुभव", 
        features: [
          { text: "स्टैंडर्ड में सब कुछ", available: true }, 
          { text: "लाइव ज़ूम मास्टरक्लास", available: true }, 
          { text: "60+ व्याख्यान", available: true }, 
          { text: "प्रीमियम ई-बुक्स", available: true }, 
          { text: "फिजिकल टैरो हैम्पर", available: true }
        ] 
      }
    ]
  }
];

export const Courses = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="courses" className="relative  px-4 bg-transparent text-[#f0e8d0] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-['Cinzel'] font-black shimmer-gold uppercase tracking-tighter">Academic Vaults</h2>
        <p className="text-gold-main/40 mt-3 tracking-[0.4em] text-[10px] md:text-[11px] uppercase font-bold italic">Dual-Language Perspectives</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10 max-w-7xl mx-auto items-start">
        {courseData.map((vault) => (
          <div key={vault.id} className="relative w-full h-[580px] md:h-[650px] perspective-[2000px]">
            
            {vault.isPopular && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-[100] bg-gold-main text-black px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest flex items-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                👑 MOST POPULAR
              </div>
            )}

            <div className="relative w-full h-full preserve-3d">
              {vault.content.map((card, i) => {
                const isFront = i === activeIndex;
                
                return (
                  <motion.div
                    key={card.lang}
                    animate={{
                      // Forced 3D transforms for GPU performance
                      transform: isFront 
                        ? 'translate3d(0px, 0px, 0px) rotateY(0deg)' 
                        : 'translate3d(30px, -20px, -150px) rotateY(-15deg)',
                      opacity: isFront ? 1 : 0.2,
                      scale: isFront ? 1 : 0.9,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 60, 
                      damping: 15, 
                      mass: 1 
                    }}
                    style={{ 
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden'
                    }}
                    className={`absolute inset-0 p-6 md:p-8 rounded-[35px] border flex flex-col justify-between transition-all duration-300
                      ${vault.isPopular ? 'border-gold-main/50 hover:border-gold-main/70 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]' : 'border-gold-main/20 hover:border-gold-main/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]'} 
                      bg-[#0a0a0c] backdrop-blur-2xl shadow-2xl overflow-hidden`}
                  >
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex(0); }}
                            className={`text-[8px] md:text-[10px] font-bold tracking-widest uppercase border px-2 py-0.5 rounded transition-colors ${activeIndex === 0 ? 'border-gold-main text-gold-main bg-gold-main/10' : 'border-gold-main/20 text-gold-main/40 hover:text-gold-main hover:border-gold-main/50'}`}
                          >
                            English
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); setActiveIndex(1); }}
                            className={`text-[8px] md:text-[10px] font-bold tracking-widest uppercase border px-2 py-0.5 rounded transition-colors ${activeIndex === 1 ? 'border-gold-main text-gold-main bg-gold-main/10' : 'border-gold-main/20 text-gold-main/40 hover:text-gold-main hover:border-gold-main/50'}`}
                          >
                            Hindi
                          </button>
                        </div>
                        <Sparkles size={14} className="text-gold-main/40" />
                      </div>

                      {/* RESPONSIVE THUMBNAIL */}
                      <div className="w-full aspect-video md:aspect-[16/10] mb-5 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                        {vault.thumbnail ? (
                          <img 
                            src={vault.thumbnail} 
                            alt={card.title} 
                            className="w-full h-full object-cover" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-white/5 italic text-white/5 text-[10px]">
                            Awaiting Manifestation...
                          </div>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-['Cinzel'] font-bold text-gold-bright mb-1 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[10px] md:text-xs text-white/40 italic mb-4 font-['Cormorant_Garamond'] h-10 overflow-hidden leading-tight">
                        {card.desc}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl md:text-4xl font-black text-white font-['Cinzel']">${vault.price}</span>
                          <span className="text-xs text-white/20 line-through">${vault.oldPrice}</span>
                          <span className="ml-auto text-[9px] font-bold text-gold-main bg-gold-main/5 px-2 py-1 rounded border border-gold-main/10 uppercase tracking-tighter">
                            {vault.save}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 flex-grow">
                        {card.features.map((f, idx) => (
                          <div key={idx} className={`flex items-start gap-2.5 text-[10px] md:text-[11px] leading-tight ${f.available ? 'text-white/70' : 'text-white/20'}`}>
                            {f.available ? (
                              <Check size={12} className="text-gold-main shrink-0 mt-0.5" />
                            ) : (
                              <X size={12} className="text-white/20 shrink-0 mt-0.5" />
                            )}
                            <span className="line-clamp-1">{f.text}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          vault.isPopular ? window.open('YOUR_CHECKOUT_LINK') : setShowOverlay(true);
                        }}
                        className={`w-full py-4 rounded-xl font-['Cinzel'] font-black text-[10px] tracking-[0.2em] uppercase transition-all mt-6
                          ${vault.isPopular ? 'bg-gold-main text-black hover:bg-gold-bright shadow-lg shadow-gold-main/20' : 'border border-gold-main/30 text-gold-main hover:bg-gold-main/10'}`}
                      >
                        Enroll Now
                      </button>
                    </div>

                    <div className="absolute -right-6 -bottom-6 opacity-[0.02] pointer-events-none">
                       <Crown size={200} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/95 backdrop-blur-3xl"
          >
            <div className="absolute inset-0" onClick={() => setShowOverlay(false)} />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative glass-study-panel max-w-sm w-full p-10 rounded-[40px] border-gold-main/40 text-center"
            >
              <button onClick={() => setShowOverlay(false)} className="absolute top-6 right-6 text-white/20"><X size={20} /></button>
              <Gift size={32} className="text-gold-main mx-auto mb-4" />
              <h4 className="font-['Cinzel'] text-xl font-bold text-gold-main mb-2 uppercase italic tracking-widest">Ascend to Premium?</h4>
              <p className="font-['Cormorant_Garamond'] text-base text-white/70 mb-8">
                Premium students unlock the **Tarot Hamper Box** + Lifetime Mentor Access. Upgrade your sanctuary?
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-gold-main text-black py-4 rounded-xl font-['Cinzel'] font-black text-[10px] tracking-widest hover:bg-gold-bright">
                  UPGRADE NOW
                </button>
                <button onClick={() => setShowOverlay(false)} className="text-[9px] font-['Cinzel'] font-bold text-white/20 tracking-widest uppercase">
                  Continue as Seeker
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};