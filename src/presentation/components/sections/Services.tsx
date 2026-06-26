'use client';

import { motion } from 'framer-motion';
import { Service } from '../../../domain/entities';
import { Zap, Globe, GitMerge, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const icons = [Zap, Globe, GitMerge];

  return (
    <section id="services" className="py-32 relative z-10 bg-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Layanan Utama
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-500 text-lg font-nunito leading-relaxed"
          >
            Arsitektur logistik udara yang dirancang dengan presisi untuk memenuhi skala dan kecepatan operasi bisnis modern.
          </motion.p>
        </div>

        {/* Interactive Hover Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/80 transition-colors z-10 duration-500 ease-in-out"></div>
                  <Image 
                    src={service.imageUrl} 
                    alt={service.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />
                </div>

                {/* Content Section */}
                <div className="relative z-20 flex flex-col h-full p-8 md:p-10 justify-between">
                  {/* Top Badge */}
                  <div className="flex items-center gap-4 opacity-100 transform translate-y-0 transition-all duration-500">
                    <div className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white shadow-sm group-hover:bg-sky-500 group-hover:border-sky-500 transition-colors duration-500">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="text-white font-bold text-sm tracking-widest uppercase drop-shadow-md">
                      Layanan 0{index + 1}
                    </div>
                  </div>
                  
                  {/* Bottom Expandable Content */}
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-2">
                      {service.title}
                    </h3>
                    
                    {/* The Accordion Expansion */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-slate-300 leading-relaxed mt-2 mb-8 font-light font-nunito">
                          {service.description}
                        </p>
                        
                        <a href="#contact" className="inline-flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">
                          Eksplorasi
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
