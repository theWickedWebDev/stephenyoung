// @flow
// Dependencies
import React from 'react';

// Types
import type { PostType } from '../flow-types';

// Styles
import './Post.scss';

// Main
const Post = (props : PostType) => {
  const { author, avatar = null, title, link, content, className } = props;

  const classes = ['PostComponent'];
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')}>
      <div className="PostComponent__content clearfix">
        { avatar &&
          <div className="PostComponent__Avatar">{ avatar }</div>
        }
        <blockquote className="PostComponent__quote">
          <h3 className="PostComponent__firstLine">{ title }</h3>
          <p className="PostComponent__p">{content}</p>
        </blockquote>
        <p className="PostComponent__name">
        <a href={link} title={author} target="_blank">
          <strong>{author}</strong>
        </a>
        </p>
      </div>
    </div>
  )
};

export default Post;
