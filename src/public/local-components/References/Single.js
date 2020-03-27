// Dependencies
import React from 'react';

// components
import { Link, Image, LazyLoad } from '@thewickedwebdev/components';

// Styles
import './single.scss';

// Main
const Reference = props => {
  const { image, name, title, link, content, relevant } = props;

  const getPostHeader = c => {
    const FIRST_SENTENCE = 0;
    return `${c.split('.')[FIRST_SENTENCE]}.`;
  };

  const getPostBody = c => {
    const AMOUNT_TO_CUT = 1;
    const content = c;
    const sentences = content.split('.');
    const contentLength = content.split('.').length;
    const sentenceArray = sentences.slice(
      AMOUNT_TO_CUT, contentLength - AMOUNT_TO_CUT
    );
    return sentenceArray.join('. ');
  };

  return (
    <div className={`ReferenceComponent ${relevant ? '' : 'small'}`}>
      <div className="ReferenceComponent__content clearfix">
        { image &&
          <LazyLoad>
            <Image
              className="ReferenceComponent__image"
              src={image}
              width="70px"
              alt={`Photo of coworker ${name}`}
              title={getPostHeader(content)}
            />
          </LazyLoad>
        }
        <blockquote className="ReferenceComponent__quote">
          <h3 className="ReferenceComponent__firstLine">
            {getPostHeader(content)}
          </h3>
          <p className="ReferenceComponent__p">
            {getPostBody(content)}
          </p>
        </blockquote>
        <p className="ReferenceComponent__name">
        <Link href={link} title={title}>
          <strong>{name}</strong>, <em>{title}</em>
        </Link>
        </p>
      </div>
    </div>
  )
};

export default Reference;
