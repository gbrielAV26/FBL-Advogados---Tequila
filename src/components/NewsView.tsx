import React, { useState, useMemo } from 'react';
import { NEWS_ITEMS } from '../data/newsData';
import { NewsItem, Language, NavTab } from '../types';
import { NewsletterSection } from './NewsletterSection';
import {
  Calendar,
  Tag,
  Search,
  ArrowRight,
  X,
  Share2,
  Printer,
  Check,
  Filter,
  ExternalLink,
  SlidersHorizontal,
  Sparkles,
  Newspaper,
  FileText
} from 'lucide-react';

interface NewsViewProps {
  language: Language;
  onNavigate?: (tab: NavTab) => void;
  initialNewsId?: string | null;
  onClearInitialNews?: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({
  language,
  onNavigate,
  initialNewsId,
  onClearInitialNews,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [shared, setShared] = useState(false);

  React.useEffect(() => {
    if (initialNewsId) {
      const found = NEWS_ITEMS.find((n) => n.id === initialNewsId);
      if (found) setSelectedNews(found);
    }
  }, [initialNewsId]);

  const handleCloseModal = () => {
    setSelectedNews(null);
    onClearInitialNews?.();
  };

  // Extract all unique years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(NEWS_ITEMS.map((n) => n.year)));
    return ['all', ...years.sort((a, b) => Number(b) - Number(a))];
  }, []);

  // Extract all unique categories
  const availableCategories = useMemo(() => {
    const cats = Array.from(new Set(NEWS_ITEMS.map((n) => n.category[language])));
    return ['all', ...cats];
  }, [language]);

  // Filtered news
  const filteredNews = useMemo(() => {
    return NEWS_ITEMS.filter((item) => {
      const matchYear = selectedYear === 'all' || item.year === selectedYear;
      const matchCategory =
        selectedCategory === 'all' || item.category[language] === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.title[language].toLowerCase().includes(q) ||
        item.summary[language].toLowerCase().includes(q) ||
        item.category[language].toLowerCase().includes(q);

      return matchYear && matchCategory && matchQuery;
    });
  }, [selectedYear, selectedCategory, searchQuery, language]);

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
    <div className="py-16 md:py-24 px-5 md:px-12 lg:px-16 bg-[#fbf9f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="pb-10 border-b border-[#1b1c1c]/10">
          {/* Navigation Pill Switcher: Notícias vs Newsletters */}
          {onNavigate && (
            <div className="flex items-center gap-3 mb-6">
              <button
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#9e0418] rounded-xs shadow-xs cursor-default"
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Todas as Notícias' : 'All News'}</span>
              </button>
              <button
                onClick={() => onNavigate('newsletters')}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-[#9e0418] hover:bg-stone-100 rounded-xs transition-colors cursor-pointer border border-stone-200 bg-white"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Todas as Newsletters' : 'All Newsletters'}</span>
              </button>
            </div>
          )}

          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-[#9e0418]"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
              {language === 'pt' ? 'Actualidade Jurídica & Institucional' : 'Legal & Firm News'}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c]">
                {language === 'pt' ? 'Todas as Notícias' : 'All News'}
              </h1>
              <p className="text-base sm:text-lg text-[#5e5e5e] max-w-2xl mt-3 font-sans-body">
                {language === 'pt'
                  ? 'Acompanhe as distinções internacionais, conferências, intervenções regulatórias e marcos institucionais da FBL Advogados.'
                  : 'Follow international recognitions, high-level conferences, regulatory interventions, and institutional milestones of FBL Advogados.'}
              </p>
            </div>

            <a
              href="#newsletter-area"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] border border-[#9e0418]/30 px-4 py-2.5 bg-white hover:bg-[#9e0418] hover:text-white transition-all shadow-xs w-fit"
            >
              <span>{language === 'pt' ? 'Subscrever Newsletter' : 'Subscribe Newsletter'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="py-8 border-b border-stone-200/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Year filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5e5e5e] mr-1 hidden sm:inline">
              {language === 'pt' ? 'Ano:' : 'Year:'}
            </span>
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`text-xs px-3.5 py-1.5 font-semibold transition-all cursor-pointer rounded-xs ${
                  selectedYear === yr
                    ? 'bg-[#1b1c1c] text-white shadow-xs'
                    : 'bg-white text-[#5e5e5e] border border-stone-200 hover:border-stone-400 hover:text-[#1b1c1c]'
                }`}
              >
                {yr === 'all' ? (language === 'pt' ? 'Todos' : 'All') : yr}
              </button>
            ))}
          </div>

          {/* Search bar & Category dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'pt' ? 'Pesquisar notícias...' : 'Search news...'}
                className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-stone-200 focus:outline-none focus:border-[#9e0418] text-[#1b1c1c] placeholder-stone-400 rounded-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#1b1c1c]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs py-2 px-3 bg-white border border-stone-200 text-[#1b1c1c] focus:outline-none focus:border-[#9e0418] rounded-xs cursor-pointer"
              >
                <option value="all">
                  {language === 'pt' ? 'Todas as Categorias' : 'All Categories'}
                </option>
                {availableCategories
                  .filter((c) => c !== 'all')
                  .map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="py-4 text-xs text-[#5e5e5e] flex items-center justify-between">
          <span>
            {language === 'pt'
              ? `A mostrar ${filteredNews.length} notícia${filteredNews.length === 1 ? '' : 's'}`
              : `Showing ${filteredNews.length} news item${filteredNews.length === 1 ? '' : 's'}`}
          </span>
          {(selectedYear !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedYear('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[#9e0418] hover:underline font-semibold cursor-pointer"
            >
              {language === 'pt' ? 'Limpar filtros' : 'Clear filters'}
            </button>
          )}
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="py-20 text-center bg-white border border-stone-200 p-8 my-8">
            <p className="text-stone-500 text-sm mb-4 font-sans-body">
              {language === 'pt'
                ? 'Nenhuma notícia encontrada com os critérios selecionados.'
                : 'No news found matching the selected criteria.'}
            </p>
            <button
              onClick={() => {
                setSelectedYear('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-[#1b1c1c] text-white text-xs px-5 py-2 font-bold uppercase tracking-wider hover:bg-[#9e0418] transition-colors"
            >
              {language === 'pt' ? 'Ver todas as notícias' : 'View all news'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-20">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                onClick={() => setSelectedNews(news)}
                className="bg-white border border-stone-200/90 overflow-hidden flex flex-col justify-between group hover:border-[#9e0418]/60 hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] rounded-xs"
              >
                <div>
                  {/* Thematic photograph representing the news topic (NOT headshot of person) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={news.imageUrl}
                      alt={news.imageAlt[language]}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-white bg-[#9e0418] px-2.5 py-0.5 rounded-xs shadow-xs">
                        {news.category[language]}
                      </span>
                      <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                        {news.date}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors leading-snug mb-3">
                      {news.title[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5e5e5e] leading-relaxed line-clamp-4 font-sans-body mb-4">
                      {news.summary[language]}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9e0418] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>{news.linkText ? news.linkText[language] : (language === 'pt' ? 'Saiba mais' : 'Read more')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Subscription Area */}
        <div className="pt-4">
          <NewsletterSection language={language} variant="full" />
        </div>
      </div>

      {/* Detailed News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-[#1b1c1c]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
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
                onClick={handleCloseModal}
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
      )}
    </div>
  );
};
