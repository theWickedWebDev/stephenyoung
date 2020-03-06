
import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'components/LazyLoad';

const Gallery = () => {
  const { t, i18n } = useTranslation();

  return [
    <noscript key="noscript">
      { t('gallery:content', { returnObjects: true }).map((image, index) => (
        <li className="image-list-item" key={index}>
          <figure>
            <img
              src={`${S3_URL}${S3_IMAGES_PATH}${S3_IMAGES_GALLERY_PATH}/${image.src}`}
              alt={image.alt}
              title={image.alt}
              className="image-list-item__image"
            />
            <figcaption><h4>{image.alt}</h4></figcaption>
          </figure>
        </li>
      ))}
    </noscript>,
    <ul className="image-list" key="image-list">
    { t('gallery:content', { returnObjects: true }).map((image, index) => (
      <li className="image-list-item" key={index}>
        <figure>
          <LazyLoad skeleton={<Skeleton/>}>
            <img
              src={`${S3_URL}${S3_IMAGES_PATH}${S3_IMAGES_GALLERY_PATH}/${image.src}`}
              alt={image.alt}
              title={image.alt}
              className="image-list-item__image"
            />
          </LazyLoad>
          <figcaption><h4>{image.alt}</h4></figcaption>
        </figure>
      </li>
    ))}
    </ul>
  ];
};

export const Skeleton = () => (
  <div
    className="skeleton bg-light"
    style={{
      width: "200px",
      height: "133px"
    }} />
);

export default Gallery;
