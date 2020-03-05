import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import stripHtml from 'string-strip-html';

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
    <header className={classNames.join(' ')} style={style}>
      <div className="header__body">
        <h1
          className="header__component-h1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>
            {title.substring(0, title.length - 1)}
            <span className="cursor">
              {title.charAt(title.length - 1)}
            </span>
          </span>
        </h1>
        <h2 className="header__component-h2">{subtitle}</h2>
        <p
          className="header__component-p"
          data-aos="fade-right"
          data-aos-duration="1000"
          dangerouslySetInnerHTML={{ __html: intro }}
          />
          <br/>
          <a href={download.href} target="_blank" title={stripHtml(download.name)}>
            <button
              className="btn-link-full"
              dangerouslySetInnerHTML={{__html: download.name }}
            />
          </a>
      </div>
    </header>
  );
};

export default Header;
