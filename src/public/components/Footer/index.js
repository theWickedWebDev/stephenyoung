import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const Footer = props => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer__component bg-light">
      <div className="footer__component-space">
        <h5>https://www.thewickedweb.dev</h5>
        <ul className="footer__flags">
          <li className="footer__flags-item">
            <img
              className="footer__flag"
              src="static/assets/flag_en.svg"
              onClick={() => i18n.changeLanguage('en')}
            />
          </li>
          <li className="footer__flags-item">
            <img
              className="footer__flag"
              src="static/assets/flag_es.svg"
              onClick={() => i18n.changeLanguage('es')}
            />
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
