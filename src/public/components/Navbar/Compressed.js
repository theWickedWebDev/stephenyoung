import React, { useState } from 'react';

import NavList from './NavList.js';
import Social from './Social.js';
import Logo from './Logo.js';

import './compressed.scss';

const CompressedNavbar = () => {
  const state = useState(false);
  const visible = state[0];
  const setVisible = state[1];

  return (
    <nav className="navbar__component-compressed clearfix">
      <div className="navbar__component-compressed-logo-wrapper">
        <Logo />
      </div>
      <div className="navbar__component-compressed-menu-wrap">
        { !visible &&
          <div
            onClick={() => setVisible(true)}
            className="navbar__component-compressed-menu closed"
          >
            <span className="navbar__component-compressed-menu-title">
              Menu
            </span>
            <em className="fas navbar__menu-btn fa-ellipsis-v"/>
          </div>}
        { visible &&
          <div
            onClick={() => setVisible(false)}
            className="navbar__component-compressed-menu"
          >
            <em className="fas navbar__menu-btn fa-ellipsis-h"/>
            <NavList/>
          </div>
        }
      </div>
    </nav>
  );
}

export default CompressedNavbar;
