'use client';

import { motion } from 'framer-motion';
import { Achievement } from '../../../domain/entities';
import { Award, Map, PackageCheck, Clock } from 'lucide-react';

interface StatsBarProps {
  stats: Achievement[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  const icons = [Award, Map, PackageCheck, Clock];

  return (
    <section className="relative z-20 w-full bg-white py-24 md:py-32 border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-sky-600 font-bold text-sm tracking-widest mb-6 uppercase">Pencapaian Kami</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
              Bukan Sekadar <br /> Angka di Atas Kertas.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light font-nunito max-w-lg">
              Setiap pencapaian kami adalah bukti nyata dedikasi dan presisi tingkat tinggi dalam menangani logistik udara berskala nasional maupun internasional.
            </p>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16">
            {stats.map((stat, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-start group"
                >
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sky-500 mb-5 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light text-slate-900 mb-2 tracking-tight group-hover:scale-105 origin-left transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-[10px] md:text-xs font-bold tracking-widest uppercase font-nunito group-hover:text-sky-600 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
