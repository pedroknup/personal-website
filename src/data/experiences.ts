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
      content: string;
    }[];
  };
}

const educationalExperiences: IExperience[] = [
  {
    title: 'Computer Technician integrated to Highschool',
    date: 'Jan/2018 - Aug/2018',
    description: 'CEFET-MG',
    icon: 'https://i.imgur.com/FyWA7ar.png',
    link: 'https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/informatica/',
    content: {
      content:
        'Computer technician integrated to Highschool. From programing logic, data structure and databases to electronics and electrics.'
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

Volunteer jobs: Up Consultoria JR and FEJEMG as an IT assessor`
    }
  }
];

const professionalExperiences: IExperience[] = [
  {
    title: 'Developer freelancer',
    date: 'Jan/2014 - Jan/2018',
    description: 'Self Employed',
    icon: 'https://i.imgur.com/kthsc9S.jpg',
    link: 'http://www.google.com',
    content: {
      content: `I delivered dozens of web, mobile and windows apps. Apps for restaurants, movie theaters, supermarkets, schools and hotels. 

Technologies used:
- .NET Core & Framework, MSSQL & MySQL, MongoDB, Entity Framework, JQuery, Google Firebase, Xamarin, VueJS, NodeJS.`
    }
  },
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    description: 'Vale S.A',
    icon: 'https://i.imgur.com/DfyY23C.png',
    link: 'http://www.vale.com/EN/Pages/default.aspx',
    content: {
      content: `At Vale I worked as a full-stack developer using technologies such as .NET MVC, RESTful Web Services with .NET Framework, small web applications using VueJS. 

I developed a smart Telegram bot (learns and recognizes user usage patterns to automate the delivery of information for them), also in C#. I also had a solid experience with SQL Server, where I worked optimizing queries, developing procedures, functions, triggers, jobs, etc. 

Technologies used:
- .NET Core & Framework, MSSQL, Entity Framework, Power BI, Microsoft DevOps, Telegram API, VueJS, Web Components`
    }
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: 'https://i.imgur.com/BEkFZUX.png',
    description: 'Clubpetro',
    link: 'https://novo.clubpetro.com/',
    content: {
      content: `As a Full Stack developer, I was assigned to completely recreate the main product of the company (web app, database and web service), choosing the technologies and languages, designing the new database structure, app's layout, web service and also mentoring my colleagues.
      \n
      Technologies used:
- .NET, React, MSSQL, TypeScript, SASS, Vue, Web Components`
    }
  },
  {
    title: 'Frontend Developer',
    date: 'Mar/2019 - Oct/2019',
    description: 'Webbio B.V',
    link: 'https://webbio.nl/',
    icon: 'https://i.imgur.com/76CEHlw.png',
    content: {
      content: `As a front-end developer, my function was to build Web Applications using ReactJS. Through daily scrum stand-up, I aimed to deliver a well-written code in due time following the best practices in the whole development process. 
        
        Technologies used:
- React, JavaScript, ES6, TypeScript, SASS, Redux, Swagger, Formik.
        `,
      items: [
        {
          title: 'Black friday Nederland',
          content: `Amazingly fast and responsive app for the Dutch Black Friday. Even though there are a lot of stores and products in there, we did a great job making sure the website is super fast and has a great SEO score, even though it's a WPA ;) Go <a href="https://www.blackfridaynederland.nl/" target="_blank">check it out</a> with your own eyes.`
        }
      ]
    }
  },

  {
    title: 'Fullstack Developer',
    date: 'Oct/2019 - Jun/2020',
    description: 'Pycom Ltd.',
    link: 'https://pycom.io/',
    icon: 'https://i.imgur.com/lkhhta0.png',
    defaultOpened: false,
    content: {
      content: `I worked widely throughout the IoT development range, from device level communication to a Dashboard Web App, making sure the connection between the devices and cloud, which can be made in many different ways, is smooth and reliable.

Technologies used:
- React, JavaScript, ES6, LESS, NodeJS, ExpressJS, GraphQL, MongoDB, Webpack, Jest, Mocha, Code editors plugin development (VSC and Atom).`
    }
  },
  {
    title: 'Backend Developer',
    date: 'Jul/2020 - Feb/2021',
    description: 'CowManager B.V.',
    link: 'https://www.cowmanager.com/en-us/',
    icon: 'https://i.imgur.com/3fIF7HW.png',
    defaultOpened: false,
    content: {
      content: ''
    }
  },
  {
    title: 'Frontend Developer - Google Team',
    date: 'Feb/2021 - Now',
    description: 'Media.Monks',
    link: 'www.mediamonks.com',
    icon: 'https://i.imgur.com/YUOlc25.jpg',
    defaultOpened: true,
    content: {
      content: `Member of the Media.Monks' Google team.

Technologies used:
- Vue (2.0 & 3.0), SASS, GSAP, Glue, Webpack.`,
      items: [
        {
          title: 'Google Cloud: Engage Sessions',
          content:
            'Interactive live stream platform for Google Cloud that allows the presenters to interact with the audience with live quizzes, polls, reactions etc.'
        },
        {
          title: 'Chromebook Retail App',
          content:
            'Google Chromebook Retail app that is running on Chromebooks in stores around the world. To check it out, just go to any store that has chromebook to sell ;)'
        },
        {
          title: 'Pixel 6 Launch campaign apps',
          content:
            'The Google Pixel Fall Launch was consisted of three different parts/web apps: Countdown for the launch, the actual stream and the <a href="https://pixelevent.withgoogle.com/" target="_blank" />post stream</a>. There were over 500.000 people that followed the event through those apps. The live steam video can be watched <a href="https://www.youtube.com/watch?v=WNarpiGz3Kk" target="_blank">here</a>'
        },
        {
          title: 'Google Cloud - Chess.com',
          content: `App for Google Cloud to showcase their costumer success case with Chess.com. <a href="https://showcase.withgoogle.com/chess" target="_blank">Visit website</a>.`
        }
      ]
    }
  }
];

export { professionalExperiences, IExperience, educationalExperiences };
