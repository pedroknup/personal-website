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
  previousState?: number;
  hasScrolled: boolean;
  currentState: number;
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
  React.useEffect(() => {
    setTimeout(() => {
      setHasTimedOut(true);
      if (hasScrolledInterned) setHasScrolled(true);
    }, 1000);
    let currentT = '';
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
    if (props.previousState !== 0 || (props.previousState === 0 && props.previousState !== undefined)) {
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

  const eraseLastWord = async (word: string) => {
    console.log('word', word, 'current', currentText);
    const sleepTime = word === 'software engineer' ? 20 : 40;
    while (word !== '') {
      word = word.slice(0, word.length - 1);
      await sleep(sleepTime);
      setCurrentText(word);
    }
    setFinishedErasing(true);
  };

  return (
    <div onWheel={onScrollHandler} className="intro-container">
      <div className={`intro-text ${hasFinishedTyping ? 'finished' : ''}`}>
        {props.currentState === 0 && props.previousState == undefined && (
          <Typist
            onTypingDone={() => {
              setHasFinishedTyping(true);
            }}
            avgTypingDelay={hasScrolled ? 0 : 40}
            cursor={{ hideWhenDone: false, element: '' }}
            startDelay={props.currentState === 0 ? 1000 : 0}
          >
            {props.currentState === 0 && (
              <span>
                Hi! I’m Pedro Knup, a self-taught
                <br />
                software engineer.
              </span>
            )}
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
          </Typist>
        )}
        {props.currentState === 0 && props.previousState !== undefined && (
          <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              {currentText}
            </span>
            {finishedErasing && (
              <Typist
                onTypingDone={() => {
                  setHasFinishedTyping(true);
                }}
                avgTypingDelay={hasScrolled ? 0 : 40}
                cursor={{ hideWhenDone: false, element: '' }}
                startDelay={0}
              >
                software engineer.
                <span />
              </Typist>
            )}
          </>
        )}
        {props.currentState === 1 && (
          <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              {currentText}
            </span>
            {finishedErasing && (
              <Typist
                onTypingDone={() => {
                  setHasFinishedTyping(true);
                }}
                avgTypingDelay={hasScrolled ? 0 : 40}
                cursor={{ hideWhenDone: false, element: '' }}
                startDelay={0}
              >
                designer.
                <span />
              </Typist>
            )}
          </>
        )}
        {props.currentState === 2 && (
          <>
            <span>
              Hi! I’m Pedro Knup, a self-taught
              <br />
              {currentText}
            </span>
            {finishedErasing && (
              <Typist
                onTypingDone={() => {
                  setHasFinishedTyping(true);
                }}
                avgTypingDelay={hasScrolled ? 0 : 40}
                cursor={{ hideWhenDone: false, element: '' }}
                startDelay={0}
              >
                musician.
                <span />
              </Typist>
            )}
          </>
        )}
      </div>

    </div>
  );
};
