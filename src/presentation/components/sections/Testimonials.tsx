'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '../../../domain/entities';
import { Quote, User } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-sky-900/10 blur-[120px]"></div>
        <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-[0.3em] mb-4">
              Testimoni Klien
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Kualitas yang Terbukti
            </h3>
            <p className="text-slate-400 text-lg">
              Pengalaman nyata dari para mitra yang telah mempercayakan urusan logistik udara mereka kepada Nusantara Cargo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 relative group hover:bg-slate-700 hover:border-slate-600 transition-all duration-500 shadow-xl"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-700/50 group-hover:text-sky-500/20 transition-colors duration-500" />
              
              <p className="text-slate-300 leading-relaxed relative z-10 mb-10 text-lg font-light">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-700/50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-400 overflow-hidden shrink-0 group-hover:border-sky-500/50 transition-colors">
                  {testimonial.avatarUrl ? (
                    <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-sky-400 font-medium">{testimonial.role}, <span className="text-slate-400 font-normal">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
