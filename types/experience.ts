export type Experience = {
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
  skills?: string[];
}

export type ExperienceItemProps = Experience & {
  isDark: boolean;
}


