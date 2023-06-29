import * as React from 'react';
import { Section } from '../../components/section/section-component';
import { educationalExperiences } from '../../data/experiences';
import { ExperienceItem } from '../../components/experience-item';
import './education-component.scss';
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const EducationPage = (props:ISkillsProps) => {
  return <div className="education-container">
      <Section darkMode={props.darkMode}  removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} paddingColumns={2} id="education" title="Education" description="Academic Career">
        {educationalExperiences.map((item, key) => <ExperienceItem isDark={props.darkMode} {...item} key={key} />)}
      </Section>
    </div>;
};
