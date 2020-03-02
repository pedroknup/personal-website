import * as React from 'react';
import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './experience-item-component.scss';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
const { useState } = React;
export interface IExperienceItemProps {}

export const ExperienceItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return <div onClick={toggleOpen} className={`experience-item ${isOpen ? 'open' : ''}`}>
      <div className="toggle">
        <span className={`chevron2 ${isOpen ? 'bottom' : 'right'}`} />
      </div>
      <div className="picture" />
      <div className="content2">
        <div className="date">Jan/2019 - Sep/2019</div>
        <div className="title">Computer Engineering Intern</div>
        <div className="name">{`//${'*'} Vale S.A`}</div>
        <div className={`content2 ${isOpen ? 'open' : ''}`}>
          Programming Logic Instructor - Curabitur fringilla nisl ac pharetra semper UP
          Consultoria Jr. Curabitur fringilla nisl ac pharetra semperIn at vestibulum or bi
          interdum, arcu ut ultrices porttitor, turpis urna volutpat tortor, et mollis m auris
          magna vitae sapien FEJMG: In at vestibulum orci. Mor bi interdum, arcu ut ultrices
          porttitor, turpis urna volutpat tortor, et mollis m auris magna vitae sapien In at
          vestibulum orci. Mor bi interdum, arcu ut ultrices porttitor, turpis urna volutpat
          tortor, et mollis m auris magna vitae sapien
        </div>
      </div>
    </div>;
};
