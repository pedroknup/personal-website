import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

export interface ScrollProgressBar {
  progress: number;
  onChange: (value: number) => void;
  onMouseUp: (value: number) => void;
}

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


export const ScrollProgressBar = (
  // props: ScrollProgressBar & RouteComponentProps & HomeContainerProps
  props: ScrollProgressBar
) => {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  const [posTop, setPosTop] = React.useState(0);

  const drag = React.useRef<HTMLDivElement>(null);
  const scrollBar = React.useRef<HTMLDivElement>(null);

  const getHeight = () => {
    let height = 1;
    if (scrollBar && scrollBar.current) {
      height = scrollBar.current.clientHeight;
    }
    return height;
  }
  var isMoving = false;
  React.useEffect(() => {
    let height = getHeight();
    const valueInPx = props.progress / 100 * height;
    setPosTop(valueInPx)
  }, [props.progress])

  const closeDragElement = () => {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    isMoving = false;


  }
  var first = false;
  const elementDrag = (e: any) => {
    e = e || window.event;
    // e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let height = getHeight();
    let moved;
    isMoving = true
    if (!first) {
      first = true;
    } else
      if (drag)
        if (drag.current) {
          if (drag.current !== null) {

            moved = drag.current.offsetTop - pos2
            // console.log("moved", moved)
            const limit = height;
            if (moved < 0)
              moved = 0;
            else if (moved > limit)
              moved = limit;
            setPosTop(moved)
            console.log("aa", moved)
            const relativeValue = moved * 100 / height;
            props.onChange(relativeValue)

          }
        }
  }
  const onMouseDown = () => {
    document.onmousemove = elementDrag;
    document.onmouseup = onMouseUp;
  }
  const onMouseUp = () => {
    console.log("Mouse Up")
    if (drag)
      if (drag.current) {
        if (drag.current !== null) {
          first= false;
          const relativeValue = drag.current.offsetTop * 100 / getHeight();
          props.onMouseUp(relativeValue)
          closeDragElement();
        }
      }
  }

  return (
    <>


      <div className="scroll-progress-bar">
        <div ref={scrollBar} className="bar">
          <div ref={drag} onMouseDown={onMouseDown} style={{ top: `${posTop}px` }} className="drag-handler">{props.progress}</div>
        </div>
      </div >
    </>
  );
};
