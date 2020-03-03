import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'components/LazyLoad/LazyLoad';

const Gallery = props => {
  const { references } = props;
  const { t, i18n } = useTranslation();

  return (
    <ul className="image-list">
    { t('gallery:content', { returnObjects: true }).map((image, index) => (
      <li className="image-list-item" key={index}>
        <LazyLoad skeleton={Skeleton}>
          <img
            src={`${S3_URL}${S3_IMAGES_PATH}${S3_IMAGES_GALLERY_PATH}/${image.src}`}
            alt={image.alt}
            title={image.alt}
            className="image-list-item__image"
          />
        </LazyLoad>
      </li>
    ))}
    </ul>
  );
};

const Skeleton = () => (
  <div
    className="skeleton bg-light"
    style={{
      width: "200px",
      height: "133px"
    }} />
)
export default Gallery;
