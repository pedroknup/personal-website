import * as React from 'react';
import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './skills-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
import { SkillItem } from './skill-item-component';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
import { skillsBack, skillsFront, skillsMobile, skillsOther } from '../../../data';
const { useState } = React;
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

const randomId = () => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
const STEPS = 2000;
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
