import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import './section-component.scss';

const defaultPadding = 32;
interface ISectionProps {
  title: string;
  description?: string;
  padding? : number;
  paddingColumns ? : number;
  children?: any;
}
export const Section = (props: ISectionProps) => {
  const { title, children, description, padding,paddingColumns } = props;
  return <div style={{ margin: `0 ${padding !== undefined ? padding : defaultPadding}px` }} className="section">
      <div className="title">
        <span>{title}</span>
        {description ? <span className="description">{` /* ${description} */`}</span> : ''}
      </div>
      <div className={`content big ${paddingColumns === 2 ? 'padding' : ''}`}>{children}</div>

      <div className="title closing">
        <span>{title}</span>
      </div>
    </div>;
};
