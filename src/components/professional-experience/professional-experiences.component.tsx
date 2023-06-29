import * as React from 'react';
import { Section } from '../section';
import { ExperienceItem } from '../experience-item';
import { professionalExperiences } from '../../data/experiences';
import './professional-experiences.style.scss';

interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const ProfessionalExperiencesPage = (props: ISkillsProps) => {
  return (
    <div className={`professional-experiences-container ${props.darkMode ? '' : 'light'}`}>
      <Section
        darkMode={props.darkMode}
        removeHighlight={props.removeHighlight}
        isHighlighted={props.isHighlighted}
        id="experiences"
        paddingColumns={2}
        title="ProfessionalExperiences"
        description="Professional Career"
      >
        {professionalExperiences.map((item, key) => (
          <ExperienceItem {...item} isDark={props.darkMode} key={key} />
        ))}
      </Section>
    </div>
  );
};
