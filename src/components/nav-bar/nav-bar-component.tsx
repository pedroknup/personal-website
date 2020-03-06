import * as React from 'react';
import './nav-bar-component.scss';
interface INavbarItem {
  title: string;
  id: string;
  isSelected?: boolean;
  shouldHighlight?: boolean;
  element?: any;
}
interface INavbarProps {
  onClick: (id: string) => void;
  items: INavbarItem[];
}

const Navbar = (props: INavbarProps) => {
  const onClick = (id: string) => {
    props.onClick(id);
    const el = document.getElementById(`${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'center' });
      
    } else {
      console.log('Element not found');
    }
  };

  return (
    <div className="links">
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
              onClick(item.id);
            }}
          >
            {item.title}
            <div className="divider"></div>
          </a>
        ))}
        {/* <a className="selected" href="#">About</a>
          <a href="#">Skills</a>
          <a href="#professional">Experiences</a>
          <a href="#">Education</a>
          <a href="#">Blog</a> */}
      </div>
    </div>
  );
};

export { INavbarItem, Navbar };
