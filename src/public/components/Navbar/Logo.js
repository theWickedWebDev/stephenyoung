import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" title="Home">
    <img
      src={`${S3_URL}${S3_IMAGES_PATH}${S3_LOGOS_PATH}/coral-logo-alt.jpg`}
      className="navbar__component-logo"
      alt="Logo for TheWickedWebDev"
      title="Logo for TheWickedWebDev"
    />
    <span className="navbar__title">TheWickedWebDev</span>
  </Link>
);

export default Logo;
