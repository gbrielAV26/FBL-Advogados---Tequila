import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/fblData';
import { Publication, Language } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowRight, X, Share2, Printer, Check } from 'lucide-react';

interface PublicationsViewProps {
  language: Language;
}

export const PublicationsView: React.FC<PublicationsViewProps> = ({ language }) => {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-16 md:py-24 px-5 md:px-12 lg:px-16 bg-[#fbf9f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="pb-10 border-b border-[#1b1c1c]/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-[#9e0418]"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
              {language === 'pt' ? 'Conhecimento Jurídico' : 'Legal Insights'}
            </span>
          </div>
          <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c]">
            {language === 'pt' ? 'Publicações & Análises' : 'Publications & Briefs'}
          </h1>
          <p className="text-base sm:text-lg text-[#5e5e5e] max-w-2xl mt-3">
            {language === 'pt'
              ? 'Artigos de opinião, alertas regulatórios e análises jurídicas sobre as mais recentes transformações legislativas em Angola.'
              : 'Opinions, regulatory alerts, and in-depth analyses on the latest statutory transformations across Angola.'}
          </p>
        </div>

        {/* Publications List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              onClick={() => setSelectedPub(pub)}
              className="border border-stone-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9e0418]/50 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-pointer shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9e0418] bg-[#9e0418]/10 px-2.5 py-1">
                    {pub.category[language]}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#5e5e5e]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pub.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif-headline text-xl font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors leading-snug mb-4">
                  {pub.title[language]}
                </h3>

                <p className="text-sm text-[#5e5e5e] line-clamp-3 leading-relaxed mb-6 font-sans-body">
                  {pub.summary[language]}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-[#5e5e5e]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-[#9e0418]" />
                    {pub.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {pub.date}
                  </span>
                </div>

                <div className="flex items-center justify-end text-xs font-bold uppercase tracking-wider text-[#9e0418] pt-2">
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {language === 'pt' ? 'Ler Artigo' : 'Read Brief'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publication Reading Modal */}
      {selectedPub && (
        <div className="fixed inset-0 z-50 bg-[#1b1c1c]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200/90 max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPub(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-[#9e0418] p-2 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418] bg-[#9e0418]/10 px-2.5 py-1">
                {selectedPub.category[language]}
              </span>
              <span className="text-xs text-[#5e5e5e]">{selectedPub.date}</span>
              <span className="text-xs text-[#5e5e5e]">• {selectedPub.readTime} {language === 'pt' ? 'de leitura' : 'read'}</span>
            </div>

            <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c] leading-tight mb-4">
              {selectedPub.title[language]}
            </h2>

            <div className="text-xs text-[#5e5e5e] font-semibold border-b border-stone-100 pb-4 mb-6 flex items-center gap-2">
              <User className="w-4 h-4 text-[#9e0418]" />
              <span>{language === 'pt' ? 'Autoria:' : 'Author:'} {selectedPub.author}</span>
            </div>

            <div className="bg-stone-50 border-l-4 border-[#9e0418] p-4 text-sm text-[#1b1c1c] italic mb-6">
              {selectedPub.summary[language]}
            </div>

            <div className="prose max-w-none text-base text-[#1b1c1c] leading-relaxed space-y-4 mb-8 font-sans-body">
              <p>{selectedPub.content[language]}</p>
              <p>
                {language === 'pt'
                  ? 'A FBL Advogados mantém uma equipa de acompanhamento permanente às deliberações legislativas e regulamentares da Assembleia Nacional, BNA, AGT e ANPG, prestando aconselhamento proativo aos clientes que operam nos diversos ramos da economia angolana.'
                  : 'FBL Advogados maintains a dedicated monitoring desk tracking legislative and regulatory enactments from the National Assembly, BNA, AGT, and ANPG, providing proactive legal guidance to clients operating across diverse sectors of the Angolan economy.'}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-stone-100 pt-6">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#5e5e5e] hover:text-[#9e0418] transition-colors cursor-pointer"
              >
                {shared ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{shared ? (language === 'pt' ? 'Link Copiado' : 'Link Copied') : (language === 'pt' ? 'Partilhar' : 'Share')}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 border border-stone-300 px-4 py-2 text-xs uppercase font-bold tracking-wider text-[#1b1c1c] hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{language === 'pt' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
