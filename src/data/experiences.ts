import { Experience } from "../../types/experience";

const educationalExperiences: Experience[] = [
  {
    title: 'Computer Engineering',
    date: 'Jan/2015 - Mar/2019',
    icon: 'https://i.imgur.com/zQnU30s.png',
    description: 'Universidade Federal de Itajubá (UNIFEI)',
    link: 'www.google.com',
    content: {
      content: `Programming Logic Monitor with a workload of 32h monthly. Advisor: Wandré Nunes Veloso. Programming Logic Monitor with a workload of 32h monthly. Advisor: Claudia Izeki.
Algorithms and Data structures Monitor with a workload of 32h monthly. Advisor: Claudia Izeki.

Volunteer jobs: Up Consultoria JR and FEJEMG as an IT assessor`
    }
  },
  {
    title: 'Computer Technician integrated to Highschool',
    date: 'Jan/2011 - Dec/2013',
    description: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    content: {
      content:
        'Computer technician integrated to Highschool. From programing logic, data structure and databases to electronics and electrics.'
    }
  }
];

const professionalExperiences: Experience[] = [
  {
    title: 'JavaScript Consultant',
    date: 'Sep/2024 - Now',
    description: 'Rabobank (via FrontValue)',
    link: 'www.rabobank.nl',
    icon: 'https://i.imgur.com/27l1d7y.png',
    defaultOpened: true,
    content: {
      content: `As a JavaScript Consultant at Rabobank, I play a key role in the development and maintenance of a sophisticated React and Node.js application that utilizes the Backstage framework developed by Spotify. My responsibilities include full-stack development, DevOps tasks, and close collaboration with the Product Owner to design and architect new features for the software catalog application.

      I work extensively with various teams to ensure consistency and standardization across the software catalog, which involves delivering high-quality code, writing comprehensive unit tests, creating detailed documentation, and presenting updates and progress to stakeholders and departmental teams. Additionally, I provide mentorship to junior and mid-level colleagues, guiding them in best practices and helping them grow their skills in both technical and professional aspects.`
    }
  },
  {
    title: 'Senior Frontend Developer',
    date: 'Feb/2021 - Mar/2023',
    description: 'Media.Monks',
    link: 'www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    content: {
      content: `
             Media.Monks is a leading creative production company with focus on complex digital products for global enterprises. I was responsible for multiple complex web applications for Google and General Motors. Notable projects I worked on include Chromebook Retail App, Google Gloud Chess, General Motors' CES 2022 showcase, Pixel 6 launch and Google Cloud Engage sessions.
             In my scrum team, I emphasized code reviews and frequently engaged pair programming to ensure quality. I contributed to backend development using Python when required. I also actively participated in knowledge sharing sessions where I talked about new frontend technologies and showcased my personal projects.
             Worked closely with Project Managers (PMs), Producers, and Quality Assurance (QA) engineers, fostering effective collaboration and communication across the project lifecycle.
             Lead the development of the Chromebook Retail app for the 2022 and 2023 versions. I took on the responsibility of coaching junior developers, ensuring alignment of client expectations with the producer, and contributing significantly to the app's design. I played a key role in brainstorming animations and flows.
             Demonstrated strong communication skills by engaging in client discussions to clarify deliverables, gather requirements, and negotiate deadlines. I also took an active role in client management, ensuring successful project outcomes.

            Tasks:

             • Design, develop and implement web applications using VueJS, ReactJS and NodeJS.
             • Discussing the complex technical domain and making architectural decisions.
             • Implement caching strategies and optimize data retrieval to reduce server load and enhance responsiveness.
             • Analyze and optimize critical rendering path to minimize blocking resources and improve perceived performance.
             • Engaging in client discussions, clarifying deliverables and gathering requirements.
             • Participating in knowledge sharing sessions, talking about new frontend technologies.
             • Active participation in code reviews and pair programming.
             • Providing mentorship to less experienced colleagues.
             • Implement an AI powered code bot to automate the execution to simple tasks in Jira to improve productivity.
`,
      items: [
        {
          title: 'Google Cloud - Chess.com',
          content: `App for Google Cloud to showcase their costumer success case with Chess.com. <a href="https://showcase.withgoogle.com/chess" target="_blank">Visit website</a>.`
        },
        {
          title: 'Pixel 6 Launch campaign apps',
          content:
            'The Google Pixel Fall Launch was consisted of three different parts/web apps: Countdown for the launch, the actual stream and the <a href="https://pixelevent.withgoogle.com/" target="_blank" />post stream</a>. There were over 500.000 people that followed the event through those apps. The live steam video can be watched <a href="https://www.youtube.com/watch?v=WNarpiGz3Kk" target="_blank">here</a>'
        },
        {
          title: 'Chromebook Retail App',
          content:
            'Google Chromebook Retail app that is running on Chromebooks in stores around the world. To check it out, just go to any store that has chromebook to sell ;)'
        },
        {
          title: 'Google Cloud: Engage Sessions',
          content:
            'Interactive live stream platform for Google Cloud that allows the presenters to interact with the audience with live quizzes, polls, reactions etc.'
        }
      ]
    },
    skills: [
      'Front-end Development',
      'Back-end Development',
      'python',
      'VueJS',
      'ReactJS',
      'LitJS',
      'AngularJS',
      'NodeJS',
      'GreenSock Animation Platform (GSAP)',
      'Glue',
      'ReduxJS',
      'Scrum',
      'TypeScript'
    ]
  },
  {
    title: 'Backend Developer',
    date: 'Jul/2020 - Feb/2021',
    description: 'CowManager B.V.',
    link: 'https://www.cowmanager.com/en-us/',
    icon: 'https://i.imgur.com/3fIF7HW.png',
    defaultOpened: false,
    content: {
      content: `
              Cowmanager is a company in the agricultural domain. They provide cow monitoring services and health sensor technologies. I was responsible for the maintenance and improvement of a core web service and its underlying database.
              In this role, I monitored system performance by troubleshooting and resolving issues. I also took part in the implementation of new features and updates for both the web service and web client app. I worked alongside the development team to ensure that all changes underwent proper testing and deployment.

          Tasks:
              • Designing, developing, and implementing frontend, integration, and backend services.
              • Implementing new features and enhancements to the existing system.
              • Collaborating in cross-functional teams, including frontend and backend developers, designers, and QA.
              • Maintaining and troubleshooting the web service and database.
              • Operating within a Scrum framework for project management.
`
    },
    skills: [
      'Microsoft Azure', 'VueJS', 'Scrum', 'Microsoft SQL Server', 'Entity Framework', '.NET Framework'
    ]
  },
  {
    title: 'Fullstack Developer',
    date: 'Oct/2019 - Jun/2020',
    description: 'Pycom Ltd.',
    link: 'https://pycom.io/',
    icon: 'https://i.imgur.com/lkhhta0.png',
    defaultOpened: false,
    content: {
      content: `
Pycom is a global Device-to-Cloud Internet of Things (IoT) technology company. I was responsible for the development of Pycom's IoT dashboard.
            Additionally, I was responsible for maintaining the Pymakr extension, an IDE designed for Pycom boards available on both VSCode and Atom. I also led the development of Pymakr 2.

          Tasks:
              • Development of a MicroPython-based device and dashboard web app
              • Ensuring reliable integrations between devices and the cloud
              • In charge of Pymakr extensions, an IDE for Pycom boards
              • Lead developer for Pymakr 2
              • Development of Pymakr online, a web-based IDE for Pycom devices that allows offline and online code deployment and debugging.
      `
    },
    skills: [
      'ES6', 'Webpack', 'Jest', 'Mocha (JavaScript Framework)', 'GraphQL', 'Code editors plugin development (VSC and Atom)', 'ReactJS', 'NodeJS', 'Scrum', 'MongoDB'
    ]
  },
  {
    title: 'Frontend Developer Intern',
    date: 'Mar/2019 - Oct/2019',
    description: 'Webbio B.V',
    link: 'https://webbio.nl/',
    icon: 'https://i.imgur.com/76CEHlw.png',
    content: {
      content: `
Webbio B.V. is a digital agency providing custom-made web solutions. As a Front-End Developer at Webbio, I primarily focused on designing and building web applications using ReactJS. I actively participated in daily Scrum meetings, ensuring the delivery of quality code within the stipulated time frames.
              A key project that my team and I worked on was Blackfriday Nederland, a complex e-shop portal. Despite the project's large scale and the significant amount of data it managed, the team optimized the portal to handle high levels of traffic and achieve a high SEO score.
              In addition to my development responsibilities, I also provided mentorship to my team mates, sharing my expertise and supporting their learning journey.

          Tasks:
              • Designing and developing web applications using ReactJS
              • Providing mentorship to my team mates
              • Ensuring timely delivery of well-written code
              • Adhering to industry best practices throughout the development process
              • Participating in Scrum events
`,
      items: [
        {
          title: 'Black friday Nederland',
          content: `Amazingly fast and responsive app for the Dutch Black Friday. Even though there are a lot of stores and products in there, we did a great job making sure the website is super fast and has a great SEO score, even though it's a WPA ;) Go <a href="https://www.blackfridaynederland.nl/" target="_blank">check it out</a> with your own eyes.`
        }
      ]
    },
    skills: [' Redux', 'Swagger', 'Formik', 'ES6', 'ReactJS', 'Scrum', 'TypeScript']
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/BEkFZUX.png',
    description: 'Clubpetro',
    link: 'https://novo.clubpetro.com/',
    content: {
      content: `
ClubPetro is a customer loyalty company specializing in the fuel retail market. As a Full-Stack Engineer at ClubPetro, I was given the responsibility of completely rebuilding the company's primary product, including the web app, database, and web service.
              My tasks involved selecting suitable technologies and languages, designing a new database structure, the app layout, and the web service. Additionally, I provided mentorship to my colleagues throughout the project.
          Tasks:
              • Responsible for selecting the appropriate technologies and programming language.
              • Designing the new database structure, UI/UX design, and web service.
              • Providing mentorship to less experienced colleagues
`,
    },
    skills: [
      'VueJS', 'ReactJS', 'Scrum', 'Microsoft SQL Server', 'Entity Framework', '.NET Framework', 'TypeScript'
    ]
  },
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    description: 'Vale S.A',
    icon: 'https://i.imgur.com/DfyY23C.png',
    link: 'http://www.vale.com/EN/Pages/default.aspx',
    content: {
      content: `
Vale S.A. is one of the world's largest mining companies, known for its dedication to innovation and technology.
              As a full-stack developer, I utilized a range of technologies including MSSQL, .NET MVC, RESTful Web Services with .NET Framework, and VueJS for smaller web applications.
              I developed a smart Telegram bot, which automated the delivery of information from multiple internal web-services to key users, primarily managers, directors, and stockholders. This was achieved using C#.
              I also gained extensive experience with SQL Server, focusing on query optimization and the development of procedures, functions, triggers, and jobs.
          Tasks:
              • Development of multiple web applications using the .NET framework and VueJS.
              • Creation of a smart Telegram bot to automate the delivery of information to users using C#
              • Developing and optimizing SQL queries, procedures, functions, triggers and job on SQL Server
`,
    },
    skills: ['Web Services', 'Node.js', 'HTML', 'Microsoft SQL Server', 'SQL']
  },
  {
    title: 'Developer freelancer',
    date: 'Jan/2014 - Jan/2018',
    description: 'Self Employed',
    icon: 'https://i.imgur.com/kthsc9S.jpg',
    link: 'http://www.google.com',
    content: {
      content: `
   As a freelance fullstack developer, I worked on dozens of web, mobile and windows apps. I worked on projects for restaurants, movie theaters, supermarkets, schools and hotels.
              One of my notable projects was "Estádio Sonoro". This was a highly interactive frontend app designed for a MVP pitch for a promotional campaign between Flamengo and Tim, a telecom company. The app played a karaoke of Flamengo's football team anthem, recording the user's singing and sending it to the server for processing. The server then compiled the individual performances into a unified anthem.
              Another project of note was "SIHP", a comprehensive hotel management application. This app serviced over 50 clients in the Vale do Aço region.
              I also developed Cabe+1, a mobile carpool app which during its peak had over 700 daily users. Cabe+1 helped students from UNIFEI to organize carpooling to and from the university.
          Tasks:
              • Architect, design, develop and release multiple web applications.
              • Negotiate project scopes and deliverables with clients to ensure satisfaction and maintain long-term relationships.
              • Create intuitive and engaging designs for a range of applications, considering both user experience and client requirements.
              • Pitch creative and effective solutions to clients, demonstrating the potential impact and benefits of these ideas on their business.
              • Identify and solve issues in legacy applications, improving performance and usability while respecting the original infrastructure.
`,
    },
    skills: [
      'Google Firebase', 'Xamarin', 'VanillaJS', 'VueJS', 'NodeJS', 'jQuery', 'MySQL', 'Entity Framework', '.NET Framework', 'MongoDB'
    ]
  },
  {
    title: 'IT Intern',
    date: 'Jan/2014 - July/2014',
    description: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    content: {
      content: `
 At CEFET-MG university, I worked as an IT support intern providing technical assistance to faculty and students. This included troubleshooting and resolving various computer and software-related issues.
              I also held responsibilities for maintaining and updating the university's IT infrastructure, encompassing servers, networking equipment, and other hardware.
              An important part of my tenure at the university was developing a Redmine Server for internal use, aimed at enhancing project management and collaboration among the university staff. This project not only required technical prowess but also a deep understanding of the organization's needs and processes to ensure that the solution was fit-for-purpose.
          Tasks:
              • Development of a Redmine server for improving project management and collaboration
              • Technical assistance to the faculty and students
              • Troubleshooting and resolving computer and software related issues
              • In charge of updating the universities IT infrastructure (servers, network and other hardware)
      `,
    },
    skills: [
      'Network Administration', 'IT Hardware Support', 'Front-end Development', 'Scrum', 'Web Services'
    ]
  }
];

export { professionalExperiences, Experience as IExperience, educationalExperiences };
