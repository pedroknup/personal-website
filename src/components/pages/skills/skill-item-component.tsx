import * as React from 'react';
import './skills-component.scss';
import { Section } from '../../section/section-component';
export interface IHomeComponentProps {}
const { useState, useEffect } = React;

interface ISkillItemProps {
  title: string;
  content: any;
  open?: boolean;
  progress: number;
  id: number;
  darkMode?: boolean;
  onClick: (key: number) => void;
}
export const SkillItem = (props: ISkillItemProps) => {
  const { title, content, progress, open, id, onClick, darkMode } = props;

  const toggleOpen = () => {
    onClick(id);
  };

  return <div className={`skill-item ${darkMode ? '' : 'light'} ${open ? 'open' : 'closed'}`}>
      <div className="clickable" onClick={toggleOpen}>
        <div className="title-container">
          <span className="title-skill">{title}</span>
          <span className="icon">
            <span className={`chevron ${open ? '' : 'bottom'}`} />
          </span>
        </div>
        <div className="progress-container">
          <div style={{ width: `${progress}%` }} className="bar" />
        </div>
      </div>
      {open && <span className="content">{content}</span>}
    </div>;
};
