import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

const Article = props => (
  <article className={"article__component " + props.className}>
    <div className="article__component-content">
      { props.title &&
        <h2 className="article__component-h2">
          {props.title}
        </h2>
      }
      { props.children }
    </div>
  </article>
);

export default Article;
