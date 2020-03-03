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
const sticky = require('react-sticky');
const { StickyContainer, Sticky } = sticky;
export interface IIntroPageProps {
  onFinish: () => void;
  hasScrolled: boolean;
}

import '../../../styles/main.scss';

const STEPS = 2000;
export const IntroPageComponent = (props:IIntroPageProps) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [hasScrolledInterned, setHasScrolledInterned] = React.useState(false);
  const [hasTimedOut, setHasTimedOut] = React.useState(false);
  const [hasFinishedTyping, setHasFinishedTyping] = React.useState(false);
  React.useEffect(()=>{
    setTimeout(() => {
      setHasTimedOut(true);
      if (hasScrolledInterned)
        setHasScrolled(true);
    }, 1000);
  }, [])
  
  

  React.useEffect(
    () => {
      if (hasFinishedTyping){
        props.onFinish();
      }
    },
    [hasFinishedTyping]
  );

  React.useEffect(
    () => {
      if (props.hasScrolled){
         setHasScrolled(true);
      }
    },
    [props.hasScrolled]
  );
  

  React.useEffect(()=>{
    if (hasTimedOut){
      setHasScrolled(true);
    }else{
      setHasScrolledInterned(true);
    }
  }, [hasScrolledInterned])

  const onScrollHandler = () => {
     if (hasTimedOut) {
       setHasScrolled(true);
     } else {
       setHasScrolledInterned(true);
     }
  }

  return (
    <div
      onWheel={onScrollHandler}
      className="intro-container"
    >
      <div className={`intro-text ${hasFinishedTyping ? 'finished' : ''}`}>
        <Typist
          onTypingDone={() => {
            setHasFinishedTyping(true);
          }}
          avgTypingDelay={hasScrolled ? 0 : 80}
          cursor={{ hideWhenDone:true, element: '' }}
          startDelay={1000}
        >   
        /* <br />
            Hi! <br />
            I'm Pedro Knup
            <br />
            Welcome to my Websute
            <Typist.Backspace count={3} delay={100} />
            ite <br />
            */
            {
              /* and I'm a Fullstack developer
              <Typist.Backspace count={19} delay={100} />
              designer
              <Typist.Backspace count={8} delay={100} />
            musician */}
          <span />
           
        </Typist>
      </div>
      
        {/* {hasFinishedTyping && 
       (   <div style={{display:'flex'}}>
         [
      <Typist avgTypingDelay={80}
          cursor={{ hideWhenDone:true, element: '' }}
          startDelay={1000}>

<span style={{ display: 'flex' }} className="obj">
            <span className="string">"Developer"</span>,<span className="string">"Designer"</span>,
            <span className="string">"Musician"</span>
        </span>

      </Typist>
       ]
       </div>
       ) */
        }
       {/* <div style={{opacity: hasFinishedTyping ? 1 : 0}} className="soft-transition scroll-down">
          <span>
            Scroll down to continue
            <br />
            <br />
            <br />
          </span>
          {/* <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#">
              aa
            </a>
          </div> 
      </div> 
      */}
    </div>
  );
};
