import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';
import { ScrollProgressBar } from '../../scroll-progress-bar'
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
export interface IHomeComponentProps { }

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 100,
    width: '100%',
    maxWidth: '400px',
    margin: 'auto'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  textField: {
    margin: '8px 0'
  },
  title: {
    margin: '24px auto'
  },
  pos: {
    marginBottom: 12
  }
});

const STEPS = 2000;
export const HomeComponent = (
  // props: IHomeComponentProps & RouteComponentProps & HomeContainerProps
  props: IHomeComponentProps
) => {
  const [currentState, setCurrentState] = React.useState(0);
  const [currentPosition, setCurrentPosition] = React.useState(0);
  const container = React.useRef<HTMLDivElement>(null);
  const intro = React.useRef<HTMLDivElement>(null);
  const [internalCurrentPosition, setInternalCurrentPosition] = React.useState(0);
  const setNextState = (nextState: number) => {
    const diff = nextState - currentState;
    if (diff > 0) {

    }
  }
  React.useEffect(() => {
    if (container)
      if (container.current)
        container.current.style.overflow = 'hidden'
  }, [])
  React.useEffect(() => {
    setInternalCurrentPosition(currentPosition)
  }, [currentPosition])
  React.useEffect(() => {
    WheelReact.config({
      left: () => {
        console.log('wheel left detected.');
      },
      right: () => {
        console.log('wheel right detected.');
      },
      up: () => {
        console.log('wheel up detected.');
      },
      down: () => {
        console.log('wheel down detected.');
      }
    });
  })
  const roundUp = (value: number) => {
    return (~~((value + 99) / 100) * 100);
  }
  return (

    <div onWheel={(e) => {
      e.preventDefault();
      if (intro)
        if (intro.current)
          if (container)
            if (container.current)
              if (container.current.scrollTop === 0) {
                let count = currentPosition + e.deltaY;
                if (count > STEPS + 200) count = STEPS + 200
                else if (count < 0) count = 0;
                setCurrentPosition(count)
                console.log(" scale", currentPosition);
                if (currentPosition === STEPS + 200) {
                  if (container)
                    if (container.current)
                      container.current.style.overflow = 'auto'
                } else {
                  if (container)
                    if (container.current)
                      container.current.style.overflow = 'hidden'
                }

              } else {
                container.current.style.overflow = 'auto'
              }
    }
    }
      ref={container}
      className="home-container">
      <div ref={intro} className="intro">
        <div style={{ color: 'red', position: 'absolute', top: 16, left: 16 }}>{internalCurrentPosition}</div>
        <ScrollProgressBar onChange={(value) => {

          setInternalCurrentPosition(roundUp(value / 100 * STEPS))
        }} onMouseUp={(value) => {
          setCurrentPosition(roundUp(value / 100 * STEPS))
        }} progress={currentPosition > STEPS ? STEPS * 0.05 : currentPosition * 0.05} />

      </div>
      <div className="huge"></div>
    </div>

  );
};
