import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './about-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
import Typist from 'react-typist';
const wheelReact = require('wheel-react');
import personalData from '../../../data';
const WheelReact = wheelReact.default;
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

interface ILink {
  url: string;
  title: string;
}

const STEPS = 2000;
export const AboutPage = (props:ISkillsProps) => {
  return <div className={`about-container ${props.darkMode ? '' : 'light'}`}>
      <Section darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="about" paddingColumns={2} title="About">
        <span className="obj">
          <span className="brackets">
            {`{`} <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>: <span className="string">
            {personalData.name}
          </span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            age
          </span>: <span className="number">{personalData.age}</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            nationality
          </span>: <span className="string">"{personalData.nationality}"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            based
          </span>: <span className="string">"{personalData.based}"</span>
          <br />
          {/* {links.map((link, key) => <span className=".contact-links">
                <a href={link.url} key={key}>
                  {link.title}
                </a>
                {', '}
              </span>)}
          </span>
          ] <br /> */}
          <span className="brackets">
            {`}`} <br />
          </span>
        </span>
        <br />
        <span>{personalData.bio}</span>
        <br />
        <br />
      </Section>
    </div>;
};
