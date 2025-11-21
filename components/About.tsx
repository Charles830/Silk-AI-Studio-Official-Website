import React from 'react';
import { Section } from './Section';
import { translations } from '../constants';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <Section id="about" className="bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-silk-200 dark:bg-slate-800 rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          {/* Decorative circle */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 dark:bg-black/20 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                {t.title}
              </h2>
              
              <div className="space-y-10">
                <div>
                  <p className="text-base font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                    {t.founded}
                  </p>
                  <p className="text-3xl md:text-4xl text-slate-900 dark:text-white font-medium">
                    {t.foundedText}
                  </p>
                </div>
                
                <div>
                  <p className="text-base font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                    {t.mission}
                  </p>
                  <p className="text-3xl md:text-4xl text-slate-900 dark:text-white font-medium leading-tight">
                    "{t.missionText}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-700 shadow-xl">
               {/* Abstract Representation of 'Silk' + 'AI' */}
               <img 
                  src="https://drive.google.com/thumbnail?id=1LAO-eDuP0Gp81qfqafJmSNeDd08dNDTS&sz=w1000"
                  alt="About Silk AI Studio"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000"
               />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};