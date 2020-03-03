import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { IntroPageComponent } from '../intro';
import { SkillsPage } from '../skills';
import { EducationPage } from '../education';
import { Section } from '../../section';
import { ProfessionalExperiencesPage } from '../professional-experience';
import { AboutPage } from '../about';
import { BlogPage } from '../blog';
import { INavbarItem, Navbar } from '../../../components/nav-bar/nav-bar-component';
const sticky = require('react-sticky');
const { StickyContainer, Sticky } = sticky;
const wheelReact = require('wheel-react');
export interface IHomeComponentProps {}
//  <a className="selected" href="#">About</a>
//           <a href="#">Skills</a>
//           <a href="#professional">Experiences</a>
//           <a href="#">Education</a>
//           <a href="#">Blog</a>
const initialNavbarItem: INavbarItem[] = [
  {
    title: 'About',
    isSelected: true,
    id: 'about'
  },
  { title: 'Skills', isSelected: true, id: 'skills' },
  { title: 'Experiences', isSelected: true, id: 'experiences' },
  { title: 'Education', isSelected: true, id: 'education' },
  { title: 'Blog', isSelected: true, id: 'blog' }
];
const MINIMUM_STEPS = 0;
const STEPS = 1000;
export const HomeComponent = (
  // props: IHomeComponentProps & RouteComponentProps & HomeContainerProps
  props: IHomeComponentProps
) => {
  const [currentState, setCurrentState] = React.useState(0);
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [hasScrolledIntro, setHasScrolledIntro] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  const intro = React.useRef<HTMLDivElement>(null);
  const introPageRef = React.useRef<HTMLDivElement>(null);
  const aboutPageRef = React.useRef<HTMLDivElement>(null);
  const [internalCurrentPosition, setInternalCurrentPosition] = React.useState(0);
  const [previousState, setPreviousState] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState<any | undefined>(undefined);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [navBarItems, setNavBarItems] = React.useState(initialNavbarItem);
  const setNextState = (nextState: number) => {
    const diff = nextState - currentState;
    if (diff > 0) {
    }
  };

  React.useEffect(() => {
    if (container)
      if (container.current) {
        container.current.style.overflow = 'hidden';
      }
    document.body.addEventListener('touchmove', deactivateDefaultScroll);

    document.body.addEventListener('onscroll', stoppedScrolling, false);
    return () => {
      document.body.removeEventListener('touchmove', deactivateDefaultScroll);

      document.body.removeEventListener('onscroll', stoppedScrolling);
    };
  }, []);
  const stoppedScrolling = (event: Event) => {};

  const onNavbarItemClick = () => {
    setHasScrolled(true);
    if (intro)
      if (intro.current)
        if (container)
          if (container.current)
            if (container.current.scrollTop === 0) {
              if (container) if (container.current) container.current.style.overflow = 'auto';
            }
  };

  React.useEffect(
    () => {
      setInternalCurrentPosition(0);
      setInternalCurrentPosition(roundUp(currentPosition));
      const percentage = 100 - currentPosition / 4;
      if (introPageRef && !hasScrolledIntro) {
        if (introPageRef.current) {
          introPageRef.current.style.opacity = `${percentage}%`;
          console.log('percentage', `-${(percentage / 100) * 500}px`);
          introPageRef.current.style.transform = `translateY(+${percentage * 1.1}px)`;
        }
      }
      if (hasScrolledIntro) {
        // const color = getColorForPercentage((currentPosition * 0.05) / 100);
        // if (container)
        //   if (container.current) {
        //     container.current.style.background = color;
        // }
      }
    },
    [currentPosition]
  );

  const roundUp = (value: number, ref = 100) => {
    let rounded = ~~((value + 99) / ref) * ref;
    return rounded;
  };
  const deactivateDefaultScroll = (e: Event) => {
    e.preventDefault(); // this one is the key
    e.stopPropagation();
  };
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const getColorForPercentage = (pct: number) => {
    const percentColors = [
      { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
      { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
      { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } }
    ];
    for (var i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
        break;
      }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
  };

  const runAnimationThroughSteps = async (from: number) => {
    let currentStep = roundUp(from);
    let targetStep = MINIMUM_STEPS;
    if (currentStep >= STEPS / 4 && currentStep < (STEPS * 3) / 4) {
      // >= 500
      targetStep = STEPS / 2;
    } else if (currentStep >= (STEPS * 3) / 4) {
      // >= 1.5K
      targetStep = STEPS;
    }

    let to = targetStep;
    const sleepMs = 50;
    let i = from;
    if (to > from) {
      while (i < to) {
        setCurrentPosition(i);
        await sleep(sleepMs);
        i += 100;
      }
    } else {
      while (i > to) {
        setCurrentPosition(i);
        await sleep(sleepMs);
        i -= 100;
      }
    }
    let final = Math.round(i / 50) * 50;
    if (final < MINIMUM_STEPS) final = MINIMUM_STEPS;
    else if (final > STEPS) final = STEPS;
    setCurrentPosition(final);
  };
  return (
    <div
      ref={container}
      onWheel={(e) => {
        console.log('rolled');
        if (!hasScrolled) {
          setHasScrolled(true);
        }
        if (isScrolling !== null && isScrolling != undefined) window.clearTimeout(isScrolling);
        setIsScrolling(
          setTimeout(() => {
            runAnimationThroughSteps(internalCurrentPosition);
          }, 300)
        );
        if (intro)
          if (intro.current)
            if (container)
              if (container.current)
                if (container.current.scrollTop === 0) {
                  let count = currentPosition + e.deltaY;
                  if (count > STEPS + MINIMUM_STEPS) count = STEPS + MINIMUM_STEPS;
                  else if (count < MINIMUM_STEPS && hasScrolledIntro) {
                    count = 0;
                  }
                  if (count < 0) count = 0;
                  if (count >= MINIMUM_STEPS && !hasScrolledIntro) {
                    setHasScrolledIntro(true);
                  }
                  if (count < MINIMUM_STEPS && hasScrolledIntro) {
                    count = MINIMUM_STEPS;
                  }
                  setCurrentPosition(count);
                  if (currentPosition >= STEPS) {
                    if (container) if (container.current) container.current.style.overflow = 'auto';
                  } else {
                    if (container)
                      if (container.current) container.current.style.overflow = 'hidden';
                  }
                } else {
                  container.current.style.overflow = 'auto';
                }
      }}
      id="container"
      className="home-container"
    >
      <Navbar onClick={onNavbarItemClick} items={navBarItems} />
      <div ref={intro} className="intro">
        <IntroPageComponent
          hasScrolled={hasScrolled}
          onFinish={() => {
            setHasScrolled(true);
          }}
        />
        <div style={{ color: 'white', opacity: 0.1, position: 'absolute', top: 16, right: 16 }}>
          {internalCurrentPosition}
          <br />
          {currentPosition}
        </div>
        <div ref={aboutPageRef}>
          <ScrollProgressBar
            minimum={MINIMUM_STEPS}
            onChange={(value) => {
              const total = (value / 100) * STEPS;
              const rounded = roundUp(total);
              setInternalCurrentPosition(0);
              setInternalCurrentPosition(rounded);
            }}
            onMouseUp={(value) => {
              const rounded = Math.round(value);
              setCurrentPosition((rounded / 100) * STEPS);
              let currentStep = (rounded / 100) * STEPS;
              runAnimationThroughSteps(currentStep);
            }}
            progress={
              currentPosition > STEPS
                ? (STEPS - MINIMUM_STEPS) * 0.1
                : currentPosition <= MINIMUM_STEPS
                ? 0
                : (currentPosition - MINIMUM_STEPS) * 0.1
            }
          />
        </div>
      </div>

      <div className="soft-transition " style={{ opacity: hasScrolled ? 1 : 0 }}>
        {/* <AboutPage /> */}

        <AboutPage />
        <SkillsPage />
        <ProfessionalExperiencesPage />
        <EducationPage />
        <BlogPage />
      </div>
    </div>
  );
};
