import React from 'react';
import fblHeroGif from '../assets/images/logo-gif.gif';
import { NavTab, Language } from '../types';

interface HeroSectionProps {
  onNavigate?: (tab: NavTab) => void;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  return (
    <section className="relative flex flex-col border-b border-[#1b1c1c]/10 bg-[#fbf9f9]">
      {/* Top Banner: Official FBL Animated GIF - Edge-to-edge container, calibrated to preserve full text readability on both mobile and desktop */}
      <div className="relative w-full bg-[#f4f4f4] flex items-center justify-center overflow-hidden border-b border-stone-200/70">
        <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto flex items-center justify-center">
          <img
            src={fblHeroGif}
            alt="FBL Advogados"
            className="w-full h-auto aspect-video max-h-[72vh] lg:max-h-[640px] xl:max-h-[700px] object-contain object-center block"
            loading="eager"
          />
        </div>
      </div>

      {/* Information Block - "Sociedade de Advogados de Angola" docked at the bottom of the first viewport */}
      <div className="bg-white border-t border-b border-stone-200/80 shadow-xs py-5 md:py-6 shrink-0">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 w-full">
          <div className="flex flex-col gap-2 sm:gap-2.5 max-w-4xl">
            {/* Title & Description in black & red without dash */}
            <h1 className="font-serif-headline text-xl sm:text-2xl md:text-[26px] lg:text-3xl font-bold text-[#1b1c1c] tracking-tight leading-tight">
              {language === 'pt' ? 'Sociedade de Advogados de Angola' : 'Angola’s Premier Law Firm'}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#1b1c1c]/90 leading-relaxed border-l-2 border-[#9e0418] pl-3.5 font-sans-body">
              {language === 'pt'
                ? 'Uma das mais prestigiadas e experientes sociedades de advogados de Angola, com reconhecimento de topo nos diretórios internacionais Chambers Global e The Legal 500.'
                : 'One of Angola’s most prestigious and experienced law firms, globally recognized by international benchmark legal directories.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

