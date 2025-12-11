import React from 'react';
import { Icons } from './Icons';
import { translations, LOGO_URL } from '../constants';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-silk-50 dark:bg-slate-950 pt-20">
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-silk-200/50 dark:bg-silk-900/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-silk-200 dark:border-slate-700 mb-10 animate-fade-in">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
             <img 
               src={LOGO_URL} 
               alt="Silk AI Studio Logo" 
               className="h-full w-full object-cover"
             />
          </div>
          <span className="text-base font-medium text-slate-600 dark:text-slate-300">
            Silk AI Studio
          </span>
        </div>

        {/* Massive Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 animate-fade-in-up leading-tight">
          {t.title}
        </h1>
        
        {/* Larger Subtitle */}
        <p className="max-w-3xl text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0 translate-y-4">
          {t.subtitle}
        </p>

        {/* Larger CTA */}
        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_1s_ease-out_0.6s_forwards] opacity-0 translate-y-4">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t.cta}
            <Icons.ArrowRight className="ml-3 -mr-1 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};