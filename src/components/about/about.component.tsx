import React from 'react';
import './about.style.scss';
import { SectionPage } from '../section';
import { personalData } from '../../data/bio';
import { PageProps } from '../../../types/page-props';

export const AboutPage = ({ isDarkMode: darkMode, removeHighlight, isHighlighted }: PageProps) => {
  return (
    <div className={`about-container ${darkMode ? '' : 'light'}`}>
      <SectionPage
        darkMode={darkMode}
        removeHighlight={removeHighlight}
        isHighlighted={isHighlighted}
        id="about"
        paddingColumns={2}
        title="About"
      >
        <span className="obj">
          <span className="brackets">
            {`{`} <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>:{' '}
          <span className="string">"{personalData.name}"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">age</span>:{' '}
          <span className="number">{personalData.age}</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">nationality</span>:{' '}
          <span className="string">"{personalData.nationality}"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">based</span>:{' '}
          <span className="string">"{personalData.based}",</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">bio</span>:{' '}
          <span className="string bio">`{personalData.bio}`</span>
          <br />
          <span className="brackets">
            {`}`} <br />
          </span>
        </span>
        <br />
      </SectionPage>
    </div>
  );
};
