import React from 'react';
import { Section } from './Section';
import { translations } from '../constants';
import { Language } from '../types';
import { Icons } from './Icons';

interface PlatformsProps {
  lang: Language;
}

export const Platforms: React.FC<PlatformsProps> = ({ lang }) => {
  const t = translations[lang].platforms;

  return (
    <Section id="platforms" className="bg-silk-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 md:mb-32 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
            {t.description}
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {t.items.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 group`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl bg-white dark:bg-slate-900 border border-silk-100 dark:border-slate-800">
                   <div className="absolute inset-0 bg-silk-200/10 dark:bg-slate-800/20 z-10 pointer-events-none mix-blend-overlay" />
                   <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 object-contain bg-gradient-to-br from-silk-50 to-white dark:from-slate-800 dark:to-slate-900 ${
                      index === 0 ? 'p-8 md:p-12' : 'p-2 md:p-4'
                    }`}
                   />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xl">
                    {index + 1}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <div className="flex items-center text-silk-600 dark:text-silk-400 font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                  <span className="mr-2 text-lg">{lang === 'en' ? 'Learn more' : '了解更多'}</span>
                  <Icons.ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};