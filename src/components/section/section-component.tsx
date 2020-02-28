import * as React from 'react';

// import { withRouter } from 'react-router-dom';
import './section-component.scss';

interface ISectionProps {
  title: string;
  description?: string;
  children?: any;
}
export const Section = (props: ISectionProps) => {
  const { title, children, description } = props;
  return <div className="section">
      <div className="title">
        <span>{title}</span>
        {description && <span className="description">{` /* ${description} */`}</span>}
      </div>
      <div className="content big">{children}</div>
      <div className="title closing">
        <span>{title}</span>
      </div>
      
    </div>;
};
