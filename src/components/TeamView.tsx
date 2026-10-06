import React, { useState, useMemo, useEffect } from 'react';
import { TEAM_MEMBERS, PRACTICE_AREAS } from '../data/fblData';
import { TeamMember, Language, NavTab } from '../types';
import {
  Mail,
  Phone,
  GraduationCap,
  X,
  Download,
  Scale,
  Briefcase,
  Award,
  Users,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Handshake,
  Flame,
  Gavel,
  Building2,
  Shield,
  Landmark,
  Coins,
  BriefcaseBusiness,
  FileText
} from 'lucide-react';

interface TeamViewProps {
  language: Language;
  onNavigate: (tab: NavTab) => void;
  initialMemberId?: string | null;
  onClearInitialMember?: () => void;
}

// Visual component replacing photos with elegant red-background icon graphics
interface LawyerVisualProps {
  member: TeamMember;
  aspectClass?: string;
  index?: number;
  inModal?: boolean;
}

// Returns a unique, distinguished icon for each partner based on their role and specialty
const getPartnerIcon = (memberId: string, inModal: boolean, fallbackIndex: number) => {
  const iconClass = `${
    inModal ? 'w-12 h-12' : 'w-8 h-8 sm:w-9 sm:h-9'
  } text-amber-200/95 transition-transform duration-300`;

  switch (memberId) {
    case 'fernando-faria-de-bastos':
      // Sócio Fundador - Arbitragem de Alta Complexidade & Decano
      return <Scale className={iconClass} />;
    case 'paulette-lopes':
      // Sócia Fundadora - M&A, Investimento Privado & Acordos Comerciais
      return <Handshake className={iconClass} />;
    case 'guiomar-lopes':
      // Sócia Fundadora - Petróleo & Gás, Energia e Recursos Minerais
      return <Flame className={iconClass} />;
    case 'victor-ceita':
      // Sócio Administrador Executivo - Contencioso Forense & Tribunais Superiores
      return <Gavel className={iconClass} />;
    case 'tatiana-serrao':
      // Sócia Administradora Executiva - Regulatório, Concorrência & Direito Público
      return <ShieldCheck className={iconClass} />;
    case 'neuza-melao-dias':
      // Sócia Administradora Executiva - Trabalho, Relações Laborais & Segurança Social
      return <Users className={iconClass} />;
    case 'mara-de-sa':
      // Sócia - Imobiliário, Urbanismo & Recuperação de Crédito
      return <Building2 className={iconClass} />;
    case 'adriano-cazenga':
      // Sócio - Direito Penal, Crimes Económicos & Compliance
      return <Shield className={iconClass} />;
    case 'anacleta-cipriano':
      // Associada - Bancário, Financeiro & Mercado de Capitais
      return <Landmark className={iconClass} />;
    default: {
      const fallbackList = [
        <Scale key="1" className={iconClass} />,
        <Handshake key="2" className={iconClass} />,
        <Flame key="3" className={iconClass} />,
        <Gavel key="4" className={iconClass} />,
        <ShieldCheck key="5" className={iconClass} />,
        <Users key="6" className={iconClass} />,
        <Building2 key="7" className={iconClass} />,
        <Shield key="8" className={iconClass} />,
        <Landmark key="9" className={iconClass} />,
        <Award key="10" className={iconClass} />,
        <Coins key="11" className={iconClass} />,
        <BriefcaseBusiness key="12" className={iconClass} />
      ];
      return fallbackList[fallbackIndex % fallbackList.length];
    }
  }
};

export const LawyerIconVisual: React.FC<LawyerVisualProps> = ({
  member,
  aspectClass = 'aspect-[4/3]',
  index = 0,
  inModal = false,
}) => {
  // Red backgrounds alternating by lawyer level and index
  const { bgGradient, iconComponent, levelBadge, accentBorder } = useMemo(() => {
    const isEven = index % 2 === 0;

    switch (member.level) {
      case 'partner':
        return {
          bgGradient: isEven
            ? 'from-[#60020d] via-[#7a0314] to-[#420108]'
            : 'from-[#750313] via-[#63010c] to-[#3a0007]',
          iconComponent: getPartnerIcon(member.id, inModal, index),
          levelBadge: member.role.pt.toUpperCase().includes('FUNDADOR')
            ? (member.role.pt.toUpperCase().includes('FUNDADORA') ? 'SÓCIA FUNDADORA' : 'SÓCIO FUNDADOR')
            : member.role.pt.toUpperCase().includes('ADMINISTRADOR')
            ? (member.role.pt.toUpperCase().includes('ADMINISTRADORA') || member.role.pt.toUpperCase().includes('SÓCIA') ? 'SÓCIA / ADMINISTRADORA EXECUTIVA' : 'SÓCIO / ADMINISTRADOR EXECUTIVO')
            : (member.role.pt.toUpperCase().includes('SÓCIA') ? 'SÓCIA' : 'SÓCIO'),
          accentBorder: 'border-amber-400/30',
        };

      case 'associate':
        return {
          bgGradient: isEven
            ? 'from-[#8f0516] via-[#a80b1f] to-[#5e020d]'
            : 'from-[#9e071a] via-[#850414] to-[#52010b]',
          iconComponent: (
            <Briefcase className={`${inModal ? 'w-12 h-12' : 'w-8 h-8 sm:w-9 sm:h-9'} text-white/95`} />
          ),
          levelBadge: member.role.pt.toUpperCase().includes('ASSOCIADA') ? 'ASSOCIADA' : 'ASSOCIADO',
          accentBorder: 'border-white/30',
        };

      case 'intern':
      default:
        return {
          bgGradient: isEven
            ? 'from-[#ad1326] via-[#bf1c31] to-[#780a18]'
            : 'from-[#b8182d] via-[#9e1022] to-[#690714]',
          iconComponent: (
            <GraduationCap className={`${inModal ? 'w-12 h-12' : 'w-8 h-8 sm:w-9 sm:h-9'} text-white/95`} />
          ),
          levelBadge: 'ESTAGIÁRIO',
          accentBorder: 'border-white/25',
        };
    }
  }, [member.level, member.role.pt, member.id, index, inModal]);

  return (
    <div
      className={`${aspectClass} w-full relative overflow-hidden bg-gradient-to-br ${bgGradient} flex flex-col items-center justify-center p-6 select-none shadow-inner`}
    >
      {/* Background Decorative Guilloché / Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`pattern-${member.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 0 14 L 14 0 L 28 14 L 14 28 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
              <circle cx="14" cy="14" r="3" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${member.id})`} />
        </svg>
      </div>

      {/* Subtle radial ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Level Badge */}
      <div className="absolute top-3 right-3 z-10 max-w-[90%]">
        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/45 backdrop-blur-xs border border-white/20 text-white shadow-sm rounded-xs whitespace-nowrap block text-right">
          {levelBadge}
        </span>
      </div>

      {/* Central Emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div
          className={`${
            inModal ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-20 h-20 sm:w-22 sm:h-22'
          } rounded-full bg-white/10 backdrop-blur-xs border-2 ${accentBorder} flex flex-col items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-white/50 transition-all duration-300`}
        >
          {iconComponent}
          {member.initials && (
            <span className="text-[11px] font-mono tracking-wider font-bold text-white/90 mt-1 uppercase">
              {member.initials}
            </span>
          )}
        </div>
        <span className="mt-2 text-[11px] tracking-widest uppercase font-semibold text-white/70">
          FBL ADVOGADOS
        </span>
      </div>

      {/* Bottom OAA Registration Badge (não exibido para estagiários) */}
      {member.category !== 'interns' && member.oaaNumber && (
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="bg-[#1b1c1c]/80 backdrop-blur-xs text-white/95 text-[10px] sm:text-[11px] uppercase font-mono px-2.5 py-0.5 border border-white/15 rounded-xs">
            {member.oaaNumber}
          </span>
        </div>
      )}
    </div>
  );
};

// Recognition logo badges matching Chambers and Partners, Leaders League, and IFLR 1000
const RecognitionBadgeItem: React.FC<{ name: string }> = ({ name }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('chambers')) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-2 bg-white border border-stone-200/90 rounded-xs shadow-2xs min-w-[130px] sm:min-w-[150px] h-14">
        <span className="font-serif font-black text-base sm:text-lg text-[#111111] tracking-tight leading-tight">
          Chambers
        </span>
        <span className="text-[8px] sm:text-[9px] font-sans font-extrabold tracking-[0.22em] text-[#333333] uppercase mt-0.5">
          AND PARTNERS
        </span>
      </div>
    );
  }

  if (normalized.includes('leaders')) {
    return (
      <div className="flex items-center gap-2.5 px-3.5 py-2 bg-white border border-stone-200/90 rounded-xs shadow-2xs min-w-[150px] sm:min-w-[170px] h-14">
        <div className="w-7 h-7 rounded-full border border-stone-800 flex items-center justify-center shrink-0 p-0.5">
          <svg viewBox="0 0 36 36" className="w-5 h-5 text-[#111111]" fill="currentColor">
            <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 25L25 11" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            <polygon points="21,11 25,12 23,16" />
            <polygon points="17,15 21,16 19,20" />
            <polygon points="13,19 17,20 15,24" />
          </svg>
        </div>
        <span className="font-sans font-black text-xs sm:text-sm tracking-wider text-[#111111] uppercase leading-tight">
          LEADERS LEAGUE
        </span>
      </div>
    );
  }

  if (normalized.includes('iflr')) {
    return (
      <div className="flex items-center gap-3 px-3.5 py-2 bg-white border border-stone-200/90 rounded-xs shadow-2xs min-w-[130px] sm:min-w-[150px] h-14">
        <div className="flex flex-col">
          <span className="font-serif font-black text-base sm:text-lg text-[#111111] leading-none">
            IFLR
          </span>
          <span className="font-sans font-medium text-[11px] text-[#666666] tracking-wider">
            1000
          </span>
        </div>
        <div className="flex -space-x-1 opacity-70">
          <span className="w-3.5 h-3.5 rounded-full border border-[#111111] inline-block"></span>
          <span className="w-3.5 h-3.5 rounded-full border border-stone-600 inline-block"></span>
          <span className="w-3.5 h-3.5 rounded-full border border-stone-400 inline-block"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xs h-14">
      <Award className="w-4 h-4 text-[#9e0418]" />
      <span className="text-xs font-bold text-stone-900">{name}</span>
    </div>
  );
};

// Helper to check if a team member has full bio/profile data
export const hasFullProfile = (member: TeamMember): boolean => {
  return Boolean(
    member.bio?.pt &&
    member.bio.pt.trim().length > 0
  );
};

export const TeamView: React.FC<TeamViewProps> = ({
  language,
  onNavigate,
  initialMemberId,
  onClearInitialMember,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (initialMemberId) {
      const found = TEAM_MEMBERS.find((m) => m.id === initialMemberId);
      if (found && hasFullProfile(found)) {
        setSelectedMember(found);
      }
    }
  }, [initialMemberId]);

  const handleCloseModal = () => {
    setSelectedMember(null);
    onClearInitialMember?.();
  };

  // Grouped members by category, respecting letterhead order
  const partners = useMemo(
    () => TEAM_MEMBERS.filter((m) => m.category === 'partners'),
    []
  );
  const associates = useMemo(
    () => TEAM_MEMBERS.filter((m) => m.category === 'associates'),
    []
  );
  const interns = useMemo(
    () => TEAM_MEMBERS.filter((m) => m.category === 'interns'),
    []
  );

  const categories = [
    {
      id: 'all',
      labelPt: 'Todos os advogados',
      labelEn: 'All Lawyers',
      count: TEAM_MEMBERS.length,
    },
    {
      id: 'partners',
      labelPt: 'Sócios',
      labelEn: 'Partners',
      count: partners.length,
    },
    {
      id: 'associates',
      labelPt: 'Associados',
      labelEn: 'Associates',
      count: associates.length,
    },
    {
      id: 'interns',
      labelPt: 'Estagiários',
      labelEn: 'Trainees',
      count: interns.length,
    },
  ];

  const getPracticeAreaNames = (member: TeamMember): string[] => {
    if (member.practiceAreasCustom && member.practiceAreasCustom[language]) {
      return member.practiceAreasCustom[language];
    }
    return member.practiceAreaIds
      .map((id) => PRACTICE_AREAS.find((pa) => pa.id === id)?.title[language])
      .filter(Boolean) as string[];
  };

  const formatLanguageName = (lang: string) => {
    if (language === 'en') {
      if (lang === 'Português') return 'Portuguese';
      if (lang === 'Inglês') return 'English';
      if (lang === 'Francês') return 'French';
      if (lang === 'Italiano') return 'Italian';
      if (lang === 'Espanhol') return 'Spanish';
    }
    return lang;
  };

  const generateVCard = (member: TeamMember) => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${member.name.split(' ').slice(1).join(' ')};${member.name.split(' ')[0]};;;
FN:${member.name}
ORG:FBL Advogados - Sociedade de Advogados, RL
TITLE:${member.role[language]}
TEL;TYPE=WORK,VOICE:${member.phone}
EMAIL;TYPE=PREF,INTERNET:${member.email}
ADR;TYPE=WORK:;;Edifício Kitanda, Rua Cirilo da Conceição Silva, n.º 12, 2.º andar;Luanda;;;Angola
URL:https://www.fbladvogados.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${member.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to render a group of members in letterhead order
  const renderMemberGrid = (members: TeamMember[], startIndex = 0) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, idx) => {
        const hasProfile = hasFullProfile(member);

        // Members without full profile (interns & associates without information)
        if (!hasProfile) {
          return (
            <div
              key={member.id}
              className="border border-stone-200/90 bg-white overflow-hidden flex flex-col shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] rounded-xs h-fit"
            >
              {/* Card Icon Header with Red Background tailored by Level */}
              <LawyerIconVisual member={member} aspectClass="aspect-[4/3]" index={startIndex + idx} />

              {/* Reduced bottom information box */}
              <div className="px-5 py-3.5 bg-stone-50/40 border-t border-stone-100 flex flex-col justify-center">
                <h3 className="font-serif-headline text-base sm:text-lg font-bold text-[#1b1c1c] leading-snug">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#9e0418] mt-0.5">
                  {member.role[language]}
                </p>
                {member.languages && member.languages.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2 mt-2 border-t border-stone-200/60">
                    {member.languages.map((lang, langIdx) => (
                      <span
                        key={langIdx}
                        className="text-[9px] font-semibold bg-stone-100 text-[#5e5e5e] px-1.5 py-0.5 rounded-xs"
                      >
                        {formatLanguageName(lang)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        }

        return (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="border border-stone-200/90 bg-white group hover:border-[#9e0418]/60 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] rounded-xs"
          >
            {/* Card Icon Header with Red Background tailored by Level */}
            <LawyerIconVisual member={member} aspectClass="aspect-[4/3]" index={startIndex + idx} />

            {/* Member Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-headline text-xl font-bold text-[#1b1c1c] group-hover:text-[#9e0418] transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#9e0418] mb-3">
                  {member.role[language]}
                </p>
                <p className="text-sm text-[#5e5e5e] line-clamp-2 leading-relaxed mb-4 font-sans-body">
                  {member.bio[language]}
                </p>
              </div>

              <div>
                {/* Practice Area Tags on Card */}
                {getPracticeAreaNames(member).length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {getPracticeAreaNames(member).slice(0, 2).map((pa, paIdx) => (
                      <span
                        key={paIdx}
                        className="text-[10px] font-medium bg-[#9e0418]/5 text-[#9e0418] border border-[#9e0418]/15 px-2 py-0.5 rounded-xs line-clamp-1"
                      >
                        {pa}
                      </span>
                    ))}
                    {getPracticeAreaNames(member).length > 2 && (
                      <span className="text-[10px] font-medium text-stone-400 self-center">
                        +{getPracticeAreaNames(member).length - 2}
                      </span>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stone-100">
                  {member.languages.map((lang, langIdx) => (
                    <span
                      key={langIdx}
                      className="text-[10px] font-semibold bg-stone-100 text-[#5e5e5e] px-2 py-0.5 rounded-xs"
                    >
                      {formatLanguageName(lang)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#9e0418] group-hover:bg-[#9e0418]/5 transition-colors">
              <span>{language === 'pt' ? 'Ver Perfil Completo' : 'View Profile'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="py-16 md:py-24 px-5 md:px-12 lg:px-16 bg-[#fbf9f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1b1c1c]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-10 bg-[#9e0418]"></div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
                {language === 'pt' ? 'Capacidade Técnica' : 'Technical Capacity'}
              </span>
            </div>
            <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c]">
              {language === 'pt' ? 'A Nossa Equipa' : 'Our Team'}
            </h1>
            <p className="text-base sm:text-lg text-[#5e5e5e] max-w-2xl mt-3">
              {language === 'pt'
                ? 'Profissionais de reconhecido prestígio, com vasta experiência na jurisdição angolana e internacional, estruturados de acordo com o papel timbrado oficial da FBL Advogados.'
                : 'Distinguished legal professionals with extensive experience in Angolan and international jurisdictions, structured according to the official FBL Advogados letterhead.'}
            </p>
          </div>

          {/* Category Filters (Todos os advogados / Sócios / Associados / Estagiários) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2.5 transition-all cursor-pointer flex items-center gap-2 rounded-xs ${
                  selectedCategory === cat.id
                    ? 'bg-[#1b1c1c] text-white shadow-sm'
                    : 'bg-white border border-stone-200/90 text-[#5e5e5e] hover:border-[#9e0418]/50 hover:text-[#9e0418] shadow-sm'
                }`}
              >
                <span>{language === 'pt' ? cat.labelPt : cat.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-stone-100 text-[#5e5e5e]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content sections divided by category */}
        <div className="pt-12 space-y-16">
          {/* SÓCIOS SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'partners') && (
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#850415] rounded-full"></div>
                  <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c]">
                    {language === 'pt' ? 'Sócios' : 'Partners'}
                  </h2>
                  <span className="text-xs font-mono font-bold bg-[#850415]/10 text-[#850415] px-2.5 py-0.5 rounded-full">
                    {partners.length} {language === 'pt' ? 'Sócios' : 'Partners'}
                  </span>
                </div>
              </div>

              {renderMemberGrid(partners, 0)}
            </section>
          )}

          {/* ASSOCIADOS SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'associates') && (
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#ab0c21] rounded-full"></div>
                  <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c]">
                    {language === 'pt' ? 'Associados' : 'Associates'}
                  </h2>
                  <span className="text-xs font-mono font-bold bg-[#ab0c21]/10 text-[#ab0c21] px-2.5 py-0.5 rounded-full">
                    {associates.length} {language === 'pt' ? 'Associados' : 'Associates'}
                  </span>
                </div>
              </div>

              {renderMemberGrid(associates, partners.length)}
            </section>
          )}

          {/* ESTAGIÁRIOS SECTION */}
          {(selectedCategory === 'all' || selectedCategory === 'interns') && (
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#c7263c] rounded-full"></div>
                  <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c]">
                    {language === 'pt' ? 'Estagiários' : 'Trainees'}
                  </h2>
                  <span className="text-xs font-mono font-bold bg-[#c7263c]/10 text-[#c7263c] px-2.5 py-0.5 rounded-full">
                    {interns.length} {language === 'pt' ? 'Estagiários' : 'Trainees'}
                  </span>
                </div>
              </div>

              {renderMemberGrid(interns, partners.length + associates.length)}
            </section>
          )}
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && hasFullProfile(selectedMember) && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          className="fixed inset-0 z-50 bg-[#1b1c1c]/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white border border-stone-200/90 max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200 rounded-xs">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-[#9e0418] p-2 hover:bg-stone-100 transition-colors cursor-pointer rounded-xs"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-8">
              <div className="sm:col-span-4 aspect-[4/5] border border-stone-200/90 overflow-hidden shadow-sm rounded-xs">
                <LawyerIconVisual
                  member={selectedMember}
                  aspectClass="aspect-[4/5]"
                  inModal={true}
                />
              </div>

              <div className="sm:col-span-8">
                {selectedMember.category !== 'interns' && selectedMember.oaaNumber && (
                  <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418] block mb-1">
                    {selectedMember.oaaNumber}
                  </span>
                )}
                <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold text-[#1b1c1c] mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-sm font-semibold text-[#5e5e5e] mb-4">
                  {selectedMember.role[language]}
                </p>

                <div className="space-y-2 text-sm text-[#1b1c1c] border-t border-stone-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#9e0418]" />
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="hover:text-[#9e0418] transition-colors"
                    >
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#9e0418]" />
                    <span>{selectedMember.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-[#5e5e5e] uppercase">
                      {language === 'pt' ? 'Idiomas:' : 'Languages:'}
                    </span>
                    <span className="text-xs">
                      {selectedMember.languages.map(formatLanguageName).join(' • ')}
                    </span>
                  </div>

                  {/* Practice Areas */}
                  {getPracticeAreaNames(selectedMember).length > 0 && (
                    <div className="pt-3 border-t border-stone-100">
                      <span className="font-semibold text-xs text-[#5e5e5e] uppercase tracking-wider block mb-2">
                        {language === 'pt' ? 'Área de Prática' : 'Practice Areas'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {getPracticeAreaNames(selectedMember).map((pa, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#9e0418]/5 text-[#9e0418] font-medium px-2.5 py-1 rounded-xs border border-[#9e0418]/20"
                          >
                            {pa}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="border-t border-stone-100 pt-6 mb-6">
              <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c] mb-3">
                {language === 'pt' ? 'Biografia Profissional' : 'Professional Biography'}
              </h4>
              <div className="space-y-3">
                {selectedMember.bio[language].split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed font-sans-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Experience */}
            {selectedMember.experience && selectedMember.experience[language]?.length > 0 && (
              <div className="border-t border-stone-100 pt-6 mb-6">
                <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#9e0418]" />
                  <span>{language === 'pt' ? 'Experiência' : 'Experience'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedMember.experience[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1b1c1c] leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#9e0418] mt-2 shrink-0 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recognition */}
            {selectedMember.recognitions && selectedMember.recognitions.length > 0 && (
              <div className="border-t border-stone-100 pt-6 mb-6">
                <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#9e0418]" />
                  <span>
                    {selectedMember.recognitions.length > 1
                      ? language === 'pt' ? 'Reconhecimentos' : 'Recognitions'
                      : language === 'pt' ? 'Reconhecimento' : 'Recognition'}
                  </span>
                </h4>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {selectedMember.recognitions.map((rec, idx) => (
                    <RecognitionBadgeItem key={idx} name={rec} />
                  ))}
                </div>
              </div>
            )}

            {/* Education & Qualifications */}
            <div className="border-t border-stone-100 pt-6 mb-8">
              <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#9e0418]" />
                <span>{language === 'pt' ? 'Habilitações académicas' : 'Education & Qualifications'}</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedMember.education[language].map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#1b1c1c]">
                    <span className="w-1.5 h-1.5 bg-[#9e0418] mt-2 shrink-0"></span>
                    <span className="leading-snug">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-6">
              <button
                onClick={() => generateVCard(selectedMember)}
                className="inline-flex items-center gap-2 border border-stone-300 px-4 py-2.5 text-xs uppercase font-bold tracking-wider text-[#1b1c1c] hover:bg-stone-100 transition-colors cursor-pointer rounded-xs"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'pt' ? 'Descarregar vCard' : 'Download vCard'}</span>
              </button>

              <button
                onClick={() => {
                  setSelectedMember(null);
                  onNavigate('contacts');
                }}
                className="bg-[#9e0418] text-white px-6 py-2.5 text-xs uppercase font-bold tracking-wider hover:bg-[#7a0313] shadow-sm transition-colors cursor-pointer rounded-xs"
              >
                {language === 'pt' ? 'Agendar Reunião' : 'Schedule Meeting'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

