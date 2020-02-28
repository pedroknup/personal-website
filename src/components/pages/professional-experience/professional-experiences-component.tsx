import * as React from 'react';
import './professional-experiences-component.scss';
import { Section } from '../../section/section-component';
const wheelReact = require('wheel-react');
export interface IHomeComponentProps {}

export const ProfessionalExperiencesPage = () => {
  return <div className="professional-experiences-container">
      <Section title="ProfessionalExperiences">
        <span>Professional Experiences section</span>

      </Section>
    </div>;
};
