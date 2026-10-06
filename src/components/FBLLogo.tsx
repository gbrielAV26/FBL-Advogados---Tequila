import React from 'react';
import logoLetrasPretas from '../assets/images/Logo. Vermelho - Letras Pretas (1).png';
import logoLetrasBrancas from '../assets/images/Logo. Vermelho - Letras Brancas (1).png';

export { logoLetrasPretas, logoLetrasBrancas };

interface FBLLogoProps {
  /**
   * 'dark': Logo com letras pretas (ideal para fundos brancos ou claros)
   * 'light': Logo com letras brancas (ideal para fundos pretos ou escuros)
   */
  variant?: 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

/**
 * Logótipo Oficial FBL Advogados
 * - Fundos brancos/claros: Logo. Vermelho - Letras Pretas (1).png
 * - Fundos pretos/escuros: Logo. Vermelho - Letras Brancas (1).png
 */
export const FBLLogo: React.FC<FBLLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  alt = 'FBL Advogados',
}) => {
  const isLight = variant === 'light';
  const logoSrc = isLight ? logoLetrasBrancas : logoLetrasPretas;

  // Mapeamento de alturas calibradas para manter a proporção oficial e elegância visual
  const heightMap = {
    xs: 'h-8 sm:h-9',
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-32',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        className={`${heightMap[size]} w-auto object-contain drop-shadow-xs transition-transform duration-200`}
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};

