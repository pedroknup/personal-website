import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './about-component.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar';
import { Section } from '../../section/section-component';
import Typist from 'react-typist';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
export interface IHomeComponentProps {}

interface ILink {
  url: string;
  title: string;
}
const links: ILink[] = [
  {
    url: '',
    title: 'phknup@gmail.com'
  },
  {
    url: '',
    title: 'linkedin'
  },
  {
    url: '',
    title: 'github'
  },
  {
    url: '',
    title: 'youtube'
  },

  {
    url: '',
    title: 'instagram'
  },

  {
    url: '',
    title: 'facebook'
  }
];

const STEPS = 2000;
export const AboutPage = () => {
  return <div className="about-container">
      <Section id="about" paddingColumns={2} title="About">
        <span className="obj">
          <span className="brackets">
            {`{`} <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>: <span className="string">
            "Pedro Henrique Knup"
          </span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            age
          </span>: <span className="number">25</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            nationality
          </span>: <span className="string">"Brazilian"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            based
          </span>: <span className="string">"Eindhoven, Netherlands"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">contact</span>: [<span>
            {links.map((link, key) => <span className=".contact-links">
                <a href={link.url} key={key}>
                  {link.title}
                </a>
                {', '}
              </span>)}
          </span>
          ] <br />
          <span className="brackets">
            {`}`} <br />
          </span>
        </span>
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </span>
        <br />
        <br />
      </Section>
    </div>;
};
