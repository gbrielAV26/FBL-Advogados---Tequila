import React, { useState, useMemo } from 'react';
import { NEWSLETTERS } from '../data/newslettersData';
import { Language, NavTab } from '../types';
import { NewsletterSection } from './NewsletterSection';
import { Search, Filter, Mail, Newspaper, FileText, Calendar } from 'lucide-react';

interface NewslettersViewProps {
  language: Language;
  onNavigate?: (tab: NavTab) => void;
}

export const NewslettersView: React.FC<NewslettersViewProps> = ({ language, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract unique years
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(NEWSLETTERS.map((item) => item.year).filter(Boolean))) as string[];
    return years.sort((a, b) => b.localeCompare(a));
  }, []);

  // Filtered newsletters
  const filteredNewsletters = useMemo(() => {
    return NEWSLETTERS.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title[language].toLowerCase().includes(q) ||
        item.summary[language].toLowerCase().includes(q) ||
        (item.category && item.category[language].toLowerCase().includes(q)) ||
        (item.date && item.date.toLowerCase().includes(q)) ||
        (item.year && item.year.includes(q));

      const matchesYear = selectedYear === 'all' || item.year === selectedYear;
      const matchesCategory =
        selectedCategory === 'all' ||
        (item.category && item.category[language] === selectedCategory);

      return matchesSearch && matchesYear && matchesCategory;
    });
  }, [searchQuery, selectedYear, selectedCategory, language]);

  return (
    <div className="bg-[#fbf9f9] min-h-screen pt-24 pb-20">
      {/* Top Banner / Breadcrumb Bar */}
      <div className="border-b border-stone-200/80 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 py-8">
          {/* Navigation Pill Switcher: Notícias vs Newsletters */}
          {onNavigate && (
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => onNavigate('news')}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-[#9e0418] hover:bg-stone-100 rounded-xs transition-colors cursor-pointer border border-stone-200"
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Todas as Notícias' : 'All News'}</span>
              </button>
              <button
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#9e0418] rounded-xs shadow-xs cursor-default"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Todas as Newsletters' : 'All Newsletters'}</span>
              </button>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-10 bg-[#9e0418]"></div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                  {language === 'pt' ? 'Publicações Periódicas & Alertas' : 'Periodic Bulletins & Alerts'}
                </span>
              </div>
              <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c] tracking-tight leading-tight">
                {language === 'pt' ? 'Todas as newsletters' : 'All newsletters'}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#5e5e5e] max-w-lg leading-relaxed font-sans-body">
              {language === 'pt'
                ? 'Análise jurídica rigorosa dos principais diplomas legais, decretos presidenciais e reformas regulatórias que moldam o ambiente económico em Angola.'
                : 'Rigorous legal analysis of key legislative enactments, presidential decrees, and regulatory reforms shaping the economic landscape in Angola.'}
            </p>
          </div>

          {/* Filters Bar: Search & Year Selectors */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'pt'
                    ? 'Pesquisar diploma, decreto ou tema...'
                    : 'Search decree, topic, or keyword...'
                }
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 text-sm text-[#1b1c1c] placeholder-stone-400 focus:outline-none focus:border-[#9e0418] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Year Filters */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5e5e5e] flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3 h-3" />
                <span>{language === 'pt' ? 'Ano:' : 'Year:'}</span>
              </span>

              <button
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer shrink-0 ${
                  selectedYear === 'all'
                    ? 'bg-[#1b1c1c] text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {language === 'pt' ? 'Todos' : 'All'}
              </button>

              {availableYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer shrink-0 ${
                    selectedYear === yr
                      ? 'bg-[#9e0418] text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main List Section: Matching the User's Reference Image Layout */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 pt-12 pb-16">
        {filteredNewsletters.length === 0 ? (
          <div className="bg-white border border-stone-200 p-12 text-center my-8">
            <p className="text-[#5e5e5e] text-base mb-3">
              {language === 'pt'
                ? 'Nenhuma newsletter encontrada com os critérios pesquisados.'
                : 'No newsletters found matching your criteria.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('all');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#9e0418] hover:underline cursor-pointer"
            >
              {language === 'pt' ? 'Limpar filtros' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="space-y-0 divide-y divide-[#1b1c1c]/90">
            {filteredNewsletters.map((item) => (
              <article
                key={item.id}
                className="pt-10 pb-12 first:pt-4 transition-colors"
              >
                <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
                  {/* Left Column: Thematic Photography */}
                  <div className="w-full md:w-64 lg:w-72 aspect-square md:aspect-[4/3] lg:aspect-square shrink-0 overflow-hidden bg-stone-100 border border-stone-200 shadow-xs">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt ? item.imageAlt[language] : item.title[language]}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Right Column: Title and Content (Strictly without "Saiba mais") */}
                  <div className="flex-1 min-w-0">
                    {/* Category & Date badge */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      {item.category && (
                        <span className="text-[11px] uppercase tracking-wider font-bold text-[#9e0418]">
                          {item.category[language]}
                        </span>
                      )}
                      {item.category && item.date && (
                        <span className="text-stone-300">•</span>
                      )}
                      {item.date && (
                        <span className="text-xs text-[#5e5e5e] font-medium">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* Headline Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1b1c1c] tracking-tight leading-snug mb-5 font-serif-headline">
                      {item.title[language]}
                    </h2>

                    {/* Body Summary Text */}
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans-body max-w-4xl">
                      {item.summary[language]}
                    </p>

                    {/* NOTE: "o saiba mais não precisa constar" - No "Saiba mais" button or link */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Subscription Area */}
        <div className="mt-20 pt-12 border-t border-stone-300">
          <NewsletterSection language={language} variant="full" />
        </div>
      </div>
    </div>
  );
};
