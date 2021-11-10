interface ISkillItem { 
  name: string;
  content: any;
  progress: number;
  id: number;
}

const skillsFront: ISkillItem[] = [
  {
    id: 0,
    name: 'HTML+JS+CSS',
    content:
      `I like to play with those languages since I was a kid. I'm always challenging myself creating different layouts scenarios and keeping up-to-date with the design trends. I consider my html+css skills advanced.`,
    progress: 95
  },
  {
    id: 1,
    name: 'React',
    content:
      `I've been studying and working with React intensively. I'm constantly following the new releases of it. On my React projects, I like to use Redux (or context), Typescript and SCSS.`,
    progress: 92
  },
  {
    id: 2,
    name: 'Vue',
    content:
      'I haven\'t had a solid experience it with so far. But I know how it works and its fundamentals',
    progress: 40
  },
  {
    id: 3,
    name: 'Angular 2',
    content:
      '',
    progress: 40
  }
];
const skillsBack: ISkillItem[] = [
  {
    id: 5,
    name: 'NodeJS',
    content:
      `I've been intensively using NodeJS for my projects. For Web services, I like to use ExpressJS with TypeScript and some object-relational mapping framework, such as Loopback, TypeORM, Mongoose etc. For tests I use Jest.`,
    progress: 90
  },
  {
    id: 4,
    name: '.NET',
    content:
     `I had several .NET experiences, with both Core (v1.0 & v2.0) and Framework. I delivered big projects where some of them I had to deal with millions of data (from the database and third-party web services)`,
    progress: 75
  },
  {
    id: 6,
    name: 'Relational DB',
    content:
      `I've been working with relational databases since I started programming (10 years ago). I consider my database knowledge advanced.`,
    progress: 70
  },
  {
    id: 7,
    name: 'NoSQL DB',
    content:
      'Sometimes I use a NoSQL database in some project. Normally I use MongoDB when I am working on a Serverless application or when the DB structure is relatively simple and will store a big amount of data. ',
    progress: 60
  },
  {
    id: 8,
    name: 'Docker',
    content:
      `Docker made my life easier. I've been using it for almost every project I'm working on`,
    progress: 60
  },
  {
    id: 9,
    name: 'Microsoft Azure',
    content:
    `I use Azure to host some personal projects. Serverless applications, CI/CD pipelines, hosting, function apps and so on. `,
    progress: 20
  },
  {
    id: 10,
    name: 'Java',
    content:
      'Ew',
    progress: 20
  },
  {
    id: 11,
    name: 'Google Firebase',
    content:
      `I used Firebase to host some web apps and also for a serverless application.`,
    progress: 20
  },
  {
    id: 12,
    name: 'AWS',
    content:
    `I used AWS to host my biggest Mobile App I have made (Cabe+1). But I switched to Azure due the Azure plan that I got.`,
    progress: 20
  },
];

const skillsMobile: ISkillItem[] = [
  {
    id: 14,
    name: 'React Native',
    content:
      `I've been studying React Native since 2018 and I used it for some freelance projects. I'm able to build native mobile application at an awesome speed.`,
    progress: 90
  },
  {
    id: 15,
    name: 'Xamarin',
    content:
      `With my knowledge on C#, I was quickly building rich and well written mobile native applications. It was what I needed for mobile development. But nowadays I switched to React Native.`,
    progress: 60
  },
  {
    id: 16,
    name: 'Flutter',
    content:
      '',
    progress: 40
  },
  {
    id: 17,
    name: 'Android',
    content:
     `Just for curiosity, to help me solving some possible problems in Xamarin and React.`,
    progress: 40
  },
  {
    id: 18,
    name: 'iOS',
    content:
    `Just for curiosity, to help me solving some possible problems in Xamarin and React.`,
    progress: 20
  }
];

const skillsOther: ISkillItem[] = [
  {
    id: 19,
    name: 'Photoshop & Illustrator',
    content:
     `I am a photography/design enthusiast. I have solid knowledge on photo manipulation and graphics creation (logo, banners, flyers, UI design etc).`,
    progress: 95
  },
  {
    id: 20,
    name: 'Git',
    content:
      `I follow the git best practices (by Github). `,
    progress: 85
  },
  {
    id: 21,
    name: 'Illustration',
    content:
    `I like to draw since I was a kid. Usually I work with graphite, markers, oil & acrylic painting, nankin and watercolor. I got to know digital painting a few years ago and I loved it too.`,
    progress: 70
  },
  {
    id: 22,
    name: 'Scrum',
    content:
     `I've been working with scrum in the past 3 years. Usually it's based on 2 weeks sprints with daily stand-up, retrospective and planning scrum meetings. I enjoyed pretty much the Jeff Sutherlands' book: "Scrum: The Art of Doing Twice the Work in Half the Time".`,
    progress: 50
  },
  {
    id: 23,
    name: 'Audiovisual Production',
    content:
    `I used to make music and produce them on Reaper/Logic Pro. I recorded every instrument and proper mixed on DAW. I also liked record myself playing some music in some instrument and upload it to my social networks (Youtube and Facebook). I've also directed some amateur short-films.`,
    progress: 50
  },
  {
    id: 23,
    name: '3D Modeling',
    content:
    `Another hobby out from my curiosity. I used to car fanatic when I was a kid and that motivated me to learn 3D modelling. I chose Autodesk 3D Studio Max and spent many hours on learning. I loved it, it's relaxing and stress reliever for me. I have a solid knowledge on geometric modeling (non-organic) and a little bit of animation.`,
    progress: 30
  }
];

export { skillsFront, skillsBack, skillsMobile, skillsOther };
