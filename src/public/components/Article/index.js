import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

const Article = props => (
  <article className={"article__component " + props.className} data-aos="fade-up">
    { props.title &&
      <h2 className="article__component-h2">
        {props.title}
      </h2>
    }
    { props.children }
  </article>
);

export default Article;
