import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavList from './NavList.js';
import Logo from './Logo.js';

import './compressed.scss';

const CompressedNavbar = () => {
    const [ visible, setVisible ] = useState(false);

    return (
        <nav className="navbar__component-compressed clearfix">
            <div className="navbar__component--wrapper">
                <div className="navbar__component-compressed-logo-wrapper">
                    <Logo />
                </div>
                <div className="navbar__component-compressed-menu-wrap">
                    { !visible &&
            <div
                onClick={() => {
                    return setVisible(true);
                }}
                className="navbar__component-compressed-menu closed"
            >
                <span className="navbar__component-compressed-menu-title">
                Menu
                </span>
                <FontAwesomeIcon icon="ellipsis-v" className="navbar__menu-btn"/>
            </div>}
                    { visible &&
            <div
                onClick={() => {
                    return setVisible(false);
                }}
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
};

export default CompressedNavbar;
