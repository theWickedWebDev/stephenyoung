import React from 'react';
import './styles.scss';

const Article = ({ title, className, children }) => (
  <article className={`article__component ${ className }`}>
    <div className="article__component-content">
      { title && <h2 className="article__component-h2">{title}</h2>}
      { children }
    </div>
  </article>
)

export default Article;
