import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Links = () => {
  const { t, i18n } = useTranslation();

  return (
    <ul className="navbar__component-list">
    {t('navbar:links', { returnObjects: true }).map((l, key) => {
      if (l.internal) {
        return (
          <li key={key}>
            <Link
              to={l.href}
              className="navbar__link"
              title={l.name}
            >
              <FontAwesomeIcon icon={l.icon} className="margin-right-lg"/>
              {l.name}
            </Link>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <a
              key={key}
              href={l.href}
              className="navbar__link"
              target="_blank"
              title={l.name}
            >
              <FontAwesomeIcon icon={l.icon} className="margin-right-lg"/>
              {l.name}
            </a>
          </li>
        );
      }
    })}
    </ul>
  );
}

export default Links;
