import {
  PersonalInfo,
  SkillGroup,
  Experience,
  Project,
  Certification,
  Education,
  NavLink,
  Service,
} from '../models/portfolio.model';

export const personalInfo: PersonalInfo = {
  name: 'PERSONAL.NAME',
  tagline: 'PERSONAL.TAGLINE',
  subTagline: 'PERSONAL.SUB_TAGLINE',
  headline: 'PERSONAL.HEADLINE',
  email: 'rvijay1702@gmail.com',
  phone: '+91 9080325548',
  location: 'PERSONAL.LOCATION',
  linkedin: 'https://www.linkedin.com/in/vijay-ramesh-914a24235',
  github: 'https://github.com/vijayramesh17',
  resumeLink: 'Vijay_Ramesh_Resume.pdf',
  available: true,
  bio: `I'm Vijay Ramesh, an Associate Software Engineer at Finforz Technologies with a high-performance profile 
bridging sophisticated web engineering and intelligent AI systems. With an MTech in Information Technology 
from the prestigious College of Engineering, Guindy (CEG) and a background in Electronics & Communication 
Engineering (BE), I bring a unique dual-competency in software architectures and system design. 
My expertise spans building scalable Angular applications, crafting high-fidelity UI/UX prototypes, 
and engineering multi-task deep learning models. I don't just build features. I architect intelligent 
solutions that solve complex technical challenges and drive business impact.`,
  stats: [
    { value: '7', label: 'STATS.PROJECTS' },
    { value: '8.45', label: 'STATS.CGPA_BE' },
    { value: '8.2', label: 'STATS.CGPA_MTECH' },
    { value: '1', label: 'STATS.HACKATHON' },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: 'SKILLS.CAT_FRONTEND',
    icon: '💻',
    items: [
      'Angular 17',
      'React.js',
      'Next.js 16',
      'TypeScript',
      'RxJS',
      'Tailwind CSS',
    ],
  },
  {
    category: 'SKILLS.CAT_BACKEND',
    icon: '⚙️',
    items: ['FastAPI', 'Node.js', 'Express.js', 'Python'],
  },
  {
    category: 'SKILLS.CAT_DB',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'SKILLS.CAT_AI',
    icon: '🤖',
    items: ['TensorFlow', 'Keras', 'Scikit-learn', 'Bi-LSTM', 'CNN', 'NLP', 'Pandas', 'NumPy'],
  },
  {
    category: 'SKILLS.CAT_TOOLS',
    icon: '🛠️',
    items: [
      'Figma (Design Systems, Prototyping)',
      'AI-Assisted Design (Claude, Stitch)',
      'Git / GitHub',
      'Postman',
      'VS Code',
      'Agile Development',
      'Storybook',
      'Vitest',
      'Playwright',
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: 'EXPERIENCE.FINFORZ.TITLE',
    company: 'EXPERIENCE.FINFORZ.COMPANY',
    type: 'EXPERIENCE.TYPE_FULL',
    period: 'June 2025 – Present',
    location: 'EXPERIENCE.FINFORZ.LOC',
    description: [
      'EXPERIENCE.FINFORZ.DESC.0',
      'EXPERIENCE.FINFORZ.DESC.1',
      'EXPERIENCE.FINFORZ.DESC.2',
      'EXPERIENCE.FINFORZ.DESC.3',
      'EXPERIENCE.FINFORZ.DESC.4',
      'EXPERIENCE.FINFORZ.DESC.5',
      'EXPERIENCE.FINFORZ.DESC.6',
    ],
    tech: [
      'Angular 17',
      'React.js',
      'Next.js 16',
      'FastAPI',
      'Figma',
      'PostgreSQL',
      'Redis',
      'Storybook',
      'Vitest',
      'Playwright',
    ],
    isCurrent: true,
  },
  {
    title: 'EXPERIENCE.INTERN.TITLE',
    company: 'EXPERIENCE.INTERN.COMPANY',
    type: 'EXPERIENCE.TYPE_INTERN',
    period: 'January 2025 – May 2025',
    location: 'EXPERIENCE.INTERN.LOC',
    description: [
      'EXPERIENCE.INTERN.DESC.0',
      'EXPERIENCE.INTERN.DESC.1',
      'EXPERIENCE.INTERN.DESC.2',
    ],
    tech: ['Python', 'PyQt5', 'TensorFlow', 'Keras', 'BiLSTM', 'CNN', 'Pandas', 'Docker'],
    isCurrent: false,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'PROJECTS.PRJ1.TITLE',
    categories: ['web'],
    categoryLabel: 'PROJECTS.CAT_WEB',
    emoji: '💳',
    description: 'PROJECTS.PRJ1.DESC',
    bullets: [
      'PROJECTS.PRJ1.BULLETS.0',
      'PROJECTS.PRJ1.BULLETS.1',
      'PROJECTS.PRJ1.BULLETS.2',
      'PROJECTS.PRJ1.BULLETS.3',
    ],
    tech: ['Angular 17', 'TypeScript', 'REST APIs', 'i18n', 'RxJS', 'SCSS'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'PROJECTS.PRJ2.TITLE',
    categories: ['web'],
    categoryLabel: 'PROJECTS.CAT_WEB',
    emoji: '👥',
    description: 'PROJECTS.PRJ2.DESC',
    bullets: [
      'PROJECTS.PRJ2.BULLETS.0',
      'PROJECTS.PRJ2.BULLETS.1',
      'PROJECTS.PRJ2.BULLETS.2',
      'PROJECTS.PRJ2.BULLETS.3',
    ],
    tech: [
      'Next.js 16',
      'React 19',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Storybook',
      'Vitest',
      'Playwright',
    ],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 3,
    title: 'PROJECTS.PRJ3.TITLE',
    categories: ['web'],
    categoryLabel: 'PROJECTS.CAT_WEB',
    emoji: '🔄',
    description: 'PROJECTS.PRJ3.DESC',
    bullets: [
      'PROJECTS.PRJ3.BULLETS.0',
      'PROJECTS.PRJ3.BULLETS.1',
      'PROJECTS.PRJ3.BULLETS.2',
      'PROJECTS.PRJ3.BULLETS.3',
    ],
    tech: ['Python', 'PyQt5', 'Pandas', 'Cryptography', 'PyInstaller'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: 'PROJECTS.PRJ4.TITLE',
    categories: ['web'],
    categoryLabel: 'PROJECTS.CAT_WEB',
    emoji: '🎨',
    description: 'PROJECTS.PRJ4.DESC',
    bullets: [
      'PROJECTS.PRJ4.BULLETS.0',
      'PROJECTS.PRJ4.BULLETS.1',
      'PROJECTS.PRJ4.BULLETS.2',
      'PROJECTS.PRJ4.BULLETS.3',
    ],
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Component Libraries'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 5,
    title: 'PROJECTS.PRJ5.TITLE',
    categories: ['web'],
    categoryLabel: 'PROJECTS.CAT_WEB',
    emoji: '📱',
    description: 'PROJECTS.PRJ5.DESC',
    bullets: [
      'PROJECTS.PRJ5.BULLETS.0',
      'PROJECTS.PRJ5.BULLETS.1',
      'PROJECTS.PRJ5.BULLETS.2',
      'PROJECTS.PRJ5.BULLETS.3',
    ],
    tech: ['Figma', 'React.js', 'AI-Assisted Design', 'Claude / Stitch', 'Prototyping'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 6,
    title: 'PROJECTS.PRJ6.TITLE',
    categories: ['web', 'ai'],
    categoryLabel: 'PROJECTS.CAT_AI',
    emoji: '🚗',
    description: 'PROJECTS.PRJ6.DESC',
    bullets: [
      'PROJECTS.PRJ6.BULLETS.0',
      'PROJECTS.PRJ6.BULLETS.1',
      'PROJECTS.PRJ6.BULLETS.2',
      'PROJECTS.PRJ6.BULLETS.3',
    ],
    tech: ['React.js', 'Python', 'Machine Learning', 'MongoDB'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 7,
    title: 'PROJECTS.PRJ7.TITLE',
    categories: ['ai', 'iot'],
    categoryLabel: 'PROJECTS.CAT_IOT',
    emoji: '🌱',
    description: 'PROJECTS.PRJ7.DESC',
    bullets: [
      'PROJECTS.PRJ7.BULLETS.0',
      'PROJECTS.PRJ7.BULLETS.1',
      'PROJECTS.PRJ7.BULLETS.2',
      'PROJECTS.PRJ7.BULLETS.3',
    ],
    tech: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Automation'],
    github: '#',
    demo: null,
    highlight: true,
  },
];

export const services: Service[] = [
  {
    title: 'SERVICES.WEB.TITLE',
    description: 'SERVICES.WEB.DESC',
    icon: '💻',
    tech: ['Angular', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'SERVICES.AI.TITLE',
    description: 'SERVICES.AI.DESC',
    icon: '🤖',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP'],
  },
  {
    title: 'SERVICES.DESIGN.TITLE',
    description: 'SERVICES.DESIGN.DESC',
    icon: '🎨',
    tech: ['Figma', 'Responsive Design', 'Motion UI', 'CSS/SCSS'],
  },
];

export const certifications: Certification[] = [
  {
    title: 'CERTS.CERT_SIH.TITLE',
    issuer: 'CERTS.CERT_SIH.ISSUER',
    icon: '🏆',
    description: 'CERTS.CERT_SIH.DESC',
    isAward: true,
  },
  {
    title: 'CERTS.CERT_JAVA.TITLE',
    issuer: 'CERTS.CERT_JAVA.ISSUER',
    icon: '📜',
    description: 'CERTS.CERT_JAVA.DESC',
    isAward: false,
  },
  {
    title: 'CERTS.CERT_WIPRO.TITLE',
    issuer: 'CERTS.CERT_WIPRO.ISSUER',
    icon: '📜',
    description: 'CERTS.CERT_WIPRO.DESC',
    isAward: false,
  },
];

export const education: Education[] = [
  {
    degree: 'EDUCATION.MTECH',
    institution: 'EDUCATION.CEG',
    year: '2023 – 2025',
    cgpa: '8.2 CGPA',
    highlight: true,
  },
  {
    degree: 'EDUCATION.BE',
    institution: 'EDUCATION.KRCE',
    year: '2019 – 2023',
    cgpa: '8.45 CGPA',
    highlight: true,
  },
];

export const navLinks: NavLink[] = [
  { label: 'NAV.ABOUT', href: '#about' },
  { label: 'NAV.EXPERIENCE', href: '#experience' },
  { label: 'NAV.PROJECTS', href: '#projects' },
  { label: 'NAV.SKILLS', href: '#skills' },
  { label: 'NAV.CERTIFICATIONS', href: '#certifications' },
  { label: 'NAV.CONTACT', href: '#contact' },
];
