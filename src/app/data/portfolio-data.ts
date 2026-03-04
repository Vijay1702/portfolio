import {
  PersonalInfo,
  SkillGroup,
  Experience,
  Project,
  Certification,
  Education,
  NavLink,
} from '../models/portfolio.model';

export const personalInfo: PersonalInfo = {
  name: 'Vijay Ramesh',
  tagline: 'Associate Software Engineer',
  subTagline: 'AI-Augmented Developer',
  headline: 'Building Scalable Web Applications with Intelligent Backends',
  email: 'rvijay1702@gmail.com',
  phone: '+91 9080325548',
  location: 'Chennai / Pattukkottai, Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/vijay-ramesh-914a24235',
  github: 'https://github.com/vijayramesh17',
  resumeLink: '/Vijay_Ramesh_Resume.pdf',
  available: true,
  bio: `I'm Vijay Ramesh, an Associate Software Engineer at Finforz Technologies with a high-performance profile 
bridging sophisticated web engineering and intelligent AI systems. With an MTech in Information Technology 
from the prestigious College of Engineering, Guindy (CEG) and a background in Electronics & Communication 
Engineering (BE), I bring a unique dual-competency in software architectures and hardware intuition. 
My expertise spans building scalable Angular applications, crafting high-fidelity UI/UX prototypes, 
and engineering multi-task deep learning models. I don't just build features. I architect intelligent 
solutions that solve complex technical challenges and drive business impact.`,
  stats: [
    { value: '11+', label: 'Projects Built' },
    { value: '8.45', label: 'CGPA (BE)' },
    { value: '8.2', label: 'CGPA (MTech)' },
    { value: '1', label: 'National Hackathon' },
  ],
};

export const skills: SkillGroup[] = [
  {
    category: 'Frontend Development',
    icon: '💻',
    items: [
      'Angular',
      'TypeScript',
      'React.js',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Python'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'SQL', 'Spatial Databases'],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🤖',
    items: ['Deep Learning', 'CNN', 'BiLSTM', 'NLP', 'Scikit-learn', 'TensorFlow / Keras'],
  },
  {
    category: 'IoT & Embedded',
    icon: '📡',
    items: ['Arduino', 'Sensor Integration', 'LoRa Communication', 'Circuit Design'],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠️',
    items: ['Figma', 'Git / GitHub', 'Postman', 'VS Code', 'Agile Development'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Associate Software Engineer',
    company: 'Finforz Technologies Pvt. Ltd.',
    type: 'Full-time',
    period: 'Jun 2025 – Present',
    location: 'Chennai, India',
    description: [
      'Designed UI/UX prototypes in Figma based on client requirements and developed responsive user interfaces using the Angular framework',
      'Built reusable custom components using Angular libraries and converted design prototypes into production-ready frontend code',
      'Improving UI performance, usability, and maintainability through modular architecture and best practices',
      'Collaborating in agile workflows to deliver production-grade features on schedule',
    ],
    tech: ['Angular', 'TypeScript', 'Figma', 'Node.js', 'Agile'],
    isCurrent: true,
  },
  {
    title: 'AI / ML Intern',
    company: 'Finforz Technologies Pvt. Ltd.',
    type: 'Internship',
    period: 'Jan 2025 – May 2025',
    location: 'India',
    description: [
      'Designed a multi-task deep learning model using a shared encoder architecture combining BiLSTM and CNN',
      'Built modules for revenue prediction, payment classification, and anomaly detection in a single unified model',
      'Applied random hyperparameter tuning strategies to optimize cross-task model performance',
      'Gained end-to-end experience in the AI/ML development lifecycle — design, training, evaluation, and iteration',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'BiLSTM', 'CNN', 'Scikit-learn', 'Pandas'],
    isCurrent: false,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Workout Tutorial Platform',
    category: 'web',
    categoryLabel: 'Web Dev',
    emoji: '🏋️',
    description:
      'A full-stack fitness web application providing structured workout tutorials with user authentication, categorized content, and a responsive UI built on the MERN stack.',
    bullets: [
      'Complete MERN stack app with JWT-based user registration, login, and session management',
      'Dynamic Angular frontend for browsing categorized workout tutorials',
      'RESTful Node.js/Express API serving workout data stored in MongoDB',
      'Fully responsive UI for seamless desktop and mobile experience',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS3'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: 'Nearby Restaurant Finder',
    category: 'web',
    categoryLabel: 'Web Dev',
    emoji: '🍽️',
    description:
      "A location-aware web app using spatial database queries to discover restaurants in real-time proximity to a user's current location — similar to production discovery engines.",
    bullets: [
      'Implemented geospatial queries with spatial DB indexing for accurate proximity search',
      'Built an interactive map-based UI highlighting restaurants within a configurable radius',
      'Developed backend APIs handling geolocation inputs and returning ranked results',
      'Optimized query performance for real-time search responsiveness',
    ],
    tech: ['TypeScript', 'Node.js', 'Spatial SQL', 'PostGIS', 'Geolocation API', 'HTML/CSS'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: 'Product & Price Comparison Tool',
    category: 'web',
    categoryLabel: 'Web Dev',
    emoji: '💰',
    description:
      'A web-based price aggregation tool enabling users to compare product listings and prices across multiple sources from a single, clean dashboard.',
    bullets: [
      'Designed a comparison dashboard for side-by-side product analysis',
      'Built a data aggregation engine to normalize product information from multiple sources',
      'Implemented search and filter functionality with real-time results rendering',
      'Created a responsive, mobile-friendly UI for consumer use',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Web APIs', 'HTML5', 'CSS3'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: 'Spam Detection System',
    category: 'ai',
    categoryLabel: 'AI / ML',
    emoji: '📧',
    description:
      'An NLP-powered email/message classifier that identifies spam content using trained ML models — mirroring real production spam filters.',
    bullets: [
      'Preprocessed text data using NLP techniques: tokenization, stopword removal, TF-IDF vectorization',
      'Trained and compared Naive Bayes, Logistic Regression, and SVM classifiers',
      'Achieved strong classification accuracy through feature engineering and model tuning',
      'Built a real-time interface for message classification',
    ],
    tech: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Pandas', 'Matplotlib'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 5,
    title: 'Fruit Classification System',
    category: 'ai',
    categoryLabel: 'AI / ML',
    emoji: '🍎',
    description:
      'A CNN-based image classification system that identifies fruit species with high accuracy using transfer learning techniques on a multi-class dataset.',
    bullets: [
      'Designed and trained a CNN architecture for multi-class fruit image classification',
      'Applied data augmentation (rotation, flipping, zoom) to improve model generalization',
      'Fine-tuned a pre-trained model via transfer learning to boost accuracy with limited data',
      'Visualized performance with confusion matrix and accuracy/loss curves',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning', 'NumPy', 'Matplotlib'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 6,
    title: 'Smart Greenhouse Farming',
    category: 'iot',
    categoryLabel: 'IoT',
    emoji: '🌱',
    description:
      'An IoT-based autonomous greenhouse management system that monitors environmental conditions and automatically controls irrigation and fertilization in real time.',
    bullets: [
      'Integrated soil moisture, temperature, and humidity sensors for continuous monitoring',
      'Programmed automated decision logic to trigger irrigation/fertilization based on thresholds',
      'Built a real-time monitoring dashboard to visualize environmental data',
      'Designed for low-power, reliable operation in agricultural environments',
    ],
    tech: ['Arduino', 'Soil Moisture Sensor', 'DHT Sensor', 'Relay Module', 'C++', 'IoT Dashboard'],
    github: '#',
    demo: null,
    highlight: true,
  },
  {
    id: 7,
    title: 'LPG Gas Leakage Detection',
    category: 'iot',
    categoryLabel: 'IoT',
    emoji: '🔥',
    description:
      'A real-time IoT safety system detecting LPG gas leakage using gas sensors and triggering immediate multi-channel alerts for home and industrial environments.',
    bullets: [
      'Interfaced MQ-series gas sensor with microcontroller for LPG concentration detection',
      'Programmed threshold-based alert logic triggering buzzer and LED warning systems',
      'Designed a compact, low-cost circuit suitable for residential/industrial deployment',
      'Tested system reliability across multiple gas concentration scenarios',
    ],
    tech: ['Arduino', 'MQ Gas Sensor', 'Buzzer Module', 'C++', 'Circuit Design'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 8,
    title: 'LoRa Long Range Communication',
    category: 'iot',
    categoryLabel: 'IoT',
    emoji: '📡',
    description:
      'A low-power, long-range wireless communication system using LoRa technology to transmit sensor data across large distances without Wi-Fi or cellular networks.',
    bullets: [
      'Set up LoRa SX1278 transceiver modules for bi-directional long-range communication',
      'Designed a lightweight communication protocol for reliable sensor data transmission',
      'Demonstrated communication over 1–5 km in open environments',
      'Applied LPWAN (Low Power Wide Area Network) design principles for remote IoT use cases',
    ],
    tech: ['LoRa SX1278', 'Arduino', 'C++', 'RF Communication', 'Serial Monitor'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 9,
    title: 'Temperature-Based Fan Controller',
    category: 'iot',
    categoryLabel: 'IoT',
    emoji: '🌡️',
    description:
      'An energy-efficient analog/digital circuit that automatically adjusts fan speed in proportion to ambient room temperature using PWM control.',
    bullets: [
      'Designed a temperature-sensing circuit using LM35 sensors',
      'Implemented PWM-based motor speed control responding proportionally to temperature',
      'Built and calibrated the circuit through iterative testing on breadboard',
    ],
    tech: ['LM35 Sensor', 'PWM Controller', 'DC Motor', 'Circuit Design'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 10,
    title: 'IR-Based TV Remote Jammer',
    category: 'iot',
    categoryLabel: 'IoT',
    emoji: '📺',
    description:
      'A compact infrared signal jamming circuit that disrupts TV remote communication — built as a hands-on electronics learning project demonstrating ECE fundamentals.',
    bullets: [
      'Designed an IR transmission circuit using standard remote control frequency interference',
      'Built a compact circuit using a 555 timer IC, IR LEDs, and passive components',
    ],
    tech: ['IR LED', '555 Timer IC', 'Resistors/Capacitors', 'Circuit Design'],
    github: '#',
    demo: null,
    highlight: false,
  },
  {
    id: 11,
    title: 'AI-Powered Smart Parking Application',
    category: 'web',
    categoryLabel: 'Web Dev',
    emoji: '🅿️',
    description:
      'A full-stack smart parking management application implementing parking slot tracking, booking management, and real-time parking availability.',
    bullets: [
      'Developed with AI-assisted development tools to accelerate delivery and code quality',
      'Implemented real-time parking slot tracking and availability monitoring',
      'Built a robust booking management system for users to reserve spots in advance',
      'Designed a clean, responsive interface for seamless mobile and desktop usage',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'AI-Assisted Dev'],
    github: '#',
    demo: null,
    highlight: true,
  },
];

export const certifications: Certification[] = [
  {
    title: 'Smart Indian Hackathon 2022 — Finalist',
    issuer: 'Government of India',
    icon: '🏆',
    description:
      "Shortlisted for the national final round for the project 'Municipal Finances and Tax Management System' — selected from thousands of entries across India.",
    isAward: true,
  },
  {
    title: 'TALENTNEXT — Java J2EE',
    issuer: 'TalentNext',
    icon: '📜',
    description:
      'Industry-aligned Java certification demonstrating backend development fundamentals with Java Enterprise Edition.',
    isAward: false,
  },
  {
    title: 'Digital Skill Readiness Program',
    issuer: 'Wipro',
    icon: '📜',
    description:
      "Corporate-issued digital skills certification from Wipro — one of India's leading IT companies.",
    isAward: false,
  },
];

export const education: Education[] = [
  {
    degree: 'MTech — Information Technology',
    institution: 'College of Engineering, Guindy (CEG), Chennai',
    year: '2023 – 2025',
    cgpa: '8.2 CGPA',
    highlight: true,
  },
  {
    degree: 'BE — Electronics & Communication Engineering',
    institution: 'K. Ramakrishnan College of Engineering (Autonomous), Trichy',
    year: '2023',
    cgpa: '8.45 CGPA',
    highlight: true,
  },
  {
    degree: 'HSC',
    institution: 'Laurel Higher Secondary School, Pattukkottai',
    year: '2019',
    cgpa: '62%',
    highlight: false,
  },
  {
    degree: 'SSLC',
    institution: 'Laurel Higher Secondary School, Pattukkottai',
    year: '2017',
    cgpa: '92.6%',
    highlight: false,
  },
];

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
