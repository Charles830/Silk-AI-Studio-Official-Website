import React, { useState } from 'react';
import { Section } from './Section';
import { Icons } from './Icons';
import { translations, CONTACT_INFO } from '../constants';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [showModal, setShowModal] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <Section id="contact" className="bg-silk-50 dark:bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-16">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Phone Card */}
          <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-silk-300 dark:hover:border-slate-700">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-silk-100 dark:bg-slate-800 text-silk-700 dark:text-silk-300 mb-8 group-hover:scale-110 transition-transform">
              <Icons.Phone size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">{t.phone}</h3>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              {CONTACT_INFO.phone}
            </p>
          </div>

          {/* WeChat Card */}
          <div className="group bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-silk-300 dark:hover:border-slate-700">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-slate-800 text-green-600 dark:text-green-400 mb-8 group-hover:scale-110 transition-transform">
              <Icons.MessageCircle size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">{t.wechat}</h3>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              {CONTACT_INFO.wechat}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <button 
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:scale-105 transform duration-300 cursor-pointer"
          >
            {t.cta}
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl border border-silk-100 dark:border-slate-800 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Icons.X size={24} />
            </button>
            
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              {t.cta}
            </h3>

            <div className="space-y-5">
              {/* Phone Option */}
              <div className="flex items-center justify-between p-5 rounded-3xl bg-silk-50 dark:bg-slate-800/50 border border-silk-100 dark:border-slate-800">
                <div className="flex items-center space-x-4 overflow-hidden">
                  <div className="flex-shrink-0 p-3 bg-white dark:bg-slate-800 rounded-full text-silk-600 dark:text-silk-400 shadow-sm">
                    <Icons.Phone size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.phone}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white font-mono truncate">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                    copiedItem === 'phone' 
                      ? 'bg-green-500 text-white shadow-green-200 dark:shadow-none' 
                      : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90'
                  }`}
                >
                  {copiedItem === 'phone' ? <Icons.Check size={16} /> : <Icons.Copy size={16} />}
                  <span>{copiedItem === 'phone' ? t.copied : t.copy}</span>
                </button>
              </div>

              {/* WeChat Option */}
              <div className="flex items-center justify-between p-5 rounded-3xl bg-silk-50 dark:bg-slate-800/50 border border-silk-100 dark:border-slate-800">
                <div className="flex items-center space-x-4 overflow-hidden">
                  <div className="flex-shrink-0 p-3 bg-white dark:bg-slate-800 rounded-full text-green-600 dark:text-green-400 shadow-sm">
                    <Icons.MessageCircle size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{t.wechat}</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white font-mono truncate">{CONTACT_INFO.wechat}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(CONTACT_INFO.wechat, 'wechat')}
                  className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                    copiedItem === 'wechat' 
                      ? 'bg-green-500 text-white shadow-green-200 dark:shadow-none' 
                      : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90'
                  }`}
                >
                  {copiedItem === 'wechat' ? <Icons.Check size={16} /> : <Icons.Copy size={16} />}
                  <span>{copiedItem === 'wechat' ? t.copied : t.copy}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};