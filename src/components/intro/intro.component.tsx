import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import { SocialIcon } from 'react-social-icons';
import './intro.style.scss';
import '../../styles/main.scss';
import { personalData } from '../../data/bio';

export type IntroPageProps = {
  onFinish: () => void;
  previousState?: number;
  hasScrolled: boolean;
  currentStep: number;
  currentState: number;
  darkMode: boolean;
};

export const IntroPageComponent = ({
  onFinish,
  hasScrolled,
  darkMode,
  previousState,
  currentState,
}: IntroPageProps) => {
  const [hasFinishedTyping, setHasFinishedTyping] = useState(false);

  useEffect(() => {
    if (hasFinishedTyping) {
      onFinish();
    }
  }, [hasFinishedTyping]);

  return (
    <div className={`intro-container ${darkMode ? '' : 'light'}`}>
      <div className="profile-pic">
        <img src={personalData.profilePic} />
      </div>
      <div className={`intro-text ${hasFinishedTyping ? 'finished' : ''}`}>
        {hasFinishedTyping && <span>/*</span>}
        <span style={{ marginLeft: hasFinishedTyping ? 15 : 0, display: 'block' }}>
          {currentState === 0 && previousState == undefined && (
            <Typist
              onTypingDone={() => {
                setHasFinishedTyping(true);
              }}
              avgTypingDelay={hasScrolled ? 0 : 40}
              cursor={{ hideWhenDone: false, element: '' }}
              startDelay={currentState === 0 ? 1000 : 0}
            >
              {currentState === 0 && (
                <span>
                  Hi! I’m Pedro Knup
                  <br />
                  I love coding and creating creative content :)
                  <br />
                </span>
              )}
              <span />
            </Typist>
          )}
        </span>
        {hasFinishedTyping && <span>/*</span>}
      </div>

      <div className="contact">
        <div className="social-icons">
          <SocialIcon
            bgColor="transparent"
            target="_blank"
            url="https://www.linkedin.com/in/pedroknup"
          />
          <SocialIcon
            bgColor="transparent"
            target="_blank"
            url="https://www.facebook.com/pedroknup"
          />
          <SocialIcon
            bgColor="transparent"
            target="_blank"
            url="https://www.github.com/pedroknup"
          />
          <SocialIcon
            bgColor="transparent"
            target="_blank"
            url="https://www.instagram.com/pedroknup"
          />
          <SocialIcon
            bgColor="transparent"
            target="_blank"
            url="https://www.pedroknup.deviantart.com"
          />
        </div>
        <div className="signature">
          made with <span style={{ color: 'red' }}>♥</span> by <span>Pedro Knup </span>
        </div>
      </div>
    </div>
  );
};
