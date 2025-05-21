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
    content: `I've worked with HTML, JavaScript, and CSS since the very beginning of my development career. I build performant, responsive layouts and consistently keep up with modern web standards and best practices.`,
    progress: 100,
  },
  {
    id: 1,
    name: 'React.js',
    content: `Extensive experience with React, using it as my primary frontend library across multiple projects. I integrate Redux or Context API, apply TypeScript, and build reusable components with a strong emphasis on performance and maintainability.`,
    progress: 95,
  },
  {
    id: 2,
    name: 'Vue.js',
    content: `Used in several professional and personal projects. Proficient in Vue 2 and Vue 3 with experience using Vuex, Composition API, and integrating with backend APIs.`,
    progress: 90,
  },
  {
    id: 3,
    name: 'Webpack',
    content: `Strong experience configuring Webpack for bundling, performance optimization, and custom setups. Also experienced with Vite and Rollup.`,
    progress: 80,
  },
  {
    id: 100,
    name: 'Lit',
    content: `Hands-on experience using Lit to create modern, reusable web components. Used in recent projects for encapsulated component architecture.`,
    progress: 60,
  },
  {
    id: 4,
    name: 'GSAP',
    content: `Used GSAP for complex animations and user interface interactions. Familiar with its timeline management and plugin ecosystem.`,
    progress: 60,
  },
  {
    id: 512,
    name: 'AngularJS & Angular',
    content: `Basic understanding and exposure to both AngularJS and Angular. Although not my go-to framework, I can navigate codebases and contribute when needed.`,
    progress: 20,
  },
];

const skillsBack: SkillItem[] = [
  {
    id: 5,
    name: 'Node.js',
    content: `Extensive experience in building APIs and backend services using Node.js with Express.js and TypeScript. Proficient in testing with Jest and integration with databases and DevOps pipelines.`,
    progress: 90,
  },
  {
    id: 6,
    name: 'Relational Databases',
    content: `Deep experience with PostgreSQL, MySQL, SQLite, and Microsoft SQL Server. Skilled in schema design, query optimization, and migrations.`,
    progress: 85,
  },
  {
    id: 9,
    name: 'Google Cloud Platform',
    content: `Used extensively at Media.Monks for deploying applications and managing infrastructure, including Cloud Functions and App Engine.`,
    progress: 80,
  },
  {
    id: 90,
    name: 'Microsoft Azure DevOps',
    content: `Used at multiple clients, especially Rabobank, for source control, pipeline setup, and project management in CI/CD environments.`,
    progress: 80,
  },
  {
    id: 400,
    name: '.NET',
    content: `.NET experience including .NET Framework and early versions of .NET Core. Built enterprise services and data-driven applications.`,
    progress: 85,
  },
  {
    id: 13,
    name: 'Backstage',
    content: `Daily experience using Spotify's Backstage framework for building developer portals. Developed plugins, customized the catalog, and led efforts to standardize portal architecture.`,
    progress: 85,
  },
  {
    id: 25,
    name: 'Microsoft Power Automate',
    content: `Utilized to automate workflows and integrate business logic across applications at Rabobank.`,
    progress: 70,
  },

  {
    id: 7,
    name: 'NoSQL Databases',
    content: `Familiar with MongoDB and Firebase for projects requiring flexible schema design. Used in full-stack apps and serverless contexts.`,
    progress: 70,
  },
  {
    id: 8,
    name: 'Docker',
    content: `Used regularly to containerize applications and services. Comfortable writing Dockerfiles, composing multi-container systems, and integrating with CI/CD.`,
    progress: 70,
  },
  {
    id: 11,
    name: 'Google Firebase',
    content: `Used Firebase Hosting and Firestore during freelancing and side projects.`,
    progress: 40,
  },
  {
    id: 10,
    name: 'Java',
    content: `Limited academic experience. Comfortable reading and writing basic Java code when required.`,
    progress: 20,
  },
  {
    id: 12,
    name: 'AWS',
    content: `Used for hosting a large mobile app (Cabe+1). Transitioned to Azure DevOps later for cost reasons.`,
    progress: 20,
  },
];

export { skillsFront, skillsBack };
