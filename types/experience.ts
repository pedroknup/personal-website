type Project = {
  title: string,
  content: string,
}

export type Description = {
  content: {
    web: string,
    cv: string,
  },
  projects?: Project[],
}

export type Experience = {
  title: string;
  date: string;
  link: string;
  icon: string;
  place: string;
  defaultOpened?: boolean;
  description: Description;
  skills?: string[];
}

export type ExperienceItemProps = Experience & {
  isDarkMode?: boolean;
}


