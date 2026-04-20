import { Experience } from "../../types/experience";

const educationalExperiences: Experience[] = [
  {
    title: 'Computer Engineering',
    date: 'Jan/2015 - Mar/2019',
    icon: 'https://i.imgur.com/zQnU30s.png',
    place: 'Universidade Federal de Itajubá (UNIFEI)',
    link: 'https://unifei.edu.br/',
    description: {
      content: 'Computer Engineering at one of Brazil’s top engineering schools. Teaching assistant for Programming Logic and Data Structures (32h/month each). Active in the Drummonsters Robotics team, national programming contests, and student representation; volunteer IT consultant for FEJEMG.'
    }
  },
  {
    title: 'Computer Technician integrated with High School',
    date: 'Jan/2011 - Dec/2013',
    place: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    description: {
      content: 'Technical secondary education combining high school with a Computer Technician programme. Curriculum covered programming, data structures, databases, electronics, and electrical systems.'
    }
  }
];


const professionalExperiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    date: 'Sep/2023 - Now',
    place: 'Rabobank (via FrontValue)',
    link: 'https://www.rabobank.nl',
    icon: 'https://i.imgur.com/27l1d7y.png',
    defaultOpened: true,
    description: {
      content: 'Senior full-stack engineer on Rabobank’s internal developer portal built on Spotify’s Backstage (React, Node.js, TypeScript). Lead feature design alongside product and architecture, own CI/CD pipelines on Azure DevOps, and drive a cross-portal standardization effort. Mentor mid-level engineers, run interviews, and present updates to stakeholders across departments.'
    },
    skills: [
      'TypeScript',
      'React',
      'Node.js',
      'Backstage',
      'PostgreSQL',
      'Azure DevOps',
      'CI/CD',
      'Software architecture',
      'Technical mentoring',
      'Documentation'
    ]
  },
  {
    title: 'Senior Frontend Developer',
    date: 'Feb/2021 - Aug/2023',
    place: 'Media.Monks',
    link: 'https://www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    description: {
      content: 'Delivered high-traffic web experiences for Google and General Motors. Led frontend architecture and animation (GSAP), contributed Python backend features when needed, and handled client scoping and deadlines directly. Ran code reviews and pair-programming sessions to grow junior teammates.',
      projects: [
        {
          title: 'Chromebook Retail App (2022 & 2023)',
          content: 'Demo app for Chromebooks deployed in physical retail stores worldwide.'
        },
        {
          title: 'Pixel 6 launch',
          content: 'Countdown, livestream, and <a href="https://pixelevent.withgoogle.com/" target="_blank">post-event platforms</a> used by over 500,000 viewers.'
        },
        {
          title: 'Google Cloud x Chess.com',
          content: '<a href="https://showcase.withgoogle.com/chess" target="_blank">Showcase site</a> for Google Cloud’s success story with Chess.com.'
        },
        {
          title: 'Google Cloud Engage Sessions',
          content: 'Interactive livestream platform with real-time quizzes, polls, and audience reactions.'
        },
        {
          title: 'GM Exhibit Zero (CES 2022)',
          content: 'General Motors’ flagship digital presence at CES 2022.'
        }
      ]
    },
    skills: [
      'TypeScript', 'React', 'Vue', 'Lit', 'Node.js', 'Python', 'GSAP', 'Frontend architecture', 'Client communication'
    ]
  },
  {
    title: 'Backend Developer',
    date: 'Jul/2020 - Feb/2021',
    place: 'CowManager B.V.',
    link: 'https://www.cowmanager.com/en-us/',
    icon: 'https://i.imgur.com/3fIF7HW.png',
    defaultOpened: false,
    description: {
      content: 'Backend engineer on CowManager’s precision-livestock monitoring services (.NET, Entity Framework, MSSQL on Azure). Shipped features across core APIs, refactored legacy modules, and resolved recurring performance regressions. Worked closely with frontend, QA, and design in Scrum.'
    },
    skills: [
      '.NET Framework', 'Entity Framework', 'MSSQL', 'Microsoft Azure', 'Vue', 'Scrum'
    ]
  },
  {
    title: 'Fullstack Developer',
    date: 'Oct/2019 - Jun/2020',
    place: 'Pycom Ltd.',
    link: 'https://pycom.io/',
    icon: 'https://i.imgur.com/lkhhta0.png',
    defaultOpened: false,
    description: {
      content: 'Sole-led the full redesign of Pymakr (Pycom’s VS Code / Atom IDE for MicroPython IoT devices) and built Pymakr Online, a browser-based IDE with online and offline deploy. Maintained the device management dashboard throughout (React, Node.js, GraphQL, MongoDB) and owned cross-platform compatibility.'
    },
    skills: [
      'React', 'Node.js', 'GraphQL', 'MongoDB', 'Webpack', 'Jest', 'Plugin development'
    ]
  },
  {
    title: 'Frontend Developer Intern',
    date: 'Mar/2019 - Oct/2019',
    place: 'Webbio B.V',
    link: 'https://webbio.nl/',
    icon: 'https://i.imgur.com/76CEHlw.png',
    description: {
      content: 'Key contributor to BlackFridayNederland, a high-traffic e-commerce platform tuned for SEO and peak-load performance (React, Redux, TypeScript). Worked in Scrum and helped teammates ramp up on the frontend stack.',
      projects: [
        {
          title: 'BlackFridayNederland',
          content: '<a href="https://www.blackfridaynederland.nl/" target="_blank">Live site</a> engineered for SEO and concurrent peak load.'
        }
      ]
    },
    skills: ['React', 'Redux', 'TypeScript', 'Swagger', 'Formik', 'Scrum']
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/BEkFZUX.png',
    place: 'Clubpetro',
    link: 'https://novo.clubpetro.com/',
    description: {
      content: 'Led a from-scratch rebuild of Clubpetro’s loyalty product for fuel retail. Chose the stack, designed the schema, and delivered the web app and services end to end (Vue/React, .NET, MSSQL). Mentored juniors throughout the migration.'
    },
    skills: [
      'Vue', 'React', 'TypeScript', '.NET Framework', 'Entity Framework', 'MSSQL', 'Scrum'
    ]
  },
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    icon: 'https://i.imgur.com/DfyY23C.png',
    place: 'Vale S.A',
    link: 'http://www.vale.com/EN/Pages/default.aspx',
    description: {
      content: 'Built internal reporting tools (.NET MVC, Vue) and a C# Telegram bot that automated daily operational briefings for executives. Tuned SQL Server queries and maintenance jobs feeding the reporting pipeline.'
    },
    skills: ['.NET MVC', 'C#', 'Vue', 'MSSQL', 'SQL']
  },
  {
    title: 'Freelance Fullstack Developer',
    date: 'Jan/2014 - Jan/2018',
    icon: 'https://i.imgur.com/kthsc9S.jpg',
    place: 'Self Employed',
    link: 'https://pedroknup.github.io/personal-website/',
    description: {
      content: 'Delivered dozens of web, mobile, and desktop products end to end: scoping, UX, architecture, delivery. Highlights include Estádio Sonoro (karaoke app for the Flamengo × Tim marketing campaign), SIHP (hotel management system, 50+ customers), and Cabe+1 (student carpooling app, 700+ daily users).',
      projects: [
        {
          title: 'Estádio Sonoro',
          content: 'Interactive karaoke app built for a Flamengo × Tim marketing campaign.'
        },
        {
          title: 'SIHP',
          content: 'Hotel management system in production with 50+ customers.'
        },
        {
          title: 'Cabe+1',
          content: 'Student carpooling app that reached 700+ daily users.'
        }
      ]
    },
    skills: [
      'Vue', 'Node.js', 'Xamarin', 'Firebase', 'MySQL', 'MongoDB', '.NET Framework', 'Entity Framework'
    ]
  },
  {
    title: 'IT Intern',
    date: 'Jan/2014 - Jul/2014',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    place: 'CEFET-MG',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    description: {
      content: 'Provided desktop and network support for staff and students, configured servers and hardware, and set up a Redmine instance to centralize internal project management.'
    },
    skills: [
      'Network administration', 'IT hardware support', 'Web services', 'Scrum'
    ]
  }
];

export { professionalExperiences, educationalExperiences }
