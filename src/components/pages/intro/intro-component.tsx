import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './intro-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
export interface IHomeComponentProps {}

const STEPS = 2000;
export const IntroPageComponent = () => {
  return <div className="intro-container">
      <h1>
        Hi! <br />My name is <span className="component-tag">PedroKnup</span>
      </h1>
      <h3>and I am </h3>
      <div className="scroll-down">
        Scroll down to continue
        <div className="arrow bounce">
          <a className="fa fa-arrow-down fa-2x" href="#" > aa</a>
        </div>
      </div>
    </div>;
};
