import React from 'react';

import NavList from './NavList.js';
import Social from './Social.js';
import Logo from './Logo.js';

import './expanded.scss';

const ExpandedNavbar = () => (
  <nav className="navbar__component">
    <Logo />
    <NavList />
    <Social />
  </nav>
);

export default ExpandedNavbar;
