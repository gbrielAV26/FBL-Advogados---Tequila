import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/newsData';
import { NewsItem, Language, NavTab } from '../types';
import { NewsletterSection } from './NewsletterSection';
import { ArrowRight, Calendar, Sparkles, X, Share2, Printer, Check } from 'lucide-react';

interface HomeNewsTeaserProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
}

export const HomeNewsTeaser: React.FC<HomeNewsTeaserProps> = ({ language, onNavigate }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [shared, setShared] = useState(false);

  // Top 3 latest news
  const topNews = NEWS_ITEMS.slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 lg:py-24 px-5 md:px-12 lg:px-16 bg-[#f5f2f0]/60 border-t border-stone-200/80">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-[#9e0418]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                {language === 'pt' ? 'Actualidade & Reconhecimento' : 'News & Recognition'}
              </span>
            </div>
            <h2 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b1c1c]">
              {language === 'pt' ? 'Últimas Notícias' : 'Latest News'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onNavigate('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] hover:text-[#800313] transition-colors cursor-pointer group"
            >
              <span>{language === 'pt' ? 'Ver todas as notícias' : 'View all news'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-stone-300 hidden sm:inline">|</span>

            <button
              onClick={() => {
                onNavigate('newsletters');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#9e0418] transition-colors cursor-pointer group"
            >
              <span>{language === 'pt' ? 'Todas as newsletters' : 'All newsletters'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Featured News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-16">
          {topNews.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-white border border-stone-200/90 overflow-hidden flex flex-col justify-between group hover:border-[#9e0418]/60 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-pointer rounded-xs"
            >
              <div>
                {/* Thematic photograph representing the news topic */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt[language]}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-white bg-[#9e0418] px-2 py-0.5 rounded-xs shadow-xs">
                      {item.category[language]}
                    </span>
                    <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif-headline text-lg font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors leading-snug mb-3 line-clamp-2">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e5e5e] line-clamp-3 leading-relaxed font-sans-body">
                    {item.summary[language]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9e0418] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>{language === 'pt' ? 'Saiba mais' : 'Read more'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed News Modal on Home */}
        {selectedNews && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedNews(null);
            }}
            className="fixed inset-0 z-50 bg-[#1b1c1c]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="bg-white border border-stone-200 max-w-3xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200 my-auto rounded-xs">
              {/* Modal Header Image */}
              <div className="relative aspect-[21/9] sm:aspect-[21/8] bg-stone-100 overflow-hidden">
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.imageAlt[language]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-[#9e0418] text-white rounded-full transition-colors cursor-pointer"
                  title={language === 'pt' ? 'Fechar' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-semibold bg-[#9e0418] px-2.5 py-0.5 rounded-xs inline-block mb-2">
                    {selectedNews.category[language]}
                  </span>
                  <span className="text-xs text-stone-300 block font-mono">
                    {selectedNews.date}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10">
                <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c] mb-6 leading-snug">
                  {selectedNews.title[language]}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#1b1c1c] leading-relaxed font-sans-body border-b border-stone-200 pb-8 mb-8">
                  {(selectedNews.content?.[language] || selectedNews.summary[language]).split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} className="text-justify leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5e5e5e] hover:text-[#9e0418] border border-stone-200 px-3.5 py-2 rounded-xs transition-colors cursor-pointer"
                    >
                      {shared ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">
                            {language === 'pt' ? 'Link Copiado' : 'Link Copied'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{language === 'pt' ? 'Partilhar' : 'Share'}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5e5e5e] hover:text-[#9e0418] border border-stone-200 px-3.5 py-2 rounded-xs transition-colors cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{language === 'pt' ? 'Imprimir' : 'Print'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedNews(null);
                        onNavigate('news');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs uppercase font-bold tracking-wider text-[#9e0418] hover:text-[#800313] px-4 py-2 transition-colors cursor-pointer"
                    >
                      {language === 'pt' ? 'Ver Todas as Notícias →' : 'View All News →'}
                    </button>

                    <button
                      onClick={() => setSelectedNews(null)}
                      className="bg-[#1b1c1c] text-white px-6 py-2.5 text-xs uppercase font-bold tracking-wider hover:bg-[#9e0418] transition-colors cursor-pointer"
                    >
                      {language === 'pt' ? 'Fechar' : 'Close'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Newsletter Subscription Area */}
        <div className="pt-4">
          <NewsletterSection language={language} variant="full" />
        </div>
      </div>
    </section>
  );
};
