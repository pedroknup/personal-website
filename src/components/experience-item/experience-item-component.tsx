import * as React from 'react';
import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './experience-item-component.scss';
import { IExperience } from '../../data/experiences';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
const { useState } = React;
export interface IExperienceItemProps extends IExperience {
  isDark: boolean;
}

export const ExperienceItem = (props: IExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpened);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return <div onClick={toggleOpen} className={`experience-item ${isOpen ? 'open' : ''} ${props.isDark ? '' : 'light'}`}>
      <div className="main-content">
        <div className="toggle">
          <span className={`chevron2 ${isOpen ? 'bottom' : 'right'}`} />
        </div>
        <div className="picture">
          <img src={props.icon} />
        </div>
        <div className="content2">
          <div className="date">{props.date}</div>
          <div className="title">{props.title}</div>
          <div className="name">{`//${'*'} ${props.description}`}</div>
        </div>
      </div>
      <div className={`content3 ${isOpen ? 'open' : ''}`}>
        {props.content.content.split('\n').map((item: string, i: number) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </div>;
};
