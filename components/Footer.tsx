import React from 'react';
import { translations } from '../constants';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <span className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
            Silk AI Studio
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base">
          {t.rights}
        </p>
      </div>
    </footer>
  );
};