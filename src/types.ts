export type Language = 'pt' | 'en';

export type NavTab = 'home' | 'about' | 'practice-areas' | 'team' | 'news' | 'newsletters' | 'publications' | 'contacts';

export interface PracticeArea {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  fullDescription: {
    pt: string;
    en: string;
  };
  highlights: {
    pt: string[];
    en: string[];
  };
  iconName: string;
  leadPartner: string;
  responsiblePartners?: string[];
  image: string;
}

export type TeamCategory = 'partners' | 'associates' | 'interns';
export type LawyerLevel = 'partner' | 'associate' | 'intern';

export interface TeamMember {
  id: string;
  name: string;
  role: {
    pt: string;
    en: string;
  };
  category: TeamCategory;
  level: LawyerLevel;
  oaaNumber?: string; // Ordem dos Advogados de Angola
  email: string;
  phone: string;
  languages: string[];
  bio: {
    pt: string;
    en: string;
  };
  education: {
    pt: string[];
    en: string[];
  };
  practiceAreaIds: string[];
  practiceAreasCustom?: {
    pt: string[];
    en: string[];
  };
  experience?: {
    pt: string[];
    en: string[];
  };
  recognitions?: string[];
  image?: string;
  initials?: string;
}

export interface Publication {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  content: {
    pt: string;
    en: string;
  };
  date: string;
  category: {
    pt: string;
    en: string;
  };
  author: string;
  readTime: string;
  pdfUrl?: string;
}

export interface NewsItem {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  content?: {
    pt: string;
    en: string;
  };
  date: string;
  year: string;
  category: {
    pt: string;
    en: string;
  };
  imageUrl: string;
  imageAlt: {
    pt: string;
    en: string;
  };
  linkText?: {
    pt: string;
    en: string;
  };
  externalSource?: string;
}

export interface NewsletterItem {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  summary: {
    pt: string;
    en: string;
  };
  date?: string;
  year?: string;
  category?: {
    pt: string;
    en: string;
  };
  imageUrl: string;
  imageAlt?: {
    pt: string;
    en: string;
  };
}

export interface Recognition {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  rankTier: string;
  quote: {
    pt: string;
    en: string;
  };
  badgeIcon: string;
}

export interface DepartmentContact {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  email: string;
  description: {
    pt: string;
    en: string;
  };
}

export interface AdministrativeStaff {
  id: string;
  name: string;
  role: {
    pt: string;
    en: string;
  };
  email: string;
}
