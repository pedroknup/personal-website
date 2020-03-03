import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import './section-component.scss';

const defaultPadding = 32;
interface ISectionProps {
  title: string;
  description?: string;
  padding?: number;
  id?: string;
  paddingColumns?: number;
  children?: any;
}
export const Section = (props: ISectionProps) => {
  const { title, children, description, padding, paddingColumns } = props;
  return <div style={{ margin: `0 ${padding !== undefined ? padding : defaultPadding}px` }} className="section">
      <div id={props.id} className="anchor" />
      <div className="title">
        <span>{title}</span>
      </div>

      <div className={`content big ${paddingColumns === 2 ? 'padding' : ''}`}>
        {description ? <div>
            <br />
            <span className="description">
              {` /*`}
              {/* <span className="description" style={{ marginLeft: 64 }}>{`${description}`}</span> */}
              <span className="description" style={{ margin: '0 16px' }}>{`${description}   `}</span>
              {/* <br /> */}
              {` */`}
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
