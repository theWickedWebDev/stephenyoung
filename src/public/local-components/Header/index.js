// TODO: Refactor Header Component

// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import './styles.scss';

// Main
const Header = (props) => {
  const { title, subtitle, intro, avatar, style = {} } = props;

  const DEFAULT_HEADER_STYLE = {
    // TODO: Pull this out into a config (share with CSS?)
    backgroundColor: '#ED6B5A',
  };

  const download = {
    name: 'Download Résumé PDF',
    icon: 'download',
    internal: false,
    slug: 'resume',
    href: `${S3_URL}/resume/stephen-young-resume.pdf`
  };

  const bodyStyle = {};

  const headerStyle = {
    ...DEFAULT_HEADER_STYLE,
    ...style,
  };

  const classNames = [ 'header__component' ];

  if (avatar) {
    bodyStyle.backgroundImage = `url('${avatar}')`;
    classNames.push('with-avatar');
  }

  return (
    <header className={classNames.join(' ')} style={headerStyle}>
      <div className="header__body" style={bodyStyle}>
        <h1 className="header__component-h1"><span>{title}</span></h1>
        <h2 className="header__component-h2">{subtitle}</h2>
        <p
          className="header__component-p"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
        <br/>
        <a href={download.href} target="_blank" title={download.name}>
          <button className="btn-secondary">
            <FontAwesomeIcon icon={download.icon} />
            &nbsp;
            {download.name}
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
