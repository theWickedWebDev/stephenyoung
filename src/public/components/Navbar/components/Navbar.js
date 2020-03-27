// Dependencies
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from "react-router";

// Components
import Logo from 'components/Logo';
import BackgroundMask from 'components/Mask';
import SiteName from 'components/SiteName';

// Local Components
import Links from './Links.js';
import links from '../links.js';
import '../styles.scss';

// Main Navbar
const Navbar = ({ viewport, location }) => {
  const DEFAULT_MENU_TITLE = 'Menu';
  const DEFAULT_MENU_OPEN = false;

  const [ menuIsOpen, toggleMenu ] = useState(DEFAULT_MENU_OPEN);
  const currentLink = links.find(l => l.href === location.pathname);

  const menuTitle = currentLink
    ? currentLink.title
    : DEFAULT_MENU_TITLE;

  return (
    <nav className={`NavbarComponent clearfix ${viewport}`}>
      <BackgroundMask onClick={() => toggleMenu(false)} open={menuIsOpen}/>
      <div className="NavbarComponent__wrapper">
        <div className="NavbarComponent__logo-wrapper">
          <Logo />
          &nbsp;
          <SiteName className="NavbarComponent__title"/>
        </div>
        <div className="NavbarComponent__menu-wrapper">
          <div
            onClick={() => toggleMenu(!menuIsOpen)}
            className="NavbarComponent__menu"
          >
            <Links open={menuIsOpen}/>
            <MenuName title={menuTitle}/>
            <NavMenuButton closed={!menuIsOpen} key="button-closed"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MenuName = ({ title }) => (
  <span className="NavbarComponent__menu-title">
    { title }
  </span>
);

const NavMenuButton = ({closed}) => (
  <div className="NavbarComponent__menu-btn">
    <FontAwesomeIcon
      icon={closed ? "ellipsis-h" : "ellipsis-v"}
      className="NavbarComponent__menu-btn-svg"
    />
  </div>
);

export default withRouter(Navbar);
