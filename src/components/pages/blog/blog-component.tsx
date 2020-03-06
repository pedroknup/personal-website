import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './blog-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

const STEPS = 2000;
export const BlogPage = (props : ISkillsProps) => {
  return <div className="Blog-container">
      <Section paddingColumns={2} darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="blog" title="Blog">
        <span>Blog section</span>
      </Section>
    </div>;
};
