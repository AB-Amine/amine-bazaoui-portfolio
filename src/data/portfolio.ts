export type Project = {
  slug: string
  title: string
  category: string
  cardNote: string
  summary: string
  context: string
  stack: string[]
  role: string
  overview: string
  built: string[]
  decisions: string[]
  learnings: string
  github?: string
  featured: boolean
  visual: 'care' | 'stream' | 'clinic' | 'market' | 'lift'
}

export const identity = {
  name: 'Amine Bazaoui',
  initials: 'AB',
  headline: 'I build useful software, data systems, and applied AI.',
  intro: 'I’m an Artificial Intelligence and Deep Learning graduate from the Faculty of Polydisciplinary Studies of Khouribga. My project work spans mobile applications, streaming analytics, and applied machine learning.',
  about: {
    paragraphs: [
      'I like working across the path from raw data to something a person can use: understanding the problem, choosing a practical method, and making the result clear.',
      'My studies in AI and deep learning have drawn me toward applied AI, data systems, and health education. I’m now looking to contribute to an engineering team and keep learning through real project work.',
    ],
    note: 'Current interests: NLP, generative AI, and applied AI for health education.',
  },
  email: 'bazaouiamine85@gmail.com',
  github: 'https://github.com/AB-Amine',
  linkedin: 'https://linkedin.com/in/amine-bazaoui',
  resume: null as string | null,
}

export const projects: Project[] = [
  {
    slug: 'khadija-ai', title: 'Khadija AI', category: 'Applied AI · Health education',
    cardNote: 'Team project · Individual contribution not yet documented',
    summary: 'A mobile health-awareness companion designed to make breast health information more accessible in Moroccan Darija.',
    context: 'Collaborative project listed in the CV; the supplied repository could not be fetched for source review in this pass.',
    stack: ['React Native', 'TypeScript', 'FastAPI', 'MongoDB Atlas'],
    role: 'Collaborative project. The available CV does not document Amine’s individual contribution.',
    overview: 'Khadija AI is described in the CV as a mobile educational application for Moroccan women. Its stated aim is to support awareness and guide users toward informed conversations with healthcare professionals, not to diagnose disease.',
    built: ['Darija conversational assistant using Groq / Llama 3.3 70B, according to the CV.', 'Camera-guided self-examination flow described as posture analysis.', 'Cycle tracking and a care summary intended to help users communicate with a clinician.'],
    decisions: ['The CV describes safety guardrails and explicitly says the experience does not provide a diagnosis.', 'The architecture is described as a React Native client connected to a FastAPI service and MongoDB Atlas.'],
    learnings: 'The repository URL has been supplied, but GitHub could not be fetched during this review. Project functionality and Amine’s individual contribution therefore remain based on the CV and need confirmation against the source.',
    github: 'https://github.com/AB-Amine/khadija-ai',
    featured: true, visual: 'care',
  },
  {
    slug: 'quantum-analytics', title: 'Real-Time Analytics Platform', category: 'Data engineering · Streaming',
    cardNote: 'Personal project · Individual ownership details to confirm',
    summary: 'A streaming analytics project that connects transaction entry, Kafka events, Spark processing, MongoDB, and a dashboard.',
    context: 'Personal project in the CV; repository and local source inspected.',
    stack: ['Kafka', 'PySpark', 'MongoDB', 'Streamlit'],
    role: 'Built around an end-to-end ingestion and analytics flow; exact personal ownership should be confirmed.',
    overview: 'The project explores how operational sales and inventory data can move from an entry interface through an event stream into processed analytics. Its source includes a Streamlit interface, Kafka producer code, Spark Structured Streaming logic, MongoDB data managers, and Docker Compose configuration.',
    built: ['A Streamlit entry interface writes source records and publishes events to Kafka.', 'Spark Structured Streaming consumes topics and transforms sales and inventory records.', 'MongoDB is used for source and analytics collections, with dashboard views reading processed data.'],
    decisions: ['The pipeline separates event ingestion from processing and dashboard reads.', 'The repository includes integration-oriented test files, but this portfolio has not independently executed the full Docker stack.'],
    learnings: 'The repository and CV support the component-level architecture. The CV mentions sub-500 ms latency, but no benchmark evidence was found, so no performance claim is published here.',
    github: 'https://github.com/AB-Amine/dashbord_simple', featured: true, visual: 'stream',
  },
  {
    slug: 'medigest', title: 'MediGest', category: 'Software engineering · Clinic management',
    cardNote: 'Personal GitHub repository · Implementation ownership not separately verified',
    summary: 'A Streamlit and MongoDB application for clinic operations, including appointments, practitioner schedules, and patient records.',
    context: 'Personal project listed on the public GitHub profile; repository README inspected.',
    stack: ['Python', 'Streamlit', 'MongoDB', 'Plotly'],
    role: 'Repository is under the personal GitHub account; implementation ownership has not been separately verified.',
    overview: 'MediGest describes a clinic management workflow covering day-to-day scheduling and administrative tasks. The public README documents appointment status and availability rules, patient records, practitioner schedules, role-based pages, and activity statistics.',
    built: ['Appointment booking with availability and overlap checks, as described by the repository.', 'Patient and practitioner management flows with schedule views.', 'Administrative views and Plotly activity charts.'],
    decisions: ['The published project stack is Streamlit with MongoDB and Python data and charting libraries.', 'The public README lists default credentials. They are deliberately not reproduced here; treat any public deployment as unsafe until credentials and access controls are reviewed.'],
    learnings: 'The repository documents intended functionality, but there is no public demo or test evidence available in this review. This case study avoids exposing patient data or login details.',
    github: 'https://github.com/AB-Amine/gestion_rendez_vous', featured: true, visual: 'clinic',
  },
  {
    slug: 'zakat-tracker', title: 'Zakat Tracker', category: 'Collaborative · Mobile fintech',
    cardNote: 'Team project · README credits Amine; individual feature ownership is not itemized',
    summary: 'A mobile app for calculating and tracking zakat, with market prices, bilingual content, and on-device financial records.',
    context: 'Collaborative project. The repository README credits Amine Bazaoui, Adil Chagri, and Chouaib Jbel.',
    stack: ['React Native', 'Expo', 'AsyncStorage'],
    role: 'The README credits Amine as a team member but does not specify individual feature ownership.',
    overview: 'The repository README describes a mobile zakat manager for calculating obligations and tracking monthly payments. It documents gold and silver prices, USD-to-MAD conversion, Maliki fiqh resources, Arabic and English support, and on-device storage.',
    built: ['Zakat calculation using gold or silver nisab thresholds and a 2.5% rate, as documented in the README.', 'Monthly payment tracking with history and progress views.', 'Arabic/English interface and local storage through AsyncStorage, according to the README.'],
    decisions: ['The README says financial records and preferences stay on the device, with no cloud sync.', 'The repository page was accessible, but source files and a live app could not be independently reviewed in this pass.'],
    learnings: 'The README credits the team and documents the stack and features. Amine’s specific contribution and the current live-demo status still need confirmation.',
    github: 'https://github.com/Adilchagri/zakat-app',
    featured: true, visual: 'market',
  },
  {
    slug: 'atlas-ascenseurs', title: 'Atlas Ascenseurs', category: 'Software engineering · Corporate website',
    cardNote: 'Collaborative repository · Amine’s frontend commits are visible in its history',
    summary: 'A bilingual corporate website for an elevator company, with product pages and an interactive cabin configurator.',
    context: 'Collaborative public repository. Git history includes commits authored by Amine Bazaoui and other contributors.',
    stack: ['React', 'Vite', 'React Router', 'JavaScript'],
    role: 'Contributed elevator detail pages, shared styles, site pages, icons, layout adjustments, brochure assets, and SEO changes; these areas are reflected in Amine-authored commits.',
    overview: 'The site presents Atlas Ascenseurs and its residential and commercial elevator ranges through a multi-page catalog. It includes product detail pages, service and contact pages, and a cabin configurator.',
    built: ['Product catalog and detail routes for residential, commercial, hospital, cargo, car, and other lift types.', 'French and English page content managed through shared UI language state.', 'A configurable cabin preview with model-specific capacity, speed, door, control, finish, floor, and lighting options.'],
    decisions: ['Configurator options are filtered by elevator profile so choices reflect each selected model.', 'The configurator can generate a PDF summary; optional lead export depends on an environment-configured Google Sheets endpoint.'],
    learnings: 'The public repository and commit history support Amine’s frontend contributions. No independently verified usage metrics or customer outcomes are available, so none are claimed.',
    github: 'https://github.com/Adilchagri/atlas-ascenseur', featured: true, visual: 'lift',
  },
]

export type Experience = {
  date: string
  role: string
  organization: string
  location: string
  contributions?: string[]
}

export const experience: Experience[] = [
  { date: '1–30 August 2026', role: 'Data Management Intern', organization: 'OCP Group', location: 'Khouribga, Morocco' },
  {
    date: 'August 2025', role: 'Software Developer Intern', organization: '1337 School · 42 Network', location: 'Khouribga, Morocco',
    contributions: [
      'Built a responsive university portal using modern web technologies.',
      'Solved algorithmic problems in a Linux peer-learning environment and used Git for version control.',
    ],
  },
]

export const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Software Development & Tools', items: ['FastAPI & REST APIs', 'React Native & Expo', 'Streamlit', 'Git & GitHub', 'Linux & Bash', 'Docker & Docker Compose', 'HTML & CSS'] },
  { title: 'Data Engineering & Analytics', items: ['Apache Kafka', 'PySpark', 'Pandas', 'NumPy', 'MongoDB', 'Redis', 'Plotly'] },
  { title: 'AI & Machine Learning', items: ['scikit-learn', 'PyTorch', 'TensorFlow / Keras', 'Hugging Face Transformers', 'Natural Language Processing', 'Computer Vision'] },
]

export const education = {
  degree: 'Excellence Degree in Artificial Intelligence & Deep Learning',
  institution: 'Faculty of Polydisciplinary Studies of Khouribga',
  dates: '2023–2026',
  detail: 'Graduated in 2026, with coursework in deep learning, NLP, machine learning, big data, advanced algorithms, probability, and statistics.',
  certifications: ['IBM · Data Science, AI & Development with Python', 'Microsoft / Coursera · Building ML Models on Azure', 'Simplilearn · Machine Learning with Python'],
}
