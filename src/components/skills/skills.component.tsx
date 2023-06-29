import * as React from 'react';
import { Section } from '../section';
import { SkillItem } from './skill-item.component';
import { skillsBack, skillsFront, skillsMobile, skillsOther } from '../../data';
const { useState } = React;
import './skills.style.scss';

interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const SkillsPage = (props : ISkillsProps) => {
  const [selectedSkill, setSelectedSkill] = useState(0);
  const skillOnClick = (key: number) => {
    if (key === selectedSkill) setSelectedSkill(-1);
    else setSelectedSkill(key);
  };
  return <Section darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="skills" paddingColumns={2} title="Skills" description="My favorite and most relevant tools and frameworks">
      <div className={`skills-container ${props.darkMode ? '': 'light'}`}>
        <section>
          <span className="title">Front End</span>
          {skillsFront.map((skill) => {
            return <SkillItem darkMode={props.darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
          })}
        </section>
        <section>
          <span className="title">Back End</span>
          {skillsBack.map((skill) => {
            return <SkillItem darkMode={props.darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
          })}
        </section>
        <section>
          <span className="title">Mobile</span>
          {skillsMobile.map((skill) => {
            return <SkillItem darkMode={props.darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
          })}
        </section>
        <section>
          <span className="title">Others</span>
          {skillsOther.map((skill) => {
            return <SkillItem darkMode={props.darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
          })}
        </section>
      </div>
    </Section>;
};
