import React, { useState } from 'react';
import { OFFICE_INFO, PRACTICE_AREAS } from '../data/fblData';
import { Language } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';

interface ContactViewProps {
  language: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ language }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'consultation' | 'careers'>('consultation');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    practiceArea: 'corporate-ma',
    subject: '',
    message: '',
    preferredDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state clear after some time or keep thank you note
    }, 5000);
  };

  return (
    <div className="py-16 md:py-24 px-5 md:px-12 lg:px-16 bg-[#fbf9f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="pb-10 border-b border-[#1b1c1c]/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-[#9e0418]"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
              {language === 'pt' ? 'Atendimento Institucional' : 'Client Relations'}
            </span>
          </div>
          <h1 className="font-serif-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1c]">
            {language === 'pt' ? 'Contactos & Localização' : 'Contacts & Office'}
          </h1>
          <p className="text-base sm:text-lg text-[#5e5e5e] max-w-2xl mt-3">
            {language === 'pt'
              ? 'Sede em Luanda, prestando apoio jurídico contínuo a empresas nacionais e investidores globais.'
              : 'Headquartered in Luanda, providing steadfast legal counsel to domestic enterprises and global investors.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Left Column: Office info & Map preview */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border border-stone-200/90 bg-white p-8 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]">
              <h3 className="font-serif-headline text-2xl font-bold text-[#1b1c1c] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#9e0418]/5 border border-[#9e0418]/15 flex items-center justify-center text-[#9e0418]">
                  <Building2 className="w-5 h-5" />
                </div>
                <span>{language === 'pt' ? 'Sede em Luanda' : 'Luanda Headquarters'}</span>
              </h3>

              <div className="space-y-6 text-sm text-[#1b1c1c]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#9e0418] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">{OFFICE_INFO.name}</span>
                    <span className="inline-block mt-1 font-semibold text-[#9e0418] bg-[#9e0418]/5 px-2 py-0.5 text-xs border border-[#9e0418]/20">
                      {OFFICE_INFO.building}
                    </span>
                    <p className="text-[#5e5e5e] mt-1.5">{OFFICE_INFO.address}</p>
                    <p className="text-[#5e5e5e] text-xs mt-0.5">{OFFICE_INFO.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#9e0418] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1.5">{language === 'pt' ? 'Telefones / PBX' : 'Phone Numbers / PBX'}</span>
                    <div className="space-y-1">
                      {OFFICE_INFO.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s+/g, '')}`}
                          className="block text-[#5e5e5e] hover:text-[#9e0418] transition-colors font-mono text-xs sm:text-sm"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#9e0418] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">{language === 'pt' ? 'Correio Electrónico' : 'Email Address'}</span>
                    <div className="space-y-1 mt-1">
                      <div>
                        <span className="text-[10px] text-[#5e5e5e] uppercase tracking-wider block font-semibold">
                          {language === 'pt' ? 'Geral:' : 'General:'}
                        </span>
                        <a href={`mailto:${OFFICE_INFO.email}`} className="text-[#9e0418] hover:underline font-mono text-xs sm:text-sm">
                          {OFFICE_INFO.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#5e5e5e] uppercase tracking-wider block font-semibold">
                          {language === 'pt' ? 'Secretariado:' : 'Secretariat:'}
                        </span>
                        <a href="mailto:secretariado@fbladvogados.com" className="text-[#9e0418] hover:underline font-mono text-xs sm:text-sm">
                          secretariado@fbladvogados.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#9e0418] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">{language === 'pt' ? 'Horário de Funcionamento' : 'Business Hours'}</span>
                    <p className="text-[#5e5e5e] mt-1">{OFFICE_INFO.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Luanda Map Card */}
            <div className="border border-stone-200/90 bg-white p-3 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)]">
              <div className="relative h-64 bg-stone-100 overflow-hidden flex items-center justify-center border border-stone-100">
                {/* Visual architectural map background */}
                <div className="absolute inset-0 bg-[#e4e2e2] opacity-70">
                  <div className="w-full h-full bg-[radial-gradient(#1b1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                </div>

                <div className="relative z-10 text-center p-6 bg-white/95 border border-stone-200/80 max-w-xs shadow-lg backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-[#9e0418] mx-auto mb-2 animate-bounce" />
                  <span className="font-serif-headline text-base font-bold text-[#1b1c1c] block">
                    {OFFICE_INFO.building}
                  </span>
                  <span className="text-xs text-[#5e5e5e] block mt-1">
                    {OFFICE_INFO.address}, Luanda
                  </span>
                  <a
                    href={OFFICE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-xs font-bold uppercase tracking-wider text-[#9e0418] border-b border-[#9e0418] pb-0.5 hover:text-[#c1272d]"
                  >
                    {language === 'pt' ? 'Abrir no Google Maps →' : 'Open in Google Maps →'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Careers Form */}
          <div className="lg:col-span-7">
            <div className="border border-stone-200/90 bg-white p-8 sm:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]">
              {/* Sub-tab selection */}
              <div className="flex border-b border-stone-200 mb-8">
                <button
                  onClick={() => {
                    setActiveSubTab('consultation');
                    setFormSubmitted(false);
                  }}
                  className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer mr-6 ${
                    activeSubTab === 'consultation'
                      ? 'text-[#9e0418] border-b-2 border-[#9e0418]'
                      : 'text-[#5e5e5e] hover:text-[#1b1c1c]'
                  }`}
                >
                  {language === 'pt' ? 'Solicitação de Consulta' : 'Request Consultation'}
                </button>
                <button
                  onClick={() => {
                    setActiveSubTab('careers');
                    setFormSubmitted(false);
                  }}
                  className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeSubTab === 'careers'
                      ? 'text-[#9e0418] border-b-2 border-[#9e0418]'
                      : 'text-[#5e5e5e] hover:text-[#1b1c1c]'
                  }`}
                >
                  {language === 'pt' ? 'Carreiras & Estágios' : 'Careers & Internships'}
                </button>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif-headline text-2xl font-bold text-[#1b1c1c] mb-2">
                    {language === 'pt' ? 'Mensagem Enviada com Sucesso' : 'Message Sent Successfully'}
                  </h3>
                  <p className="text-sm text-[#5e5e5e] max-w-md mb-6 font-sans-body">
                    {language === 'pt'
                      ? 'Agradecemos o seu contacto. A nossa equipa de gestão jurídica analisará o seu pedido e responderá nas próximas 24 horas úteis.'
                      : 'Thank you for contacting us. Our legal team will review your inquiry and respond within 24 business hours.'}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        company: '',
                        email: '',
                        phone: '',
                        practiceArea: 'corporate-ma',
                        subject: '',
                        message: '',
                        preferredDate: '',
                      });
                    }}
                    className="bg-[#1b1c1c] text-white text-xs uppercase font-bold px-6 py-3 hover:bg-[#9e0418] shadow-sm transition-colors cursor-pointer"
                  >
                    {language === 'pt' ? 'Enviar Nova Mensagem' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : activeSubTab === 'consultation' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Nome Completo *' : 'Full Name *'}
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                        placeholder={language === 'pt' ? 'Ex: João Silva' : 'e.g. John Doe'}
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Empresa / Organização' : 'Company / Entity'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                        placeholder={language === 'pt' ? 'Nome da Empresa' : 'Company Name'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Correio Electrónico *' : 'Email Address *'}
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                        placeholder="email@empresa.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Telefone de Contacto *' : 'Phone Number *'}
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                        placeholder="+244 9xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Área Jurídica Pretendida' : 'Practice Area'}
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.id}>
                            {pa.title[language]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                        {language === 'pt' ? 'Data de Reunião Preferencial' : 'Preferred Date'}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-stone-50/50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#1b1c1c] mb-2">
                      {language === 'pt' ? 'Resumo da Questão / Assunto *' : 'Summary of Matter / Message *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-stone-50/50 border border-stone-200 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#9e0418] focus:border-[#9e0418] focus:bg-white transition-all text-[#1b1c1c]"
                      placeholder={
                        language === 'pt'
                          ? 'Descreva brevemente a operação, litígio ou assessoria jurídica pretendida...'
                          : 'Briefly describe the transaction, litigation or legal advisory matter...'
                      }
                    ></textarea>
                  </div>

                  <p className="text-[11px] text-[#5e5e5e] italic">
                    {language === 'pt'
                      ? 'Ao submeter este formulário, concorda com o tratamento dos seus dados em estrita conformidade com as regras de sigilo profissional da advocacia em Angola.'
                      : 'By submitting this form, you acknowledge that communications are handled under strict legal professional confidentiality rules in Angola.'}
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9e0418] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 hover:bg-[#7a0313] shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'pt' ? 'Submeter Pedido de Consulta' : 'Submit Consultation Request'}</span>
                  </button>
                </form>
              ) : (
                /* Careers Tab */
                <div className="space-y-6">
                  <div className="border-l-2 border-[#9e0418] pl-4">
                    <h4 className="font-serif-headline text-lg font-bold text-[#1b1c1c]">
                      {language === 'pt' ? 'Trabalhe na FBL Advogados' : 'Join FBL Advogados'}
                    </h4>
                    <p className="text-sm text-[#5e5e5e] mt-1">
                      {language === 'pt'
                        ? 'Procuramos advogados estagiários e associados com elevado rigor técnico, bilingues e paixão pela prática jurídica de excelência.'
                        : 'We seek trainee lawyers and associates with high technical rigor, bilingual proficiency, and dedication to legal excellence.'}
                    </p>
                  </div>

                  <div className="bg-stone-50 border border-stone-200/80 p-6 space-y-3">
                    <h5 className="font-bold text-sm text-[#1b1c1c]">
                      {language === 'pt' ? 'Candidaturas Espontâneas' : 'Spontaneous Applications'}
                    </h5>
                    <p className="text-xs text-[#5e5e5e] leading-relaxed">
                      {language === 'pt'
                        ? 'Envie o seu Curriculum Vitae acompanhado de carta de motivação e certificado de habilitações para o nosso departamento de Recursos Humanos:'
                        : 'Send your CV along with a cover letter and degree transcripts to our Talent department:'}
                    </p>
                    <a
                      href="mailto:recrutamento@fbladvogados.com"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#9e0418] hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      recrutamento@fbladvogados.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
