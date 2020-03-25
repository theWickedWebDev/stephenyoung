

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link to="/" title="Home">
        <img
            src={`${S3_URL}/images/logo/coral-logo-alt.jpg`}
            className="navbar__component-logo"
            alt="Logo for TheWickedWebDev"
            title="Logo for TheWickedWebDev"
        />
        <span className="navbar__title">TheWickedWebDev</span>
    </Link>;
}
;

export default Logo;
