import React from 'react';
import { DIRECT_IMAGES } from '../data/fblData';
import { Language, Recognition } from '../types';
import { Scale, Globe, GraduationCap, Award, Star, ExternalLink } from 'lucide-react';

interface AboutSectionProps {
  language: Language;
  onOpenRecognition: (recId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  language,
  onOpenRecognition,
}) => {

  return (
    <section className="py-20 lg:py-28 px-5 md:px-12 lg:px-16 bg-[#fbf9f9]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Block (Left) */}
          <div className="lg:col-span-6 lg:pr-6 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#9e0418]"></div>
              <h2 className="font-serif-headline text-2xl lg:text-3xl font-bold text-[#9e0418] tracking-tight">
                {language === 'pt' ? 'Quem Somos' : 'About Us'}
              </h2>
            </div>

            <div className="text-base lg:text-lg text-[#1b1c1c] flex flex-col gap-6 leading-relaxed">
              <p className="font-medium text-[#1b1c1c]">
                {language === 'pt'
                  ? 'Fundada em 2004, a FBL nasceu com uma abordagem inspirada nos padrões das modernas sociedades de advogados internacionais. A FBL é membro exclusivo para Angola da LEX Africa.'
                  : 'Founded in 2004, FBL emerged with an approach inspired by the highest standards of modern international law firms. FBL is the exclusive member firm for Angola of LEX Africa.'}
              </p>
              <p className="text-[#5e5e5e]">
                {language === 'pt'
                  ? 'Reconhecida internacionalmente por diretórios como Chambers and Partners e Legal 500. Equipa especializada nas principais áreas do Direito, com rigor, independência e padrões internacionais.'
                  : 'Internationally acclaimed by benchmark legal directories including Chambers & Partners and The Legal 500. A multidisciplinary team specialized across key legal sectors, upholding rigorous independence and global standards.'}
              </p>
              <p className="text-[#5e5e5e]">
                {language === 'pt'
                  ? 'Apoiamos clientes angolanos e estrangeiros. Aposta na formação contínua, inovação e iniciativas pro bono.'
                  : 'We support domestic and foreign clients, committed to continuous professional legal education, innovation, and pro bono initiatives.'}
              </p>
            </div>

            {/* Prestigious metrics / features */}
            <ul className="flex flex-col gap-4 mt-2 border-t border-stone-200/80 pt-8">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/20 flex items-center justify-center text-[#9e0418] group-hover:bg-[#9e0418] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm tracking-wide text-[#1b1c1c] block">
                    {language === 'pt' ? 'Rigor & Independência' : 'Rigor & Independence'}
                  </span>
                  <span className="text-xs text-[#5e5e5e]">
                    {language === 'pt' ? 'Ética inabalável e excelência técnica deontológica.' : 'Unwavering ethics and technical excellence.'}
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/20 flex items-center justify-center text-[#9e0418] group-hover:bg-[#9e0418] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm tracking-wide text-[#1b1c1c] block">
                    {language === 'pt' ? 'LEX Africa & Padrões Globais' : 'LEX Africa & Global Standards'}
                  </span>
                  <span className="text-xs text-[#5e5e5e]">
                    {language === 'pt' ? 'Membro exclusivo em Angola da maior rede de advocacia em África.' : 'Exclusive member firm in Angola of Africa’s premier legal network.'}
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/20 flex items-center justify-center text-[#9e0418] group-hover:bg-[#9e0418] group-hover:text-white transition-all duration-300 shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold text-sm tracking-wide text-[#1b1c1c] block">
                    {language === 'pt' ? 'Formação Contínua & Inovação' : 'Continuous Education & Innovation'}
                  </span>
                  <span className="text-xs text-[#5e5e5e]">
                    {language === 'pt' ? 'Investimento permanente no capital humano e modernização.' : 'Continuous investment in human talent and modern tools.'}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual / Bento Style Layout for Image and Awards (Right) */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-5 relative">
              {/* Featured photo: Baía de Luanda / Enquadramento Institucional */}
              <div className="col-span-2 aspect-[4/3] border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] relative overflow-hidden group p-2 bg-white">
                <div className="w-full h-full bg-stone-100 relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={language === 'pt' ? 'FBL Advogados — Quem Somos e Enquadramento Institucional' : 'FBL Advogados — About Us and Institutional Presence'}
                    src={DIRECT_IMAGES.aboutLeadership}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Recognition Card: Chambers */}
              <button
                id="card-chambers"
                onClick={() => onOpenRecognition('chambers')}
                className="col-span-1 border border-stone-200/90 p-6 flex flex-col justify-between aspect-square bg-white hover:border-[#9e0418]/50 hover:shadow-[0_10px_25px_-4px_rgba(158,4,24,0.1)] transition-all duration-300 text-left group cursor-pointer shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5 text-[#9e0418]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif-headline text-xl lg:text-2xl font-bold text-[#1b1c1c] mb-1 group-hover:text-[#9e0418] transition-colors">
                    Chambers
                  </h3>
                  <p className="text-xs text-[#5e5e5e] uppercase tracking-widest font-semibold">
                    Global &amp; Partners
                  </p>
                  <span className="text-[11px] text-[#9e0418] font-semibold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'pt' ? 'Ver citação →' : 'View review →'}
                  </span>
                </div>
              </button>

              {/* Recognition Card: Legal 500 */}
              <button
                id="card-legal500"
                onClick={() => onOpenRecognition('legal500')}
                className="col-span-1 border border-stone-200/90 p-6 flex flex-col justify-between aspect-square bg-white hover:border-[#9e0418]/50 hover:shadow-[0_10px_25px_-4px_rgba(158,4,24,0.1)] transition-all duration-300 text-left group cursor-pointer shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Star className="w-5 h-5 text-[#9e0418]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif-headline text-xl lg:text-2xl font-bold text-[#1b1c1c] mb-1 group-hover:text-[#9e0418] transition-colors">
                    Legal 500
                  </h3>
                  <p className="text-xs text-[#5e5e5e] uppercase tracking-widest font-semibold">
                    {language === 'pt' ? 'Reconhecimento' : 'Recognition'}
                  </p>
                  <span className="text-[11px] text-[#9e0418] font-semibold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'pt' ? 'Ver citação →' : 'View review →'}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
