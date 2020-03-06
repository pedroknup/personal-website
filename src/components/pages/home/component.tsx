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

const MINIMUM_STEPS = 0;
const STEPS = 1000;

 const initialNavbarItem: INavbarItem[] = [
  {
    title: 'About',
    isSelected: false,
    id: 'about', 
  },
  { title: 'Skills', isSelected: false, id: 'skills', 
  },
  { title: 'Experiences', isSelected: false, id: 'experiences', 
},
  { title: 'Education', isSelected: false, id: 'education', 
 },
  { title: 'Blog', isSelected: false, id: 'blog',
  //  element:  <BlogPage removeHighlight={removeHighlight} isHighlighted={isElementSelected('about ')} /> 
  }
];
export const HomeComponent = (
  props: IHomeComponentProps
) => {
  const [currentScrollPosition, setCurrentScrollPosition] = React.useState(0);
  const [currentState, setCurrentState] = React.useState(0);
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [hasScrolledIntro, setHasScrolledIntro] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  const intro = React.useRef<HTMLDivElement>(null);
  const introPageRef = React.useRef<HTMLDivElement>(null);
  const aboutPageRef = React.useRef<HTMLDivElement>(null);
  const [internalCurrentPosition, setInternalCurrentPosition] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState<any | undefined>(undefined);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [navBarItems, setNavBarItems] = React.useState<INavbarItem[]>(initialNavbarItem);
  const [currentPage, setCurrentPage] = React.useState<string>('')
  const [previousState, setPreviousState] = React.useState<number|undefined>(undefined);

  React.useEffect(()=>{
    let newState = -1;
    if (internalCurrentPosition <= STEPS/4){
      newState = 0
    }else if (internalCurrentPosition > STEPS/4 && internalCurrentPosition < STEPS/4*3){
      newState = 1;
    }else {
      newState = 2
    }
    if (newState != currentState && !(previousState===undefined && newState === 0))
      setPreviousState(currentState);
      setCurrentState(newState);
  }, [internalCurrentPosition])




  const removeHighlight = (id:string) => {
    const navBarItemsTemp = initialNavbarItem;
    for (let i=0;i<navBarItemsTemp.length; i++){
      if (navBarItemsTemp[i].id===id){
        navBarItemsTemp[i].shouldHighlight = false;
      }
    }
    if (navBarItems != navBarItemsTemp){
      setNavBarItems(navBarItemsTemp);
    }
  }

  const isElementSelected = (id:string) => {

   for (let i=0;i< navBarItems.length; i++){
      if (navBarItems[i].id === id && currentPage === id)
      {
        return true;
      }
    }

    return false;
  }

 


  React.useEffect(() => {
    document.body.addEventListener('scroll', stoppedScrolling, true);
 
    if (container)
      if (container.current) {
        container.current.style.overflow = 'hidden';
      }
    document.body.addEventListener('touchmove', deactivateDefaultScroll);

    setPreviousState(undefined)
    return () => {
      document.body.removeEventListener('touchmove', deactivateDefaultScroll);

      document.body.removeEventListener('scroll', stoppedScrolling);
    };
  }, []);
  const setSelectedNavbarItem = (id:string, shouldHighlight?: boolean) => {
    const navBarItemsTemp = initialNavbarItem;
    for (let i=0;i<navBarItemsTemp.length; i++){
      if (navBarItemsTemp[i].id===id){
        navBarItemsTemp[i].isSelected = true;
        if (shouldHighlight){
          navBarItems[i].shouldHighlight = true;
        }
        }else{
          navBarItemsTemp[i].isSelected = false;
          navBarItems[i].shouldHighlight = false;
      }
    }
   
    if (navBarItems != navBarItemsTemp){
      setNavBarItems(navBarItemsTemp);
    }
  }
  const stoppedScrolling = () => {
      const aboutY = document.getElementById('about')?.getBoundingClientRect().y || 0;
    const skillsY = document.getElementById('skills')?.getBoundingClientRect().y || 0;
    const educationY = document.getElementById('education')?.getBoundingClientRect().y || 0;
    const experienceY = document.getElementById('experiences')?.getBoundingClientRect().y || 0;
    const blogY = document.getElementById('blog')?.getBoundingClientRect().y || 0;
    let currentPageStr = '';
    
    if (aboutY <= 100) currentPageStr = 'about';
    if (skillsY <= 100) currentPageStr = 'skills';
    if (experienceY <= 100) currentPageStr = 'experiences';
    if (educationY <= 100) currentPageStr = 'education';
    if (blogY <= 100) currentPageStr = 'blog';
    setCurrentPage(currentPageStr)
    setSelectedNavbarItem(currentPageStr);
   

  };

  const onNavbarItemClick = (id:string) => {
    setHasScrolled(true);
    setSelectedNavbarItem(id, true)
    if (intro)
    if (intro.current)
    if (container)
    if (container.current)
    if (container.current.scrollTop === 0) {
      if (container) if (container.current) container.current.style.overflow = 'auto';
    }

    setTimeout(() => {
      stoppedScrolling()
    }, 500);
  };

  React.useEffect(()=>{
    if (currentState === undefined){
      console.log('initial')
    } else   if (currentState === 0){
      console.log('0')
    }else   if (currentState === 1){
      console.log('1')
    }else   if (currentState === 2){
      console.log('2')
    }
  },[currentState])

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
    <div className="main">
      <div className="container">
      <Navbar onClick={onNavbarItemClick} items={navBarItems} />

        <div
          ref={container}
          onScroll={(e)=>{
          //  console.log(e.clientY - e.currentTarget.getBoundingClientRect().top)
          }}
          onWheel={(e) => {
            setCurrentScrollPosition(window.pageYOffset);
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

          <div ref={intro} className="intro">
           
            <IntroPageComponent
              currentStep={internalCurrentPosition}
              previousState={previousState}
              key={currentState}
              currentState={currentState}
              hasScrolled={hasScrolled}
              onFinish={() => {
                setHasScrolled(true);
              }} /> 
          
             <br />
            <div style={{ color: 'white', opacity: 0.1, position: 'fixed', top: 16, right: 16 }}>
              {internalCurrentPosition}
              <br />
              {currentPosition}
              <br />
              {currentPage}
              <br />
              {currentState}
              <br />
              {previousState}
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
         
            <AboutPage  />
            <SkillsPage />
            <ProfessionalExperiencesPage />
            <EducationPage />
            <BlogPage />
          <div className="huge"></div>
          </div>
        </div>
       </div>
    </div>
  );
};
