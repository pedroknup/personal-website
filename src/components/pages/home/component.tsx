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
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [hasScrolledIntro, setHasScrolledIntro] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  const intro = React.useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [navBarItems, setNavBarItems] = React.useState<INavbarItem[]>(initialNavbarItem);
  const [previousState, setPreviousState] = React.useState<number|undefined>(undefined);
  const [darkMode, setDarkMode] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState<string>('')


  React.useEffect(() => {
    document.body.addEventListener('scroll', stoppedScrolling, true);


    setPreviousState(undefined)
    return () => {
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
    
    if (aboutY <= 200) currentPageStr = 'about';
    if (skillsY <= 150) currentPageStr = 'skills';
    if (experienceY <= 150 ) currentPageStr = 'experiences';
    if (educationY <= 150) currentPageStr = 'education';
    if (educationY <= 250 && experienceY < -200) currentPageStr = 'education';
    if (blogY <= 150) currentPageStr = 'blog';
    setSelectedNavbarItem(currentPageStr);
    setCurrentPage(currentPageStr)

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


  return (
    <div className="main">
      <div className={`container ${darkMode ? '': 'light'}`} >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} onClick={onNavbarItemClick} items={navBarItems} />

        <div
          ref={container}
          onScroll={(e)=>{
          //  console.log(e.clientY - e.currentTarget.getBoundingClientRect().top)
          }}
          onWheel={(e) => {
            if (!hasScrolled) {
              setHasScrolled(true);
            }
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
                      container.current.style.overflow = 'auto';
                    }
          }}
          id="container"
         className={`home-container ${darkMode ? '': 'light'}`}
        >

          <div ref={intro} className="intro">
            
            <IntroPageComponent
            darkMode={darkMode}
              currentStep={0}
              previousState={previousState}
              key={0}
              currentState={0}
              hasScrolled={hasScrolled}
              onFinish={() => {
                setHasScrolled(true);
              }} /> 
          
             <br />
          </div>

          <div className="soft-transition " style={{ opacity: hasScrolled ? 1 : 0 }}>
         
            <AboutPage    darkMode={darkMode}/>
            <SkillsPage   darkMode={darkMode}/>
            <ProfessionalExperiencesPage   darkMode={darkMode}/>
            <EducationPage   darkMode={darkMode}/>
            <BlogPage   darkMode={darkMode}/>
          <div className="huge"></div>
          </div>
        </div>
       </div>
    </div>
  );
};
