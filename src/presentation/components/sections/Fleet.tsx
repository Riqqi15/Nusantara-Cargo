'use client';

import { motion } from 'framer-motion';
import { Fleet } from '../../../domain/entities';
import { Box, Globe, PlaneTakeoff, Maximize } from 'lucide-react';
import Image from 'next/image';

interface FleetProps {
  fleets: Fleet[];
}

export default function FleetShowcase({ fleets }: FleetProps) {
  return (
    <section id="fleet" className="py-24 md:py-32 bg-white relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Kekuatan Udara Nusantara
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg font-nunito"
          >
            Didukung oleh armada modern berspesifikasi tinggi yang dirancang khusus untuk efisiensi maksimum di setiap rute penerbangan.
          </motion.p>
        </div>

        <div className="space-y-32">
          {fleets.map((fleet, idx) => (
            <div 
              key={fleet.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Image Section */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image src={fleet.imageUrl} alt={fleet.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-6 left-6 text-white font-bold text-sm tracking-widest opacity-90 uppercase pointer-events-none drop-shadow-md">
                    Armada ID: {fleet.id}
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">{fleet.name}</h3>
                <p className="text-slate-600 font-nunito text-lg mb-10 leading-relaxed font-light">
                  {fleet.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Kapasitas Angkut */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-slate-300 transition-all group">
                    <Box className="w-8 h-8 stroke-[1.5] text-slate-700 mb-4 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-300" />
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{fleet.payloadCapacity}</h4>
                    <span className="text-sm text-slate-500 font-nunito">Kapasitas Angkut</span>
                  </div>

                  {/* Jangkauan Terbang */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-slate-300 transition-all group">
                    <Globe className="w-8 h-8 stroke-[1.5] text-slate-700 mb-4 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-300" />
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{fleet.maxRange}</h4>
                    <span className="text-sm text-slate-500 font-nunito">Jangkauan Terbang</span>
                  </div>

                  {/* Min Panjang Landasan */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-slate-300 transition-all group">
                    <PlaneTakeoff className="w-8 h-8 stroke-[1.5] text-slate-700 mb-4 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-300" />
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{fleet.minRunway}</h4>
                    <span className="text-sm text-slate-500 font-nunito">Min. Panjang Landasan</span>
                  </div>

                  {/* Volume Kargo */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-slate-300 transition-all group">
                    <Maximize className="w-8 h-8 stroke-[1.5] text-slate-700 mb-4 group-hover:scale-110 group-hover:text-sky-600 transition-all duration-300" />
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{fleet.volume}</h4>
                    <span className="text-sm text-slate-500 font-nunito">Volume Kargo</span>
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
