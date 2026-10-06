import React, { useState, useMemo } from 'react';
import { PRACTICE_AREAS, TEAM_MEMBERS, PUBLICATIONS, NEWS_ITEMS, NEWSLETTERS } from '../data/fblData';
import { Language, NavTab } from '../types';
import { Search, X, Briefcase, User, BookOpen, ArrowRight, Newspaper, FileText } from 'lucide-react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigate: (tab: NavTab) => void;
  onSelectTeamMember?: (id: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  language,
  onNavigate,
  onSelectTeamMember,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return { practiceAreas: [], team: [], news: [], publications: [] };
    const q = query.toLowerCase();

    const practiceAreas = PRACTICE_AREAS.filter(
      (pa) =>
        pa.title[language].toLowerCase().includes(q) ||
        pa.shortDescription[language].toLowerCase().includes(q)
    );

    const team = TEAM_MEMBERS.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role[language].toLowerCase().includes(q) ||
        m.bio[language].toLowerCase().includes(q) ||
        m.languages.some((l) => {
          const lLower = l.toLowerCase();
          return (
            lLower.includes(q) ||
            (q.includes('franc') && lLower.includes('franc')) ||
            (q.includes('fren') && lLower.includes('franc')) ||
            (q.includes('ital') && lLower.includes('ital'))
          );
        })
    );

    const news = NEWS_ITEMS.filter(
      (n) =>
        n.title[language].toLowerCase().includes(q) ||
        n.summary[language].toLowerCase().includes(q) ||
        n.category[language].toLowerCase().includes(q) ||
        n.year.includes(q)
    );

    const newsletters = NEWSLETTERS.filter(
      (nl) =>
        nl.title[language].toLowerCase().includes(q) ||
        nl.summary[language].toLowerCase().includes(q) ||
        (nl.category && nl.category[language].toLowerCase().includes(q)) ||
        (nl.year && nl.year.includes(q))
    );

    const publications = PUBLICATIONS.filter(
      (p) =>
        p.title[language].toLowerCase().includes(q) ||
        p.summary[language].toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
    );

    return { practiceAreas, team, news, newsletters, publications };
  }, [query, language]);

  if (!isOpen) return null;

  const totalResults =
    results.practiceAreas.length +
    results.team.length +
    results.news.length +
    results.newsletters.length +
    results.publications.length;

  return (
    <div className="fixed inset-0 z-50 bg-[#1b1c1c]/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-white border border-stone-200/90 max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-150">
        {/* Search header */}
        <div className="p-4 sm:p-6 bg-white border-b border-stone-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9e0418] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder={
              language === 'pt'
                ? 'Pesquise por áreas, advogados, artigos ou termos jurídicos...'
                : 'Search practice areas, attorneys, articles, or legal topics...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base sm:text-lg text-[#1b1c1c] focus:outline-none placeholder:text-stone-400"
          />
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-[#9e0418] p-1.5 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-6 overflow-y-auto space-y-6 max-h-[60vh]">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-sm text-[#5e5e5e]">
              {language === 'pt'
                ? 'Digite para pesquisar em toda a estrutura do portal da FBL Advogados.'
                : 'Type to search across practice areas, team members, and legal briefings.'}
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-sm text-[#5e5e5e]">
              {language === 'pt'
                ? 'Nenhum resultado encontrado para o termo pesquisado.'
                : 'No results found matching your query.'}
            </div>
          ) : (
            <>
              {/* Practice Areas Results */}
              {results.practiceAreas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] mb-3">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Áreas de Prática' : 'Practice Areas'}</span>
                  </div>
                  <div className="space-y-2">
                    {results.practiceAreas.map((pa) => (
                      <button
                        key={pa.id}
                        onClick={() => {
                          onClose();
                          onNavigate('practice-areas');
                        }}
                        className="w-full text-left p-3.5 bg-stone-50/70 border border-stone-200/80 hover:border-[#9e0418]/50 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="font-semibold text-sm text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors">
                            {pa.title[language]}
                          </div>
                          <div className="text-xs text-[#5e5e5e] line-clamp-1 mt-0.5">
                            {pa.shortDescription[language]}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#9e0418] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Results */}
              {results.team.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] mb-3">
                    <User className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Advogados & Sócios' : 'Attorneys & Partners'}</span>
                  </div>
                  <div className="space-y-2">
                      {results.team.map((m) => {
                        const hasBio = Boolean(m.bio?.pt && m.bio.pt.trim().length > 0);
                        return (
                          <button
                            key={m.id}
                            onClick={() => {
                              onClose();
                              if (hasBio && onSelectTeamMember) {
                                onSelectTeamMember(m.id);
                              } else {
                                onNavigate('team');
                              }
                            }}
                            className="w-full text-left p-3.5 bg-stone-50/70 border border-stone-200/80 hover:border-[#9e0418]/50 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                          >
                            <div>
                              <div className="font-semibold text-sm text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors">
                                {m.name}
                              </div>
                              <div className="text-xs text-[#5e5e5e] mt-0.5">{m.role[language]}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#9e0418] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* News Results */}
              {results.news.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] mb-3">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Notícias & Destaques' : 'News & Press Releases'}</span>
                  </div>
                  <div className="space-y-2">
                    {results.news.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onClose();
                          onNavigate('news');
                        }}
                        className="w-full text-left p-3.5 bg-stone-50/70 border border-stone-200/80 hover:border-[#9e0418]/50 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="pr-2">
                          <div className="font-semibold text-sm text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors line-clamp-1">
                            {n.title[language]}
                          </div>
                          <div className="text-xs text-[#5e5e5e] mt-0.5 flex items-center gap-2">
                            <span className="font-medium text-[#9e0418]">{n.category[language]}</span>
                            <span>•</span>
                            <span>{n.date}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#9e0418] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletters Results */}
              {results.newsletters.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] mb-3">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Newsletters & Alertas Legislativos' : 'Newsletters & Legal Briefings'}</span>
                  </div>
                  <div className="space-y-2">
                    {results.newsletters.map((nl) => (
                      <button
                        key={nl.id}
                        onClick={() => {
                          onClose();
                          onNavigate('newsletters');
                        }}
                        className="w-full text-left p-3.5 bg-stone-50/70 border border-stone-200/80 hover:border-[#9e0418]/50 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div className="pr-2">
                          <div className="font-semibold text-sm text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors line-clamp-1">
                            {nl.title[language]}
                          </div>
                          <div className="text-xs text-[#5e5e5e] mt-0.5 flex items-center gap-2">
                            {nl.category && (
                              <>
                                <span className="font-medium text-[#9e0418]">{nl.category[language]}</span>
                                <span>•</span>
                              </>
                            )}
                            <span>{nl.date || nl.year}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#9e0418] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications Results */}
              {results.publications.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9e0418] mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === 'pt' ? 'Publicações & Análises' : 'Publications & Insights'}</span>
                  </div>
                  <div className="space-y-2">
                    {results.publications.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onNavigate('publications');
                        }}
                        className="w-full text-left p-3.5 bg-stone-50/70 border border-stone-200/80 hover:border-[#9e0418]/50 hover:bg-white hover:shadow-sm transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="font-semibold text-sm text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors">
                            {p.title[language]}
                          </div>
                          <div className="text-xs text-[#5e5e5e] mt-0.5">{p.author} • {p.date}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#9e0418] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
