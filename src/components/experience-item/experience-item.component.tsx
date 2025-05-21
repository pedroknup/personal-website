import React, { useState } from 'react';
import './experience-item.style.scss';
import { ExperienceItemProps } from '../../../types/experience';
import Markdown from 'markdown-to-jsx';

export const ExperienceItem = ({ defaultOpened, isDarkMode, icon, date, title, place, description }: ExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpened);

  const toggleOpen = () => {
    setIsExpanded(!isExpanded);
  };

  return <div className={`experience-item ${isExpanded ? 'open' : ''} ${isDarkMode ? '' : 'light'}`}>
    <div onClick={toggleOpen} className="main-content">
      <div className="wrapper">
        <div className="toggle">
          <span className={`experience-chevron ${isExpanded ? 'bottom' : 'right'}`} />
        </div>
        <div className="picture">
          <img src={icon} />
        </div>
      </div>
      <div className="experience-content">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="name">{`//${'*'} ${place}`}</div>
      </div>
    </div>
    <div className={`experience-description ${isExpanded ? 'open' : ''}`}>
      <Markdown style={{ maxWidth: 'calc(100vw - 200px)', whiteSpace: 'break-spaces' }}>{description.content.web}</Markdown>

      {description.projects &&
        <div>
          <br />

          Projects highlights:
          {description.projects.map((item, index) => {
            return <p key={index}><span className="project-title">{item.title}</span>: <Markdown>{item.content}</Markdown></p>;
          })}
        </div>
      }
    </div>
  </div>;
};
