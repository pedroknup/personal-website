type SkillItem = {
  name: string;
  content: any;
  progress: number;
  id: number;
}

const skillsFront: SkillItem[] = [
  {
    id: 0,
    name: 'HTML, JavaScript, CSS',
    content: `My journey with HTML, JavaScript, and CSS began in my early years and has evolved significantly over time. I consistently challenge myself by designing diverse layouts and staying abreast of the latest design trends. My proficiency in HTML and CSS is advanced.`,
    progress: 100
  },
  {
    id: 1,
    name: 'React',
    content: `I have a deep understanding of React, having worked intensively with it. I stay updated with its latest releases and incorporate tools such as Redux (or Context), TypeScript, and SCSS in my React projects.`,
    progress: 95
  },
  {
    id: 2,
    name: 'Vue.js',
    content: `I have extensive experience with Vue.js, utilizing it in various projects to build dynamic and responsive user interfaces.`,
    progress: 90
  },
  {
    id: 3,
    name: 'Webpack',
    content: `I am proficient in configuring Webpack to meet the specific needs of a project, ensuring optimal build performance and output.`,
    progress: 80
  },
  {
    id: 100,
    name: 'Lit',
    content: `I have recently gained considerable experience with Lit, applying it to various projects for efficient and scalable web component development.`,
    progress: 60
  },
  {
    id: 4,
    name: 'GSAP',
    content: `I am quite adept at using GSAP for creating sophisticated animations and interactive effects in web applications.`,
    progress: 60
  },
  {
    id: 512,
    name: 'AngularJS & Angular',
    content: `Although my experience with AngularJS and Angular is limited, I understand their core principles and fundamentals. However, I currently prefer other frameworks for my projects.`,
    progress: 20
  }
];

const skillsBack: SkillItem[] = [
  {
    id: 5,
    name: 'Node.js',
    content: `I have substantial experience with Node.js, particularly in developing web services using Express.js with TypeScript. I also employ various object-relational mapping frameworks, such as LoopBack, TypeORM, and Mongoose, and utilize Jest for testing.`,
    progress: 90
  },
  {
    id: 6,
    name: 'Relational Databases',
    content: `With over 15 years of experience working with relational databases, I possess advanced knowledge in database design, management, and optimization.`,
    progress: 80
  },
  {
    id: 9,
    name: 'Google Cloud Platform',
    content: `At Media.Monks, I extensively utilized Google Cloud Platform for hosting and implementing applications across various Google services, including Cloud Functions, CI/CD pipelines, and app hosting.`,
    progress: 80
  },
  {
    id: 90,
    name: 'Microsoft Azure DevOps',
    content: `I have extensively used Azure DevOps for my personal projects and at most of the clients, specially at Rabobank.`,
    progress: 80
  },
  {
    id: 400,
    name: '.NET',
    content: `I have a robust background in .NET, including both .NET Core (v1.0 & v2.0) and the .NET Framework. I have managed large-scale projects involving extensive data processing. My experience with .NET has not extended beyond .NET Core 3.`,
    progress: 70
  },
  {
    id: 7,
    name: 'NoSQL Databases',
    content: `I typically use MongoDB for serverless applications or scenarios requiring flexible data structures and substantial data storage.`,
    progress: 70
  },
  {
    id: 8,
    name: 'Docker',
    content: `Docker is a key tool in my development workflow, and I integrate it into nearly every project to streamline development and deployment processes.`,
    progress: 70
  },
  {
    id: 11,
    name: 'Google Firebase',
    content: `I have employed Firebase for hosting web applications both during freelancing and at Media.Monks.`,
    progress: 40
  },
  {
    id: 10,
    name: 'Java',
    content: `My experience with Java is limited to high school and university. While far away from being a Java specialist, I am capable of understanding and writing Java code.`,
    progress: 20
  },
  {
    id: 12,
    name: 'AWS',
    content: `I utilized AWS for hosting a significant mobile application (Cabe+1) before transitioning to Azure DevOps due to a more cost-effective plan.`,
    progress: 20
  }
];

const skillsMobile: SkillItem[] = [
  {
    id: 14,
    name: 'React Native',
    content: `Since 2018, I have been working with React Native for various freelance projects, enabling rapid development of native mobile applications.`,
    progress: 80
  },
  {
    id: 15,
    name: 'Xamarin',
    content: `Leveraging my C# expertise, I efficiently developed rich mobile applications with Xamarin. However, I have since transitioned to React Native for my mobile development needs.`,
    progress: 50
  },
  {
    id: 16,
    name: 'Flutter',
    content: `While my experience with Flutter is not extensive, I have created functional and straightforward applications using this framework.`,
    progress: 30
  },
  {
    id: 17,
    name: 'Android',
    content: `I have explored Android development primarily to resolve issues in Xamarin and React Native projects.`,
    progress: 20
  },
  {
    id: 18,
    name: 'iOS',
    content: `My familiarity with iOS development is mainly to support problem-solving in Xamarin and React Native contexts.`,
    progress: 20
  }
];

const skillsOther: SkillItem[] = [
  {
    id: 19,
    name: 'Photoshop & Illustrator',
    content: `As a photography and design enthusiast, I possess strong skills in photo manipulation and graphic design, including logo creation, banners, flyers, and UI design.`,
    progress: 80
  },
  {
    id: 20,
    name: 'Git',
    content: `My version control tool that I used since the very beginning, I adhere to best practices for version control as recommended by GitHub, ensuring effective and efficient code management.`,
    progress: 70
  },
  {
    id: 21,
    name: 'Illustration',
    content: `Drawing has been a passion of mine from a young age. I work with various traditional mediums such as graphite, markers, oil and acrylic paints, as well as digital painting, which I discovered and embraced in recent years.`,
    progress: 70
  },
  {
    id: 22,
    name: 'Scrum',
    content: `Over the past three years, I have actively participated in Scrum methodologies, typically working in two-week sprints with regular stand-ups, retrospectives, and planning meetings. I have found Jeff Sutherland’s book, "Scrum: The Art of Doing Twice the Work in Half the Time," particularly insightful. I have experience in working close to the Product Owner and stakeholders, managing the backlog, and estimating tasks and features.`,
    progress: 70
  },
  {
    id: 23,
    name: 'Audiovisual Production',
    content: `I have experience in music production using Reaper and Logic Pro, including recording and mixing. I also enjoy recording and sharing music performances on social media platforms and have directed several amateur short films.`,
    progress: 50
  },
  {
    id: 24,
    name: '3D Modeling',
    content: `My interest in cars as a child led me to learn 3D modeling using Autodesk 3D Studio Max. I have developed solid skills in geometric modeling and a basic understanding of animation, finding the process both relaxing and rewarding.`,
    progress: 40
  }
];

const skillsCV = [
  {
    section: 'Front-end',
    items: [
      { name: 'ReactJS & React Native', icon: '' },
      { name: 'Vue.js (2 & 3)', icon: '' },
      { name: 'LitJS', icon: '' },
      { name: 'Build Tools (Webpack, Rollup, Vite)', icon: '' },
      { name: 'Interactive Apps (GSAP, PixiJS, Three.js)', icon: '' }
    ]
  },
  {
    section: 'Back-end',
    items: [
      { name: 'Node.js', icon: '' },
      { name: 'Python', icon: '' },
      { name: 'C# (.NET Core & Framework)', icon: '' }
    ]
  },
  {
    section: 'Mobile',
    items: [
      { name: 'React Native', icon: '' },
      { name: 'Flutter', icon: '' }
    ]
  },
  {
    section: 'Database',
    items: [
      { name: 'SQL (MySQL, PostgreSQL, MSSQL)', icon: '' },
      { name: 'NoSQL (MongoDB, Firebase)', icon: '' }
    ]
  },
  {
    section: 'Cloud',
    items: [
      { name: 'Azure DevOps', icon: '' },
      { name: 'Google Cloud Platform', icon: '' },
      { name: 'AWS', icon: '' }
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
      { name: 'Good with design', icon: '' },
    ]
  },
];

export { skillsFront, skillsBack, skillsMobile, skillsOther, skillsCV,  softSkillsCV };
