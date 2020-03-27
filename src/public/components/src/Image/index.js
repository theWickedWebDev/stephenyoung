import React from 'react';
import log from 'loglevel';

const Image = (props) => {
  const { src, className, alt, title, srcSet } = props;
  if (!src) {
    log.error("'src' is required for all <Image/>s");
    return null;
  }
  if (!alt) log.error("'alt' is required for all <Image/>s")
  if (!title) log.error("'title' is required for all <Image/>s")
  if (!srcSet) log.warn("'srcSet' is suggested for all <Image/>s")

  return (<img {...props}/>);
}

export default Image;
