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
  darkMode: boolean;
  isHighlighted?: boolean;
  removeHighlight?: (id: string) => void;
}
export const Section = (props: ISectionProps) => {
  const { title, children, description, padding, paddingColumns} = props;
  // const [isHighlighted, setIsHighilighted] = React.useState(props.isHighlighted)
  // React.useEffect(
  //   () => {
  //     // setIsHighilighted(props.isHighlighted);
  //     if (props.isHighlighted) {
  //       setTimeout(() => {
  //         if (props.id) 
  //           props.removeHighlight && props.removeHighlight(props.id)
  //       }, 3000);
  //     }
  //   },
  //   [props.isHighlighted]
  // );
  return <div id={props.id} style={{ margin: `0 ${padding !== undefined ? padding : defaultPadding}px` }} className={`section ${props.isHighlighted ? 'highlight' : ''} ${props.darkMode ? '' : 'light'}`}>
      <div className="anchor" />
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
