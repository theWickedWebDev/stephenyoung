import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const Gallery = props => {
  const { references } = props;
  const { t, i18n } = useTranslation();

  return (
    <ul className="image-list">
    { t('gallery:content', { returnObjects: true }).map((image, index) => (
      <li className="image-list-item" key={index}>
        <img
          src={image.src}
          alt={image.alt}
          title={image.alt}
          width="200px"
          height="133px"
          className="image-list-item__image"
        />
      </li>
    ))}
    </ul>
  );
};

export default Gallery;
