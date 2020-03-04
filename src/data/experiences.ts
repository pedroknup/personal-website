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
    icon: require('../assets/logo-companies/cefet.png'),
    link: 'www.google.com',
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }]
    }
  },
  {
    title: 'Computer Engineering',
    date: 'Sep/2018 - Mar/2019',
    icon: require('../assets/logo-companies/unifei.png'),
    description: 'Universidade Federal de Itajubá (UNIFEI)',
    link: 'www.google.com',
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  }
];

const professionalExperiences: IExperience[] = [
  {
    title: 'Computer Engineering Intern',
    date: 'Jan/2018 - Aug/2018',
    description: 'Vale S.A',
    icon: require('../assets/logo-companies/vale.png'),
    link: 'www.google.com',
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }]
    }
  },
  {
    title: 'Fullstack Developer',
    date: 'Sep/2018 - Mar/2019',
    icon: require('../assets/logo-companies/clubpetro.png'),
    description: 'Clubpetro',
    link: 'www.google.com',
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  },
  {
    title: 'Frontend Developer',
    date: 'Mar/2019 - Oct/2019',
    description: 'Webbio B.V',
    link: 'www.google.com',
    icon: require('../assets/logo-companies/webbio.png'),
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  },

  {
    title: 'Fullstack Developer',
    date: 'Oct/2019 - Now',
    description: 'Pycom Ltd.',
    link: 'www.google.com',
    icon: require('../assets/logo-companies/pycom.png'),
    defaultOpened: true,
    content: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{ title: 'title1', text: 'content' }, { title: 'title2', text: 'content' }]
    }
  }
];

export { professionalExperiences, IExperience, educationalExperiences };
