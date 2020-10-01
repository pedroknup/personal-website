interface IExperience {
  title: string;
  date: string;
  link: string;
  icon: string;
  description: string;
  defaultOpened?: boolean;
  content: {
    content: string;
    items?: {
      title: string;
      text: string;
    }[];
  };
}

const educationalExperiences: IExperience[] = [
  {
    title: 'Computer Technician integrated to Highschool',
    date: 'Jan/2018 - Aug/2018',
    description: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'www.google.com',
    content: {
      content:
        '',
      items: [{ title: 'title1', text: 'content' }]
    }
  },
  {
    title: 'Computer Engineering',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/zQnU30s.png',
    description: 'Universidade Federal de Itajubá (UNIFEI)',
    link: 'www.google.com',
    content: {
      content: `Programming Logic Monitor with a workload of 32h monthly. Advisor: Wandré Nunes Veloso. Programming Logic Monitor with a workload of 32h monthly. Advisor: Claudia Izeki.
Algorithms and Data structures Monitor with a workload of 32h monthly. Advisor: Claudia Izeki. 

Volunteer jobs: Up Consultoria JR and FEJEMG as an IT assessor`,
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  }
];

const professionalExperiences: IExperience[] = [
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    description: 'Vale S.A',
    icon: 'https://i.imgur.com/DfyY23C.png',
    link: 'www.google.com',
    content: {
      content: `At Vale I worked as a full-stack developer using technologies such as .NET MVC, RESTful Web Services with .NET Framework, small web applications using VueJS. 

I developed a smart Telegram bot (learns and recognizes user usage patterns to automate the delivery of information for them), also in C#. I also had a solid experience with SQL Server, where I worked optimizing queries, developing procedures, functions, triggers, jobs, etc. 

Technologies used:
- .NET Core & Framework, MSSQL, Entity Framework, Power BI, Microsoft DevOps, Telegram API, VueJS, Web Components`,
      items: [{ title: 'title1', text: 'content' }]
    }
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/BEkFZUX.png',
    description: 'Clubpetro',
    link: 'www.google.com',
    content: {
      content: `As a Full Stack developer, I was assigned to completely recreate the main product of the company (web app, database and web service), choosing the technologies and languages, designing the new database structure, app's layout, web service and also mentoring my colleagues.
      \n
      Technologies used:
- .NET, React, MSSQL, TypeScript, SASS, Vue, Web Components`,
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  },
  {
    title: 'Frontend Developer',
    date: 'Mar/2019 - Oct/2019',
    description: 'Webbio B.V',
    link: 'www.google.com',
    icon: 'https://i.imgur.com/76CEHlw.png',
    content: {
      content: `As a front-end developer, my function was to build Web Applications using ReactJS. Through daily scrum stand-up, I aimed to deliver a well-written code in due time following the best practices in the whole development process. 
        
        Technologies used:
- React, JavaScript, ES6, TypeScript, SASS, Redux, Swagger, Formik.
        `,
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  },

  {
    title: 'Fullstack Developer',
    date: 'Oct/2019 - Jun/2020',
    description: 'Pycom Ltd.',
    link: 'www.google.com',
    icon: 'https://i.imgur.com/lkhhta0.png',
    defaultOpened: true,
    content: {
      content: `I worked widely throughout the IoT development range, from device level communication to a Dashboard Web App, making sure the connection between the devices and cloud, which can be made in many different ways, is smooth and reliable.

Technologies used:
- React, JavaScript, ES6, LESS, NodeJS, ExpressJS, GraphQL, MongoDB, Webpack, Jest, Mocha, Code editors plugin development (VSC and Atom).`,
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  },
  {
    title: 'Backend Developer',
    date: 'Jul/2020 - Now',
    description: 'CowManager B.V.',
    link: 'www.google.com',
    icon: 'https://i.imgur.com/3fIF7HW.png',
    defaultOpened: false,
    content: {
      content: '',
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  }
];

export { professionalExperiences, IExperience, educationalExperiences };
