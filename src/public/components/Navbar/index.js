import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import stripHtml from 'string-strip-html';

import './styles.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar__component">
      <Link to="/" title="Home">
        <img
          src={`${S3_URL}${S3_IMAGES_PATH}${S3_LOGOS_PATH}/logo.jpg`}
          className="navbar__component-logo"
          alt="Logo for TheWickedWebDev"
          title="Logo for TheWickedWebDev"
        />
        <span className="navbar__title">TheWickedWebDev</span>
      </Link>
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
            <a
              key={key}
              href={l.href}
              className="navbar__link"
              target="_blank"
              dangerouslySetInnerHTML={{__html: l.name }}
              title={stripHtml(l.name)}
            />
          );
        }
      })}
      </ul>
      <ul className="navbar_component navbar_right">
        <li>
          <a
            href="https://www.linkedin.com/in/thewickedwebdev/"
            target="_blank"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"/>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/theWickedWebDev/stephenyoung"
            target="_blank"
            title="Github"
          >
            <i className="fab fa-github-alt"/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
