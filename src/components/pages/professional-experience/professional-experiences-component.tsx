import * as React from 'react';
import './professional-experiences-component.scss';
import { Section } from '../../section/section-component';
import { ExperienceItem } from '../../../components/experience-item';
const wheelReact = require('wheel-react');
export interface IHomeComponentProps {}

export const ProfessionalExperiencesPage = () => {
  return <div className="professional-experiences-container">
      <Section paddingColumns={2} title="ProfessionalExperiences" description="Professional Career">
        {/* <span>Professional Experiences section</span> */}
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </Section>
    </div>;
};
