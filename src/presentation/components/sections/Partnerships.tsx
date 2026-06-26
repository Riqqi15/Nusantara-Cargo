'use client';

import { motion } from 'framer-motion';
import { Partner } from '../../../domain/entities';
import { Building2, Plane, PlaneTakeoff, Truck, Globe, Droplet, ShoppingCart, Store } from 'lucide-react';

interface PartnershipsProps {
  partners: Partner[];
  title?: string;
  subTitle?: string;
}

const partnerIcons: Record<string, React.ReactNode> = {
  p1: <PlaneTakeoff className="w-10 h-10" />,
  p2: <Plane className="w-10 h-10" />,
  p3: <Truck className="w-10 h-10" />,
  p4: <Globe className="w-10 h-10" />,
  p5: <Droplet className="w-10 h-10" />,
  p6: <ShoppingCart className="w-10 h-10" />,
  p7: <Store className="w-10 h-10" />,
};

export default function Partnerships({ 
  partners,
  title = 'Jejaring Kemitraan',
  subTitle = 'Sinergi bersama perusahaan terkemuka untuk memastikan kualitas logistik tanpa batas.'
}: PartnershipsProps) {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-[0.3em] mb-4">
              {title}
            </h2>
            <p className="text-slate-400 font-medium max-w-xl mx-auto text-lg">
              {subTitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex z-10">
        {/* Fade gradients on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>

        <div className="animate-marquee gap-8 md:gap-12 pl-8 md:pl-12">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group relative flex items-center justify-center p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-sky-500/50 rounded-2xl transition-all duration-300 cursor-pointer w-[240px] shrink-0"
            >
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="h-16 w-full flex items-center justify-center p-2 text-slate-500 group-hover:text-white transition-colors duration-500">
                  {partnerIcons[partner.id] || <Building2 className="w-10 h-10" />}
                </div>
                <span className="font-bold text-xs tracking-widest text-slate-400 group-hover:text-sky-400 transition-colors text-center uppercase">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
