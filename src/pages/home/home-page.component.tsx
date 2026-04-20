import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { IntroPageComponent } from '../../components/intro';
import { SkillsPage } from '../../components/skills';
import { EducationPage } from '../../components/education';
import { ProfessionalExperiencesPage } from '../../components/professional-experience';
import { AboutPage } from '../../components/about';
import { BlogPage } from '../../components/blog';
import { NavbarItem, Navbar } from '../../components/nav-bar';

import './home-page.style.scss';

export type HomeComponentProps = {}

const MINIMUM_STEPS = 0;
const STEPS = 1000;
const SCROLL_TIMEOUT = 1000;

const initialNavbarItem: NavbarItem[] = [
  {
    title: 'About',
    isSelected: false,
    id: 'about'
  },
  { title: 'Skills', isSelected: false, id: 'skills' },
  { title: 'Experience', isSelected: false, id: 'experiences' },
  { title: 'Education', isSelected: false, id: 'education' },
  { title: 'Art & tech', isSelected: false, id: 'blog' }
];

export const HomeComponent = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isScrollingRef = useRef(false);
  const [hasScrolledIntro, setHasScrolledIntro] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [navBarItems, setNavBarItems] = useState<NavbarItem[]>(initialNavbarItem);
  const [previousState, setPreviousState] = useState<number | undefined>(undefined);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.addEventListener('scroll', onScroll, true);
    setPreviousState(undefined);

    return () => {
      document.body.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    isScrollingRef.current = isScrolling;
  });

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

  const onScroll = useCallback(() => {
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
      intro?.current &&
      container?.current?.scrollTop === 0
    ) {
      container.current.style.overflow = 'auto';
    }

    setTimeout(() => {
      const navBarElement = document.getElementById(`${id}`);
      if (navBarElement) {
        navBarElement.scrollIntoView({ behavior: 'auto' });
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
      intro.current &&
      container.current?.scrollTop === 0
    ) {
      let count = currentPosition + event.deltaY;

      if (count > STEPS + MINIMUM_STEPS) {
        count = STEPS + MINIMUM_STEPS
      } else if (count < MINIMUM_STEPS && hasScrolledIntro) {
        count = 0;
      }

      if (count < 0) {
        count = 0;
      }

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

  const handleCvCtaClick = () => {
    navigate('/cv');
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
              currentState={0}
              hasScrolled={hasScrolled}
              onFinish={() => {
                setHasScrolled(true);
              }}
            />
            <br />
          </div>
          <div className="soft-transition " style={{ opacity: hasScrolled ? 1 : 0 }}>
            <AboutPage isDarkMode={darkMode} />
            <SkillsPage isDarkMode={darkMode} />
            <ProfessionalExperiencesPage isDarkMode={darkMode} />
            <EducationPage isDarkMode={darkMode} />
            <BlogPage isDarkMode={darkMode} />
            <div className="huge">
              <h2>Thanks for reading this far.</h2>
            </div>
          </div>
        </div>
      </div>
      <button className={`cv-button-wrapper ${darkMode ? '' : 'light'}`} onClick={handleCvCtaClick}>
        Curriculum Vitae
      </button>
    </div>
  );
};
