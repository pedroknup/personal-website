import * as React from 'react';
import { SectionPage } from '../section';
import { ExperienceItem } from '../experience-item';
import { professionalExperiences } from '../../data/experiences';
import './professional-experiences.style.scss';
import { PageProps } from '../../../types/page-props';

export const ProfessionalExperiencesPage = ({ removeHighlight, isHighlighted, isDarkMode: darkMode }: PageProps) => {
  return (
    <div className={`professional-experiences-container ${darkMode ? '' : 'light'}`}>
      <SectionPage
        darkMode={darkMode}
        removeHighlight={removeHighlight}
        isHighlighted={isHighlighted}
        id="experiences"
        paddingColumns={2}
        title="ProfessionalExperiences"
        description="Professional Career"
      >
        {professionalExperiences.map((item, key) => (
          <ExperienceItem {...item} isDark={darkMode} key={key} />
        ))}
      </SectionPage>
    </div>
  );
};
