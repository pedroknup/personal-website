import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './education-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
const wheelReact = require('wheel-react');
import { educationalExperiences, IExperience } from '../../../data/experiences';
import { ExperienceItem } from '../../../components/experience-item';
const WheelReact = wheelReact.default;
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

const STEPS = 2000;
export const EducationPage = (props:ISkillsProps) => {
  return <div className="education-container">
      <Section darkMode={props.darkMode}  removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} paddingColumns={2} id="education" title="Education" description="Academic Career">
        {educationalExperiences.map((item, key) => <ExperienceItem isDark={props.darkMode} {...item} key={key} />)}
      </Section>
    </div>;
};
