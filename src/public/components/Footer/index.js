import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'components/LazyLoad/LazyLoad';

import './styles.scss';

const Footer = props => {
  const { t, i18n } = useTranslation();

  return [
    <div className="color-break">
      <p>https://www.thewickedweb.dev</p>
    </div>,
    <footer className="footer__component">
      <div className="footer__component-space">
        <ul className="footer__flags">
          <LazyLoad>
            <li className="footer__flags-item">
              <img
                className="footer__flag"
                src={`${S3_URL}${S3_IMAGES_PATH}${S3_FLAGS_PATH}/flag_en.svg`}
                onClick={() => i18n.changeLanguage('en')}
                alt="Flag of United States of America"
                title="Flag of United States of America"
              />
            </li>
            <li className="footer__flags-item">
              <img
                className="footer__flag"
                src={`${S3_URL}${S3_IMAGES_PATH}${S3_FLAGS_PATH}/flag_es.svg`}
                onClick={() => i18n.changeLanguage('es')}
                alt="Flag of Spain"
                title="Flag of Spain"
              />
            </li>
            <li className="footer__flags-item">
              <img
                className="footer__flag"
                src={`${S3_URL}${S3_IMAGES_PATH}${S3_FLAGS_PATH}/flag_fr.svg`}
                onClick={() => i18n.changeLanguage('fr')}
                alt="Flag of France"
                title="Flag of Spain"
              />
            </li>
          </LazyLoad>
        </ul>
      </div>
    </footer>,
  ]
};

export default Footer;
