import React, { useState } from 'react';
import './experience-item.style.scss';
import { ExperienceItemProps } from '../../../types/experience';

export const ExperienceItem = ({ defaultOpened, isDark, icon, date, title, description, content }: ExperienceItemProps) => {
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
        <div className="name">{`//${'*'} ${description}`}</div>
      </div>
    </div>
    <div className={`content3 ${isOpen ? 'open' : ''}`}>
      {content.content.split('\n').map((item: string, i: number) => {
        return <p key={i}>{item}</p>;
      })}
      {content.items &&
        <div>
          <br />

          Projects Highlights:
          {content.items?.map((item: any, i: number) => {
            return <p key={i}><span className="project-title">{item.title}</span>: <span dangerouslySetInnerHTML={{ __html: item.content }}></span></p>;
          })}
        </div>
      }
    </div>
  </div>;
};
