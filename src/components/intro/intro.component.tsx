import * as React from 'react';
import Typist from 'react-typist';
import { SocialIcon } from 'react-social-icons';
import './intro.style.scss';

export interface IIntroPageProps {
  onFinish: () => void;
  previousState?: number;
  hasScrolled: boolean;
  currentStep: number;
  currentState: number;
  darkMode: boolean;
}

import '../../styles/main.scss';
import personalData from '../../data';

export const IntroPageComponent = (props: IIntroPageProps) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [hasFinishedTyping, setHasFinishedTyping] = React.useState(false);

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

  return <div className={`intro-container ${props.darkMode ? '' : 'light'}`}>
      <div className="profile-pic">
        <img src={personalData.profilePic} />
      </div>
      <div className={`intro-text ${hasFinishedTyping ? 'finished' : ''}`}>
        {hasFinishedTyping && <span>/*</span>}
        <span  style={{ marginLeft: hasFinishedTyping ? 15 : 0, display: 'block' }}>
          {props.currentState === 0 && props.previousState == undefined && <Typist onTypingDone={() => {
                setHasFinishedTyping(true);
              }} avgTypingDelay={hasScrolled ? 0 : 40} cursor={{ hideWhenDone: false, element: '' }} startDelay={props.currentState === 0 ? 1000 : 0}>
              {props.currentState === 0 && <span>
                  Hi! I’m Pedro Knup
                  <br />
                  I love coding and creating creative content :)
                  <br />
                </span>}
              <span />
            </Typist>}
        </span>
        {hasFinishedTyping && <span>/*</span>}
      </div>

      <div className="contact">
        <div className="social-icons">
          <SocialIcon  bgColor="transparent"  target='_blank' url="https://www.linkedin.com/in/pedroknup" />
          <SocialIcon  bgColor="transparent" target='_blank' url="https://www.facebook.com/pedroknup" />
          <SocialIcon  bgColor="transparent" target='_blank' url="https://www.github,com/pedroknup" />
          <SocialIcon  bgColor="transparent" target='_blank' url="https://www.instagram.com/pedroknup" />
          <SocialIcon  bgColor="transparent" target='_blank' url="https://www.pedroknup.deviantart.com" />
        </div>
        <div className="signature">
          made with <span style={{ color: 'red' }}>♥</span> by <span>Pedro Knup </span> | ©2021
        </div>
      </div>
    </div>;
};
