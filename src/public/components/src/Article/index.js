// @flow
import React from 'react';
import './styles.scss';

// Types
import type { ArticleType } from '../flow-types';

// Main
const Article = ({ title, className, children } : ArticleType) => {
  const classes = ['ArticleComponent'];
  if (className) classes.push(className);

  return (
    <article className={classes.join(' ')}>
      <div className="ArticleComponent__content">
        { title &&
          <h2 className="ArticleComponent__h2">
            {title}
          </h2>
        }
        { children }
      </div>
    </article>
  );
}

export default Article;
