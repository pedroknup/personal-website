import React from 'react';
import './experience-item.style.scss';
import { ExperienceItemProps } from '../../../types/experience';
import Markdown from 'markdown-to-jsx';

export const ExperienceItem = ({ isDarkMode, icon, date, title, place, description }: ExperienceItemProps) => {
  return (
    <div className={`experience-item open ${isDarkMode ? '' : 'light'}`}>
      <div className="main-content">
        <div className="wrapper">
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
      <div className="experience-description open">
        <Markdown style={{ maxWidth: 'calc(100vw - 200px)', whiteSpace: 'break-spaces' }}>
          {description.content}
        </Markdown>

        {description.projects && description.projects.length > 0 && (
          <div className="projects">
            <br />
            Project highlights:
            {description.projects.map((item, index) => (
              <p key={index}>
                <span className="project-title">{item.title}</span>:{' '}
                <Markdown>{item.content}</Markdown>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
