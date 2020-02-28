import * as React from 'react';
import Typist from 'react-typist';
import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './intro-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
export interface IHomeComponentProps {}

const STEPS = 2000;
export const IntroPageComponent = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false)
  return <div className="intro-container">
      <div className={`intro-text ${hasLoaded ? 'finished' : ''}`}>

        <Typist onTypingDone={()=>{
          setHasLoaded(true);
        }} avgTypingDelay={80} cursor={{element: ''}} startDelay={1000}>
          <span>
            /* <br />
            Hi! <br />
            I'm Pedro Knup
            <br />
            Welcome to my website
            <Typist.Backspace count={7} delay={100} />
            Websute
            <Typist.Backspace count={3} delay={100} />
            ite! <br />
            */
            {
              /* and I'm a Fullstack developer
              <Typist.Backspace count={19} delay={100} />
              designer
              <Typist.Backspace count={8} delay={100} />
            musician */}
          </span>
        </Typist>
      </div>
      <Section title="About">
      <div className="scroll-down">
        Scroll down to continue
        <div className="arrow bounce">
          <a className="fa fa-arrow-down fa-2x" href="#">
            aa
          </a>
        </div>
      </div>
      </Section>
    </div>;
};
