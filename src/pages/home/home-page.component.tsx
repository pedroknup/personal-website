import * as React from 'react';

import { IntroPageComponent } from '../../components/intro';
import { SkillsPage } from '../../components/skills';
import { EducationPage } from '../../components/education';
import { ProfessionalExperiencesPage } from '../../components/professional-experience';
import { AboutPage } from '../../components/about';
import { BlogPage } from '../../components/blog';
import { INavbarItem, Navbar } from '../../components/nav-bar';
import { useLocation } from 'react-router-dom';

import './home-page.style.scss';
import { CvModal } from '../../components/cv';

export interface IHomeComponentProps {}

const MINIMUM_STEPS = 0;
const STEPS = 1000;
const SCROLL_TIMEOUT = 1000;

const initialNavbarItem: INavbarItem[] = [
  {
    title: 'About',
    isSelected: false,
    id: 'about'
  },
  { title: 'Skills', isSelected: false, id: 'skills' },
  { title: 'Experiences', isSelected: false, id: 'experiences' },
  { title: 'Education', isSelected: false, id: 'education' },
  { title: 'Artworks', isSelected: false, id: 'blog' }
];

export const HomeComponent = () => {
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const isScrollingRef = React.useRef(false);
  const [hasScrolledIntro, setHasScrolledIntro] = React.useState(false);
  const container = React.useRef<HTMLDivElement>(null);
  const intro = React.useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [navBarItems, setNavBarItems] = React.useState<INavbarItem[]>(initialNavbarItem);
  const [previousState, setPreviousState] = React.useState<number | undefined>(undefined);
  const [darkMode, setDarkMode] = React.useState(true);
  const [showCv, setShowCv] = React.useState(false);

  React.useEffect(() => {
    document.body.addEventListener('scroll', onScroll, true);
    setPreviousState(undefined);

    if (window.location.hash.includes('/resume')) {
      setShowCv(true);
    }

    return () => {
      document.body.removeEventListener('scroll', onScroll);
    };
  }, []);

  React.useEffect(() => {
    isScrollingRef.current = isScrolling;
  });

  React.useEffect(
    () => {
      if (showCv){
        window.history.pushState({}, '', '/personal-website/#/resume');
      } else {
        window.history.pushState({}, '', '/personal-website/#');
      }
    },
    [showCv]
  );

  const setSelectedNavbarItem = (id: string, shouldHighlight?: boolean) => {
    const navBarItemsTemp = initialNavbarItem.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true, shouldHighlight };
      }
      return { ...item, isSelected: false, shouldHighlight: false };
    });

    if (navBarItems != navBarItemsTemp) {
      setNavBarItems(navBarItemsTemp);
    }
  };

  const onScroll = React.useCallback(() => {
    if (isScrollingRef.current) {
      return;
    }

    const getElementY = (id: string) => {
      const element = document.getElementById(id);
      return element ? element.getBoundingClientRect().y : 0;
    };

    const SCROLL_THRESHOLD = 200;
    const aboutY = getElementY('about');
    const skillsY = getElementY('skills');
    const educationY = getElementY('education');
    const experienceY = getElementY('experiences');
    const blogY = getElementY('blog');

    let currentPageStr = '';

    if (aboutY <= SCROLL_THRESHOLD) currentPageStr = 'about';
    if (skillsY <= SCROLL_THRESHOLD - 50) currentPageStr = 'skills';
    if (experienceY <= SCROLL_THRESHOLD - 50) currentPageStr = 'experiences';
    if (educationY <= SCROLL_THRESHOLD - 50) currentPageStr = 'education';
    if (educationY <= SCROLL_THRESHOLD + 50 && experienceY < -200) currentPageStr = 'education';
    if (blogY <= SCROLL_THRESHOLD - 50) currentPageStr = 'blog';

    setSelectedNavbarItem(currentPageStr);
  }, []);

  const onNavbarItemClick = (id: string) => {
    setHasScrolled(true);
    setIsScrolling(true);

    if (
      intro &&
      intro.current &&
      container &&
      container.current &&
      container.current.scrollTop === 0
    ) {
      if (container && container.current) {
        container.current.style.overflow = 'auto';
      }
    }

    setTimeout(() => {
      const navBarElement = document.getElementById(`${id}`);
      if (navBarElement) {
        navBarElement.scrollIntoView({ behavior: 'auto' });
      } else {
        console.log('Element not found');
      }
      setSelectedNavbarItem(id, true);
    }, 50);
    setTimeout(() => {
      setIsScrolling(false);
    }, SCROLL_TIMEOUT);
  };

  const onWheelHandler = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }

    if (
      intro &&
      intro.current &&
      container &&
      container.current &&
      container.current.scrollTop === 0
    ) {
      let count = currentPosition + event.deltaY;
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
  };

  return (
    <div className="main">
      <div className={`container ${darkMode ? '' : 'light'}`}>
        <Navbar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          onClick={onNavbarItemClick}
          items={navBarItems}
        />
        <div
          ref={container}
          onWheel={onWheelHandler}
          id="container"
          className={`home-container ${darkMode ? '' : 'light'}`}
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
              }}
            />
            <br />
          </div>
          {showCv && (
            <CvModal
              onClose={() => {
                setShowCv(false);
              }}
            />
          )}

          <div className="soft-transition " style={{ opacity: hasScrolled ? 1 : 0 }}>
            <AboutPage darkMode={darkMode} />
            <SkillsPage darkMode={darkMode} />
            <ProfessionalExperiencesPage darkMode={darkMode} />
            <EducationPage darkMode={darkMode} />
            <BlogPage darkMode={darkMode} />
            <div className="huge">
              <h2>Thanks for visiting my website :)</h2>
            </div>
          </div>
        </div>
      </div>
      <button className="cv-button-wrapper" onClick={() => setShowCv(true)}>
        Curriculum Vitae
      </button>
    </div>
  );
};
