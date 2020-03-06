import React from 'react';
import LazyLoad from 'components/LazyLoad';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
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
  );
};

export default LanguageSelector;
