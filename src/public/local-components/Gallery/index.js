// Dependencies
import React from 'react';

// Components
import { Article, Image } from '@thewickedwebdev/components';

// Styling
import './styles.scss';

// Main
const Gallery = () => {
  /* eslint-disable max-len */
  const copy = {
    title: 'Me in my zone',
    copy: 'Here are some photographs of the times when I\'m the best version of myself. Places and activities where I shine.',
    content: [
      { src: 'portsmouth.jpg', alt: 'Family day in Portsmouth, NH' },
      { src: 'woodworking.jpg', alt: 'Standing over a workbench using a biscuit joiner' },
      { src: 'ski.jpg', alt: 'A friend and I on a chairlift headed up Sugarloaf Mountain to ski.' },
      { src: 'painting-coop.jpg', alt: 'Painting a DIY Chicken Coop project' },
      { src: 'planting-tree.jpg', alt: 'Planting apple trees with my son' },
      { src: 'grass-close.jpg', alt: 'Up close photo of my lawn' },
      { src: 'laying-pavers.jpg', alt: 'Making a paver entry way' },
      { src: 'picking-potatoes.jpg', alt: 'Adding more soil to our potato mounds' },
      { src: 'planting-grass.jpg', alt: 'Planting grass with my two kids' },
      { src: 'radishes.jpg', alt: 'Fresh picked radishes from the garden' },
      { src: 'chickens.jpg', alt: 'Some of our chickens walking around the lawn' },
      { src: 'fishing.jpg', alt: 'Family canoeing and fishing' },
      { src: 'bowling.jpg', alt: 'Me taking a turn at bowling' }
    ]
  };
  /* eslint-enable max-len */

  return (
    <Article title={copy.title} className="gallery__article">
      <p className="gallery__article__intro">{copy.copy}</p>
      <ul className="image-list" key="image-list">
        { copy.content.map((image, index) => (
          <li className="image-list-item" key={index}>
            <figure>
              <Image
                src={`${S3_URL}/images/gallery/${image.src}`}
                alt={image.alt}
                title={image.alt}
                width="200px"
                height="133px"
                className="image-list-item__image"
              />
              <figcaption><h4>{image.alt}</h4></figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Article>
  );
};

export default Gallery;
