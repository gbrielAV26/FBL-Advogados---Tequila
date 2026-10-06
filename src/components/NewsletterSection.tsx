import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Bell, Sparkles } from 'lucide-react';

interface NewsletterSectionProps {
  language: Language;
  variant?: 'full' | 'compact' | 'card';
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  language,
  variant = 'full'
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['all']);
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const topics = [
    { id: 'all', pt: 'Todas as Áreas', en: 'All Practice Areas' },
    { id: 'corporate', pt: 'Societário, M&A e Investimento', en: 'Corporate, M&A and Investment' },
    { id: 'banking', pt: 'Bancário, Cambial e Mercado de Capitais', en: 'Banking, Forex & Capital Markets' },
    { id: 'litigation', pt: 'Contencioso Civil, Comercial & Arbitragem', en: 'Civil, Commercial Litigation & Arbitration' },
    { id: 'energy', pt: 'Energias, Recursos Minerais & Petróleo', en: 'Energy, Mining & Oil & Gas' },
    { id: 'tax', pt: 'Direito Fiscal & Administrativo', en: 'Tax & Administrative Law' },
    { id: 'labor', pt: 'Trabalho, Segurança Social & Imigração', en: 'Labor, Social Security & Immigration' },
    { id: 'criminal', pt: 'Contencioso Penal & Compliance', en: 'Criminal Litigation & Compliance' },
  ];

  const handleToggleTopic = (topicId: string) => {
    if (topicId === 'all') {
      setSelectedTopics(['all']);
      return;
    }

    const withoutAll = selectedTopics.filter((t) => t !== 'all');
    if (withoutAll.includes(topicId)) {
      const next = withoutAll.filter((t) => t !== topicId);
      setSelectedTopics(next.length === 0 ? ['all'] : next);
    } else {
      setSelectedTopics([...withoutAll, topicId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@')) {
      setError(
        language === 'pt'
          ? 'Por favor, insira um endereço de e-mail válido.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    if (!consent) {
      setError(
        language === 'pt'
          ? 'Por favor, confirme a autorização para receber as comunicações da FBL.'
          : 'Please check the consent box to receive FBL communications.'
      );
      return;
    }

    // Success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#1b1c1c] text-white p-8 sm:p-12 border border-stone-800 shadow-xl rounded-xs">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#9e0418]/20 border border-[#9e0418]/60 text-[#ffdad7] flex items-center justify-center rounded-full mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#ffdad7] font-semibold block mb-2">
            {language === 'pt' ? 'Inscrição Confirmada' : 'Subscription Confirmed'}
          </span>
          <h3 className="font-serif-headline text-2xl sm:text-3xl font-bold mb-3 text-white">
            {language === 'pt' ? 'Obrigado pelo seu interesse!' : 'Thank you for subscribing!'}
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed mb-6 font-sans-body">
            {language === 'pt'
              ? `O seu endereço ${email} foi registado na nossa lista exclusiva de distribuição. Irá receber as nossas Notas Informativas, Alertas Legislativos e Análises Regulatórias de Angola.`
              : `Your email address ${email} has been registered to our newsletter distribution list. You will receive FBL's Legal Briefings, Regulatory Alerts, and Legislative updates.`}
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setEmail('');
              setName('');
              setOrganization('');
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffdad7] hover:text-white border-b border-[#ffdad7]/40 pb-1 cursor-pointer transition-colors"
          >
            <span>{language === 'pt' ? 'Subscrever outro endereço' : 'Subscribe another address'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="newsletter-area"
      className={`${
        variant === 'compact'
          ? 'bg-stone-900 text-white p-6 sm:p-8'
          : 'bg-[#1b1c1c] text-white p-8 sm:p-12 lg:p-16 border border-stone-800/80 shadow-2xl'
      } rounded-xs relative overflow-hidden`}
    >
      {/* Subtle background glow / motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9e0418]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#ffdad7] mb-4">
            <Bell className="w-3.5 h-3.5 text-[#ffdad7]" />
            <span>{language === 'pt' ? 'Comunicações & Actualidade' : 'Legal Updates & Insights'}</span>
          </div>

          <h2 className="font-serif-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
            {language === 'pt' ? 'Newsletter FBL Advogados' : 'FBL Advogados Newsletter'}
          </h2>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans-body">
            {language === 'pt'
              ? 'Receba periodicamente no seu correio electrónico as nossas Notas Informativas, análises da evolução legislativa em Angola, artigos doutrinários e os principais destaques institucionais da Sociedade.'
              : 'Receive our Legal Briefings, Angolan statutory analyses, thought-leadership articles, and major institutional updates directly in your inbox.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-950/80 border border-red-500/60 text-red-200 text-xs rounded-xs font-sans-body">
              {error}
            </div>
          )}

          {/* Primary inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                {language === 'pt' ? 'E-mail Institucional *' : 'Work Email *'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="exemplo@empresa.co.ao"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-stone-700 text-white placeholder-stone-500 text-sm pl-10 pr-4 py-3 rounded-xs focus:outline-none focus:border-[#9e0418] focus:ring-1 focus:ring-[#9e0418] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                {language === 'pt' ? 'Nome Completo' : 'Full Name'}
              </label>
              <input
                type="text"
                placeholder={language === 'pt' ? 'Seu nome' : 'Your name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-stone-700 text-white placeholder-stone-500 text-sm px-4 py-3 rounded-xs focus:outline-none focus:border-[#9e0418] focus:ring-1 focus:ring-[#9e0418] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                {language === 'pt' ? 'Empresa / Organização' : 'Company / Entity'}
              </label>
              <input
                type="text"
                placeholder={language === 'pt' ? 'Entidade' : 'Organization'}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full bg-white/5 border border-stone-700 text-white placeholder-stone-500 text-sm px-4 py-3 rounded-xs focus:outline-none focus:border-[#9e0418] focus:ring-1 focus:ring-[#9e0418] transition-colors"
              />
            </div>
          </div>

          {/* Practice Area Filters */}
          <div className="pt-2">
            <span className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-2">
              {language === 'pt' ? 'Áreas de Interesse Preferenciais:' : 'Preferred Areas of Interest:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleToggleTopic(topic.id)}
                    className={`text-xs px-3 py-1.5 rounded-xs transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#9e0418] border-[#9e0418] text-white font-semibold shadow-xs'
                        : 'bg-white/5 border-stone-700/80 text-stone-300 hover:border-stone-500 hover:bg-white/10'
                    }`}
                  >
                    {language === 'pt' ? topic.pt : topic.en}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Consent & Submit Button */}
          <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <label className="flex items-start gap-2.5 text-xs text-stone-400 cursor-pointer max-w-xl">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-[#9e0418] cursor-pointer"
              />
              <span className="leading-relaxed">
                {language === 'pt'
                  ? 'Autorizo a FBL Advogados a processar o meu endereço para envio exclusivo de comunicações jurídicas e institucionais, nos termos da Lei de Protecção de Dados Pessoais.'
                  : 'I authorize FBL Advogados to process my email exclusively for delivery of legal and institutional updates, in compliance with Angolan Personal Data Protection Law.'}
              </span>
            </label>

            <button
              type="submit"
              className="bg-[#9e0418] hover:bg-[#800313] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 hover:shadow-lg"
            >
              <span>{language === 'pt' ? 'Subscrever Newsletter' : 'Subscribe Newsletter'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Footer security note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 font-sans-body pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffdad7]" />
            <span>
              {language === 'pt'
                ? 'Privacidade garantida. Pode cancelar a sua subscrição em qualquer altura através do link presente em cada e-mail.'
                : 'Privacy guaranteed. You can unsubscribe at any time via the link included in each email.'}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
