import React from 'react';
import './section.style.scss';

const defaultPadding = 32;

type SectionPageProps = {
  title: string;
  description?: string;
  padding?: number;
  id?: string;
  paddingColumns?: number;
  children?: any;
  isDarkMode?: boolean;
  isHighlighted?: boolean;
  removeHighlight?: (id: string) => void;
}

export const SectionPage = ({ id, title, children, description, padding, paddingColumns, isHighlighted, isDarkMode: darkMode }: SectionPageProps) => {

  return <div id={id} style={{ margin: `0 ${padding !== undefined ? padding : defaultPadding}px` }} className={`section ${isHighlighted ? 'highlight' : ''} ${darkMode ? '' : 'light'}`}>
    <div className="anchor" />
    <div className="title">
      <span>{title}</span>
    </div>

    <div className={`content big ${paddingColumns === 2 ? 'padding' : ''}`}>
      {description ? <div>
        <br />
        <span className="description">
          <span className="description" style={{ margin: '0 16px' }}>{` /* ${description} */`}</span>
          <br />
        </span>
      </div> : ''}
      <br />
      {children}
    </div>
    <div className="title closing">
      <span>{title}</span>
    </div>
  </div>;
};
