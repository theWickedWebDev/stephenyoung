import React from 'react';
import './styles.scss';

const Header = props => {
  const { title, intro, bling, withAvatar } = props;

  const style = {};
  const classNames = ["header__component"];

  if (withAvatar) {
    style.backgroundImage = `url('${S3_URL}${S3_IMAGES_PATH}${S3_AVATAR_PATH}/avatar.svg')`;
    classNames.push('with-avatar');
  }
  return (
    <header className={classNames.join(' ')} style={style}>
      <div className="header__body">
        <h1 className="header__component-h1" data-aos="fade-right" data-aos-duration="1000">
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
      </div>
      { bling && <div className="header__bling" data-aos="fade-up">{bling}</div> }
    </header>
  );
};

export default Header;
