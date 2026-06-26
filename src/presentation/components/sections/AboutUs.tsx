'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AboutCompany } from '../../../domain/entities';
import Image from 'next/image';

interface AboutUsProps {
  about: AboutCompany;
  title?: string;
  lang?: 'en' | 'id';
}

const TABS_ID = [
  { id: 'sejarah', label: 'Profil Perusahaan' },
  { id: 'misi', label: 'Misi Kami' },
  { id: 'visi', label: 'Visi Global' },
] as const;

const TABS_EN = [
  { id: 'sejarah', label: 'Company Profile' },
  { id: 'misi', label: 'Our Mission' },
  { id: 'visi', label: 'Global Vision' },
] as const;

type TabId = typeof TABS_ID[number]['id'];

export default function AboutUs({ about, title = 'Tentang Kami', lang = 'id' }: AboutUsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('sejarah');
  const tabs = lang === 'en' ? TABS_EN : TABS_ID;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex(t => t.id === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Premium Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-[8px] border-slate-50">
              <Image 
                src={about.imageUrl} 
                alt="Nusantara Cargo" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-full -z-0"></div>
          </motion.div>

          {/* Right: Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-sky-200 flex-1"></div>
              <span className="text-sky-600 font-bold uppercase tracking-widest text-sm">{title}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-12 leading-[1.1] tracking-tight">
              {about.title}
            </h2>

            {/* Tab Navigation Menu */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-4 text-lg font-bold transition-colors ${
                    activeTab === tab.id ? 'text-sky-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-sky-600 rounded-t-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dynamic Tab Content with Animation */}
            <div className="min-h-[250px] relative">
              <AnimatePresence mode="wait">
                
                {/* Content: Profil Perusahaan */}
                {activeTab === 'sejarah' && (
                  <motion.div
                    key="sejarah"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-600 text-xl leading-relaxed font-light font-nunito"
                  >
                    <p>{about.description}</p>
                  </motion.div>
                )}

                {/* Content: Misi */}
                {activeTab === 'misi' && (
                  <motion.div
                    key="misi"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-3xl relative">
                      {/* Quote mark decoration */}
                      <div className="absolute -top-4 -left-2 text-[100px] text-slate-200 font-serif leading-none opacity-50 select-none">&quot;</div>
                      <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-light font-nunito italic relative z-10">
                        {about.mission}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Content: Visi */}
                {activeTab === 'visi' && (
                  <motion.div
                    key="visi"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-3xl relative">
                      {/* Quote mark decoration */}
                      <div className="absolute -top-4 -left-2 text-[100px] text-slate-200 font-serif leading-none opacity-50 select-none">&quot;</div>
                      <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-light font-nunito italic relative z-10">
                        {about.vision}
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
