import React from 'react';
import { RECOGNITIONS } from '../data/fblData';
import { Recognition, Language } from '../types';
import { Award, Star, X, CheckCircle, ShieldCheck } from 'lucide-react';

interface RecognitionModalProps {
  recognitionId: string | null;
  onClose: () => void;
  language: Language;
}

export const RecognitionModal: React.FC<RecognitionModalProps> = ({
  recognitionId,
  onClose,
  language,
}) => {
  if (!recognitionId) return null;

  const recognition = RECOGNITIONS.find((r) => r.id === recognitionId) || RECOGNITIONS[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#1b1c1c]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-stone-200/90 max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-[#9e0418] p-2 hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[#9e0418]/5 border border-[#9e0418]/15 flex items-center justify-center text-[#9e0418]">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#9e0418]">
            {recognition.organization} • {recognition.year}
          </span>
        </div>

        <h2 className="font-serif-headline text-3xl font-bold text-[#1b1c1c] mb-2">
          {recognition.title}
        </h2>
        <p className="text-xs uppercase tracking-widest font-semibold text-[#5e5e5e] mb-6">
          {recognition.subtitle}
        </p>

        <div className="bg-stone-50/70 border border-stone-200/80 p-6 mb-6">
          <span className="inline-block bg-[#9e0418] text-white text-xs uppercase font-bold px-3 py-1 mb-4">
            {recognition.rankTier}
          </span>

          <blockquote className="text-base text-[#1b1c1c] italic leading-relaxed border-l-2 border-[#9e0418] pl-4 font-sans-body">
            "{recognition.quote[language]}"
          </blockquote>
        </div>

        <div className="border-t border-stone-100 pt-4 flex items-center gap-2 text-xs text-[#5e5e5e]">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>
            {language === 'pt'
              ? 'Avaliação independente auditada pelos principais directórios mundiais de advocacia.'
              : 'Independent editorial evaluation certified by premier global legal rating guides.'}
          </span>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1b1c1c] text-white text-xs uppercase font-bold px-6 py-3 hover:bg-[#9e0418] shadow-sm transition-colors cursor-pointer"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
