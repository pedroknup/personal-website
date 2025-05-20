import { Experience } from "../../types/experience";

const educationalExperiences: Experience[] = [
  {
    title: 'Computer Engineering (ongoing)',
    date: 'Jan/2015 - Mar/2019',
    icon: 'https://i.imgur.com/zQnU30s.png',
    place: 'Universidade Federal de Itajubá (UNIFEI)',
    link: 'www.google.com',
    description: {
      content: {
        web: `UNIFEI (Universidade Federal de Itajubá) is a prestigious federal university in Minas Gerais, Brazil, founded in 1913. Renowned as one of Brazil’s top engineering schools, it is recognized for its strong academic programs and impactful research, especially in power systems.

At UNIFEI, I actively participated in extracurriculars including the Drummonsters Robotics Team, Programming Marathon, student representation for Computer Engineering, and junior enterprise initiatives. I also worked as a support teacher for academic classes.

- Programming Logic support teacher (32h/month). Advisors: Wandré Nunes Veloso & Claudia Izeki.
- Algorithms and Data Structures support teacher (32h/month). Advisor: Claudia Izeki.
- Volunteer roles in junior enterprises: Up Consultoria JR and FEJEMG (IT Consultant).`,
        cv: 'Pursuing Computer Engineering at UNIFEI, one of Brazil’s top engineering institutions. Engaged in robotics, programming competitions, student leadership, and academic mentoring. Worked as a support teacher for programming and algorithms and contributed as a volunteer IT consultant.'
      }
    }
  },
  {
    title: 'Computer Technician integrated with High School',
    date: 'Jan/2011 - Dec/2013',
    place: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    description: {
      content: {
        web: `CEFET-MG (Federal Center for Technological Education of Minas Gerais) is a leading institution for technical and engineering education in Brazil.

Completed a Computer Technician program integrated with high school. Coursework included programming logic, data structures, databases, electronics, and electrical systems.`,
        cv: 'Completed a Computer Technician program at CEFET-MG alongside high school. Curriculum included programming, databases, electronics, and electrical systems.'
      }
    }
  }
];


const professionalExperiences: Experience[] = [
  {
    title: 'JavaScript Consultant',
    date: 'Sep/2023 - Now',
    place: 'Rabobank (via FrontValue)',
    link: 'www.rabobank.nl',
    icon: 'https://i.imgur.com/27l1d7y.png',
    defaultOpened: true,
    description: {
      content: {
        web: `At Rabobank, I work as a JavaScript (TypeScript) Consultant, contributing to the development and maintenance of a complex developer portal built on React and Node.js using Spotify’s Backstage framework. My role spans full-stack development, DevOps responsibilities, and collaboration with the Product Owner to design and architect features and improvements.

Furthermore, I work with cross-functional teams to standardize and ensure consistency across the software ecosystem, writing clean code, creating unit tests, and maintaining detailed documentation. I also present updates to stakeholders and departments, and mentor junior and mid-level developers.

**Tasks:**
• Build and maintain a developer portal using Node.js, React.js, and Backstage framework
• Collaborate closely with the Product Owner and Solution Architect to define features and technical direction
• Lead the development of internal tools and plugins to improve developer experience
• Design and implement a standardization strategy to unify portals across Rabobank
• Write unit and integration tests to ensure code quality and reliability
• Create technical documentation for internal adoption and onboarding
• Mentor junior and mid-level developers through code reviews, pair programming, and knowledge-sharing sessions
• Interview candidates and evaluate their technical skills
• Engage in DevOps practices including CI/CD pipeline development and infrastructure management
• Participate in daily stand-ups and Agile ceremonies`,
        cv: 'JavaScript Consultant at Rabobank, developing a complex developer portal in React and Node.js using Spotify’s Backstage framework. Involved in full-stack development, DevOps, and mentoring. Focused on feature architecture, code quality, and documentation.'
      }
    },
    skills: [
      'TypeScript',
      'ReactJS',
      'NodeJS',
      'Backstage',
      'PostgreSQL',
      'SQLite',
      'Azure DevOps',
      'CI/CD',
      'Microsoft Power Automate',
      'Unit Testing',
      'Documentation',
      'DevOps',
      'Technical Mentoring',
      'Software Architecture'
    ]
  },
  {
    title: 'Senior Frontend Developer',
    date: 'Feb/2021 - Mar/2023',
    place: 'Media.Monks',
    link: 'www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    description: {
      content: {
        web: `Media.Monks is a global creative production company known for building innovative digital experiences for top-tier brands.

At Media.Monks, I contributed to frontend development for high-profile web apps for clients like Google (mainly) and General Motors, and led the development of the Chromebook Retail App. Key projects included the Chromebook Retail App, Pixel 6 launch, Google Cloud Chess, and Exhibit Zero (GM's showcase at CES 2022).

I promoted code quality through rigorous code reviews and pair programming. I occasionally contributed backend features when needed using Python and participated in knowledge-sharing sessions on new frontend technologies.

I demonstrated strong communication skills by engaging in client discussions to clarify deliverables, gather requirements, and negotiate deadlines. I also took an active role in client management, ensuring successful project outcomes.
I managed client expectations, clarified deliverables, and led junior developers. My work also included designing UI flows, animations, and architecture decisions.

**Tasks:**
• Develop applications using VueJS, ReactJS, and NodeJS
• Lead frontend architecture and UI/UX design
• Optimize web performance and implement caching strategies
• Mentor junior developers and lead pair programming sessions
• Present technical concepts to clients and internal teams
• Collaborate with backend developers and QA engineers
• Contribute to backend features using Python when needed
• Integrate AI tools for automating Jira task management
• Participate in daily stand-ups and Agile ceremonies`,
        cv: 'Senior Frontend Developer at Media.Monks, delivering web applications for Google and GM. Led the development of the Chromebook Retail App, conducted code reviews, mentored juniors, and handled backend tasks with Python. Actively participated in client engagement and architecture planning.'
      },
      projects: [
        {
          title: 'Google Cloud - Chess.com',
          content: `Developed a showcase app highlighting Google Cloud’s success story with Chess.com. <a href="https://showcase.withgoogle.com/chess" target="_blank">Visit website</a>.`
        },
        {
          title: 'Pixel 6 Launch campaign apps',
          content: `Built three apps for the Pixel 6 launch: countdown, livestream, and <a href="https://pixelevent.withgoogle.com/" target="_blank" />post-event experience</a>. Over 500,000 viewers used these platforms.`
        },
        {
          title: 'Chromebook Retail App',
          content: 'Developed the retail demo apps (2022 & 2023) for Chromebooks used in physical stores globally.'
        },
        {
          title: 'Google Cloud: Engage Sessions',
          content: 'Built an interactive livestream platform with real-time quizzes, polls, and reactions for audience engagement.'
        }
      ]
    },
    skills: [
      'Front-end Development', 'Back-end Development', 'Python', 'VueJS', 'ReactJS', 'LitJS', 'AngularJS', 'NodeJS', 'GSAP', 'Glue', 'ReduxJS', 'Scrum', 'TypeScript'
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
      content: {
        web: `CowManager is a Dutch company specialized in precision livestock monitoring using smart sensor technologies.

At CowManager, I was responsible for maintaining and improving core web services and databases used in agricultural monitoring solutions.

**Tasks:**
• Maintain and refactor existing backend codebases
• Implement new features and enhancements to services
• Troubleshoot and resolve performance and stability issues
• Collaborate with frontend, backend, QA, and design teams
• Ensure quality releases through testing and deployment pipelines
• Participate in daily stand-ups and Agile ceremonies`,
        cv: 'Backend Developer at CowManager, maintaining and enhancing core web services and databases. Contributed new features, resolved performance issues, and worked in Agile teams.'
      }
    },
    skills: [
      'Microsoft Azure', 'VueJS', 'Scrum', 'Microsoft SQL Server', 'Entity Framework', '.NET Framework'
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
      content: {
        web: `Pycom is an Internet of Things (IoT) company offering integrated hardware, software, and cloud solutions for developers.

At Pycom, I developed and maintained the company’s device dashboard and the Pymakr IDE extension for VSCode and Atom.

I solely kicked off the development of Pymakr 2, a redesigned IDE with enhanced features, and contributed to Pymakr Online—a web-based IDE for Pycom devices.

**Tasks:**
• Design and develop the IoT dashboard and web-based IDE
• Maintain and enhance the Pymakr VSCode and Atom extensions
• Lead the full rewrite and redesign of Pymakr 2
• Build Pymakr Online with online/offline code deployment features
• Debug cross-platform compatibility issues
• Contribute to cloud integration and device communication workflows`,
        cv: 'Fullstack Developer at Pycom Ltd., building IoT dashboards and developer tools. Led the redesign of Pymakr IDE, and developed Pymakr Online, focusing on MicroPython integration.'
      }
    },
    skills: [
      'ES6', 'Webpack', 'Jest', 'Mocha', 'GraphQL', 'Plugin Development', 'ReactJS', 'NodeJS', 'Scrum', 'MongoDB'
    ]
  },
  {
    title: 'Frontend Developer Intern',
    date: 'Mar/2019 - Oct/2019',
    place: 'Webbio B.V',
    link: 'https://webbio.nl/',
    icon: 'https://i.imgur.com/76CEHlw.png',
    description: {
      content: {
        web: `The company that brought me to the Netherlands, Webbio is a digital agency based in the Netherlands that specializes in building custom websites and applications.

At Webbio, I focused on developing ReactJS applications and ensuring high performance and SEO standards. I contributed significantly to the Blackfriday Nederland e-commerce portal, designed to handle high traffic.

I also mentored teammates and participated in daily Scrum ceremonies.

**Tasks:**
• Develop and optimize high-traffic ReactJS web applications
• Ensure SEO best practices and performance benchmarks
• Collaborate with team members during daily Scrum meetings
• Mentor peers on frontend technologies and workflows
• Test and debug to ensure production stability`,
        cv: 'Frontend Developer Intern at Webbio, working on high-traffic ReactJS applications. Key contributor to Blackfriday Nederland. Participated in Agile workflows and mentored peers.'
      },
      projects: [
        {
          title: 'Black friday Nederland',
          content: `High-performance e-commerce platform optimized for SEO and traffic. <a href="https://www.blackfridaynederland.nl/" target="_blank">Visit site</a>.`
        }
      ]
    },
    skills: ['Redux', 'Swagger', 'Formik', 'ES6', 'ReactJS', 'Scrum', 'TypeScript']
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/BEkFZUX.png',
    place: 'Clubpetro',
    link: 'https://novo.clubpetro.com/',
    description: {
      content: {
        web: `Clubpetro is a Brazilian company providing loyalty and management systems for gas stations and convenience stores.

At Clubpetro, I led the complete rebuild of the company's main product, covering the web app, database, and web services.

**Tasks:**
• Choose technology stack and define architecture
• Design UI layout and database schema
• Build web app and backend services from scratch
• Provide technical mentoring to teammates
• Coordinate development lifecycle through Agile processes`,
        cv: 'Fullstack Developer at Clubpetro, rebuilt the core product from scratch. Led architecture decisions, database design, and provided technical mentoring.'
      }
    },
    skills: [
      'VueJS', 'ReactJS', 'Scrum', 'Microsoft SQL Server', 'Entity Framework', '.NET Framework', 'TypeScript'
    ]
  },
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    icon: 'https://i.imgur.com/DfyY23C.png',
    place: 'Vale S.A',
    link: 'http://www.vale.com/EN/Pages/default.aspx',
    description: {
      content: {
        web: `Vale S.A. is one of the world’s largest mining companies, recognized for its investments in innovation and technology.

At Vale S.A., I developed web applications using .NET MVC and VueJS, and created a smart Telegram bot to automate internal reporting for executives.

**Tasks:**
• Build .NET MVC and VueJS internal tools
• Create and deploy a smart Telegram bot using C#
• Design and optimize SQL Server queries and jobs
• Support integration of multiple web services
• Document workflows and provide technical support`,
        cv: 'Computer Engineering Intern at Vale S.A., developed web tools and a Telegram bot for internal reporting. Focused on SQL optimization and .NET application development.'
      }
    },
    skills: ['Web Services', 'Node.js', 'HTML', 'Microsoft SQL Server', 'SQL']
  },
  {
    title: 'Freelance Fullstack Developer',
    date: 'Jan/2014 - Jan/2018',
    icon: 'https://i.imgur.com/kthsc9S.jpg',
    place: 'Self Employed',
    link: 'http://www.google.com',
    description: {
      content: {
        web: `As a freelance developer, I delivered software solutions for clients across industries such as hospitality, retail, and education.

I built dozens of web, mobile, and desktop apps including:

Highlighted projects include:
- **Estádio Sonoro**: Interactive karaoke app used for a Flamengo + Tim marketing campaign.
- **SIHP**: Hotel management system used by 50+ clients.
- **Cabe+1**: A student carpooling app that saw 700+ daily users.

**Tasks:**
• Plan, design, and develop custom web/mobile/desktop solutions
• Handle client negotiations, scoping, and delivery
• Architect technical infrastructure and database schema
• Create user-friendly UI and responsive interfaces
• Maintain and refactor legacy applications`,
        cv: 'Freelance Fullstack Developer, delivered web/mobile/desktop apps across sectors. Built products like Estádio Sonoro (karaoke app), SIHP (hotel system), and Cabe+1 (carpool app). Handled UX, dev, and client relationships.'
      }
    },
    skills: [
      'Google Firebase', 'Xamarin', 'VanillaJS', 'VueJS', 'NodeJS', 'jQuery', 'MySQL', 'Entity Framework', '.NET Framework', 'MongoDB'
    ]
  },
  {
    title: 'IT Intern',
    date: 'Jan/2014 - July/2014',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    place: 'CEFET-MG',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    description: {
      content: {
        web: `CEFET-MG (Federal Center for Technological Education of Minas Gerais) is a respected Brazilian institution known for its technical and engineering programs.

As an IT Intern at CEFET-MG, I provided technical support to staff and students, maintained IT infrastructure, and developed a Redmine server for project management.

**Tasks:**
• Assist staff and students with technical issues
• Maintain and update IT infrastructure and networks
• Set up and configure servers and hardware
• Develop and deploy an internal Redmine server for collaboration
• Troubleshoot and document technical problems`,
        cv: 'IT Intern at CEFET-MG, supported staff and maintained infrastructure. Developed a Redmine server to improve project management and collaboration.'
      }
    },
    skills: [
      'Network Administration', 'IT Hardware Support', 'Front-end Development', 'Scrum', 'Web Services'
    ]
  }
];

export { professionalExperiences, educationalExperiences }
