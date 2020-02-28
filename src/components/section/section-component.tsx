import * as React from 'react';

// import { withRouter } from 'react-router-dom';
import './section-component.scss';

interface ISectionProps {
  title: string;
  children?: any;
}

export const Section = (props: ISectionProps) => {
  const { title, children } = props;
  return (
    <div className="section">
      <div className="title">
        <span>{title}</span>
      </div>
      {children}
      <div className="title closing">
        <span>{title}</span>
      </div>
    </div>
  );
};
