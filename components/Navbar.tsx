import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Language } from '../types';
import { translations, LOGO_URL } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: t.home },
    { id: 'services', label: t.services },
    { id: 'platforms', label: t.platforms },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-silk-200 dark:border-slate-800 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> {/* Increased height */}
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-xl bg-silk-200 dark:bg-slate-800 flex items-center justify-center"> {/* Increased logo size */}
               <img 
                 src={LOGO_URL} 
                 alt="Silk AI Studio" 
                 className="h-full w-full object-cover"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-sm font-bold">SILK</span>';
                 }}
               />
            </div>
            <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}> {/* Increased font size */}
              Silk AI Studio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-md text-base font-medium transition-colors" 
                >
                  {/* text-base instead of text-sm */}
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-silk-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? <Icons.Moon size={22} /> : <Icons.Sun size={22} />}
            </button>
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-silk-100 dark:hover:bg-slate-800 transition-colors text-base font-medium"
            >
              <Icons.Globe size={18} />
              <span>{lang === 'en' ? 'ZH' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? <Icons.Moon size={24} /> : <Icons.Sun size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white block px-3 py-3 rounded-md text-lg font-medium w-full text-left"
            >
              {link.label}
            </button>
          ))}
           <button 
              onClick={() => {
                setLang(lang === 'en' ? 'zh' : 'en');
                setIsOpen(false);
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white block px-3 py-3 rounded-md text-lg font-medium w-full text-left flex items-center"
            >
              <Icons.Globe size={20} className="mr-2"/>
              Switch to {lang === 'en' ? '中文' : 'English'}
            </button>
        </div>
      </div>
    </nav>
  );
};