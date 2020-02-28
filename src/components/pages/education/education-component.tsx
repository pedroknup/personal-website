import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './education-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
export interface IHomeComponentProps {}

const STEPS = 2000;
export const EducationPage = () => {
  return <div className="education-container">
      <Section title="Education">
        <span>Education section</span>

      </Section>
    </div>;
};
