import React, { useState } from 'react';
import { NavTab, Language } from '../types';
import { ChevronUp, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { FBLLogo } from './FBLLogo';
import { OFFICE_INFO } from '../data/fblData';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
}) => {
  const [showLegalModal, setShowLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#1b1c1c] text-[#fbf9f9] w-full pt-16 pb-12 border-t border-[#5e5e5e]/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start mb-12">
            {/* Brand & About */}
            <div className="md:col-span-4 flex flex-col gap-5">
              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-4 text-left cursor-pointer group"
              >
                <FBLLogo variant="light" size="md" />
                <div className="flex flex-col border-l border-white/20 pl-4 py-1">
                  <span className="font-serif-headline text-lg font-bold text-white tracking-tight leading-snug">
                    FBL Advogados
                  </span>
                  <span className="text-[11px] tracking-widest text-[#e2e2e2]/70 uppercase font-sans-body">
                    Sociedade de Advogados, RL
                  </span>
                </div>
              </button>

              <p className="text-xs sm:text-sm text-[#e2e2e2]/70 leading-relaxed font-sans-body">
                {language === 'pt' ? (
                  <>
                    Referência na advocacia de negócios em Angola. Mais de duas décadas de rigor jurídico, ética e excelência no acompanhamento de operações estratégicas.
                  </>
                ) : (
                  <>
                    A benchmark in Angolan business law. Over two decades of legal rigor, integrity, and excellence advising strategic transactions.
                  </>
                )}
              </p>
            </div>

            {/* Address & Google Maps */}
            <div className="md:col-span-4 flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <MapPin className="w-4 h-4 text-[#ffdad7]" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-white">
                  {language === 'pt' ? 'Morada & Localização' : 'Address & Location'}
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#e2e2e2]/80">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white bg-white/10 px-2 py-0.5 text-xs border border-white/15">
                    {OFFICE_INFO.building}
                  </span>
                </div>
                <p className="text-[#fbf9f9] leading-relaxed">
                  {OFFICE_INFO.address}
                </p>
                <p className="text-xs text-[#c6c6c7]">
                  {OFFICE_INFO.city}
                </p>
                <div className="pt-2">
                  <a
                    href={OFFICE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffdad7] hover:text-white transition-colors border-b border-[#ffdad7]/40 pb-0.5"
                  >
                    <span>{language === 'pt' ? 'Google Maps: Edifício Kitanda' : 'Google Maps: Edifício Kitanda'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contacts: Phones & Email */}
            <div className="md:col-span-4 flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <Phone className="w-4 h-4 text-[#ffdad7]" />
                <h4 className="font-bold text-xs uppercase tracking-widest text-white">
                  {language === 'pt' ? 'Contactos Telefónicos & E-mail' : 'Phone & Email Contacts'}
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c6c6c7] font-semibold block mb-1">
                    {language === 'pt' ? 'Telefones' : 'Telephones'}
                  </span>
                  <div className="space-y-1 font-mono">
                    {OFFICE_INFO.phones.map((tel) => (
                      <a
                        key={tel}
                        href={`tel:${tel.replace(/\s+/g, '')}`}
                        className="block text-[#fbf9f9] hover:text-[#ffdad7] transition-colors"
                      >
                        {tel}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#c6c6c7] font-semibold block mb-1">
                    {language === 'pt' ? 'Correio Electrónico' : 'Email'}
                  </span>
                  <div className="space-y-1">
                    <a
                      href={`mailto:${OFFICE_INFO.email}`}
                      className="inline-flex items-center gap-1.5 text-[#ffdad7] hover:text-white transition-colors font-mono text-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{OFFICE_INFO.email}</span>
                    </a>
                    <a
                      href="mailto:secretariado@fbladvogados.com"
                      className="block text-[#ffdad7]/80 hover:text-white transition-colors font-mono text-xs"
                    >
                      secretariado@fbladvogados.com
                    </a>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-2 text-xs text-[#c6c6c7]">
                  <Clock className="w-3.5 h-3.5 text-[#ffdad7]/80 shrink-0" />
                  <span>{OFFICE_INFO.schedule}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Links & Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#e2e2e2]/70">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
              <span>
                © {new Date().getFullYear()} FBL Advogados. {language === 'pt' ? 'N.º de inscrição da FBL na Ordem dos Advogados: 44/2017.' : 'Angolan Bar Association (OAA) Registration No.: 44/2017.'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button
                onClick={() => onNavigate('news')}
                className="hover:text-[#ffdad7] transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Notícias' : 'News'}
              </button>
              <button
                onClick={() => onNavigate('newsletters')}
                className="hover:text-[#ffdad7] transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Newsletters' : 'Newsletters'}
              </button>
              <button
                onClick={() => setShowLegalModal('privacidade')}
                className="hover:text-[#ffdad7] transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Privacidade' : 'Privacy'}
              </button>
              <button
                onClick={() => setShowLegalModal('termos')}
                className="hover:text-[#ffdad7] transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Termos e Condições' : 'Terms & Conditions'}
              </button>
              <button
                onClick={() => onNavigate('contacts')}
                className="hover:text-[#ffdad7] transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Contactos & Localização' : 'Contacts & Location'}
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-[#e2e2e2] hover:text-white transition-colors cursor-pointer ml-2"
              >
                <span>{language === 'pt' ? 'Topo' : 'Back to top'}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal terms modal */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-[#1b1c1c]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-stone-200/90 max-w-xl w-full p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="font-serif-headline text-2xl font-bold text-[#1b1c1c] mb-4">
              {showLegalModal === 'privacidade'
                ? language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'
                : language === 'pt' ? 'Termos e Condições' : 'Terms & Conditions'}
            </h3>
            <p className="text-sm text-[#5e5e5e] leading-relaxed mb-6 font-sans-body">
              {showLegalModal === 'privacidade'
                ? language === 'pt'
                  ? 'A FBL Advogados está comprometida com a salvaguarda da privacidade e a proteção de dados pessoais em estrita conformidade com a Lei de Proteção de Dados Pessoais de Angola e o Estatuto da Ordem dos Advogados.'
                  : 'FBL Advogados is committed to protecting the privacy and personal data of its clients under Angolan Personal Data Protection legislation and the Angolan Bar Association Statutes.'
                : language === 'pt'
                  ? 'O conteúdo disponibilizado neste portal destina-se a fins puramente informativos e não constitui aconselhamento jurídico formal.'
                  : 'Content provided on this web platform is for general informational purposes only and does not constitute formal legal counsel.'}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowLegalModal(null)}
                className="bg-[#1b1c1c] text-white px-6 py-2.5 text-xs uppercase font-bold hover:bg-[#9e0418] shadow-sm transition-colors cursor-pointer"
              >
                {language === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
