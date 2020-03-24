import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavList from './NavList.js';
import Logo from './Logo.js';

import './compressed.scss';

const CompressedNavbar = () => {
  const state = useState(false);
  const visible = state[0];
  const setVisible = state[1];
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar__component-compressed clearfix">
      <div className="navbar__component--wrapper">
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
                {t('navbar:menu')}
              </span>
              <FontAwesomeIcon icon="ellipsis-v" className="navbar__menu-btn"/>
            </div>}
          { visible &&
            <div
              onClick={() => setVisible(false)}
              className="navbar__component-compressed-menu"
            >
            <FontAwesomeIcon icon="ellipsis-h" className="navbar__menu-btn"/>
              <NavList/>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default CompressedNavbar;
