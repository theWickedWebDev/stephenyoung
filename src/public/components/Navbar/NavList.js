import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import stripHtml from 'string-strip-html';

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
              dangerouslySetInnerHTML={{__html: l.name }}
              title={stripHtml(l.name)}
              />
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
              dangerouslySetInnerHTML={{__html: l.name }}
              title={stripHtml(l.name)}
            />
          </li>
        );
      }
    })}
    </ul>
  );
}

export default Links;
