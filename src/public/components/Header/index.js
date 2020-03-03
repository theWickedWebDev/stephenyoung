import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const Header = props => {
  const { title, intro, bling, withAvatar } = props;
  const { t, i18n } = useTranslation();

  const style = {};
  const classNames = ["header__component"];

  if (withAvatar) {
    style.backgroundImage =
      `url('${S3_URL}${S3_IMAGES_PATH}${S3_AVATAR_PATH}/avatar.svg')`;
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
          </span>
          <span className="cursor">
            {title.charAt(title.length - 1)}
          </span>
        </h1>
        <p
          className="header__component-p"
          data-aos="fade-right"
          data-aos-duration="1000"
          dangerouslySetInnerHTML={{ __html: intro }}
          />
          <br/>
          <a href={download.href} target="_blank">
            <button
              className="btn-link-full"
              dangerouslySetInnerHTML={{__html: download.name }}
            />
          </a>
      </div>
      { bling &&
        <div
          className="header__bling"
          data-aos="fade-up"
        >{bling}</div>
      }
    </header>
  );
};

export default Header;
