import React from 'react';
import LanguageSelector from 'components/LanguageSelector';

import './styles.scss';

const Footer = props => {

  return [
    <div className="color-break" key="color">
      <p>https://www.thewickedweb.dev</p>
    </div>,
    <footer className="footer__component" key="footer__component">
      <div className="footer__component-space">
        <noscript>
          <p>
            Unfortunately you have Javascript turned off so you
            are <em>currently</em> unable to switch langauges.
          </p>
        </noscript>
        <LanguageSelector/>
      </div>
    </footer>,
  ]
};

export default Footer;
