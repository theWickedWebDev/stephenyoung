import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'components/Link';
import links from '../links.js';

const Links = ({ open, location }) => {
    let className = open
      ? 'NavbarComponent__links-list open'
      : 'NavbarComponent__links-list';

    const currentLink = links.find(l => l.href === location.pathname);

    const getLinkClassName = link => {
      if (!currentLink) return 'NavbarComponent__link';
      return link.href === currentLink.href
        ? 'NavbarComponent__link active'
        : 'NavbarComponent__link';
    }

    return (
      <ul className={className}>
        {links.map((link, key) => (
          <li key={key}>
            <Link {...link} className={getLinkClassName(link)}>
              <FontAwesomeIcon
                icon={link.icon}
                className="NavbarComponent__Icon margin-right-lg"
              />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    );
};

export default withRouter(Links);
