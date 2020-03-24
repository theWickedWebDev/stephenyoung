import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {
  const { title, subtitle, intro, avatar } = props;
  const { t, i18n } = useTranslation();

  const style = {};
  const classNames = ["header__component"];

  if (avatar) {
    style.backgroundImage = `url('${avatar}')`;
    classNames.push('with-avatar');
  }

  const download = t('navbar:links', { returnObjects: true})
    .find(l => l.slug === 'resume');

  return (
    <header className={classNames.join(' ')}>
      <div className="header__body" style={style}>
        <h1
          className="header__component-h1"
        >
          <span>
            {title}
          </span>
        </h1>
        <h2 className="header__component-h2">{subtitle}</h2>
        <p
          className="header__component-p"
          dangerouslySetInnerHTML={{ __html: intro }}
          />
          <br/>
          <a href={download.href} target="_blank" title={download.name}>
            <button
              className="btn-link-full"
            >
              <FontAwesomeIcon icon={download.icon} />&nbsp;
              {download.name}
            </button>
          </a>
      </div>
    </header>
  );
};

export default Header;
