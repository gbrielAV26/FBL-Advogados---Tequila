import React, { useState } from 'react';
import { NavTab, Language } from './types';
import { findTeamMemberByName } from './data/fblData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HomeNewsTeaser } from './components/HomeNewsTeaser';
import { PracticeAreasView } from './components/PracticeAreasView';
import { TeamView } from './components/TeamView';
import { NewsView } from './components/NewsView';
import { NewslettersView } from './components/NewslettersView';
import { PublicationsView } from './components/PublicationsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { RecognitionModal } from './components/RecognitionModal';
import { QuickSearchModal } from './components/QuickSearchModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('about');
  const [language, setLanguage] = useState<Language>('pt');
  const [activeRecognitionId, setActiveRecognitionId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleNavigate = (tab: NavTab) => {
    setSelectedTeamMemberId(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTeamMemberByName = (name: string) => {
    const member = findTeamMemberByName(name);
    if (member) {
      setSelectedTeamMemberId(member.id);
    }
    setCurrentTab('team');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTeamMemberById = (memberId: string) => {
    setSelectedTeamMemberId(memberId);
    setCurrentTab('team');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fbf9f9] text-[#1b1c1c] font-sans-body antialiased min-h-screen flex flex-col selection:bg-[#9e0418] selection:text-white">
      {/* Top Header Navbar */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        {currentTab === 'about' || currentTab === 'home' ? (
          <>
            <HeroSection onNavigate={handleNavigate} language={language} />
            <AboutSection
              language={language}
              onOpenRecognition={(recId) => setActiveRecognitionId(recId)}
            />
            <HomeNewsTeaser language={language} onNavigate={handleNavigate} />
          </>
        ) : currentTab === 'practice-areas' ? (
          <PracticeAreasView
            language={language}
            onNavigate={handleNavigate}
            onSelectTeamMemberByName={handleSelectTeamMemberByName}
          />
        ) : currentTab === 'team' ? (
          <TeamView
            language={language}
            onNavigate={handleNavigate}
            initialMemberId={selectedTeamMemberId}
            onClearInitialMember={() => setSelectedTeamMemberId(null)}
          />
        ) : currentTab === 'news' ? (
          <NewsView language={language} onNavigate={handleNavigate} />
        ) : currentTab === 'newsletters' ? (
          <NewslettersView language={language} onNavigate={handleNavigate} />
        ) : currentTab === 'publications' ? (
          <PublicationsView language={language} />
        ) : currentTab === 'contacts' ? (
          <ContactView language={language} />
        ) : null}
      </main>

      {/* Footer matching exact HTML design */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
      />

      {/* Recognition Details Modal */}
      <RecognitionModal
        recognitionId={activeRecognitionId}
        onClose={() => setActiveRecognitionId(null)}
        language={language}
      />

      {/* Quick Global Search Modal */}
      <QuickSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
        onNavigate={handleNavigate}
        onSelectTeamMember={handleSelectTeamMemberById}
      />
    </div>
  );
}
