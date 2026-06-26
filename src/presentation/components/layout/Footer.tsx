'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, User, AtSign, Package, MessageSquare, Send, Headset, MapPin, Clock3 } from 'lucide-react';

interface FooterProps {
  lang?: 'en' | 'id';
}

export default function Footer({ lang = 'id' }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 overflow-hidden z-20">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contact Section (Top) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-sky-400 mb-6">
                <Headset className="w-5 h-5" />
                <div className="text-sky-500 font-bold text-sm tracking-widest uppercase">
                  {lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                {lang === 'en' ? 'Ready to Fly' : 'Siap Mengudara'} <br />
                <span className="text-white">{lang === 'en' ? 'With Us?' : 'Bersama Kami?'}</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-slate-400 text-lg max-w-md mb-12 font-light leading-relaxed font-nunito"
            >
              {lang === 'en' ? 'Contact our technical and operational team today to discuss precision air cargo logistics solutions tailored for your business scale.' : 'Hubungi tim teknis dan operasional kami hari ini untuk mendiskusikan solusi logistik kargo presisi yang dirancang khusus untuk skala bisnis Anda.'}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-5">
                <div className="text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">Secure Email Line</p>
                  <a href="mailto:contact@nusantaracargo.id" className="text-xl font-light text-white transition-colors">contact@nusantaracargo.id</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-sky-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">Direct Operations</p>
                  <a href="tel:+628112345678" className="text-xl font-light text-white transition-colors">+62 811 2345 678</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative text-slate-900 border-4 border-slate-50"
          >
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <User className="w-4 h-4 text-sky-600" /> {lang === 'en' ? 'Company / Individual Name' : 'Nama Perusahaan / Individu'}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    maxLength={100}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-light"
                    placeholder={lang === 'en' ? "E.g.: PT. Nusantara Logistics" : "Contoh: PT. Nusantara Logistics"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <AtSign className="w-4 h-4 text-sky-600" /> {lang === 'en' ? 'Email Address' : 'Alamat Email'}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    maxLength={150}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all font-light"
                    placeholder={lang === 'en' ? "email@company.com" : "email@perusahaan.com"}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="cargoType" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Package className="w-4 h-4 text-sky-600" /> {lang === 'en' ? 'Service Type' : 'Jenis Layanan'}
                </label>
                <div className="relative">
                  <select 
                    id="cargoType" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-3.5 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all appearance-none font-light"
                  >
                    <option value="domestik">{lang === 'en' ? 'General Domestic Cargo' : 'Kargo Domestik Umum'}</option>
                    <option value="internasional">{lang === 'en' ? 'International Export/Import Cargo' : 'Kargo Internasional Ekspor/Impor'}</option>
                    <option value="oversized">{lang === 'en' ? 'Heavy & Oversized Cargo' : 'Kargo Berat & Oversized'}</option>
                    <option value="charter">{lang === 'en' ? 'Full Aircraft Charter' : 'Charter Pesawat Penuh'}</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-sky-600" /> {lang === 'en' ? 'Shipment Details' : 'Detail Pengiriman'}
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  maxLength={1000}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all resize-none font-light"
                  placeholder={lang === 'en' ? 'Please describe route, estimated weight, and other operational details...' : 'Mohon deskripsikan rute, estimasi berat, dan detail operasional lainnya...'}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-sky-600 uppercase tracking-widest rounded-lg hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/20 group mt-2"
              >
                {lang === 'en' ? 'Send Request' : 'Kirim Permintaan'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* True Footer (Middle) */}
        <div className="pt-20 pb-20 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <h3 className="text-2xl font-black tracking-tighter text-white mb-6">NUSANTARA CARGO.</h3>
            <p className="text-slate-400 font-light font-nunito leading-relaxed mb-8">
              {lang === 'en' ? 'Premium, fast, and secure air cargo solutions for domestic & global logistics.' : 'Solusi kargo udara premium, cepat, dan aman untuk pengiriman logistik Nusantara & global.'}
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{lang === 'en' ? 'Services' : 'Layanan'}</h4>
            <ul className="space-y-4 font-nunito font-light text-slate-400">
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Domestic Cargo' : 'Kargo Domestik'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'International Cargo' : 'Kargo Internasional'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Heavy & Oversized' : 'Kargo Berat & Oversized'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Aircraft Charter' : 'Charter Pesawat'}</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{lang === 'en' ? 'Company' : 'Perusahaan'}</h4>
            <ul className="space-y-4 font-nunito font-light text-slate-400">
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'About Us' : 'Tentang Kami'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Fleet' : 'Armada'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Careers' : 'Karir'}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'News & Media' : 'Berita & Media'}</a></li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{lang === 'en' ? 'Headquarters' : 'Kantor Pusat'}</h4>
            <ul className="space-y-5 font-nunito font-light text-slate-400">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-1" />
                <span className="leading-relaxed">{lang === 'en' ? 'Nusantara Tower Bldg. 15th Fl' : 'Gedung Nusantara Tower Lt. 15'}<br />Jl. Jenderal Sudirman Kav. 1<br />Jakarta Pusat 10220</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock3 className="w-5 h-5 text-sky-500 shrink-0" />
                <span>{lang === 'en' ? 'Operations: 24/7 (Non-Stop)' : 'Operasional: 24/7 (Non-Stop)'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-mono tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Nusantara Cargo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
