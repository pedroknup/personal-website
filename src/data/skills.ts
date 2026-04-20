type SkillItem = {
  name: string;
  content: any;
  progress: number;
  id: number;
};

const skillsFront: SkillItem[] = [
  {
    id: 0,
    name: 'HTML, JavaScript, CSS',
    content: `A decade of web fundamentals. Comfortable with modern CSS (grid, flex, container queries), accessibility basics, and the quirky edges of cross-browser behaviour.`,
    progress: 100,
  },
  {
    id: 1,
    name: 'React',
    content: `Primary frontend library across most of my work. Hooks, TypeScript, Redux or Context, performance profiling, and a preference for small well-bounded components.`,
    progress: 95,
  },
  {
    id: 2,
    name: 'Vue',
    content: `Vue 2 and Vue 3 across several production projects. Vuex, Composition API, and plenty of migrations between major versions.`,
    progress: 90,
  },
  {
    id: 3,
    name: 'Build tools (Webpack, Vite, Rollup)',
    content: `Bundler configuration, code splitting, and performance budgets. Tuned from zero-config to bespoke multi-target setups.`,
    progress: 80,
  },
  {
    id: 100,
    name: 'Lit',
    content: `Used Lit to ship encapsulated web components that drop cleanly into existing apps without framework lock-in.`,
    progress: 60,
  },
  {
    id: 4,
    name: 'GSAP',
    content: `Complex timelines, scroll-triggered sequences, and production interactive work (notably at Media.Monks).`,
    progress: 60,
  },
  {
    id: 512,
    name: 'Angular',
    content: `Reading-level fluency. I can navigate Angular codebases and contribute patches, but it is not my go-to framework.`,
    progress: 20,
  },
].sort((a, b) => b.progress - a.progress);

const skillsBack: SkillItem[] = [
  {
    id: 5,
    name: 'Node.js',
    content: `Years of production APIs and services with Express and TypeScript. Jest for testing, and integrations across databases, queues, and CI/CD pipelines.`,
    progress: 90,
  },
  {
    id: 6,
    name: 'Relational databases',
    content: `PostgreSQL, MySQL, SQLite, and Microsoft SQL Server. Schema design, query tuning, migrations, and the occasional rescue operation on legacy data.`,
    progress: 85,
  },
  {
    id: 13,
    name: 'Backstage',
    content: `Daily driver at Rabobank. Plugin development, catalog customization, and a standardization effort spanning multiple portals across the organization.`,
    progress: 85,
  },
  {
    id: 9,
    name: 'Google Cloud Platform',
    content: `Cloud Functions, App Engine, and hosting for production sites. Used heavily during the Media.Monks chapter.`,
    progress: 80,
  },
  {
    id: 90,
    name: 'Azure DevOps',
    content: `Source control, pipelines, and work management. Current primary CI/CD environment at Rabobank.`,
    progress: 80,
  },
  {
    id: 400,
    name: '.NET',
    content: `.NET Framework and early .NET Core. Built data-driven enterprise services at CowManager, Clubpetro, and Vale.`,
    progress: 70,
  },
  {
    id: 7,
    name: 'NoSQL (MongoDB, Firebase)',
    content: `Document models for flexible-schema apps and serverless projects. Used in full-stack and side projects rather than data-warehouse contexts.`,
    progress: 70,
  },
  {
    id: 8,
    name: 'Docker',
    content: `Containerizing services, composing multi-container dev environments, and wiring images into CI/CD.`,
    progress: 70,
  },
  {
    id: 25,
    name: 'Power Automate',
    content: `Workflow automation and cross-system integrations at Rabobank, especially around ticketing and developer onboarding.`,
    progress: 70,
  },
  {
    id: 11,
    name: 'Firebase',
    content: `Hosting and Firestore for freelancing and side projects where flexibility beats the setup cost of a full backend.`,
    progress: 40,
  },
  {
    id: 10,
    name: 'Java',
    content: `Academic exposure. Comfortable reading Java codebases and making targeted changes, but not my daily language.`,
    progress: 20,
  },
  {
    id: 12,
    name: 'AWS',
    content: `Hosted Cabe+1 (700+ daily users) on AWS before migrating to lower-cost infrastructure. Working knowledge of core services.`,
    progress: 20,
  },
].sort((a, b) => b.progress - a.progress);

const skillsMobile: SkillItem[] = [
  {
    id: 14,
    name: 'React Native',
    content: `Mobile projects for freelance and personal work since 2018. Comfortable with custom native modules and performance tuning.`,
    progress: 80,
  },
  {
    id: 15,
    name: 'Xamarin',
    content: `Used Xamarin heavily for early C#-based mobile projects before React Native took over as the cross-platform default.`,
    progress: 50,
  },
  {
    id: 16,
    name: 'Flutter',
    content: `Prototyping and learning-level projects. I can read and ship Flutter code; not where my depth is.`,
    progress: 30,
  },
  {
    id: 17,
    name: 'Android',
    content: `Native Android knowledge used mostly to debug platform-specific issues in cross-platform apps.`,
    progress: 20,
  },
  {
    id: 18,
    name: 'iOS',
    content: `Enough iOS knowledge to validate behaviour and fix compatibility issues in React Native and Xamarin apps.`,
    progress: 20,
  },
].sort((a, b) => b.progress - a.progress);

const skillsOther: SkillItem[] = [
  {
    id: 19,
    name: 'Photoshop & Illustrator',
    content: `Graphic design, UI mockups, and photo editing for freelance work and personal creative projects.`,
    progress: 80,
  },
  {
    id: 20,
    name: 'Git',
    content: `Trunk-based and GitHub-flow workflows, merge-conflict archaeology, and branching strategies for large teams.`,
    progress: 80,
  },
  {
    id: 22,
    name: 'Scrum',
    content: `Day-to-day Scrum practice: sprint planning, estimation, retros, and tight collaboration with product and stakeholders.`,
    progress: 75,
  },
  {
    id: 21,
    name: 'Illustration',
    content: `Digital and traditional. Procreate and Adobe Fresco, plus graphite and acrylic when I want to step away from the screen.`,
    progress: 70,
  },
  {
    id: 23,
    name: 'Audiovisual production',
    content: `Home-studio music production, recording, and mixing in Reaper and Logic Pro. Video editing in Adobe Premiere.`,
    progress: 50,
  },
  {
    id: 24,
    name: '3D modelling',
    content: `Autodesk 3ds Max for personal and experimental design work.`,
    progress: 40,
  },
].sort((a, b) => b.progress - a.progress);


const skillsCV = [
  {
    section: 'Languages',
    items: [
      { name: 'TypeScript', icon: '' },
      { name: 'JavaScript', icon: '' },
      { name: 'Python', icon: '' },
      { name: 'C#', icon: '' },
      { name: 'SQL', icon: '' }
    ]
  },
  {
    section: 'Frontend',
    items: [
      { name: 'React', icon: '' },
      { name: 'React Native', icon: '' },
      { name: 'Vue 2 / 3', icon: '' },
      { name: 'LitJS', icon: '' },
      { name: 'GSAP', icon: '' },
      { name: 'Webpack / Vite', icon: '' }
    ]
  },
  {
    section: 'Backend',
    items: [
      { name: 'Node.js', icon: '' },
      { name: 'Express', icon: '' },
      { name: '.NET (Core & Framework)', icon: '' }
    ]
  },
  {
    section: 'Data',
    items: [
      { name: 'PostgreSQL', icon: '' },
      { name: 'MySQL', icon: '' },
      { name: 'MSSQL', icon: '' },
      { name: 'MongoDB', icon: '' },
      { name: 'Firebase', icon: '' }
    ]
  },
  {
    section: 'Platforms',
    items: [
      { name: 'Backstage (Spotify)', icon: '' },
      { name: 'Azure DevOps', icon: '' },
      { name: 'Google Cloud Platform', icon: '' },
      { name: 'Docker', icon: '' }
    ]
  },
  {
    section: 'Practices',
    items: [
      { name: 'Technical mentoring', icon: '' },
      { name: 'System design & architecture', icon: '' },
      { name: 'CI/CD & DevOps', icon: '' },
      { name: 'Technical writing', icon: '' }
    ]
  }
];
const softSkillsCV = [
  {
    section: '',
    items: [
      { name: 'Team player', icon: '' },
      { name: 'Leader', icon: '' },
      { name: 'Social', icon: '' },
      { name: 'Creative', icon: '' },
      { name: 'Eye for design', icon: '' },
    ]
  },
];

const skillLanguages = [
  {
    language: 'Portuguese (BR)',
    level: 'Native'
  },
  {
    language: 'English',
    level: 'Advanced',
  },
  {
    language: 'Spanish',
    level: 'Intermediary',
  },
  {
    language: 'Italian',
    level: 'Beginner',
  },
  {
    language: 'Dutch',
    level: 'Elementary',
  }
]

export {
  skillsFront,
  skillsBack,
  skillsMobile,
  skillsOther,
  skillsCV,
  softSkillsCV,
  skillLanguages,
};
