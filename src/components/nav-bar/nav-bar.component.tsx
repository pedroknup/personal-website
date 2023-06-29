import * as React from 'react';
const hamburgerArrow = require('react-animated-burgers');
const { HamburgerArrow } = hamburgerArrow;
import './nav-bar.style.scss';
interface INavbarItem {
  title: string;
  id: string;
  isSelected?: boolean;
  shouldHighlight?: boolean;
  element?: any;
}
interface INavbarProps {
  onClick: (id: string) => void;
  setDarkMode: (state: boolean) => void;
  darkMode: boolean;
  items: INavbarItem[];
}

const Navbar = (props: INavbarProps) => {
  const [isActive, setIsActive] = React.useState(false)
  React.useEffect(() => {
    setIsActive(false);
  }, [props.darkMode])

  const onClick = (id: string) => {
    props.onClick(id);
  };

  return <div>
      <div className={`${isActive ? 'is-active' : ''} ${props.darkMode ? '' : 'light'} hamburger-icon`}>
        <HamburgerArrow buttonWidth={36} onClick={() => {
            setIsActive(!isActive);
          }} isActive={isActive} />
      </div>

      <div className={`navbar links ${isActive ? 'is-active' : ''} ${props.darkMode ? '' : 'light'}`}>
        {/* <div className="buttons">
          <div className="button red" />
          <div className="button yellow" />
          <div className="button green" />
        </div> */}
        <div className="container">
          {props.items.map((item, key) => (
            <a
              href="#"
              className={item.isSelected ? 'selected' : ''}
              key={key}
              onClick={(e) => {
                e.preventDefault();
                setIsActive(false);
                onClick(item.id);
              }}
            >
              {item.title}
              <div className="divider" />
            </a>
          ))}
          <label className="toggle-dark" onClick={() => {
              props.setDarkMode(!props.darkMode);
            }}>
            Toggle Dark mode
          </label>
        </div>
      </div>
    </div>;
};

export { INavbarItem, Navbar };
