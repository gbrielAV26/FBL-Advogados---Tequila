import React, { useState } from 'react';
import { NavTab, Language } from '../types';
import { Globe, Menu, X, Search } from 'lucide-react';
import { FBLLogo } from './FBLLogo';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  language,
  onToggleLanguage,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; labelPt: string; labelEn: string }[] = [
    { id: 'about', labelPt: 'Quem Somos', labelEn: 'About Us' },
    { id: 'practice-areas', labelPt: 'Áreas de Prática', labelEn: 'Practice Areas' },
    { id: 'team', labelPt: 'Equipa', labelEn: 'Team' },
    { id: 'news', labelPt: 'Notícias', labelEn: 'News' },
    { id: 'newsletters', labelPt: 'Newsletters', labelEn: 'Newsletters' },
    { id: 'publications', labelPt: 'Publicações', labelEn: 'Insights' },
    { id: 'contacts', labelPt: 'Contactos', labelEn: 'Contacts' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#fbf9f9]/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-[#1b1c1c]/10 transition-colors duration-200">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16 h-20">
        {/* Official FBL Advogados Logo: Red Square outline with black text */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('about')}
          className="flex items-center gap-3 group text-left cursor-pointer transition-transform group-hover:scale-105"
        >
          <FBLLogo variant="dark" size="sm" />
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[13px] lg:text-[14px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#9e0418] border-b-2 border-[#9e0418] pb-1'
                      : 'text-[#5e5e5e] hover:text-[#9e0418] pb-1 border-b-2 border-transparent'
                  }`}
                >
                  {language === 'pt' ? item.labelPt : item.labelEn}
                </button>
              </li>
            );
          })}

          {/* Quick Search */}
          <li>
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              title={language === 'pt' ? 'Pesquisar no site' : 'Search site'}
              className="p-1.5 text-[#5e5e5e] hover:text-[#9e0418] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </li>

          {/* Language Toggle */}
          <li className="flex items-center pl-2 border-l border-[#1b1c1c]/10">
            <button
              id="language-toggle-btn"
              onClick={onToggleLanguage}
              className="text-[13px] font-bold text-[#5e5e5e] hover:text-[#9e0418] transition-all flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
              aria-label="Alternar idioma EN/PT"
            >
              <Globe className="w-4 h-4 text-[#9e0418]" />
              <span>{language === 'pt' ? 'EN / PT' : 'PT / EN'}</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onToggleLanguage}
            className="text-xs font-bold text-[#9e0418] border border-[#9e0418]/30 px-2 py-1 bg-white"
          >
            {language.toUpperCase()}
          </button>
          <button
            id="mobile-menu-toggle"
            aria-label="Abrir Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1b1c1c] p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f9] border-b border-[#1b1c1c]/15 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-base font-semibold w-full text-left py-2 border-b border-[#1b1c1c]/5 ${
                      isActive ? 'text-[#9e0418] font-bold pl-2 border-l-4 border-l-[#9e0418]' : 'text-[#1b1c1c]'
                    }`}
                  >
                    {language === 'pt' ? item.labelPt : item.labelEn}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
