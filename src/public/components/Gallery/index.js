import React from 'react';
import './styles.scss';

const Gallery = props => {
  const { references, content } = props;

  return (
    <ul className="image-list">
    { content.resume.gallery.content.map((image, index) => (
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

Gallery.defaultProps = {
  content: require('../../assets/copy/').en_us,
}

export default Gallery;
