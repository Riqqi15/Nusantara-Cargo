'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const FlagID = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-4 h-3 rounded-sm shadow-sm">
    <rect width="3" height="1" fill="#ef3340"/>
    <rect width="3" height="1" y="1" fill="#fff"/>
  </svg>
);

const FlagEN = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-4 h-3 rounded-sm shadow-sm">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

export default function Navbar({ currentLang = 'id' }: { currentLang?: 'id' | 'en' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
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

  const navLinks = currentLang === 'en' ? [
    { name: 'Home', href: '/?lang=en' },
    { name: 'About Us', href: '/?lang=en#about' },
    { name: 'Services', href: '/?lang=en#services' },
    { name: 'Fleet', href: '/?lang=en#fleet' },
    { name: 'Coverage', href: '/coverage?lang=en' },
  ] : [
    { name: 'Beranda', href: '/?lang=id' },
    { name: 'Tentang Kami', href: '/?lang=id#about' },
    { name: 'Layanan', href: '/?lang=id#services' },
    { name: 'Armada', href: '/?lang=id#fleet' },
    { name: 'Jangkauan', href: '/coverage?lang=id' },
  ];

  const contactText = currentLang === 'en' ? 'Contact Us' : 'Hubungi Kami';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'id' : 'en';
    const hash = window.location.hash;
    router.push(`?lang=${newLang}${hash}`, { scroll: false });
  };

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
        <a href={`/?lang=${currentLang}`} className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm flex-shrink-0 p-1">
            <Image src="/logo.png" alt="Nusantara Cargo Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className={`text-xl font-bold tracking-widest uppercase ${solidMode ? 'text-slate-900' : 'text-white'}`}>NUSANTARA<span className="text-sky-500 font-light">CARGO</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          
          <div className="flex items-center gap-4 border-l pl-4 border-slate-300/30">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-colors ${
                solidMode 
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {currentLang === 'id' ? <FlagID /> : <FlagEN />}
              {currentLang === 'id' ? 'ID' : 'EN'}
            </button>

            <a
              href={`/?lang=${currentLang}#contact`}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white uppercase tracking-widest bg-sky-600 rounded-lg hover:bg-sky-500 transition-colors shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              {contactText}
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-colors ${
              solidMode 
                ? 'border-slate-300 text-slate-600 bg-white/50' 
                : 'border-white/30 text-white bg-black/20'
            }`}
          >
            {currentLang === 'id' ? <FlagID /> : <FlagEN />}
            {currentLang === 'id' ? 'ID' : 'EN'}
          </button>

          <button
            className={`p-2 rounded-lg border ${solidMode ? 'text-slate-700 bg-slate-100 border-slate-200' : 'text-white bg-black/20 border-white/20'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
                href={`/?lang=${currentLang}#contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center gap-2 text-center bg-sky-600 hover:bg-sky-500 transition-colors text-white px-6 py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                {contactText}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
