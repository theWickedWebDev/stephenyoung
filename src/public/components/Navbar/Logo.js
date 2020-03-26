

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" title="Home">
    <img
      src={`${S3_URL}/images/logo/logo.jpg`}
      className="navbar__component-logo"
      alt="Logo for TheWickedWebDev"
      title="Logo for TheWickedWebDev"
      srcset={`
        ${S3_URL}/images/logo/logo@2x.jpg 2x,
        ${S3_URL}/images/logo/logo@3x.jpg 3x
      `}
    />
    <span className="navbar__title">TheWickedWebDev</span>
  </Link>
);

export default Logo;
