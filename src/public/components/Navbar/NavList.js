import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Links = () => {

  const links = [
    {
      "name": "Résumé",
      "icon": "home",
      "internal": true,
      "slug": "home",
      "href": "/"
    },
    {
      "name": "About this site",
      "icon": "star",
      "internal": true,
      "slug": "about-this-site",
      "href": "/about-this-site/"
    },
    {
      "name": "Other Experience",
      "icon": "star",
      "internal": true,
      "slug": "other-experience",
      "href": "/other-experience/"
    },
    {
      "name": "Download Résumé PDF",
      "icon": "download",
      "internal": false,
      "slug": "resume",
      "href": `${S3_URL}${S3_RESUME_PDF}`
    }
  ];

  return (
    <ul className="navbar__component-list">
    {links.map((l, key) => {
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
