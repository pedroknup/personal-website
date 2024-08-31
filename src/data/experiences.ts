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
    title: 'Senior Frontend Developer',
    date: 'Apr/2023 - Now',
    description: 'Media.Monks',
    link: 'www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    defaultOpened: true,
    content: {
      content: ''
    }
  },
  {
    title: 'Frontend Developer',
    date: 'Feb/2021 - Mar/2023',
    description: 'Media.Monks',
    link: 'www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    defaultOpened: true,
    content: {
      content: `As a frontend developer at Media.Monks, I specialize in creating immersive web applications for Google using the latest frontend technologies. Some of the notable projects I've worked on include the Chromebook Retail app (2021 and 2022), Google Cloud Chess.com showcase, Exhibit Zero (GM's showcase at CES 2022), Google Cloud Engage Sessions (an interactive live stream platform for Google Cloud), and the Pixel 6 launch campaign.`,
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
      'Front-end Development',
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
      content: `Responsible for maintaining a web service and its underlying database. Involved in monitoring and troubleshooting any issues that may arise, as well as implementing new features and updates to the web service, web client app, and database, working closely with the development team to ensure that all changes are properly tested and deployed.`
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
      content: `As a Full Stack Developer at Pycom, I was responsible for a variety of tasks including the development of MicroPython-based device-level communication and a Dashboard Web App. My main focus was on ensuring seamless and reliable connections between devices and the cloud. I was responsible for the integration of devices and the cloud, as well as maintaining the stability of these connections. Additionally, I was in charge of the Pymakr extension which is an IDE for the Pycom boards, in VSCode and Atom, and lead the development of Pymakr 2, the latest version.As a Full Stack Developer at Pycom, I was responsible for a variety of tasks including the development of MicroPython-based device-level communication and a Dashboard Web App. My main focus was on ensuring seamless and reliable connections between devices and the cloud. I was responsible for the integration of devices and the cloud, as well as maintaining the stability of these connections. Additionally, I was in charge of the Pymakr extension which is an IDE for the Pycom boards, in VSCode and Atom, and lead the development of Pymakr 2, the latest version.
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
      content: `As a front-end developer intern at Webbio, my primary responsibility was designing and building web applications using ReactJS. I participated in daily scrum meetings to ensure the timely delivery of well-written code, adhering to industry best practices throughout the development process. Additionally, I also provided mentorship to my intern colleagues.`,
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
      content: `As a full-stack engineer at ClubPetro, I was tasked with completely rebuilding the company's primary product, including the web app, database, and web service. I was responsible for selecting the appropriate technologies and languages, designing the new database structure, the layout of the app, and the web service. Additionally, I provided mentorship to my colleagues throughout the project, until I left the company to move to the Netherlands.`
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
      content: `At Vale, I worked as a full-stack developer, utilizing technologies such as .NET MVC, RESTful Web Services with .NET Framework, and small web applications using VueJS.

I developed a smart Telegram bot to automate the delivery of information to users (mostly managers, directors, and stockholders), using C#. Additionally, I had extensive experience with SQL Server, including optimization of queries, development of procedures, functions, triggers, and jobs.`
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
      content: `I delivered dozens of web, mobile, and windows apps. Apps for restaurants, movie theaters, supermarkets, schools, and hotels.I delivered dozens of web, mobile, and windows apps. Apps for restaurants, movie theaters, supermarkets, schools, and hotels.
`
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
      content: `As an IT intern, I was responsible for providing technical assistance to faculty and students at the college, including troubleshooting and resolving various computer and software-related issues. Additionally, I was in charge of maintaining and updating the college's IT infrastructure, which included servers, networking equipment, and other hardware. One of the key projects I worked on was the development of a Redmine Server for internal usage, which aimed to improve project management and collaboration among the college staff.`
    },
    skills: [
      'Network Administration', 'IT Hardware Support', 'Front-end Development', 'Scrum', 'Web Services'
    ]
  }
];

export { professionalExperiences, Experience as IExperience, educationalExperiences };
