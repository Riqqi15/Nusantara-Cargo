'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  const isDarkPage = pathname === '/';
  const forceSolid = !isDarkPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['about', 'services', 'fleet'];
        let currentActive = '/';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Offset 200px to account for the fixed navbar height
            if (rect.top <= 200 && rect.bottom >= 200) {
              currentActive = '/#' + section;
              break;
            }
          }
        }
        
        if (window.scrollY < 100) {
          currentActive = '/';
        }
        
        setActiveLink(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (pathname !== '/') {
      setActiveLink(window.location.pathname + window.location.hash || window.location.pathname);
    }
    
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const solidMode = forceSolid || isScrolled;

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/#about' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Armada', href: '/#fleet' },
    { name: 'Jangkauan', href: '/coverage' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        solidMode 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm flex-shrink-0 p-1">
            <Image src="/logo.png" alt="Nusantara Cargo Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className={`text-xl font-bold tracking-widest uppercase ${solidMode ? 'text-slate-900' : 'text-white'}`}>NUSANTARA<span className="text-sky-500 font-light">CARGO</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative font-medium transition-colors text-xs uppercase tracking-[0.2em] group ${solidMode ? 'text-slate-600 hover:text-sky-600' : 'text-slate-200 hover:text-white'} ${activeLink === link.href ? (solidMode ? '!text-sky-600' : '!text-white') : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-sky-500 transition-all duration-300 ${activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white uppercase tracking-widest bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg border ${solidMode ? 'text-slate-700 bg-slate-100 border-slate-200' : 'text-white bg-black/20 border-white/20'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 flex flex-col py-4 overflow-hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`px-6 py-4 hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors uppercase tracking-widest text-sm border-b border-slate-100 ${activeLink === link.href ? 'text-sky-600 bg-sky-50' : 'text-slate-600'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-6 pb-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center gap-2 text-center bg-sky-600 hover:bg-sky-500 transition-colors text-white px-6 py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
