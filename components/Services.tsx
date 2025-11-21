import React from 'react';
import { Section } from './Section';
import { Icons } from './Icons';
import { translations } from '../constants';
import { Language } from '../types';

interface ServicesProps {
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Icons.Brain className="h-10 w-10 text-silk-700 dark:text-silk-300" />;
      case 'users': return <Icons.Users className="h-10 w-10 text-silk-700 dark:text-silk-300" />;
      case 'code': return <Icons.Code className="h-10 w-10 text-silk-700 dark:text-silk-300" />;
      default: return <Icons.Sparkles className="h-10 w-10 text-silk-700 dark:text-silk-300" />;
    }
  };

  return (
    <Section id="services" className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.items.map((item, index) => (
            <div 
              key={index}
              className="group p-10 rounded-[2.5rem] bg-silk-50 dark:bg-slate-800 hover:bg-silk-100 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-silk-200 dark:hover:border-slate-600"
            >
              <div className="h-20 w-20 rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};