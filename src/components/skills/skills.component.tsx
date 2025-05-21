import React, { useState } from 'react';
import { SectionPage } from '../section';
import { SkillItem } from './skill-item.component';
import { skillsBack, skillsFront, skillsMobile, skillsOther } from '../../data/skills';
import './skills.style.scss';
import { PageProps } from '../../../types/page-props';

export const SkillsPage = ({ removeHighlight, isHighlighted, isDarkMode: darkMode }: PageProps) => {
  const [selectedSkill, setSelectedSkill] = useState(0);
  const skillOnClick = (key: number) => {
    if (key === selectedSkill) setSelectedSkill(-1);
    else setSelectedSkill(key);
  };
  return <SectionPage isDarkMode={darkMode} removeHighlight={removeHighlight} isHighlighted={isHighlighted} id="skills" paddingColumns={2} title="Skills" description="My favorite and most relevant tools and frameworks -and how comfortable and confident I am working with them-">
    <div className={`skills-container ${darkMode ? '' : 'light'}`}>
      <section>
        <span className="title">Front End</span>
        {skillsFront.map((skill) => {
          return <SkillItem darkMode={darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
        })}
      </section>
      <section>
        <span className="title">Back End</span>
        {skillsBack.map((skill) => {
          return <SkillItem darkMode={darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
        })}
      </section>
      <section>
        <span className="title">Mobile</span>
        {skillsMobile.map((skill) => {
          return <SkillItem darkMode={darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
        })}
      </section>
      <section>
        <span className="title">Others</span>
        {skillsOther.map((skill) => {
          return <SkillItem darkMode={darkMode} key={skill.id} id={skill.id} onClick={skillOnClick} open={skill.id === selectedSkill} title={skill.name} content={skill.content} progress={skill.progress} />;
        })}
      </section>
    </div>
  </SectionPage>;
};
