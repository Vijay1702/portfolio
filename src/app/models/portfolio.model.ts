export interface PersonalInfo {
  name: string;
  tagline: string;
  subTagline: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeLink: string;
  available: boolean;
  bio: string;
  stats: Stat[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
  isCurrent: boolean;
}

export interface Project {
  id: number;
  title: string;
  category: 'all' | 'web' | 'ai' | 'iot';
  categoryLabel: string;
  emoji: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  demo: string | null;
  highlight: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  description: string;
  isAward: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
  highlight: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
