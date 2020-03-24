import React from 'react';

import './styles.scss';

const Footer = props => {

  return [
    <div className="color-break" key="color">
      <p>https://www.thewickedweb.dev</p><br/>
    </div>,
    <footer className="footer__component" key="footer__component">
      <div className="footer__component-space">
        <noscript>
          <p>
            Unfortunately you have Javascript turned off so you
            are <em>currently</em> unable to switch langauges.
          </p>
        </noscript>
      </div>
    </footer>,
  ]
};

export default Footer;
