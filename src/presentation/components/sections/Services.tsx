'use client';

import { motion } from 'framer-motion';
import { Service } from '../../../domain/entities';
import { Zap, Globe, GitMerge, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServicesProps {
  services: Service[];
  title?: string;
  subTitle?: string;
  lang?: 'en' | 'id';
}

export default function Services({ 
  services, 
  title = 'Layanan Utama', 
  subTitle = 'Solusi Logistik Kargo Udara Komprehensif',
  lang = 'id'
}: ServicesProps) {
  const icons = [Zap, Globe, GitMerge];

  return (
    <section id="services" className="py-24 relative bg-slate-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-600 font-bold uppercase tracking-widest text-sm block mb-4">{title}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">{subTitle}</h2>
          </motion.div>
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
                      {lang === 'en' ? 'Service ' : 'Layanan '}0{index + 1}
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
                          {lang === 'en' ? 'Explore' : 'Eksplorasi'}
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
