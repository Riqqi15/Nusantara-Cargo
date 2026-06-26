'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPageContent } from '../../../domain/entities';
import Image from 'next/image';

interface HeroProps {
  hero: LandingPageContent['hero'];
}

export default function Hero({ hero }: HeroProps) {
  const images = hero.bgImageUrls || [hero.bgImageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Rotate every 6 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  const words = hero.headline.split(',');
  const part1 = words[0];
  const part2 = words.slice(1).join(',').trim();

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Images Slideshow */}
      <AnimatePresence>
        <motion.div 
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={images[currentImageIndex]}
            alt="Hero Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-sky-900/60 z-0 mix-blend-multiply"></div>

      {/* Subtle grid overlay for premium texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Massive Typography Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            {part1}.<br />
            <span className="text-sky-400">
              {part2}
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-sky-50 max-w-2xl mx-auto mb-16 font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-nunito"
        >
          {hero.subHeadline}
        </motion.p>

        {/* Solid Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white uppercase tracking-widest bg-sky-600 hover:bg-sky-500 transition-colors rounded-lg shadow-lg shadow-sky-900/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Cek Tarif & Jadwal
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
          
          <a
            href="#services"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-white uppercase tracking-widest bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 transition-colors rounded-lg"
          >
            Pelajari Layanan
          </a>
        </motion.div>
      </div>

      {/* Decorative Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] text-gray-500 uppercase tracking-[0.3em]"
      >
        <span className="writing-vertical-rl rotate-180">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
