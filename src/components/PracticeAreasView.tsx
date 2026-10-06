import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/fblData';
import { PracticeArea, Language, NavTab } from '../types';
import { Search, ArrowRight, CheckCircle2, ChevronRight, X, User, Table as TableIcon, LayoutGrid, Briefcase, Users } from 'lucide-react';

interface PracticeAreasViewProps {
  language: Language;
  onSelectTeamMemberByName?: (name: string) => void;
  onNavigate: (tab: NavTab) => void;
}

// Ensure honorific titles like "Dr." or "Dra." are never prepended to lawyer names in practice areas
const stripHonorifics = (name: string): string => {
  if (!name) return '';
  return name.replace(/\b(dr[a]?\.|doutor[a]?)\s+/gi, '').trim();
};

export const PracticeAreasView: React.FC<PracticeAreasViewProps> = ({
  language,
  onSelectTeamMemberByName,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const [viewMode, setViewMode] = useState<'both' | 'table' | 'grid'>('both');

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    const title = area.title[language].toLowerCase();
    const desc = area.shortDescription[language].toLowerCase();
    const partner = (area.leadPartner || '').toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || desc.includes(query) || partner.includes(query);
  });

  return (
    <div className="py-16 md:py-24 px-5 md:px-12 lg:px-16 bg-[#fbf9f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1b1c1c]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-10 bg-[#9e0418]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                {language === 'pt' ? 'Competência Jurídica' : 'Legal Expertise'}
              </span>
            </div>
            <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c]">
              {language === 'pt' ? 'Áreas de Prática' : 'Practice Areas'}
            </h1>
            <p className="text-base sm:text-lg text-[#5e5e5e] max-w-2xl mt-3">
              {language === 'pt'
                ? 'Assessoria jurídica multidisciplinar e de alto nível técnico para operações estratégicas em Angola.'
                : 'Multidisciplinary legal counsel of premier technical quality for strategic operations in Angola.'}
            </p>
          </div>

          {/* Search & View Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* View Mode Buttons */}
            <div className="inline-flex bg-white border border-stone-200/90 p-1 shadow-xs self-start sm:self-auto">
              <button
                onClick={() => setViewMode('both')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'both'
                    ? 'bg-[#9e0418] text-white shadow-xs'
                    : 'text-[#5e5e5e] hover:text-[#1b1c1c]'
                }`}
                title={language === 'pt' ? 'Ver Tabela e Grelha' : 'View Both'}
              >
                <span>{language === 'pt' ? 'Completo' : 'All'}</span>
              </button>

              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'table'
                    ? 'bg-[#9e0418] text-white shadow-xs'
                    : 'text-[#5e5e5e] hover:text-[#1b1c1c]'
                }`}
                title={language === 'pt' ? 'Apenas Tabela de Sócios Responsáveis' : 'Table View'}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Tabela' : 'Table'}</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-[#9e0418] text-white shadow-xs'
                    : 'text-[#5e5e5e] hover:text-[#1b1c1c]'
                }`}
                title={language === 'pt' ? 'Apenas Grelha Detalhada' : 'Grid View'}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Grelha' : 'Cards'}</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64 md:w-72">
              <input
                type="text"
                placeholder={language === 'pt' ? 'Pesquisar área ou sócio...' : 'Search area or partner...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-stone-200/90 px-4 py-2.5 pl-10 text-sm shadow-xs focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] text-[#1b1c1c] transition-all"
              />
              <Search className="w-4 h-4 text-[#5e5e5e] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Executive Table: Áreas de Prática vs. Sócios Responsáveis */}
        {(viewMode === 'both' || viewMode === 'table') && (
          <div className="mt-8 bg-white border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#1b1c1c] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#9e0418]">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-[#9e0418]" />
                <h2 className="font-serif-headline text-base sm:text-lg font-bold tracking-wide">
                  {language === 'pt' ? 'Quadro de Áreas de Prática & Sócios Responsáveis' : 'Practice Areas & Responsible Partners'}
                </h2>
              </div>
              <span className="text-[11px] uppercase tracking-wider text-stone-300 font-semibold">
                {filteredAreas.length} {language === 'pt' ? 'Áreas Registadas' : 'Registered Areas'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50/90 border-b border-stone-200/80 text-[11px] uppercase tracking-wider font-bold text-[#5e5e5e]">
                    <th className="py-3.5 px-6 font-bold w-12 text-center">#</th>
                    <th className="py-3.5 px-6 font-bold">{language === 'pt' ? 'Área de Prática' : 'Practice Area'}</th>
                    <th className="py-3.5 px-6 font-bold">{language === 'pt' ? 'Sócios Responsáveis' : 'Responsible Partners'}</th>
                    <th className="py-3.5 px-6 font-bold text-right">{language === 'pt' ? 'Consulta' : 'Details'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-sm font-sans-body">
                  {filteredAreas.map((area, index) => (
                    <tr
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className="hover:bg-[#9e0418]/5 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-6 text-center text-xs font-bold text-[#9e0418] font-serif-headline">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-col">
                          <span className="font-serif-headline font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors text-sm sm:text-base">
                            {area.title[language]}
                          </span>
                          <span className="text-xs text-[#5e5e5e] line-clamp-1 mt-0.5 max-w-xl">
                            {area.shortDescription[language]}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {stripHonorifics(area.leadPartner)
                            .split('+')
                            .map((pName, pIdx) => {
                              const clean = pName.trim();
                              return (
                                <button
                                  key={pIdx}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectTeamMemberByName?.(clean);
                                  }}
                                  title={
                                    language === 'pt'
                                      ? `Ver perfil de ${clean}`
                                      : `View profile of ${clean}`
                                  }
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-50 hover:bg-[#9e0418] hover:text-white border border-stone-200/90 hover:border-[#9e0418] text-[#1b1c1c] font-semibold text-xs transition-all shadow-2xs cursor-pointer group/partner"
                                >
                                  <Users className="w-3.5 h-3.5 text-[#9e0418] group-hover/partner:text-white transition-colors" />
                                  <span>{clean}</span>
                                </button>
                              );
                            })}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedArea(area);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9e0418] hover:text-[#7a0313] transition-colors cursor-pointer"
                        >
                          <span>{language === 'pt' ? 'Ver Detalhes' : 'View Details'}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Practice Areas Cards Grid */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div className="pt-10">
            {viewMode === 'both' && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#9e0418]"></div>
                <h3 className="font-serif-headline text-lg sm:text-xl font-bold text-[#1b1c1c]">
                  {language === 'pt' ? 'Grelha Detalhada de Áreas de Prática' : 'Detailed Practice Areas Overview'}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredAreas.map((area) => (
                <div
                  key={area.id}
                  className="border border-stone-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-[#9e0418]/50 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.07)] transition-all duration-300 group shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] relative overflow-hidden"
                >
                  {/* Image banner preview */}
                  <div className="h-44 w-full mb-6 overflow-hidden bg-stone-100 border border-stone-100 relative">
                    <img
                      src={area.image}
                      alt={area.title[language]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif-headline text-xl font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors leading-tight mb-3">
                      {area.title[language]}
                    </h3>

                    <p className="text-sm text-[#5e5e5e] leading-relaxed mb-6 font-sans-body">
                      {area.shortDescription[language]}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                      {area.highlights[language].slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#1b1c1c]">
                          <span className="w-1.5 h-1.5 bg-[#9e0418] mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto gap-2">
                    <div className="flex flex-col pr-2">
                      <span className="text-[10px] text-[#5e5e5e] uppercase tracking-wider font-semibold">
                        {language === 'pt' ? 'Sócios Responsáveis' : 'Responsible Partners'}
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        {stripHonorifics(area.leadPartner)
                          .split('+')
                          .map((pName, pIdx) => {
                            const clean = pName.trim();
                            return (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectTeamMemberByName?.(clean);
                                }}
                                title={
                                  language === 'pt'
                                    ? `Ver perfil de ${clean}`
                                    : `View profile of ${clean}`
                                }
                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 hover:bg-[#9e0418] hover:text-white border border-stone-200 hover:border-[#9e0418] text-[#1b1c1c] text-xs font-semibold rounded-xs transition-all cursor-pointer group/cardp"
                              >
                                <Users className="w-3 h-3 text-[#9e0418] group-hover/cardp:text-white transition-colors shrink-0" />
                                <span>{clean}</span>
                              </button>
                            );
                          })}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedArea(area)}
                      className="text-xs font-bold uppercase tracking-wider text-[#9e0418] flex items-center gap-1.5 px-3 py-1.5 bg-[#9e0418]/5 group-hover:bg-[#9e0418] group-hover:text-white transition-all cursor-pointer shrink-0"
                    >
                      <span>{language === 'pt' ? 'Detalhes' : 'Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredAreas.length === 0 && (
          <div className="text-center py-16 bg-white border border-stone-200/90 p-8 mt-8 shadow-sm">
            <p className="text-lg text-[#5e5e5e]">
              {language === 'pt'
                ? 'Nenhuma área de prática encontrada para os termos pesquisados.'
                : 'No practice areas found matching your query.'}
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-sm font-bold text-[#9e0418] underline cursor-pointer"
            >
              {language === 'pt' ? 'Limpar filtro' : 'Clear filter'}
            </button>
          </div>
        )}
      </div>

      {/* Practice Area Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-[#1b1c1c]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200/90 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-[#9e0418] p-2 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-8 bg-[#9e0418]"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                {language === 'pt' ? 'Departamento Especializado' : 'Specialized Department'}
              </span>
            </div>

            <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c] mb-6">
              {selectedArea.title[language]}
            </h2>

            <div className="h-60 w-full mb-6 overflow-hidden border border-stone-100 bg-stone-100">
              <img
                src={selectedArea.image}
                alt={selectedArea.title[language]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none text-base text-[#1b1c1c] leading-relaxed mb-8">
              <p className="font-sans-body">{selectedArea.fullDescription[language]}</p>
            </div>

            <div className="border-t border-b border-stone-100 py-6 mb-8">
              <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c] mb-4">
                {language === 'pt' ? 'Principais Linhas de Intervenção' : 'Key Areas of Intervention'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedArea.highlights[language].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9e0418] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#5e5e5e] font-sans-body">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div>
                <span className="text-xs text-[#5e5e5e] uppercase tracking-wider block font-semibold mb-1.5">
                  {language === 'pt' ? 'Sócios Responsáveis (clique para ver o perfil)' : 'Responsible Partners (click to view profile)'}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {stripHonorifics(selectedArea.leadPartner)
                    .split('+')
                    .map((partnerName, idx) => {
                      const cleanName = partnerName.trim();
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedArea(null);
                            onSelectTeamMemberByName?.(cleanName);
                          }}
                          title={
                            language === 'pt'
                              ? `Ver perfil de ${cleanName}`
                              : `View profile of ${cleanName}`
                          }
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-100 hover:bg-[#9e0418] hover:text-white border border-stone-200 hover:border-[#9e0418] text-sm font-bold text-[#1b1c1c] transition-all cursor-pointer group/modalpartner rounded-xs shadow-2xs"
                        >
                          <User className="w-3.5 h-3.5 text-[#9e0418] group-hover/modalpartner:text-white transition-colors" />
                          <span>{cleanName}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#5e5e5e] group-hover/modalpartner:text-white group-hover/modalpartner:translate-x-0.5 transition-transform" />
                        </button>
                      );
                    })}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedArea(null);
                    onNavigate('contacts');
                  }}
                  className="bg-[#9e0418] text-white px-6 py-3 text-xs uppercase font-bold tracking-wider hover:bg-[#7a0313] shadow-sm transition-colors cursor-pointer"
                >
                  {language === 'pt' ? 'Solicitar Consulta' : 'Request Consultation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
