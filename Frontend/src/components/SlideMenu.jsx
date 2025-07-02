import React, { useState } from 'react';
import './css/SlideMenu.css';
import menuIcon from '../Assets/Icons/Menu White.svg';
import closeIcon from '../Assets/Icons/Close White.svg';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Icon */}
      <button className="menu-icon" onClick={toggleMenu}>
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt="Menu Toggle"
          className="icon-img"
        />
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" className="nav-link">HOME</a></li>
            <li><a href="#schedule" className="nav-link">SCHEDULE</a></li>
            <li><a href="#library" className="nav-link">MOVIE LIBRARY</a></li>
            <li><a href="#contact" className="nav-link">LOCATION & CONTACT</a></li>
          </ul>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default SlideMenu;
