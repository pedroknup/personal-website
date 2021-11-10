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
const socialMediaIcons = require('social-media-icons-react');
const { SocialMediaIconsReact } = socialMediaIcons;
export interface IIntroPageProps {
  onFinish: () => void;
  previousState?: number;
  hasScrolled: boolean;
  currentStep: number;
  currentState: number;
  darkMode: boolean;
}

import '../../../styles/main.scss';

const STEPS = 2000;
export const IntroPageComponent = (props: IIntroPageProps) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [hasScrolledInterned, setHasScrolledInterned] = React.useState(false);
  const [hasTimedOut, setHasTimedOut] = React.useState(false);
  const [hasFinishedTyping, setHasFinishedTyping] = React.useState(false);
  const [currentText, setCurrentText] = React.useState('');
  const [finishedErasing, setFinishedErasing] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      setHasTimedOut(true);
      if (hasScrolledInterned) setHasScrolled(true);
    }, 1000);
    let currentT = '';
    if (props.previousState !== undefined) {
      setHasFinishedTyping(true);
    }
    if (props.currentState === 0) {
      if (props.previousState === 1) {
        currentT = 'designer';
      } else if (props.previousState === 2) {
        currentT = 'musician';
      }
    } else if (props.currentState === 1) {
      if (props.previousState === 0) {
        currentT = 'software engineer';
      } else if (props.previousState === 2) {
        currentT = 'musician';
      }
    } else if (props.currentState === 2) {
      if (props.previousState === 1) {
        currentT = 'designer';
      } else if (props.previousState === 0) {
        currentT = 'software engineer';
      }
    }
    if (
      props.previousState !== 0 ||
      (props.previousState === 0 && props.previousState !== undefined)
    ) {
      currentT = "];"
      setCurrentText(currentT);
      eraseLastWord(currentT);
    }
  }, []);

  React.useEffect(
    () => {
      if (hasFinishedTyping) {
        props.onFinish();
      }
    },
    [hasFinishedTyping]
  );

  React.useEffect(
    () => {
      if (props.hasScrolled) {
        setHasScrolled(true);
      }
    },
    [props.hasScrolled]
  );
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  React.useEffect(
    () => {
      if (hasTimedOut) {
        setHasScrolled(true);
      } else {
        setHasScrolledInterned(true);
      }
    },
    [hasScrolledInterned]
  );

  const onScrollHandler = () => {
    if (hasTimedOut) {
      setHasScrolled(true);
    } else {
      setHasScrolledInterned(true);
    }
  };

  const getSpriteByStep = (step: number) => {
    if (step === 0) step = 500;
    const img = require(`../../../assets/sprite/sprite-${step}.png`);
    console.log(img);
    return img;
  };

  const eraseLastWord = async (word: string) => {
    console.log('word', word, 'current', currentText);
    const sleepTime = word === 'software engineer' ? 30 : 50;
    while (word !== '') {
      word = word.slice(0, word.length - 1);
      await sleep(sleepTime);
      setCurrentText(word);
    }
    setFinishedErasing(true);
  };

  return <div onWheel={onScrollHandler} className={`intro-container ${props.darkMode ? '' : 'light'}`}>
      <div className={`intro-text ${hasFinishedTyping ? 'finished' : ''}`}>
        {props.currentState === 0 && props.previousState == undefined && <Typist onTypingDone={() => {
              setHasFinishedTyping(true);
            }} avgTypingDelay={hasScrolled ? 0 : 40} cursor={{ hideWhenDone: false, element: '' }} startDelay={props.currentState === 0 ? 1000 : 0}>
            {props.currentState === 0 && <span>
                Hi! I’m Pedro Knup, a self-taught
                <br />
                [
                <br />
                "software engineer", <br />
                ];
              </span>}
            {/* {props.currentState === 1 && <Typist.Backspace count={18} delay={100} />}
            {props.currentState === 1 && 'designer'}
            {props.currentState === 2 && <Typist.Backspace count={8} delay={100} />}
            {props.currentState === 2 && 'musician'} */}
            {/* and I'm a Fullstack developer
              <Typist.Backspace count={19} delay={100} />
              designer
              <Typist.Backspace count={8} delay={100} />
            musician */}
            <span />
          </Typist>}
        {props.currentState === 0 && props.previousState !== undefined && <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              [<br />
            </span>
            {finishedErasing && <Typist onTypingDone={() => {
                  setHasFinishedTyping(true);
                }} avgTypingDelay={hasScrolled ? 0 : 40} cursor={{ hideWhenDone: false, element: '' }} startDelay={0}>
                "software engineer",<br />];
                <span />
              </Typist>}
          </>}
        {props.currentState === 1 && <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              [<br />
              "software engineer",{currentText}
            </span>
            {finishedErasing && <Typist onTypingDone={() => {
                  setHasFinishedTyping(true);
                }} avgTypingDelay={hasScrolled ? 0 : 40} cursor={{ hideWhenDone: false, element: '' }} startDelay={0}>
                "designer"
                <br />
                ];
                <span />
              </Typist>}
          </>}
        {props.currentState === 2 && <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              [<br />
              "software engineer", <br />
              "designer",{currentText}
            </span>
            {finishedErasing && <Typist onTypingDone={() => {
                  setHasFinishedTyping(true);
                }} avgTypingDelay={hasScrolled ? 0 : 40} cursor={{ hideWhenDone: false, element: '' }} startDelay={0}>
                "musician"
                <br />
                ];
                <span />
              </Typist>}
          </>}
      </div>
      <div style={{ opacity: hasFinishedTyping ? 1 : 0 }} className="sprite">
        {/* <img src={getSpriteByStep(props.currentStep)} /> */}
        <span
          style={{
            opacity:
              props.currentStep === 0
                ? 1
                : props.currentStep === 100
                ? 0.9
                : props.currentStep === 200
                ? 0.7
                : props.currentStep === 300
                ? 0.5
                : props.currentStep === 400
                ? 0.3
                : 0
          }}
        >
          Software Engineer
        </span>
        <span
          style={{
            opacity:
              props.currentStep === 200
                ? 0.3
                : props.currentStep === 300
                ? 0.5
                : props.currentStep === 400
                ? 0.7
                : props.currentStep === 500
                ? 1
                : props.currentStep === 600
                ? 0.7
                : props.currentStep === 700
                ? 0.5
                : props.currentStep === 800
                ? 0.3
                : 0
          }}
        >
          Designer
        </span>
        <span
          style={{
            opacity:
              props.currentStep === 600
                ? 0.3
                : props.currentStep === 700
                ? 0.5
                : props.currentStep === 800
                ? 0.7
                : props.currentStep === 900
                ? 0.9
                : props.currentStep === 1000
                ? 1
                : 0
          }}
        >
          Musician
        </span>
      </div>
      <div className="contact">
        <div className="social-icons">
          <SocialMediaIconsReact iconSize={10} size={15} backgroundColor="transparent" icon="linkedin" url="https://www.linkedin.com/in/pedroknup" />
          <SocialMediaIconsReact iconSize={10} size={15} backgroundColor="transparent" icon="facebook" url="https://www.facebook.com/pedroknup" />
          <SocialMediaIconsReact iconSize={10} size={15} backgroundColor="transparent" icon="github" url="https://www.github,com/pedroknup" />
          <SocialMediaIconsReact iconSize={10} size={15} backgroundColor="transparent" icon="instagram" url="https://www.instagram.com/pedroknup" />
          <SocialMediaIconsReact iconSize={10} size={15} backgroundColor="transparent" icon="deviantart" url="https://www.pedroknup.deviantart.com" />
        </div>
        <div className="signature">
          made with <span style={{ color: 'red' }}>♥</span> by <span>Pedro Knup </span> | ©2021
        </div>
        {/* <SocialMediaIconsReact
          backgroundColor="transparent"
          icon="email"
          url="https://twitter.com/your-twitter-handle"
        /> */}
      </div>
    </div>;
};
