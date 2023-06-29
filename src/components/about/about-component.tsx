import * as React from 'react';
import './about-component.scss';
import { Section } from '../section/section-component';
import personalData from '../../data';
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const AboutPage = (props:ISkillsProps) => {
  return <div className={`about-container ${props.darkMode ? '' : 'light'}`}>
      <Section darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="about" paddingColumns={2} title="About">
        <span className="obj">
          <span className="brackets">
            {`{`} <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">name</span>: <span className="string">
            "{personalData.name}"
          </span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            age
          </span>: <span className="number">"{personalData.age}</span>", <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            nationality
          </span>: <span className="string">"{personalData.nationality}"</span>, <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            based
          </span>: <span className="string">"{personalData.based}",</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">
            bio
          </span>: <span className="string bio">`{personalData.bio}`</span>
          <br />
          <span className="brackets">
            {`}`} <br />
          </span>
        </span>
        <br />
      </Section>
    </div>;
};
