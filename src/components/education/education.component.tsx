import React from 'react';
import { SectionPage } from '../section';
import { educationalExperiences } from '../../data/experiences';
import './education.style.scss';
import { PageProps } from '../../../types/page-props';
import { ExperienceItem } from '../experience-item';

export const EducationPage = ({ isDarkMode: darkMode, removeHighlight, isHighlighted }: PageProps) => {
  return <div className="education-container">
    <SectionPage darkMode={darkMode} removeHighlight={removeHighlight} isHighlighted={isHighlighted} paddingColumns={2} id="education" title="Education" description="Academic Career">
      {educationalExperiences.map((item, key) => <ExperienceItem isDark={darkMode} {...item} key={key} />)}
    </SectionPage>
  </div>;
};
