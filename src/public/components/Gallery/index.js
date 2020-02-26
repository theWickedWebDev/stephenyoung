import React from 'react';
import './styles.scss';
import RESUME from '../../resume.json';

const Gallery = props => {
  const { references } = props;

  return (
    <ul className="image-list">
    { RESUME.gallery.content.map((image, index) => (
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
