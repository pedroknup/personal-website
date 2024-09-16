import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react'
import './nav-bar.style.scss';

type NavbarItem = {
  title: string;
  id: string;
  isSelected?: boolean;
  shouldHighlight?: boolean;
  element?: any;
}

type NavbarProps = {
  onClick: (id: string) => void;
  setDarkMode: (state: boolean) => void;
  darkMode: boolean;
  items: NavbarItem[];
}

const Navbar = ({ darkMode, setDarkMode, items, onClick }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(false);
  }, [darkMode])

  const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    setIsActive(false);
    onClick(id);
  };

  const handleHamburgerMenuClick = () => {
    setIsActive(!isActive);
  }

  return <div>
    <div className={`${isActive ? 'is-active' : ''} ${darkMode ? '' : 'light'} hamburger-icon`}>
      <Hamburger toggled={isActive} toggle={handleHamburgerMenuClick} />
    </div>

    <div className={`navbar links ${isActive ? 'is-active' : ''} ${darkMode ? '' : 'light'}`}>
      <div className="container">
        {items.map((item, key) => (
          <a
            href="#"
            className={item.isSelected ? 'selected' : ''}
            key={key}
            onClick={(e) => {
              handleMenuItemClick(e, item.id);
            }}
          >
            {item.title}
            <div className="divider" />
          </a>
        ))}
        <label className="toggle-dark" onClick={() => {
          setDarkMode(!darkMode);
        }}>
          Toggle Dark mode
        </label>
      </div>
    </div>
  </div>;
};

export { NavbarItem, Navbar };
