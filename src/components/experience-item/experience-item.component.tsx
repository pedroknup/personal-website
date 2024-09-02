import React, { useState } from 'react';
import './experience-item.style.scss';
import { ExperienceItemProps } from '../../../types/experience';
import Markdown from 'markdown-to-jsx';

export const ExperienceItem = ({ defaultOpened, isDark, icon, date, title, place, description }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return <div onClick={toggleOpen} className={`experience-item ${isOpen ? 'open' : ''} ${isDark ? '' : 'light'}`}>
    <div className="main-content">
      <div className="wrapper">
        <div className="toggle">
          <span className={`chevron2 ${isOpen ? 'bottom' : 'right'}`} />
        </div>
        <div className="picture">
          <img src={icon} />
        </div>
      </div>
      <div className="content2">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="name">{`//${'*'} ${place}`}</div>
      </div>
    </div>
    <div className={`content3 ${isOpen ? 'open' : ''}`}>
      {description.content.web.split('\n').map((item: string, i: number) => {
        return <p key={i}>{item}</p>;
      })}
      {description.projects &&
        <div>
          <br />

          Projects Highlights:
          {description.projects.map((item, index) => {
            return <p key={index}><span className="project-title">{item.title}</span>: <Markdown>{item.title}</Markdown></p>;
          })}
        </div>
      }
    </div>
  </div>;
};
